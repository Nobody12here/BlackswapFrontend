import { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

interface HoverButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  icon?: ReactNode | string;
  hover: boolean;
}

const HoverButton: React.FC<HoverButtonProps> = ({
  text,
  textColor = "text-[#FC72FF]",
  icon,
  hover,
}) => {
  return (
    <div className="inline-block cursor-pointer">
      <button
        className={`relative flex items-center bg-white dark:bg-[#131313] ${textColor} font-normal text-lg px-1 py-2 rounded-full overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div
          className={`flex items-center gap-2 transition-transform duration-300 ease-in-out ${
            hover ? "-translate-x-3" : "translate-x-3"
          }`}
        >
          <div
            className={`transition-opacity duration-300 ease-in-out ${
              hover ? "opacity-0 -translate-x-2" : "opacity-100 translate-x-0"
            }`}
          >
            {typeof icon === "string" ? (
              <img src={icon} alt="icon" className="h-6" />
            ) : (
              icon
            )}
          </div>

          <span className="transition-transform duration-300 ease-in-out">
            {text}
          </span>

          <div
            className={`transition-opacity duration-300 ease-in-out ${
              hover ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            }`}
          >
            <FiArrowRight size={20} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default HoverButton;
