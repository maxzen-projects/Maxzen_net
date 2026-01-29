import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";


import ScrollToTop from "./components/ScrollToTop";


import Header from "./components/Header";
import About from "./components/About";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

// WHAT WE DO
import Products from "./components/pages/Products";
import Solutions from "./components/pages/Solutions";
import Services from "./components/pages/Services";

// WHO WE SERVE
import Telecom from "./components/pages/Telecom";
import Healthcare from "./components/pages/Healthcare";
import Bfsi from "./components/pages/Bfsi";
import Pharma from "./components/pages/Pharma";
import Logistics from "./components/pages/Logistics";
import Media from "./components/pages/Media";
import Education from "./components/pages/Education";

// WHY US
import WhyUs from "./components/WhyUs";

// Social Good
import SocialGood from "./components/Socialgood";

// Career
import Career from "./components/Career";


// ✅ CONNECT PAGE
import Connect from "./components/Connect";

// Policies
import PrivacyPolicy from "./components/Section/PrivacyPolicy";

import StatsSection from "./components/StatsSection";
import Allpa from "./components/HomePages/Allpa";
import TeamCards from "./components/TeamCards";
import Blog from "./components/pages/Blogs";
import Blogs from "./components/pages/Blogs";
import WheelSection from "./components/WheelSection";
import ITConsultant from "./components/ITConsultant";
import FullStackDevelopment from "./components/FullStackDevelopment";
import AppDevelopment from "./components/AppDevelopment";
import CyberSecurity from "./components/CyberSecurity"; 
import DesignEngineering from "./components/DesignEngineering";
import IntelligenceEngineering from "./components/IntelligenceEngineering";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <ScrollToTop />

      <main className="">
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Allpa />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/StatSection" element={<StatsSection/>} />
          <Route path="/WheelSection" element={<WheelSection />} />
          <Route path="/TeamCards" element={<TeamCards />} />
          <Route path="/resources/blogs" element={<Blogs />} />
          

          {/* WHAT WE DO */}
          <Route path="/what-we-do/products" element={<Products />} />
          <Route path="/what-we-do/solutions" element={<Solutions />} />
          <Route path="/what-we-do/services" element={<Services />} />
          <Route path="/ITConsultant" element={<ITConsultant />} />
          <Route path="/FullStackDevelopment" element={<FullStackDevelopment />} />
          <Route path="/app-development" element={<AppDevelopment />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/design-engineering" element={<DesignEngineering />} />
          <Route path="/intelligence-engineering" element={<IntelligenceEngineering />} />


          {/* WHO WE SERVE */}
          <Route path="/who-we-serve/telecom" element={<Telecom />} />
          <Route path="/who-we-serve/healthcare" element={<Healthcare />} />
          <Route path="/who-we-serve/bfsi" element={<Bfsi />} />
          <Route path="/who-we-serve/pharma" element={<Pharma />} />
          <Route path="/who-we-serve/logistics" element={<Logistics />} />
          <Route path="/who-we-serve/media" element={<Media />} />
          <Route path="/who-we-serve/education" element={<Education />} />

          {/* WHY US */}
          <Route path="/why-us" element={<WhyUs />} />

          {/* SOCIAL GOOD */}
          <Route path="/social-good" element={<SocialGood />} />

          {/* Careers */}
          <Route path="/career" element={<Career />} />

          {/* ✅ CONNECT PAGE */}
          <Route path="/connect" element={<Connect />} />

          {/* ✅ Privacy Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Routes>
      </main>

      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
