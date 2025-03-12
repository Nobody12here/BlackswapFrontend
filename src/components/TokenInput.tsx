import React from "react";
import { TokenInfo } from "../interface";

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
    <div className="space-y-1">
      <label className="text-gray-400 text-sm ml-1">{label}</label>
      <div className="bg-white bg-opacity-5 rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <input
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(parseFloat(e.target.value))}
            placeholder="0.0"
            className="bg-transparent text-3xl text-white outline-none w-[60%] placeholder-gray-500"
          />
          <button
            onClick={onSelectToken}
            className={`flex items-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all px-4 py-2 rounded-2xl ${highlightColor}`}
          >
            {token?.symbol === "BXN" && (
              <img
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/25963.png"
                alt="BXN"
                className="w-6 h-6 rounded-full"
              />
            )}
            <span className="font-medium">{token ? token.symbol : "Select Token"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenInput;
