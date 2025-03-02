import React from 'react';
import { ChevronDown } from 'lucide-react';

interface TokenSelectorProps {
  type: 'from' | 'to';
  context?: 'swap' | 'pool';
}

const TokenSelector: React.FC<TokenSelectorProps> = ({ type, context = 'swap' }) => {
  const getLabel = () => {
    if (context === 'pool') return 'Deposit';
    return type === 'from' ? 'You pay' : 'You receive';
  };

  return (
    <div className="bg-secondary-dark rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400">{getLabel()}</span>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Balance: 0.0</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <input
          type="number"
          placeholder="0.0"
          className="bg-transparent text-2xl text-white outline-none w-[60%]"
        />
        <button className="flex items-center space-x-2 bg-secondary px-3 py-2 rounded-lg hover:bg-secondary-light transition-colors">
          <img
            src="https://raw.githubusercontent.com/Uniswap/interface/main/src/assets/images/ethereum-logo.png"
            alt="BXN"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-white">BXN</span>
          <ChevronDown className="text-primary h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TokenSelector;