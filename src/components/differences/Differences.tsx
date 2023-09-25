import DCard from "./DifferenceCard";

const cards = [
  {
    title: "Earn Protocol Revenue & Rebates",
    description:
      "PRINT3R incorporates a robust referral system, and shares all generated revenue with our token holders because we believe in empowering and rewarding our users.",
  },
  {
    title: "Unparalleled Transparency",
    description:
      "No custody, no accounts, no KYC. PRINT3R offers a fully permissionless, on-chain, and non-custodial platform, operated entirely by smart contracts.",
  },
  {
    title: "Trade Like a Pro!",
    description:
      "Open trades with up to 50x leverage. Experience a new class of perpetual AMM with virtually zero slippage and low fees.",
  },
];

const Differences = () => {
  return (
    <div className="w-100 p-6 sm:p-24 bg-transparent">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-white text-4xl font-inter font-semibold">
          What sets <span className="text-p3-orange">Print3r apart?</span>
        </h2>
        <p className="text-p3-para font-poppins text-base text-center my-4 md:max-w-[45%]">
          Dive into a decentralized spot and perpetual exchange that prioritizes
          user experience, efficiency, and rewards.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="hidden xl:block xl:relative xl:right-[-8%]">
          <img
            className="hidden xl:block"
            src="src/assets/difference-bg.png"
          ></img>
        </div>
        <div className="flex flex-col items-center">
          <img className="xl:hidden" src="src/assets/difference-img.png" />
          {cards.map((card) => (
            <DCard title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Differences;
