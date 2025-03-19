import React from 'react';

interface TabSelectorProps {
  activeTab: 'swap' | 'pool';
  onTabChange: (tab: 'swap' | 'pool') => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-8 gap-4">
      <button
        onClick={() => onTabChange('swap')}
        className={`text-xl font-normal border-b-2 px-2 py-1 ${
          activeTab === 'swap'
            ? 'border-black/80 dark:border-white/80'
            : 'text-gray-400 hover:text-gray-300 border-transparent'
        }`}
      >
        Swap
      </button>
      <button
        onClick={() => onTabChange('pool')}
        className={`text-xl font-normal border-b-2 px-2 py-1 ${
          activeTab === 'pool'
            ? 'border-black/80 dark:border-white/80'
            : 'text-gray-400 hover:text-gray-300 border-transparent'
        }`}
      >
        Pool
      </button>
    </div>
  );
};

export default TabSelector;