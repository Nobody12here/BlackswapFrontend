import { Wallet2 } from 'lucide-react';
import { useAccount, useConnect } from 'wagmi';
import { metaMask } from 'wagmi/connectors';

const Navbar = () => {
  const { connect } = useConnect();
  const { address, isConnected } = useAccount();
  return (
    <nav className="bg-secondary px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
         
          <span className="text-white text-xl font-bold">BlackSwap</span>
        </div>

        <button onClick={() => { connect({ connector: metaMask() }) }} className="flex items-center space-x-2 bg-primary px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
          <Wallet2 className="h-5 w-5 text-white" />
          <span className="text-white">{!isConnected ? "Connect Wallet" : address?.slice(0, 6).concat("...")}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;