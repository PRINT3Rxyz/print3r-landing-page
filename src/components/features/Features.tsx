import FeatureWrap from "./FeatureWrap.tsx";

const featureList = [
  {
    title: "One Click Positioning",
    description:
      "With PRINT3R, you can easily open or close positions through a streamlined interface, making the trading experience more convenient and efficient.",
    icon: "src/assets/one-click.png",
  },
  {
    title: "Multi-Source Price Feeds",
    description:
      "PRINT3R uses  median price of Binance, Bitfinex and Coinbase to safeguard your positions against unexpected liquidations during market volatility.",
    icon: "src/assets/dynamic-price.png",
  },
  {
    title: "Trade BTC + ETH Up to 50x",
    description:
      "Execute trades with up to 50x leverage, empowering you to easily deploy positions to capitalize on market movements efficiently.",
    icon: "src/assets/multi-assets.png",
  },
];

const Features = () => {
  return (
    <div className="bg-p3-blue p-6 sm:p-24 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
      {featureList.map((feature, index) => {
        return <FeatureWrap key={index} {...feature} />;
      })}
    </div>
  );
};

export default Features;
