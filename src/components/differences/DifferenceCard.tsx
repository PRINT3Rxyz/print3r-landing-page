interface ItemProps {
  title: string;
  description: string;
}

const DCard: React.FC<ItemProps> = ({ title, description }) => {
  return (
    <div className="print3r-card flex-col min-w-fit mx-4 xl:w-96 max-w-[500px] items-start justify-between">
      <h3 className="inter text-white text-base mb-4">{title}</h3>
      <p className="inter text-p3-para text-base">{description}</p>
    </div>
  );
};

export default DCard;
