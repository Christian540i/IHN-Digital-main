import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StartSection from "./components/StartSection";
import FeaturesChess from "./components/FeaturesChess";
import FeaturesGrid from "./components/FeaturesGrid";
import Guarantees from "./components/Guarantees";
import CtaFooter from "./components/CtaFooter";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="bg-black">
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <Guarantees />
          <CtaFooter />
        </div>
      </div>
    </div>
  );
}
