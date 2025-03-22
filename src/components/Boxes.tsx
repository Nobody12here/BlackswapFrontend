import { useState } from "react";
import ETH from "../assets/eth.png";
import UNI from "../assets/uni.png";
import USDC from "../assets/usdc.png";
import LIDO from "../assets/Lido_DAO.png";
import UnswipWallet from "../assets/unswip_wallet.png";
import DocsBg from "../assets/developer_docs.png";
import LiquidityBg from "../assets/liquiduty.png";
import DownArrow from "../assets/down_arrow.svg";
import DesktopIcon from "../assets/desktop_icon.svg";
import WalletIcon from "../assets/wallet_icon.svg";
import DocsIcon from "../assets/docs_icon.svg";
import ChartIcon from "../assets/chart_icon.svg";
import HoverButton from "./HoverButton";

const Boxes = () => {
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>({
    webApp: false,
    wallet: false,
    docs: false,
    liquidity: false,
  });

  const handleMouseEnter = (key: string) => {
    setHoverStates((prevState) => ({ ...prevState, [key]: true }));
  };

  const handleMouseLeave = (key: string) => {
    setHoverStates((prevState) => ({ ...prevState, [key]: false }));
  };

  return (
    <section className="px-5 py-[120px]">
      <div className="max-w-[1280px] w-full mx-auto">
        <h2 className="text-4xl md:text-5xl mb-8 font-medium">
          Go direct to DeFi
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <a
            href="#"
<<<<<<< HEAD
            className="bg-[#0066ff1f] rounded-[32px] flex flex-col justify-between"
          >
            <div className="p-5 md:p-8 space-y-4">
              <div>
                <p className="text-2xl font-normal mb-1">
                  Decentralized Trading{" "}
                </p>

                <h3 className="text-[#00BFFF] text-lg font-light">
                  Your assets are under your control, thanks to the
                  decentralized nature on the Blackfort network. Reducing risks
                  associated with centralized exchanges.
                </h3>
              </div>
=======
            className="bg-[#0066ff1f] rounded-[32px] flex flex-col justify-between transition-all duration-300 ease-in-out"
            onMouseEnter={() => handleMouseEnter("webApp")}
            onMouseLeave={() => handleMouseLeave("webApp")}
          >
            <div className="p-5 md:p-8 space-y-4">
              <HoverButton
                text="Web app"
                textColor="text-[#00BFFF]"
                icon={DesktopIcon}
                hover={hoverStates.webApp}
              />

              <h3 className="text-[#00BFFF] text-2xl md:text-4xl font-normal">
                Swapping made simple. Access thousands of tokens on 11+ chains.
              </h3>
>>>>>>> e2cd99ba1a8ba8cf2491f808cd510f5e60006a37
            </div>

            <div className="space-y-2 p-5 md:p-8">
              <div className="p-4 rounded-[20px] flex items-center gap-2 md:gap-4 bg-white dark:bg-[#131313]">
                <img
                  src={ETH}
                  alt="eth_icon"
                  className="h-6 md:h-[30px] rounded-full object-cover"
                />

                <div className="flex-1 flex items-center gap-2 text-lg md:text-xl">
                  <span className="font-medium text-[#222222] dark:text-white text-ellipsis">
                    Ethereum
                  </span>

                  <span className="text-[#9b9b9b]">ETH</span>
                </div>

                <div className="flex items-center gap-1 text-lg md:text-xl font-normal">
                  <span className="text-ellipsis mr-1">$1,905.18</span>

                  <img
                    src={DownArrow}
                    alt="down_arrow"
                    className="hidden md:block"
                  />

                  <span className="text-[#21c95e] hidden md:block">0.68%</span>
                </div>
              </div>

              <div className="p-4 rounded-[20px] flex items-center gap-2 md:gap-4 bg-white dark:bg-[#131313]">
                <img
                  src={USDC}
                  alt="usdc_icon"
                  className="h-6 md:h-[30px] rounded-full object-cover"
                />

                <div className="flex-1 flex items-center gap-2 text-lg md:text-xl">
                  <span className="font-medium text-[#222222] dark:text-white text-ellipsis">
                    USD Coin
                  </span>
                  <span className="font-normal text-[#9b9b9b]">USDC</span>
                </div>

                <div className="flex items-center gap-1 text-lg md:text-xl font-normal">
                  <span className="text-ellipsis mr-1">$1.00</span>
                  <img
                    src={DownArrow}
                    alt="down_arrow"
                    className="hidden md:block"
                  />
                  <span className="text-[#21c95e] hidden md:block">0.00%</span>
                </div>
              </div>

              <div className="p-4 rounded-[20px] flex items-center gap-2 md:gap-4 bg-white dark:bg-[#131313]">
                <img
                  src={UNI}
                  alt="uni_icon"
                  className="h-6 md:h-[30px] rounded-full object-cover"
                />

                <div className="flex-1 flex items-center gap-2 text-lg md:text-xl">
                  <span className="font-medium text-[#222222] dark:text-white text-ellipsis">
                    Uniswap
                  </span>
                  <span className="font-normal text-[#9b9b9b]">UNI</span>
                </div>

                <div className="flex items-center gap-1 text-lg md:text-xl font-normal">
                  <span className="text-ellipsis mr-1">$6.17</span>
                  <img
                    src={DownArrow}
                    alt="down_arrow"
                    className="hidden md:block"
                  />
                  <span className="text-[#21c95e] hidden md:block">2.35%</span>
                </div>
              </div>

              <div className="p-4 rounded-[20px] flex items-center gap-2 md:gap-4 bg-white dark:bg-[#131313]">
                <img
                  src={LIDO}
                  alt="lido_icon"
                  className="h-6 md:h-[30px] rounded-full object-cover"
                />

                <div className="flex-1 flex items-center gap-2 text-lg md:text-xl">
                  <span className="font-medium text-[#222222] dark:text-white text-ellipsis">
                    Lido DAO Token
                  </span>
                  <span className="font-normal text-[#9b9b9b]">LDO</span>
                </div>

                <div className="flex items-center gap-1 text-lg md:text-xl font-normal">
                  <span className="text-ellipsis mr-1">$0.959</span>
                  <img
                    src={DownArrow}
                    alt="down_arrow"
                    className="hidden md:block"
                  />
                  <span className="text-[#21c95e] hidden md:block">4.67%</span>
                </div>
              </div>
            </div>
          </a>

<<<<<<< HEAD
          <a href="#" className="bg-[#fc72ff1f] rounded-[32px]">
            <div className="p-5 md:p-8 space-y-4">
              <div>
                <p className="text-2xl font-normal mb-1">
                  User-Friendly and Accessible
                </p>

                <h3 className="text-[#FC72FF] text-lg font-light">
                  Designed for all users, Blackswap features an intuitive
                  interface that simplifies trading for beginners and experts
                  alike. Built on Blackfort's user-friendly blockchain, it makes
                  managing trades and portfolios effortless, enhancing
                  accessibility.
                </h3>
              </div>
=======
          <a
            href="#"
            className="bg-[#fc72ff1f] rounded-[32px] flex flex-col justify-between transition-all duration-300 ease-in-out"
            onMouseEnter={() => handleMouseEnter("wallet")}
            onMouseLeave={() => handleMouseLeave("wallet")}
          >
            <div className="p-5 md:p-8 space-y-4">
              <HoverButton
                text="Uniswap wallet"
                textColor="text-[#FC72FF]"
                icon={WalletIcon}
                hover={hoverStates.wallet}
              />

              <h3 className="text-[#FC72FF] text-2xl md:text-4xl font-normal">
                The wallet built for swapping. Available on iOS and Android.
              </h3>
>>>>>>> e2cd99ba1a8ba8cf2491f808cd510f5e60006a37
            </div>

            <div>
              <img
                src={UnswipWallet}
                alt="img"
                loading="lazy"
                className="-mt-10 md:-mt-16"
              />
            </div>
          </a>

          <a
            href="#"
<<<<<<< HEAD
            className="bg-[#00C3A0] bg-opacity-[0.08] h-52 md:h-[340px] rounded-[32px] flex flex-col justify-between relative"
          >
            <div className="relative z-40 p-5 md:p-8 h-full">
              <div className="max-w-[380px] w-full">
                <p className="text-2xl font-normal mb-1">
                  Fast and Cost-Effective Transactions
                </p>

                <h3 className="text-[#00C3A0] text-lg font-light">
                  Experience quick trades with minimal fees on Blackswap,
                  powered by Blackfort's high transaction throughput and
                  energy-efficient PoSA. This ensures cost-effective and
                  efficient trading, making it ideal for frequent traders.
                </h3>
              </div>
=======
            className="bg-[#00C3A0] bg-opacity-[0.08] h-52 md:h-[340px] rounded-[32px] flex flex-col justify-between relative transition-all duration-300 ease-in-out"
            onMouseEnter={() => handleMouseEnter("docs")}
            onMouseLeave={() => handleMouseLeave("docs")}
          >
            <div className="relative z-40 p-5 md:p-8 space-y-4 flex flex-col justify-between h-full">
              <HoverButton
                text="Developer docs"
                textColor="text-[#00C3A0]"
                icon={DocsIcon}
                hover={hoverStates.docs}
              />

              <h3 className="text-[#00C3A0] text-2xl md:text-4xl font-normal max-w-[380px] w-full">
                Build the next generation of open applications and tools.
              </h3>
>>>>>>> e2cd99ba1a8ba8cf2491f808cd510f5e60006a37
            </div>

            <div className="absolute inset-0 hidden md:block">
              <img
                src={DocsBg}
                alt="img"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          <a
            href="#"
<<<<<<< HEAD
            className="bg-[#883FFF] bg-opacity-[0.12] h-52 md:h-[340px] rounded-[32px] flex flex-col justify-between relative"
          >
            <div className="max-w-[380px] w-full relative z-40 p-5 md:p-8 h-full">
              <p className="text-2xl font-normal mb-1">
                Diverse Liquidity Pools
              </p>

              <h3 className="text-[#883FFF] text-lg font-light">
                Blackswap offers a variety of liquidity pools, allowing you to
                trade a wide range of tokens. Contributing to a robust trading
                ecosystem.
=======
            className="bg-[#883FFF] bg-opacity-[0.12] h-52 md:h-[340px] rounded-[32px] flex flex-col justify-between relative transition-all duration-300 ease-in-out"
            onMouseEnter={() => handleMouseEnter("liquidity")}
            onMouseLeave={() => handleMouseLeave("liquidity")}
          >
            <div className="relative z-40 p-5 md:p-8 space-y-4 flex flex-col justify-between h-full">
              <HoverButton
                text="Liquidity"
                textColor="text-[#883FFF]"
                icon={ChartIcon}
                hover={hoverStates.liquidity}
              />

              <h3 className="text-[#883FFF] text-2xl md:text-4xl font-normal max-w-[380px] w-full">
                Provide liquidity to pools on the Uniswap Protocol and earn fees
                on swaps.
>>>>>>> e2cd99ba1a8ba8cf2491f808cd510f5e60006a37
              </h3>
            </div>

            <div className="absolute inset-0 hidden md:block">
              <img
                src={LiquidityBg}
                alt="img"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
