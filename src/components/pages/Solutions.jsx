import React from "react";
import solutionsBg from "../../assets/solution.png";

export default function Solutions() {
  return (
    <>
      {/* ======= HERO BANNER SECTION ======= */}
      <div className="relative w-full h-screen overflow-hidden mt-[10px]">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={solutionsBg}
            alt="Solutions Background"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-end h-full pb-32 px-10 md:px-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Solutions
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
          Our solutions are designed to solve real business challenges through smart technology and innovative thinking. We deliver scalable, reliable, and high-performing digital solutions tailored to your needs.
          </p>

          {/* Scroll Icon */}
          <div className="mt-20 flex justify-center">
            <div className="w-5 h-8 border-2 border-white rounded-full flex items-start justify-center relative overflow-hidden">
              <div className="scroll-bar w-[2px] h-3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ======= CAREER CTA SECTION ======= */}
      <section className="w-full bg-[#F6F5EF] py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">

          {/* LEFT TEXT BLOCK */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Where will your career take you?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
             Your career is a journey of growth and opportunity. Build meaningful solutions, expand your skills, and shape a future driven by innovation.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div className="mt-10 md:mt-0">
            <button
              className="px-10 py-4 rounded-full bg-white shadow-sm text-gray-700 
              font-medium tracking-wide border border-gray-200 hover:shadow-md 
              transition duration-300"
            >
              APPLY TO FIND
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
