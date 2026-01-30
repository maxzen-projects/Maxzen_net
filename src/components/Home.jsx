import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaShieldAlt, FaCode, FaNetworkWired } from "react-icons/fa";
import StatsSection from "./StatsSection";

export default function HeroSection() {

  const [index, setIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const videoSets = [
    "/Frontpage.mp4",
    "/automation.mp4",
    // "/Ai.mp4",
    "/design.mp4"
  ];

  const services = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "Cyber Security",
      desc: "Protect your business from evolving cyber threats with advanced security solutions, risk assessments, penetration testing, and continuous monitoring to ensure data integrity and compliance..",
    },
    {
      icon: <FaCode size={40} />,
      title: "Web Development",
      desc: "Build high-performance, scalable, and user-centric web applications using modern technologies that enhance digital presence and deliver seamless user experiences..",
    },
    {
      icon: <FaNetworkWired size={40} />,
      title: "IT Management",
      desc: "Streamline your IT operations with proactive infrastructure management, cloud solutions, and expert support to improve efficiency, reliability, and business continuity.",
    },
  ];

  return (
    <div className="overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden bg-black">

        {/* FIXED VIDEO */}
        <video
          key={index}
          src={videoSets[index]}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* COLORED SHAPE */}
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 opacity-80 rotate-45 translate-x-20 translate-y-20 z-10"></div>

        {/* HERO CONTENT */}
        <div className="relative z-20 max-w-6xl px-6 md:px-12 flex h-full items-center">
          <div className="max-w-2xl">
            <p className="text-blue-400 uppercase tracking-[4px] font-semibold mb-4">
              Best IT Solution Provider
            </p>

            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Excellent IT Services <br /> for Your Success
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              We denounce with righteous indignation and dislike men who are so beguiled and demoralized.
            </p>

            {/* CLIENT IMAGES */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/1.jpg" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/2.jpg" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/3.jpg" />
                <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/4.jpg" />
              </div>
              <span className="text-gray-300 text-sm">Satisfied Clients</span>
            </div>
          </div>
        </div>

        {/* SOCIAL SIDE ICONS */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-20">
          <a className="w-10 h-10 flex items-center justify-center bg-white hover:bg-blue-600 transition rounded"><FaFacebookF /></a>
          <a className="w-10 h-10 flex items-center justify-center bg-white hover:bg-blue-600 transition rounded"><FaTwitter /></a>
          <a className="w-10 h-10 flex items-center justify-center bg-white hover:bg-blue-600 transition rounded"><FaLinkedinIn /></a>
          <a className="w-10 h-10 flex items-center justify-center bg-white hover:bg-blue-600 transition rounded"><FaYoutube /></a>

          <p className="text-sm text-gray-300 mt-2 [writing-mode:vertical-rl] rotate-180">
            FOLLOW US
          </p>
        </div>

        {/* DOTS SWITCHER */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {videoSets.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-8 h-1 rounded-full transition ${
                index === i ? "bg-blue-600 scale-125" : "bg-gray-300/70"
              }`}
            />
          ))}
        </div>

      </section>

      {/* SERVICES */}
      <section className="bg-[#0b1120] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-[#0d1835] text-white p-8 rounded-md shadow-lg cursor-pointer overflow-hidden transition"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transition ${
                  hoveredIndex === idx ? "translate-x-0" : "translate-x-full"
                }`}
              ></div>

              <div className="relative z-10">
                <div className={`${hoveredIndex === idx ? "text-white" : "text-blue-400"} mb-6`}>
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>

              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dotted.png')] opacity-10"></div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
                                     