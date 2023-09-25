import LaunchApp from "../nav/LaunchApp";
import HeroSwiper from "./HeroSwiper";
import StatCard from "./StatCard";

const items = [
  {
    title: "Total Trading Volume",
    value: "TBD",
    icon: "src/assets/trading-icon.png",
  },
  {
    title: "Total Open Interest",
    value: "TBD",
    icon: "src/assets/open-interest-icon.png",
  },
  {
    title: "Total Revenue Shared",
    value: "TBD",
    icon: "src/assets/revenue-share-icon.png",
  },
];

const Hero = () => {
  return (
    <>
      <div className="min-w-full bg-transparent pt-20 p-6 sm:px-24 flex flex-col lg:flex-row items-center">
        <div className="flex flex-col items-center justify-between lg:items-start mb-6 lg:m-0 lg:max-w-[30%]">
          <img
            className="lg:hidden max-w-[50%]"
            src="src/assets/hero-img.png"
          />
          <h1 className="text-white text-center lg:text-start text-3xl sm:text-4xl md:text-5xl font-semibold font-inter">
            Decentralized <span className="text-p3-orange">Crypto </span>{" "}
            Perpetual <span className="text-p3-orange">Exchange</span>
          </h1>
          <p className="text-[#E5E6ED] font-inter text-sm md:text-base lg:text-lg text-center lg:text-start font-normal my-6 max-w-[80%] leading-7">
            Trade BTC, ETH & other top cryptocurrencies on chain directly from
            your wallet with up to 50x Leverage.
          </p>
          <img
            src="src/assets/powered-by-base.png"
            className="lg:flex max-w-[30%] mb-8"
          ></img>
          <div className="hidden lg:flex my-4">
            <LaunchApp />
          </div>
        </div>
        <div className="hidden lg:flex w-full lg:flex-col items-center lg:items-end relative">
          <img
            className="hidden lg:block absolute left-0 max-w-[60%] overflow-hidden"
            src="src/assets/hero-img.png"
          />
          {items.map((item, index) => (
            <StatCard key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="min-w-full bg-transparent px-6 flex flex-col lg:flex-row items-start overflow-x-auto touch-auto cursor-grab">
        <HeroSwiper />
      </div>
    </>
  );
};

export default Hero;
