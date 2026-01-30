
import Home from "../Home";
import StatsSection from "../StatsSection";
import StickyHero from "../StickyHero";
import Footer from "../Footer";

export default function Allpa() {
  return (
    <div className="relative overflow-x-hidden bg-[#0b1120]">

      {/* ================= FIXED HERO ================= */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Home />
      </div>

      {/* ================= HERO SPACER ================= */}
      {/* MUST MATCH hero height */}
      <div className="h-screen" />

      {/* ================= PAGE CONTENT ================= */}
      <main className="relative z-10 bg-[#0b1120]">
        <StatsSection />
        <StickyHero />
        <Footer />  
      </main>

    </div>
  );
}
