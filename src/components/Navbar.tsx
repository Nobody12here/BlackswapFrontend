import { useState, useEffect } from "react";
import { Wallet2 } from "lucide-react";
import { useAccount, useConnect } from "wagmi";
import { metaMask } from "wagmi/connectors";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const { connect } = useConnect();
  const { address, isConnected } = useAccount();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full py-3 px-3 md:px-10 z-50 flex justify-between items-center transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-[#131313] border-b border-black/10 dark:border-white/10"
          : "bg-transparent border-b-0 border-transparent"
      }`}
    >
      <div className="flex items-center space-x-2">
        <span className="text-[#fc72ff] text-xl font-medium">BlackSwap</span>
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />

        <button
          onClick={() => {
            connect({ connector: metaMask() });
          }}
          className="flex items-center space-x-2 bg-[#fef4ff] dark:bg-[#361a37] text-[#fc72ff] text-sm font-normal rounded-full px-4 py-2 transition-colors"
        >
          <Wallet2 size={16} />
          <span>
            {!isConnected
              ? "Connect Wallet"
              : address?.slice(0, 6).concat("...")}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
