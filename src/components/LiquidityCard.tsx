import { useState } from 'react';
import { ArrowLeft, Plus, Info } from 'lucide-react';
import TokenModal from './TokenModal';
import { useAccount, useWriteContract } from 'wagmi';
import { UniswapV2RouterAdderss, UniswapV2RouterABI } from '../ABI/UniswapV2Router';
import { Address, erc20Abi, parseUnits } from 'viem';
import { toast } from 'react-toastify';
import { waitForTransactionReceipt } from 'wagmi/actions';
import { config } from '../config';

interface TokenInfo {
  address: string;
  symbol: string;
  name: string;
  balance: string;
  totalSupply: string;
}

const LiquidityCard = () => {
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [firstTokenValue, setFirstTokenValue] = useState('');
  const [secondTokenValue, setSecondTokenValue] = useState('');
  const [firstToken, setFirstToken] = useState<TokenInfo>({
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'BXN',
    name: 'Ethereum',
    balance: '0.0',
    totalSupply: '∞'
  });
  const [secondToken, setSecondToken] = useState<TokenInfo | null>(null);

  const [modalType, setModalType] = useState<'first' | 'second'>('first');
  const { isConnected,address } = useAccount();
  const { writeContractAsync ,error} = useWriteContract();

  const handleOpenModal = (type: 'first' | 'second') => {
    setModalType(type);
    setShowTokenModal(true);
  };

  const handleSelectToken = (token: TokenInfo) => {
    if (modalType === 'first') {
      setFirstToken(token);
    } else {
      setSecondToken(token);
    }
  };
  const handleAddLiquidity = async () => {
    //First approve the tokens to the router address
    //Then call the addLiquidity function
    if (secondToken?.address === undefined) {
      toast.error('Please select a token')
      return;
    };
    try {
      const approveTx = await writeContractAsync({
        address: secondToken?.address as Address,
        functionName: 'approve',
        abi: erc20Abi,
        args: [UniswapV2RouterAdderss, parseUnits(secondTokenValue, 18)]
      })
      await waitForTransactionReceipt(config,{
        hash: approveTx,
      })
      const addLiquidityTx = await writeContractAsync( {
        address: UniswapV2RouterAdderss,
        abi: UniswapV2RouterABI,
        functionName: 'addLiquidityETH',
        args: [
          secondToken.address,
          parseUnits(secondTokenValue, 18),
          '0',
          '0',
          address,
          Date.now() + 1000 * 60 * 10
        ],
        value: parseUnits(firstTokenValue, 18)
      })
      await waitForTransactionReceipt(config,{
        hash: addLiquidityTx,
      })
    } catch (err) {
      toast.error(error?.name)
    }
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-4">
          <button className="text-primary hover:text-primary-light transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h2 className="text-white text-xl font-semibold">Add Liquidity</h2>
        </div>
        <button className="text-primary hover:text-primary-light transition-colors">
          <Info className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-1">
        <label className="text-gray-400 text-sm ml-1">Deposit token</label>
        <div className="bg-white bg-opacity-5 rounded-2xl p-4">
          <div className="flex justify-between items-center">
            <input
              type="number"
              placeholder="0.0"
              onChange={(e) => setFirstTokenValue((e.target.value))}
              className="bg-transparent text-3xl text-white outline-none w-[60%] placeholder-gray-500"
            />
            <button
              onClick={() => handleOpenModal('first')}
              className="flex items-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all px-4 py-2 rounded-2xl"
            >
              <img
                src="https://raw.githubusercontent.com/Uniswap/interface/main/src/assets/images/ethereum-logo.png"
                alt="ETH"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-white font-medium">{firstToken.symbol}</span>
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
        <div className="bg-white bg-opacity-5 p-2 rounded-xl">
          <Plus className="text-primary h-6 w-6" />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-gray-400 text-sm ml-1">Deposit token</label>
        <div className="bg-white bg-opacity-5 rounded-2xl p-4">
          <div className="flex justify-between items-center">
            <input
              type="number"
              placeholder="0.0"
              onChange={(e) => setSecondTokenValue((e.target.value))}
              className="bg-transparent text-3xl text-white outline-none w-[60%] placeholder-gray-500"
            />
            <button
              onClick={() => handleOpenModal('second')}
              className="flex items-center space-x-2 bg-[#FF1CF7] bg-opacity-10 hover:bg-opacity-20 transition-all px-4 py-2 rounded-2xl"
            >
              {secondToken ? (
                <>
                  <div className="w-6 h-6 rounded-full bg-[#FF1CF7] bg-opacity-10 flex items-center justify-center">
                    <span className="text-[#FF1CF7] font-semibold">{secondToken.symbol[0]}</span>
                  </div>
                  <span className="text-[#FF1CF7] font-medium">{secondToken.symbol}</span>
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

      <button onClick={() => { handleAddLiquidity() }} className="w-full bg-[#FF1CF7] hover:bg-opacity-90 text-white font-semibold py-4 px-4 rounded-2xl transition-all">
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