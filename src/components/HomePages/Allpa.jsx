// import React from 'react'
// import Home from '../Home'
// import AboutUs from '../AboutUs'
// import StatsSection from '../StatsSection'
// import StickyHero from '../StickyHero'

// function Allpa() {
//   return (
//     <div>
//         <Home />
//         <StatsSection />
       
//         {/* <AboutUs /> */}
//         <StickyHero/>

//     </div>
//   )
// }

// export default Allpa



// import Home from "../Home";
// import StatsSection from "../StatsSection";
// import StickyHero from "../StickyHero";
// import Footer from "../Footer";

// export default function Allpa() {
//   return (
//     <div className="relative">

//       {/* FIXED HERO */}
//       <Home />

//       {/* SCROLL CONTROLLER (SPACER) */}
//       <div className="relative h-[30vh]">
//         {/* empty spacer – controls how long hero stays */}
//       </div>

//       {/* OVERLAY CONTENT */}
//       <div className="relative z-0 bg-[#0b1120] mt-[100vh]">

//         <StatsSection />

//         <StickyHero />
//         <Footer />

//       </div>

//     </div>
//   );
// }


// import Home from "../Home";
// import StatsSection from "../StatsSection";
// import StickyHero from "../StickyHero";
// import Footer from "../Footer";

// export default function Allpa() {
//   return (
//     <div className="relative overflow-x-hidden">

//       {/* ================= FIXED HERO ================= */}
//       <Home />

//       {/* ================= SCROLL CONTROLLER ================= */}
//       {/* Controls how long hero stays fixed */}
//       <div className="h-[140vh]" />

//       {/* ================= OVERLAY SECTIONS ================= */}
//       {/* ONLY sections that should overlay hero go here */}
//       <div className="relative z-10 bg-[#0b1120] -mt-[60vh]">
//         <StatsSection />
//         <StickyHero />

//         <Footer />
//       </div>

//       {/* ================= NORMAL FLOW ================= */}
//       {/* Hero is released here */}
      
      
//     </div>
//   );
// }
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
