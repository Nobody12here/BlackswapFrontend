import { useEffect, useState } from "react";
import { ArrowDownCircle } from "lucide-react";
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
    <div className="space-y-6">
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
          className="bg-white bg-opacity-5 p-2 rounded-xl cursor-pointer hover:bg-opacity-10 transition-all"
        >
          <ArrowDownCircle className="text-primary h-6 w-6" />
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
        className="w-full bg-[#FF1CF7] hover:bg-opacity-90 text-white font-semibold py-4 px-4 rounded-2xl transition-all"
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
