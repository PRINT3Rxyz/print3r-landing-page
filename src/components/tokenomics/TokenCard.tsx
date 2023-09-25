interface ItemProps {
  tokenName: string;
  description: string;
}

const TokenCard: React.FC<ItemProps> = ({ tokenName, description }) => {
  return (
    <div className="print3r-card flex-col mx-4 items-start relative">
      <h3 className="inter text-white text-base mb-4">
        <span className="text-p3-orange">{tokenName}</span> Token
      </h3>
      <p className="inter text-p3-para text-base">{description}</p>
    </div>
  );
};

export default TokenCard;
