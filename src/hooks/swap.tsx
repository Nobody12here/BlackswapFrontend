import { useCallback, useState } from "react";
import { TokenInfo } from "../interface";
import { config } from "../config";
import { formatEther, parseEther, parseUnits } from "viem";
import {
  readContract,
  waitForTransactionReceipt,
  writeContract,
} from "wagmi/actions";
import { useAccount } from "wagmi";
import {
  WETHAddress,
  UniswapV2RouterABI,
  UniswapV2RouterAdderss,
} from "../ABI/UniswapV2Router";

export function useTokenSwap() {
  const { address } = useAccount();
  const [fromTokenAmount, setFromTokenAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();
  const [toTokenAmount, setToTokenAmount] = useState(0);
  const [isSwaping, setIsSwaping] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [fromToken, setFromToken] = useState<TokenInfo | null>({
    address: "0x0000000000000000000000000000000000000000",
    symbol: "BXN",
    name: "Ethereum",
    balance: "0.0",
    totalSupply: "∞",
  });
  const [toToken, setToToken] = useState<TokenInfo | null>();
  const executeSwap = useCallback(
    async (
      slippageTolerance: number = 0.5,
      deadline: number = 10 //10 minutes
    ) => {
      if (!toToken || !fromToken || !address) return;
      setIsSwaping(true);
      setTxHash(null);
      const amountIn = parseEther(fromTokenAmount.toString());
      const minimumOut = parseUnits(
        Math.floor(toTokenAmount * (1 - slippageTolerance / 100)).toString(),
        18
      );
      const deadlineTimestamp = Math.floor(Date.now() / 1000) + deadline * 60;
      const path =
        toToken.symbol === "BXN"
          ? [fromToken.address, WETHAddress]
          : [WETHAddress, toToken.address];
      try {
        if (fromToken.symbol === "BXN") {
          // swapExactETHForTokens
          const hash = await writeContract(config, {
            abi: UniswapV2RouterABI,
            address: UniswapV2RouterAdderss,
            functionName: "swapExactETHForTokens",
            args: [minimumOut, path, address, deadlineTimestamp],
            value: amountIn,
          });
          setTxHash(hash);
          await waitForTransactionReceipt(config, {
            hash: hash,
          });
        }
        return true;
      } catch (error) {
        console.error(error);
        return false;
      } finally {
        setIsSwaping(false);
      }
    },
    [toToken, fromToken, toTokenAmount, fromTokenAmount]
  );
  const handleSwap = () => {
    const temp = fromToken;
    if (toToken) {
      setFromToken(toToken);
    } else {
      setFromToken(null);
    }
    setToToken(temp);
  };
  async function fetchAmountsOut(amountsIn: bigint) {
    if (!toToken || !fromToken) return;
    setIsLoading(true);
    setError(null);
    try {
      if (toToken) {
        const path =
          toToken.symbol === "BXN"
            ? [fromToken?.address, WETHAddress]
            : [WETHAddress, toToken.address];
        const result = await readContract(config, {
          abi: UniswapV2RouterABI,
          address: UniswapV2RouterAdderss,
          functionName: "getAmountsOut",
          args: [amountsIn, path],
        });
        if (Array.isArray(result) && typeof result[1] === "bigint") {
          setToTokenAmount(parseFloat(formatEther(result[1])));
        }
      }
    } catch (error) {
      console.log(error);
      setError(error as string);
      setToTokenAmount(0);
    } finally {
      setIsLoading(false);
    }
  }
  return {
    fromToken,
    setFromToken,
    toToken,
    setToToken,
    fromTokenAmount,
    setFromTokenAmount,
    toTokenAmount,
    setToTokenAmount,
    handleSwap,
    fetchAmountsOut,
    executeSwap,
    txHash,
    isSwaping,
    isLoading,
    error,
  };
}
