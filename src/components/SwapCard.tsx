import { useEffect, useState } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { readContract } from 'wagmi/actions';
import TokenModal from './TokenModal';
import { config } from '../config';
import { UniswapV2RouterABI, UniswapV2RouterAdderss, WETHAddress } from '../ABI/UniswapV2Router';
import { formatEther, parseEther, parseUnits } from 'viem';

interface TokenInfo {
  address: string;
  symbol: string;
  name: string;
  balance: string;
  totalSupply: string;
}

const SwapCard = () => {
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [modalType, setModalType] = useState<'from' | 'to'>('from');
  const [fromTokenAmount, setFromTokenAmount] = useState(0);
  const [toTokenAmount, setToTokenAmount] = useState(0);

  const [fromToken, setFromToken] = useState<TokenInfo>({
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'BXN',
    name: 'Ethereum',
    balance: '0.0',
    totalSupply: '∞'
  });
  const [toToken, setToToken] = useState<TokenInfo>();

  const handleOpenModal = (type: 'from' | 'to') => {
    setModalType(type);
    setShowTokenModal(true);
  };
  const handleSwap = () => {
    const temp = fromToken;
    if (toToken) {
      setFromToken(toToken);
    }
    setToToken(temp);
  }
  const handleSelectToken = (token: TokenInfo) => {
    if (modalType === 'from') {
      setFromToken(token);
    } else {
      setToToken(token);
    }
  };
  async function fetchAmountsOut(amountsIn: bigint) {
    try {
      if (toToken) {
        const path =toToken.symbol ==="BXN"? [fromToken.address,WETHAddress] : [WETHAddress,toToken.address]
        const result = await readContract(config, {
          abi: UniswapV2RouterABI,
          address: UniswapV2RouterAdderss,
          functionName: "getAmountsOut",
          args: [amountsIn, path]
        })
        if (Array.isArray(result) && typeof result[1] === "bigint") {

          setToTokenAmount(parseFloat(formatEther(result[1])))
        }
      }
    } catch (error) {
      console.log(error)
      alert("Error occured while fetching amounts out")
    }
  }
  useEffect(() => {
    if (fromTokenAmount) {
      fetchAmountsOut(parseEther(fromTokenAmount.toString()));
    }
  }, [toToken, fromTokenAmount]);
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <label className="text-gray-400 text-sm ml-1">From</label>
        <div className="bg-white bg-opacity-5 rounded-2xl p-4">
          <div className="flex justify-between items-center">
            <input
              type="number"
              value={fromTokenAmount}
              onChange={(e) => { setFromTokenAmount(parseFloat(e.target.value)) }}
              placeholder="0.0"
              className="bg-transparent text-3xl text-white outline-none w-[60%] placeholder-gray-500"
            />
            <button
              onClick={() => handleOpenModal('from')}
              className="flex items-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all px-4 py-2 rounded-2xl"
            >
              <img
                src="https://raw.githubusercontent.com/Uniswap/interface/main/src/assets/images/ethereum-logo.png"
                alt="ETH"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-white font-medium">{fromToken.symbol}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center -my-3 z-10">
        <div onClick={handleSwap} className="bg-white bg-opacity-5 p-2 rounded-xl cursor-pointer hover:bg-opacity-10 transition-all">
          <ArrowDownCircle className="text-primary h-6 w-6" />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-gray-400 text-sm ml-1">To</label>
        <div className="bg-white bg-opacity-5 rounded-2xl p-4">
          <div className="flex justify-between items-center">
            <input
              type="number"
              value={toTokenAmount}
              onChange={(e) => { setToTokenAmount(parseFloat(e.target.value)) }}
              placeholder="0.0"
              className="bg-transparent text-3xl text-white outline-none w-[60%] placeholder-gray-500"
            />
            <button
              onClick={() => handleOpenModal('to')}
              className="flex items-center space-x-2 bg-[#FF1CF7] bg-opacity-10 hover:bg-opacity-20 transition-all px-4 py-2 rounded-2xl"
            >
              {toToken ? (
                <>
                  <div className="w-6 h-6 rounded-full bg-[#FF1CF7] bg-opacity-10 flex items-center justify-center">
                    <span className="text-[#FF1CF7] font-semibold">{toToken.symbol[0]}</span>
                  </div>
                  <span className="text-[#FF1CF7] font-medium">{toToken.symbol}</span>
                </>
              ) : (
                <span className="text-[#FF1CF7] font-medium">Select a token</span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#FF1CF7]"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <button className="w-full bg-[#FF1CF7] hover:bg-opacity-90 text-white font-semibold py-4 px-4 rounded-2xl transition-all">
        Connect Wallet
      </button>

      <TokenModal
        isOpen={showTokenModal}
        onClose={() => setShowTokenModal(false)}
        onSelectToken={handleSelectToken}
      />
    </div>
  );
};

export default SwapCard;