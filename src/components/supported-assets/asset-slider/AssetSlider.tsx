import { useRef } from "react";
import AssetCard from "./AssetCard";
import SliderButtons from "./SliderButtons";
import UnreleasedCard from "./UnreleasedCard";

interface AssetSliderProps {
  cryptoData?: { [key: string]: any }[] | null;
}

const AssetSlider: React.FC<AssetSliderProps> = ({ cryptoData }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const endpoints: { [key: string]: number } = {
    btc: 1,
    eth: 1027,
    usdc: 27763,
  };

  const tokenCharts: { [key: string]: string } = {
    btc: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
    eth: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg",
    usdc: "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/27763.svg",
  };

  let scroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
    }
  };

  const assets =
    cryptoData?.map((dataObj) => {
      const key = Object.keys(dataObj)[0];
      console.log(key);
      const data = dataObj[key];
      const id = endpoints[key];

      const obj = data.data[id];

      const price = obj.quote?.USD?.price;
      return {
        assetName: obj.symbol,
        priceUsd: parseFloat(price).toFixed(2),
        change7d: obj.quote?.USD?.percent_change_7d,
        assetIcon: `src/assets/${key.toUpperCase()}.png`,
        chartIcon: tokenCharts[key],
      };
    }) ?? [];

  return (
    <>
      <div
        ref={containerRef}
        className="my-7 flex flex-row items-end justify-between relative overflow-hidden"
      >
        {assets.map((asset, index) => (
          <AssetCard key={index} {...asset} />
        ))}
        <UnreleasedCard
          tokenName="PRINT"
          imagePath="src/assets/print-logo.png"
        />
        <UnreleasedCard tokenName="BRRR" imagePath="src/assets/brrr-logo.png" />
      </div>
      <SliderButtons scroll={scroll} />
    </>
  );
};

export default AssetSlider;
