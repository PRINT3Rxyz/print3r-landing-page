import LaunchApp from "../nav/LaunchApp";
import StatCard from "./StatCard";

const items = [
  {
    title: "Total Trading Volume",
    value: "???,???,???.??",
    icon: "src/assets/trading-icon.png",
  },
  {
    title: "Total Open Interest",
    value: "???,???,???.??",
    icon: "src/assets/open-interest-icon.png",
  },
  {
    title: "Total Revenue Shared",
    value: "??,???,???.??",
    icon: "src/assets/revenue-share-icon.png",
  },
];

const Hero = () => {
  return (
    <div className="min-w-full bg-transparent p-6 sm:p-24 flex flex-col lg:flex-row">
      <div className="mb-6 lg:m-0 lg:max-w-1/3">
        <h1 className="text-white text-5xl font-semibold font-inter">
          Decentralized <span className="text-p3-orange">Crypto </span>{" "}
          Perpetual <span className="text-p3-orange">Exchange</span>
        </h1>
        <p className="text-[#E5E6ED] font-inter text-lg font-normal my-14 max-w-4/5 leading-7">
          Trade BTC, ETH & other top cryptocurrencies on chain directly from
          your wallet with up to 50x Leverage.
        </p>
        <img
          src="src/assets/powered-by-base.png"
          className="max-w-1/3 mb-8"
        ></img>
        <LaunchApp />
      </div>
      <div className="lg:w-2/3 flex flex-col items-end relative">
        <img
          className="absolute left-0 max-w-2/3 overflow-hidden"
          src="src/assets/hero-img.png"
        ></img>
        {items.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
