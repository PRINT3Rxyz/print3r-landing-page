import StatCard from "./StatCard";

const HeroSwiper = () => {
  return (
    <div className="lg:hidden my-7 flex flex-row gap-12">
      <StatCard
        title="Total Trading Volume"
        value="TBD"
        icon="src/assets/trading-icon.png"
      />

      <StatCard
        title="Total Open Interest"
        value="TBD"
        icon="src/assets/open-interest-icon.png"
      />

      <StatCard
        title="Total Revenue Shared"
        value="TBD"
        icon="src/assets/revenue-share-icon.png"
      />
    </div>
  );
};

export default HeroSwiper;
