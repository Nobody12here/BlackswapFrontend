import { useState } from "react";
import HoverButton from "./HoverButton";
import HelpIcon from "../assets/help_icon.svg";
import BlogIcon from "../assets/blog_icon.svg";
import MessageIcon from "../assets/message_icon.svg";

const ConnectUs = () => {
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>({
    help: false,
    blog: false,
    message: false,
  });

  const handleMouseEnter = (key: string) => {
    setHoverStates((prevState) => ({ ...prevState, [key]: true }));
  };

  const handleMouseLeave = (key: string) => {
    setHoverStates((prevState) => ({ ...prevState, [key]: false }));
  };

  return (
    <section className="px-5 pb-[120px]">
      <div className="max-w-[1280px] w-full mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-medium mb-6">
            Connect with us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Help Center */}
            <div
              className="bg-[#ff4d0014] flex flex-col justify-between min-h-[250px] h-full p-5 md:p-8 rounded-[20px] transition-all duration-300 ease-in-out cursor-pointer"
              onMouseEnter={() => handleMouseEnter("help")}
              onMouseLeave={() => handleMouseLeave("help")}
            >
              <HoverButton
                text="Help center"
                textColor="text-[#ff4d00]"
                icon={HelpIcon}
                hover={hoverStates.help}
              />
              <h3 className="text-[#ff4d00] text-2xl">Get support</h3>
            </div>

            {/* Blog */}
            <div
              className="bg-[#62543229] flex flex-col justify-between min-h-[250px] h-full p-5 md:p-8 rounded-[20px] transition-all duration-300 ease-in-out cursor-pointer"
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={() => handleMouseLeave("blog")}
            >
              <HoverButton
                text="Blog"
                textColor="text-[#8e8767]"
                icon={BlogIcon}
                hover={hoverStates.blog}
              />
              <h3 className="text-[#8e8767] text-2xl">
                Insights and news from the team
              </h3>
            </div>
          </div>

          {/* Stay Connected */}
          <div
            className="bg-[#361a37] flex flex-col justify-between min-h-[250px] h-full p-5 md:p-8 rounded-[20px] transition-all duration-300 ease-in-out cursor-pointer"
            onMouseEnter={() => handleMouseEnter("message")}
            onMouseLeave={() => handleMouseLeave("message")}
          >
            <HoverButton
              text="Stay connected"
              textColor="text-[#fc72ff]"
              icon={MessageIcon}
              hover={hoverStates.message}
            />
            <h3 className="text-[#fc72ff] text-2xl">
              Follow @Blackfort on X for the latest updates
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectUs;
