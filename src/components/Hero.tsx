import { useState } from "react";
import TabSelector from "./TabSelector";
import SwapCard from "./SwapCard";
import LiquidityCard from "./LiquidityCard";
import AdWallBanner from "./AdWall";
import Video from "../assets/video.mp4";

const Hero = () => {
  const [activeTab, setActiveTab] = useState<"swap" | "pool">("swap");

  return (
    <section className="min-h-screen relative">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="grid grid-cols-1 gap-10">
          <div className="pt-24 ">
            <AdWallBanner
              message="🚀 Contact us to place your ads here !"
              backgroundColor="#0F172A"
              textColor="#FFFFFF"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-center text-4xl md:text-5xl max-w-[400px] mx-auto font-medium pb-10">
              Swap anytime, anywhere.
            </h2>
            <div className="max-w-[480px] mx-auto w-full mb-6">
              <div className="bg-white dark:bg-[#131313] p-2 rounded-3xl max-w-[480px] mx-auto w-full">
                <div className="w-full space-y-5">
                  <TabSelector
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                  />
                  {activeTab === "swap" ? <SwapCard /> : <LiquidityCard />}
                </div>
                <p className="max-w-[430px] w-full mx-auto text-center text-[#9B9B9B] text-base font-light mt-4">
                  Blackswap is a decentralized cryptocurrency exchange built on
                  the BXN Blackfort network.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <div className="max-w-[700px] w-full mx-auto">
                <video
                  src={Video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full object-cover h-[500px] sm:h-[700px] rounded-[40px]"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
