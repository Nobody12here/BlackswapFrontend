import React from 'react';

interface AdWallBannerProps {
  message?: string;
  backgroundColor?: string;
  textColor?: string;
  closable?: boolean;
}

const AdWallBanner: React.FC<AdWallBannerProps> = ({
  message = "🎉 Special promotion: Get 50% off trading fees for new users! Limited time offer.",
  backgroundColor = "#FFD700",
  textColor = "#000000",
  closable = false
}) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div 
      className="w-full py-3 px-4 flex justify-between items-center"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="flex-1 text-center text-sm md:text-base font-medium">
        {message}
      </div>
      {closable && (
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 focus:outline-none"
          aria-label="Close banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
};

export default AdWallBanner;