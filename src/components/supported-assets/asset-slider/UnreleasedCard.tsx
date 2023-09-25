import { RiArrowUpFill } from "react-icons/ri";

interface UnreleasedCardProps {
  tokenName: string;
  imagePath: string;
}

const UnreleasedCard: React.FC<UnreleasedCardProps> = ({
  tokenName,
  imagePath,
}) => {
  return (
    <div className="print3r-card flex-row min-w-fit mx-4 w-96 items-center justify-between relative">
      <div>
        <img
          className="max-h-11 mb-3.5"
          src={imagePath}
          alt={`${tokenName} icon`}
        ></img>
        <p className="text-p3-head-text text-base inter">{tokenName}</p>
        <h3 className="text-white text-xl inter">USD 53260.20</h3>
      </div>
      <div className="flex flex-col items-end justify-start">
        <img
          className="max-h-20"
          src="src/assets/btc-chart.png"
          alt={`${tokenName} chart`}
        ></img>
        <div className="flex flex-row items-center mt-4">
          <RiArrowUpFill className="text-[#11CABE] mr-2 text-lg inter font-semibold" />
          <p className="text-[#11CABE] text-lg font-semibold inter">100%</p>
        </div>
      </div>
      <img
        className="absolute object-fill left-0 w-full h-full"
        src="src/assets/card-mask.png"
      ></img>
    </div>
  );
};

export default UnreleasedCard;
