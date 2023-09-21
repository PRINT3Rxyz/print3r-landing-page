import { RiArrowUpFill, RiArrowDownFill } from "react-icons/ri";

interface ItemProps {
  assetName: string;
  priceUsd: string;
  change7d: string;
  assetIcon?: string; // Add these later
  chartIcon?: string; // Add these later
}

const AssetCard: React.FC<ItemProps> = ({
  assetName,
  priceUsd,
  change7d,
  assetIcon,
  chartIcon,
}) => {
  return (
    <div className="print3r-card flex-row min-w-fit mx-4 w-96 items-center justify-between">
      <div>
        <img
          className="max-h-11 mb-3.5"
          src={assetIcon}
          alt={`${assetName} icon`}
        ></img>
        <p className="text-p3-head-text text-base inter">{assetName}</p>
        <h3 className="text-white text-xl inter">USD {priceUsd}</h3>
      </div>
      <div className="flex flex-col items-end justify-start">
        <img
          className={`max-h-20 ${
            parseFloat(change7d) > 0
              ? "filter hue-rotate-90 saturate-[80%] brightness-[0.85] drop-shadow-[0_5px_5px_rgb(0,255,0)]"
              : "filter hue-rotate-[300deg] saturate-[210%] brightness-[0.7] contrast-[170%] drop-shadow-[0_5px_5px_rgb(255,0,0)]"
          }`}
          src={chartIcon}
          alt={`${assetName} chart icon`}
        ></img>
        <div className="flex flex-row items-center mt-4">
          {parseFloat(change7d) > 0 ? (
            <RiArrowUpFill className="text-[#11CABE] mr-2 text-lg inter font-semibold" />
          ) : (
            <RiArrowDownFill className="text-[#FA2256] mr-2 text-lg inter font-semibold" />
          )}
          <p
            className={`${
              parseFloat(change7d) > 0 ? "text-[#11CABE]" : "text-[#FA2256]"
            } text-lg font-semibold inter`}
          >
            {parseFloat(change7d).toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
