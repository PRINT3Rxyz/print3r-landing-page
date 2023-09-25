import { AiOutlineArrowDown } from "react-icons/ai";
import LaunchApp from "../nav/LaunchApp";

const Airdrop = () => {
  return (
    <div className="flex flex-col bg-transparent h-max">
      <div className="flex flex-row items-center justify-center">
        <h2 className="italic text-white font-semibold font-inter text-lg text-center mr-2">
          How to Get the PRINT
          <span className="text-p3-orange"> Airdrop</span>
        </h2>
        <AiOutlineArrowDown className="text-white text-lg ml-2" />
      </div>
      <img src="src/assets/brrr-banner.png" />
      <div className="min-w-full bg-transparent pt-10 px-6 sm:p-24 flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:max-w-[35%] items-center lg:items-start">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold font-inter text-center lg:text-start">
            Trade, Refer & Compete! PRINT AIRDROP{" "}
            <span className="text-p3-orange">SZN 1!</span>
          </h1>
          <p className="text-white font-inter text-sm md:text-base lg:text-lg font-normal my-6 max-w-[80%] leading-7 text-center lg:text-start">
            As you trade, hit milestones and open lootboxes on PRINT3R you’ll
            earn XP which will allow you to participate in our first seasonal
            PRINT airdrop!
          </p>
          <LaunchApp />
          <p className="text-p3-para underline text-base font-poppins mt-6">
            Learn more!
          </p>
        </div>
        <div>
          <img src="src/assets/airdrop-img.png"></img>
        </div>
      </div>
      <img src="src/assets/brrr-banner.png" />
    </div>
  );
};

export default Airdrop;
