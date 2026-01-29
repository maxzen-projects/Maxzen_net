import React from "react";
import pattern from "../assets/lines.svg";

// Replace old image with your Unsplash hero image
import aboutHero from "../assets/about.jpg";

import { FaLightbulb, FaBrain, FaBullhorn } from "react-icons/fa";
import Timeline from "./Timeline";
import DevelopmentProcess from "./DevelopmentProcess";
import TeamCards from "./TeamCards";
import WheelSection from "./WheelSection";
import StackedCards from "./StackedCards";

const About = () => {
  const steps = [
    {
      id: 1,
      icon: <FaLightbulb className="text-blue-600 text-4xl" />,
      title: "Define Requirements",
      desc: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur.",
    },
    {
      id: 2,
      icon: <FaBrain className="text-blue-600 text-4xl" />,
      title: "Design & Prototyping",
      desc: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur.",
    },
    {
      id: 3,
      icon: <FaBullhorn className="text-blue-600 text-4xl" />,
      title: "Final Solution",
      desc: "In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative h-[500px] w-full overflow-hidden -mt-[100px]">
        
        {/* Background Image */}
        <img
          src={aboutHero}
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>

        {/* Pattern Overlay */}
        <img
          src={pattern}
          alt="Pattern Overlay"
          className="absolute bottom-0 right-0 w-[50%] opacity-30 pointer-events-none"
        />

        {/* Text Content Positioned at Bottom Left */}
        <div className="absolute bottom-10 left-10 lg:left-20 text-white z-20 max-w-4xl">
          <h1 className="text-4xl lg:text-6xl font-semibold mb-2 tracking-wide">
            About us
          </h1>

          <p className="text-base lg:text-lg text-gray-200 leading-relaxed max-w-3xl">
            Maxzen delivers smart, scalable digital and AI-driven solutions that help to accelerate transformation and achieve sustainable growth.
            </p>
        </div>
      </section>

      {/* ---------------- ABOUT CONTENT ---------------- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <img
            src={aboutHero}
            alt="About Illustration"
            className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              We Are <span className="text-blue-600">Maxzen Technologies</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              At Maxzen, we believe innovation begins with collaboration. 
              We help businesses leverage cutting-edge technology to create 
              smarter, scalable, and secure digital solutions. Our team thrives 
              on solving complex challenges with creativity, precision, and excellence.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With years of expertise in software, cloud computing, and data 
              security, we transform ideas into digital success stories.
            </p>

            <a
              href="/contact"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- TIMELINE SECTION ---------------- */}
      <div id="timeline">
        <Timeline />
      </div>

      {/* ---------------- DEVELOPMENT PROCESS SECTION ---------------- */}
      <div id="development" className="mt-10">
        <DevelopmentProcess />
        <TeamCards />
      </div>
    {/* <WheelSection /> */}
    <StackedCards />
    </div>
  );
};

export default About;
