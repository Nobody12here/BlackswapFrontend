import React, { useState } from 'react';
import { X, Info, ChevronDown } from 'lucide-react';
import { Address, erc20Abi, formatUnits } from 'viem';
import { useAccount } from 'wagmi';
import { getToken, readContract } from 'wagmi/actions';
import { config } from '../config';

interface TokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectToken: (token: TokenInfo) => void;
}

interface TokenInfo {
  address: string;
  symbol: string;
  name: string;
  balance: string;
  totalSupply: string;
}

const TokenModal: React.FC<TokenModalProps> = ({ isOpen, onClose, onSelectToken }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { address } = useAccount();
  const handleSearch = async () => {
    if (!searchQuery) return;

    setIsLoading(true);
    setError('');

    // Simulated token fetch - in production, this would call your blockchain API
    try {
      // Mock data - replace with actual API call
      const tokenData = await getToken(config, {
        address: searchQuery as Address
      });
      const currentBalance = await readContract(config, {
        address: searchQuery as Address,
        functionName: 'balanceOf',
        abi: erc20Abi,
        args: [address as Address]
      })
      const tokenInfo = {
        address: searchQuery,
        symbol: tokenData.symbol ?? "N/A",
        name: tokenData.name ?? "N/A",
        balance: formatUnits(currentBalance, tokenData.decimals) ?? 0,
        totalSupply: formatUnits(tokenData.totalSupply.value, tokenData.decimals) ?? 0
      };

      setTokenInfo(tokenInfo);
    } catch (err) {
      setError('Failed to fetch token information');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#191B1F] rounded-3xl w-full max-w-md p-4 relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold text-white">Select a token</h2>
            <Info className="h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search name or paste address"
            value={searchQuery as Address}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full bg-white bg-opacity-5 rounded-2xl px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#FF1CF7] focus:ring-opacity-50"
          />
        </div>

        {isLoading && (
          <div className="text-center py-4 text-gray-400">
            Loading...
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center py-2">
            {error}
          </div>
        )}

        {tokenInfo && (
          <div
            className="bg-white bg-opacity-5 rounded-2xl p-4 mb-4 cursor-pointer hover:bg-opacity-10 transition-all"
            onClick={() => {
              onSelectToken(tokenInfo);
              onClose();
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-[#FF1CF7] bg-opacity-10 flex items-center justify-center">
                  <span className="text-[#FF1CF7] font-semibold">{tokenInfo.symbol[0]}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{tokenInfo.name}</h3>
                  <p className="text-gray-400 text-sm">{tokenInfo.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">{tokenInfo.balance}</p>
                <p className="text-gray-400 text-sm">Balance</p>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              Total Supply: {tokenInfo.totalSupply}
            </div>
          </div>
        )}

        <div className="mt-4">
          <div className="flex items-center justify-between text-gray-400 mb-2">
            <span>Token Name</span>
            <ChevronDown className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <TokenListItem
              symbol="BXN"
              name="Ethereum"
              imgSrc="https://raw.githubusercontent.com/Uniswap/interface/main/src/assets/images/ethereum-logo.png"
              balance="0.0"
              onClick={() => {
                onSelectToken({
                  address: '0x0000000000000000000000000000000000000000',
                  symbol: 'BXN',
                  name: 'Ethereum',
                  balance: '0.0',
                  totalSupply: '∞'
                });
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface TokenListItemProps {
  symbol: string;
  name: string;
  imgSrc: string;
  balance: string;
  onClick: () => void;
}

const TokenListItem: React.FC<TokenListItemProps> = ({
  symbol,
  name,
  imgSrc,
  balance,
  onClick
}) => {
  return (
    <div
      className="flex items-center justify-between p-3 hover:bg-white hover:bg-opacity-5 rounded-xl cursor-pointer transition-all"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <img src={imgSrc} alt={symbol} className="w-8 h-8 rounded-full" />
        <div>
          <p className="text-white font-medium">{symbol}</p>
          <p className="text-gray-400 text-sm">{name}</p>
        </div>
      </div>
      <p className="text-gray-400">{balance}</p>
    </div>
  );
};

export default TokenModal;