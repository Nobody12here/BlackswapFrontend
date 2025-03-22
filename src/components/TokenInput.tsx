import React from "react";
import { TokenInfo } from "../interface";
import { FaChevronDown } from "react-icons/fa6";

interface TokenInputProps {
  label: string;
  token: TokenInfo | null;
  amount: number | "";
  onAmountChange: (value: number) => void;
  onSelectToken: () => void;
  highlightColor?: string;
}

const TokenInput: React.FC<TokenInputProps> = ({
  label,
  token,
  amount,
  onAmountChange,
  onSelectToken,
  highlightColor = "text-white",
}) => {
  return (
    <div className="p-3 border border-black/10 dark:border-white/10 rounded-3xl">
      <label className="text-[#9b9b9b] text-sm ml-1 mb-2 block">{label}</label>

      <div className="flex items-center justify-between gap-3">
        <input
          type="number"
          value={amount}
          onChange={(e) => onAmountChange(parseFloat(e.target.value))}
          placeholder="0.0"
          autoComplete="off"
          autoCapitalize="sentences"
          autoCorrect="on"
          inputMode="decimal"
          spellCheck
          className="bg-transparent text-3xl outline-none w-[60%] placeholder-gray-500"
        />
        <button
          onClick={onSelectToken}
          className={`flex items-center space-x-2 border border-black/10 dark:border-white/10 transition-all px-3 py-2 rounded-full ${highlightColor}`}
        >
          {token?.symbol === "BXN" && (
            <img
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/25963.png"
              alt="BXN"
              className="w-6 h-6 rounded-full"
            />
          )}
          <span className="font-normal text-black/80 dark:text-white">
            {token ? token.symbol : "Select Token"}
          </span>
          <FaChevronDown size={14} className="text-black/50 dark:text-white/50" />
        </button>
      </div>
    </div>
  );
};

export default TokenInput;
