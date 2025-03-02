import React from 'react';

interface TabSelectorProps {
  activeTab: 'swap' | 'pool';
  onTabChange: (tab: 'swap' | 'pool') => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-6">
      <button
        onClick={() => onTabChange('swap')}
        className={`text-xl font-semibold px-4 py-2 ${
          activeTab === 'swap'
            ? 'text-white'
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        Swap
      </button>
      <button
        onClick={() => onTabChange('pool')}
        className={`text-xl font-semibold px-4 py-2 ${
          activeTab === 'pool'
            ? 'text-white'
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        Pool
      </button>
    </div>
  );
};

export default TabSelector;