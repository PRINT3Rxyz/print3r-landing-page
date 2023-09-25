interface Props {
  title: string;
  description: string;
  icon: string;
}

const FeatureWrap = ({ title, description, icon }: Props) => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <img className="lg:absolute top-[-8%] w-40" src={icon}></img>
      <p className="text-center sm:text-start text-white font-inter text-base mb-2 w-full">
        {title}
      </p>
      <p className="text-center sm:text-start text-p3-para font-inter text-base">
        {description}
      </p>
    </div>
  );
};

export default FeatureWrap;
