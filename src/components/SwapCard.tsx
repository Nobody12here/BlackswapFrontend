import { useEffect, useState } from "react";
import { IoArrowDownOutline } from "react-icons/io5";

import TokenModal from "./TokenModal";
import { parseEther } from "viem";
import { TokenInfo } from "../interface";
import { useTokenSwap } from "../hooks/swap";
import TokenInput from "./TokenInput";

const SwapCard = () => {
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [modalType, setModalType] = useState<"from" | "to">("from");

  const {
    fromToken,
    toToken,
    fromTokenAmount,
    toTokenAmount,
    setFromToken,
    setToToken,
    setFromTokenAmount,
    setToTokenAmount,
    fetchAmountsOut,
    handleSwap,
    executeSwap,
  } = useTokenSwap();

  const handleOpenModal = (type: "from" | "to") => {
    setModalType(type);
    setShowTokenModal(true);
  };

  const handleSelectToken = (token: TokenInfo) => {
    if (modalType === "from") {
      setFromToken(token);
    } else {
      setToToken(token);
    }
  };

  useEffect(() => {
    if (fromTokenAmount) {
      fetchAmountsOut(parseEther(fromTokenAmount.toString()));
    }
  }, [toToken, fromTokenAmount]);

  return (
    <div className="relative">
      {/* From Token Input */}
      <TokenInput
        label="From"
        token={fromToken}
        amount={fromTokenAmount}
        onAmountChange={setFromTokenAmount}
        onSelectToken={() => handleOpenModal("from")}
      />

      {/* Swap Button */}
      <div className="flex justify-center -my-3 z-10">
        <div
          onClick={handleSwap}
          className="p-2 rounded-2xl border-[4px] border-white dark:border-[#131313] bg-[#f9f9f9] dark:bg-[#1b1b1b] cursor-pointer"
        >
          <IoArrowDownOutline size={22} />
        </div>
      </div>

      {/* To Token Input */}
      <TokenInput
        label="To"
        token={toToken}
        amount={toTokenAmount}
        onAmountChange={setToTokenAmount}
        onSelectToken={() => handleOpenModal("to")}
        highlightColor="text-[#FF1CF7]"
      />

      {/* Swap Button */}
      <button
        onClick={() => executeSwap()}
        className="w-full bg-[#fef4ff] dark:bg-[#361a37] hover:bg-opacity-80 text-[#fc72ff] font-medium p-4 rounded-2xl transition-all duration-300 mt-4"
      >
        Swap Tokens
      </button>

      <TokenModal
        isOpen={showTokenModal}
        onClose={() => setShowTokenModal(false)}
        onSelectToken={handleSelectToken}
      />
    </div>
  );
};

export default SwapCard;
