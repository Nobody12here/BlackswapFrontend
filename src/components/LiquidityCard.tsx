import { useState } from "react";
import { Plus, Info } from "lucide-react";
import { FaChevronDown } from "react-icons/fa6";
import TokenModal from "./TokenModal";
import { useAccount, useWriteContract } from "wagmi";
import {
  UniswapV2RouterAdderss,
  UniswapV2RouterABI,
} from "../ABI/UniswapV2Router";
import { Address, erc20Abi, parseUnits } from "viem";
import { toast } from "react-toastify";
import { waitForTransactionReceipt } from "wagmi/actions";
import { config } from "../config";

interface TokenInfo {
  address: string;
  symbol: string;
  name: string;
  balance: string;
  totalSupply: string;
}

const LiquidityCard = () => {
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [firstTokenValue, setFirstTokenValue] = useState("");
  const [secondTokenValue, setSecondTokenValue] = useState("");
  const [firstToken, setFirstToken] = useState<TokenInfo>({
    address: "0x0000000000000000000000000000000000000000",
    symbol: "BXN",
    name: "Ethereum",
    balance: "0.0",
    totalSupply: "∞",
  });
  const [secondToken, setSecondToken] = useState<TokenInfo | null>(null);

  const [modalType, setModalType] = useState<"first" | "second">("first");
  const { isConnected, address } = useAccount();
  const { writeContractAsync, error } = useWriteContract();

  const handleOpenModal = (type: "first" | "second") => {
    setModalType(type);
    setShowTokenModal(true);
  };

  const handleSelectToken = (token: TokenInfo) => {
    if (modalType === "first") {
      setFirstToken(token);
    } else {
      setSecondToken(token);
    }
  };
  const handleAddLiquidity = async () => {
    //First approve the tokens to the router address
    //Then call the addLiquidity function
    if (secondToken?.address === undefined) {
      toast.error("Please select a token");
      return;
    }
    try {
      const approveTx = await writeContractAsync({
        address: secondToken?.address as Address,
        functionName: "approve",
        abi: erc20Abi,
        args: [UniswapV2RouterAdderss, parseUnits(secondTokenValue, 18)],
      });
      await waitForTransactionReceipt(config, {
        hash: approveTx,
      });
      const addLiquidityTx = await writeContractAsync({
        address: UniswapV2RouterAdderss,
        abi: UniswapV2RouterABI,
        functionName: "addLiquidityETH",
        args: [
          secondToken.address,
          parseUnits(secondTokenValue, 18),
          "0",
          "0",
          address,
          Date.now() + 1000 * 60 * 10,
        ],
        value: parseUnits(firstTokenValue, 18),
      });
      await waitForTransactionReceipt(config, {
        hash: addLiquidityTx,
      });
    } catch (err) {
      toast.error(error?.name);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">Add Liquidity</h2>
        <button className="text-primary hover:text-primary-light transition-colors">
          <Info className="h-5 w-5" />
        </button>
      </div>

      <div className="p-3 border border-black/10 dark:border-white/10 rounded-3xl">
        <label className="text-[#9b9b9b] text-sm ml-1 mb-2 block">
          Deposit token
        </label>

        <div className="flex justify-between items-center">
          <input
            type="number"
            placeholder="0.0"
            onChange={(e) => setFirstTokenValue(e.target.value)}
            className="bg-transparent text-3xl outline-none w-[60%] placeholder-gray-500"
          />
          <button
            onClick={() => handleOpenModal("first")}
            className="flex items-center space-x-2 border border-black/10 dark:border-white/10 transition-all px-3 py-2 rounded-full"
          >
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/25963.png"
              alt="ETH"
              className="w-6 h-6 rounded-full"
            />
            <span className="font-normal">{firstToken.symbol}</span>
            <FaChevronDown size={14} className="text-black/50 dark:text-white/50" />
          </button>
        </div>
      </div>

      <div className="flex justify-center -my-3 z-10">
        <div className="p-2 rounded-2xl border-[4px] border-white dark:border-[#131313] bg-[#f9f9f9] dark:bg-[#1b1b1b] cursor-pointer">
          <Plus size={22} />
        </div>
      </div>

      <div className="p-3 border border-black/10 dark:border-white/10 rounded-3xl">
        <label className="text-[#9b9b9b] text-sm ml-1 mb-2 block">
          Deposit token
        </label>

        <div className="flex justify-between items-center">
          <input
            type="number"
            placeholder="0.0"
            onChange={(e) => setSecondTokenValue(e.target.value)}
            className="bg-transparent text-3xl outline-none w-[60%] placeholder-gray-500"
          />
          <button
            onClick={() => handleOpenModal("second")}
            className="flex items-center space-x-2 bg-[#FF1CF7] bg-opacity-10 hover:bg-opacity-20 transition-all px-3 py-2 rounded-full"
          >
            {secondToken ? (
              <>
                <div className="w-6 h-6 rounded-full bg-[#FF1CF7] bg-opacity-10 flex items-center justify-center">
                  <span className="text-[#FF1CF7] font-semibold">
                    {secondToken.symbol[0]}
                  </span>
                </div>
                <span className="text-[#FF1CF7] font-medium">
                  {secondToken.symbol}
                </span>
              </>
            ) : (
              <span className="w-full text-[#FF1CF7] font-medium">
                Select token
              </span>
            )}
            <FaChevronDown size={14} className="text-black/50 dark:text-white/50" />
          </button>
        </div>
      </div>

      <button
        onClick={() => {
          handleAddLiquidity();
        }}
        className="w-full bg-[#fef4ff] dark:bg-[#361a37] hover:bg-opacity-80 text-[#fc72ff] font-medium p-4 rounded-2xl transition-all duration-300 mt-4"
      >
        {!isConnected ? "Connect Wallet" : "Add Liquidity"}
      </button>

      <TokenModal
        isOpen={showTokenModal}
        onClose={() => setShowTokenModal(false)}
        onSelectToken={handleSelectToken}
      />
    </div>
  );
};

export default LiquidityCard;
