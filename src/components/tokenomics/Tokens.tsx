import TokenCard from "./TokenCard";

const tokens = [
  {
    tokenName: "BRRR",
    description:
      "BRRR is PRINT3R's Liquidity Provider (LP) token. Upon minting, it is auto-staked, allowing you to earn a 70% share of all platform's revenue as WETH and XP when locked for specific durations during PRINT AIRDROP SZN 1.",
  },
  {
    tokenName: "PRINT",
    description:
      "PRINT is the utility token that when staked allows holders to share 30% of all PRINT3R revenue. 50% of all PRINT has been reserved to be used exclusively for airdrops to our users!",
  },
];

const Tokens = () => {
  return (
    <div className="w-100 p-6 sm:pb-6 sm:px-24 bg-transparent">
      <div className="flex flex-col items-center pb-6">
        <h2 className="text-center text-white text-4xl font-inter font-semibold">
          Tokens Powering <span className="text-p3-orange">PRINT3R</span>
        </h2>
        <p className="text-p3-para font-poppins text-base text-center my-4 xl:max-w-[35%]">
          No premine, no private allocations. The $PRINT and $BRRR tokens are
          designed with long-term community fulfilment in mind.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 max-w-max my-12 items-center justify-center gap-6 relative">
        <img
          className="absolute max-w-[50%] lg:hidden left-[25%] top-[-18%] sm:top-[-30%]"
          src="src/assets/coin-bag.png"
        />
        <TokenCard
          tokenName={tokens[0].tokenName}
          description={tokens[0].description}
        />

        <div className="flex items-center justify-center">
          <img
            className="hidden lg:block max-w-[300px]"
            src="src/assets/coin-img.png"
          />
        </div>
        <img
          className="absolute max-w-[50%] lg:hidden left-[25%] top-[45%]"
          src="src/assets/coin-stack.png"
        />
        <TokenCard
          tokenName={tokens[1].tokenName}
          description={tokens[1].description}
        />
      </div>
      <p className="hidden sm:block text-white underline text-center font-poppins">
        More information on PRINT3R tokenomics can be found in our docs.
      </p>
    </div>
  );
};

export default Tokens;
