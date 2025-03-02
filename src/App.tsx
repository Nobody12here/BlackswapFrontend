import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import SwapCard from './components/SwapCard';
import LiquidityCard from './components/LiquidityCard';
import TabSelector from './components/TabSelector';

function App() {
  const [activeTab, setActiveTab] = useState<'swap' | 'pool'>('swap');

  return (
    <div className="min-h-screen bg-[#191B1F]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center pt-10">
          <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl p-4 w-full max-w-md">
            <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
            {activeTab === 'swap' ? <SwapCard /> : <LiquidityCard />}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;