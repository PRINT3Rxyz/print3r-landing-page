import { AiOutlineArrowDown } from "react-icons/ai";
import AssetSlider from "./asset-slider/AssetSlider";
import axios from "axios";
import { useState, useEffect } from "react";

const Pricing = () => {
  const [data, setData] = useState<{ [key: string]: any }[] | null>(null);
  const endpoints: { [key: string]: number } = {
    btc: 1,
    eth: 1027,
    usdc: 27763,
  };

  const url = "https://crypto-prices.onrender.com/cryptodata/";

  useEffect(() => {
    const fetchPrices = async () => {
      const requests = Object.keys(endpoints).map((key) =>
        axios.get(`${url}${endpoints[key]}`)
      );

      try {
        const responses = await Promise.all(requests);
        const aggregatedData = responses.map((res, index) => {
          return { [Object.keys(endpoints)[index]]: res.data };
        });
        setData(aggregatedData);
        console.log(aggregatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPrices();
  }, []);
  return (
    <div className="bg-transparent py-24">
      <div className="flex flex-row items-center justify-center">
        <h2 className="italic text-white font-semibold font-inter text-lg text-center mr-2">
          Supported <span className="text-p3-orange">Assets</span>
        </h2>
        <AiOutlineArrowDown className="text-white text-lg ml-2" />
      </div>
      <AssetSlider cryptoData={data} />
    </div>
  );
};

export default Pricing;
