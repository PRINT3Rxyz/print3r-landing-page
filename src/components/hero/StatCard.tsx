interface ItemProps {
  title: string;
  value: string;
  icon: string;
}

const StatCard: React.FC<ItemProps> = ({ title, value, icon }) => {
  return (
    <div className="print3r-card flex-row max-w-[90%] w-96 items-center justify-between">
      <div>
        <img className="max-h-20" src={icon} alt={`${title} icon`}></img>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-p3-head-text text-base inter">{title}</p>
        <p className="text-white text-xl inter">${value.toLocaleString()}.??</p>
      </div>
    </div>
  );
};

export default StatCard;
