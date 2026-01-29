import React from "react";

import icon1 from "../assets/icons/icon-1.png";
import icon2 from "../assets/icons/icon-2.png";
import icon3 from "../assets/icons/icon-3.png";

const steps = [
  {
    id: 1,
    icon: icon1,
    title: "Define Requirements",
    desc: "We collaborate closely with stakeholders to understand business objectives, analyze challenges, and clearly define functional and technical requirements that ensure successful project outcomes.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Design & Prototyping",
    desc: "We design user-centric interfaces and interactive prototypes to validate ideas early and reduce development risks..",
  },
  {
    id: 3,
    icon: icon3,
    title: "Final Solution",
    desc: "We deliver a secure, scalable, and fully optimized solution that meets business objectives, integrates seamlessly with existing systems, and is ready for company deployment.",
  },
];

const DevelopmentProcess = () => {
  return (
    <section className="relative bg-[#ffffff] py-28 overflow-hidden">
      {/* Background pattern (very light like reference) */}
      <div className="absolute inset-0 bg-[url('https://gramentheme.com/html/wotech/assets/img/pattern-bg.png')] opacity-10 bg-cover bg-center pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Label */}
        <p className="text-blue-600 uppercase text-sm tracking-widest font-semibold mb-2">
          Working Process
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20">
          Our Development Process
        </h2>

        {/* Curved dotted line (perfect matching version) */}
        <svg
          className="hidden md:block absolute top-[200px] left-1/2 -translate-x-1/2 w-[88%] z-0"
          viewBox="0 0 1200 200"
          fill="none"
        >
          <path
            d="
              M50,120
              C350,40 850,40 1150,120
            "
            stroke="#cdd6e8"
            strokeWidth="3"
            strokeDasharray="10 14"
            strokeLinecap="round"
          />
        </svg>


        {/* Process Steps */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-20 md:gap-0 px-4 md:px-10 z-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center max-w-xs group"
            >
              {/* Icon Circle */}
              <div
                className="
                relative flex items-center justify-center 
                w-32 h-32 bg-white rounded-full 
                shadow-[0_10px_40px_rgba(0,0,0,0.07)]
                border border-gray-200 mb-6
                transition-all duration-300 group-hover:scale-[1.08] group-hover:shadow-[0_15px_45px_rgba(0,0,0,0.12)]
                "
              >
                <img src={step.icon} alt="icon" className="w-14" />

                {/* Step Number Bubble */}
                <span
                  className="
                  absolute -top-3 -right-3 
                  bg-white border border-blue-200 text-blue-600 
                  w-8 h-8 text-sm font-semibold 
                  flex items-center justify-center 
                  rounded-full shadow-md
                  "
                >
                  {step.id}
                </span>
              </div>

              {/* Text Section */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
