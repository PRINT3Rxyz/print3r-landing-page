import "./App.css";
import Airdrop from "./components/airdrop/Airdrop.tsx";
import Differences from "./components/differences/Differences.tsx";
import Features from "./components/features/Features.tsx";
import Footer from "./components/footer/Footer.tsx";
import Hero from "./components/hero/Hero.tsx";
import Navbar from "./components/nav/Navbar.tsx";
import Pricing from "./components/supported-assets/Assets.tsx";
import Tokens from "./components/tokenomics/Tokens.tsx";

function App() {
  return (
    <div className="bg-bg-full bg-cover min-w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Pricing />
      <Features />
      <Differences />
      <Tokens />
      <Airdrop />
      <Footer />
    </div>
  );
}

export default App;
