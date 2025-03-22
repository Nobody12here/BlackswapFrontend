import { FaArrowCircleRight } from "react-icons/fa";

const Trusted = () => {
  return (
    <section className="px-5 pb-[120px]">
      <div className="max-w-[1280px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-medium mb-4">
            Trusted by millions
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="enBGrV bg-[#f9f9f9] dark:bg-[#1b1b1b] flex flex-col justify-between min-h-[230px] h-full p-5 md:p-8 rounded-[20px]">
            <h3 className="text-[#9b9b9b] font-medium text-xl">
              All time volume
            </h3>
            <h2 className="font-normal text-4xl lg:text-6xl">$2.2T</h2>
          </div>

          <div className="enBGrV bg-[#f9f9f9] dark:bg-[#1b1b1b] flex flex-col justify-between min-h-[230px] h-full p-5 md:p-8 rounded-[20px]">
            <h3 className="text-[#9b9b9b] font-medium text-xl relative">
              All time volume
            </h3>
            <h2 className="font-normal text-4xl lg:text-6xl relative">$2.2T</h2>
          </div>
        </div>

        <div className="flex flex-col items-start justify-end gap-6 order-4 md:order-3">
          <p className="text-base font-medium max-w-[470px] w-full mt-4">
<<<<<<< HEAD
            Blackswap is a gateway to the Blackfort ecosystem, which includes
            secure wallets, peyment solutions, and smart contract tools. By
            using Blackswap, you're joining a community shaping the future of
            decentralized finance.
=======
            Uniswap products are powered by the Uniswap Protocol. The protocol
            is the largest onchain marketplace, with billions of dollars in
            weekly volume across thousands of tokens on Ethereum and 7+
            additional chains.
>>>>>>> e2cd99ba1a8ba8cf2491f808cd510f5e60006a37
          </p>

          <a
            href="#"
            className="bg-[#f9f9f9] dark:bg-[#1b1b1b] py-2 px-4 flex items-center rounded-full gap-2 text-base hover:opacity-60 transition-opacity duration-300"
          >
            Learn more
            <FaArrowCircleRight />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 order-3 md:order-4">
          <div className="enBGrV bg-[#f9f9f9] dark:bg-[#1b1b1b] flex flex-col justify-between min-h-[230px] h-full p-5 md:p-8 rounded-[20px]">
            <h3 className="text-[#9b9b9b] font-medium text-xl">
              All time LP fees
            </h3>
            <h2 className="font-normal text-4xl lg:text-6xl">$3.4B</h2>
          </div>

          <div className="hgxSoE flex flex-col justify-between min-h-[230px] h-full p-5 md:p-8 rounded-[20px]">
            <div className="flex items-center gap-1">
<<<<<<< HEAD
              <div className="cBvfmM"></div>
              <h3 className="text-[#40b66b] font-medium text-xl relative">
                24H volume
              </h3>
            </div>
            <h2 className="text-[#40b66b] font-normal text-4xl lg:text-6xl relative">
              $781.1M
            </h2>
=======
                <div className="cBvfmM"></div>
              <h3 className="text-[#40b66b] font-medium text-xl relative">
              24H volume
              </h3>
            </div>
            <h2 className="text-[#40b66b] font-normal text-4xl lg:text-6xl relative">$781.1M</h2>
>>>>>>> e2cd99ba1a8ba8cf2491f808cd510f5e60006a37
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
