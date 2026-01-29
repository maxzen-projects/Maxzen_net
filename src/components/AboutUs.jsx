import React from "react";
import { FaPhoneAlt, FaCheckCircle, FaTrophy } from "react-icons/fa";
import mainImg from "../assets/choose-1.png"; 
import smallImg from "../assets/choose-1.png"; // replace with your small image
import StatsSection from "./StatsSection";
import StickyHero from "./StickyHero";

export default function AboutUs() {
  return (
    <section className="relative bg-[#0d1b2a] text-white py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* ---------- LEFT SIDE ---------- */}
        <div className="relative flex justify-center md:justify-start">
          {/* Dotted Pattern */}
          <div className="absolute top-10 left-0 w-16 h-40 border-l border-dotted border-gray-500 hidden md:block"></div>

          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden w-[380px] h-[450px]">
            <img
              src={mainImg}
              alt="Business Team"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Small Overlay Image */}
          <div className="absolute bottom-5 right-[200px] w-[220px] h-[230px] rounded-xl overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src={smallImg}
              alt="Professional Engineer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Vertical Award Card */}
          <div className="absolute h-[70%] top-1/2 -left-20 -translate-y-1/2 bg-blue-600 text-center rounded-lg py-10 px-5 shadow-lg rotate-0">
            <div className="text-4xl font-bold -mt-6 rotate-[-90deg] mb-2">10+</div>
            <p className="text-lg leading-tight rotate-[-90deg] origin-top-left absolute left-[20%] top-[70%] w-[150px] whitespace-normal">
  World Best Business Award Got
</p>

            <div className="mt-44 text-5xl text-white rotate-[-90deg]">
              <FaTrophy />
            </div>
          </div>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="space-y-6">
          {/* About Us Label */}
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            <p className="uppercase text-blue-400 tracking-wide font-semibold">
              About Us
            </p>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            We Deliver <br />
            Smart Digital & AI-Driven <br />
            <span className="text-blue-400">Business Solutions</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">
            we help organizations accelerate growth through innovative software, AI-powered platforms, and scalable digital solutions. Our expertise spans for the applications, cloud systems, data intelligence, and custom product engineering—designed to solve real business challenges and drive measurable results.
          </p>

          {/* Features List */}
          <div className="grid sm:grid-cols-2 gap-3 pt-4">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-400 text-lg" />
              <p>Technology Consultancy</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-400 text-lg" />
              <p>300+ Successful Projects done</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-400 text-lg" />
              <p>We Provide best services</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-400 text-lg" />
              <p>Professional Engineers Provide</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-400 text-lg" />
              <p>Maintenance And Support</p>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-blue-400 text-lg" />
              <p>Requirements Gathering</p>
            </div>
          </div>

          {/* Button & Call Section */}
          <div className="flex flex-wrap items-center gap-6 pt-8">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-semibold transition">
              ABOUT US →
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-2xl">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call Us Now</p>
                <h3 className="font-bold text-lg">+208-555-0112</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <StatsSection /> */}
      {/* <StickyHero/> */}
    </section>

  );
}
