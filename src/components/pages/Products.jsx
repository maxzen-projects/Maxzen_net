import React from "react";
import backgroundImg from "../../assets/products.jpg";
import PD_Infographic from "../../assets/PD_Infographic.png";
import HostelHubImg from "../../assets/Connect.jpg";
import PlayStoreBadge from "../../assets/Career.jpg";



export default function Products() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen overflow-hidden mt-[40px]">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={backgroundImg}
            alt="Products Background"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>

        {/* HERO TEXT */}
        <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-10 md:px-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            We build practical digital products that solve real operational problems — not just software projects.
            Our focus areas include automation, cloud platforms, operational intelligence, and workflow optimization designed for fast deployment and measurable ROI.
          </p>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <section className="bg-[#f8f6ef] w-full py-16 px-6 md:px-24">

        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What we do
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-5xl">
            Maxzen develops product-grade solutions combining engineering, usability, and scalability.
            We partner with businesses through the full lifecycle:
            Design → Build → Deploy → Operate → Improve
            Instead of outsourcing, we act as a technology partner — continuously evolving the product as your business grows.
        </p>

      </section>

      {/* ================= PRODUCT DEVELOPMENT SECTION ================= */}
        <section className="w-full bg-white py-20 px-6 md:px-24 flex flex-col md:flex-row items-center gap-16">

        {/* LEFT TEXT SIDE */}
        <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Product Development <br /> On Demand
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            We provide end-to-end, on-demand product development services to help businesses rapidly build, scale, and launch high-quality digital products with flexibility and speed.
            </p>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="md:w-1/2 flex justify-center">
        <img
            src={PD_Infographic}
            alt="Product Development Cycle"
            className="w-[420px] md:w-[500px] object-contain"
        />
        </div>


        </section>

       {/* ================= PRODUCT SHOWCASE SECTION ================= */}
<section className="w-full bg-[#f8f6ef] py-20 px-6 md:px-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

    {/* LEFT IMAGE */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={HostelHubImg}
        alt="Hostel Hub App"
        className="w-[280px] md:w-[360px] lg:w-[420px] drop-shadow-xl"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Hostel Hub App
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
        Hostel Hub is a smart hostel management application designed to simplify
        daily operations, improve communication, and enhance the overall hostel
        experience for students and administrators.
      </p>

      {/* FEATURES */}
      <ul className="space-y-3 text-gray-700 mb-8">
        <li className="flex items-center gap-3 justify-center md:justify-start">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          Student & Admin Dashboards
        </li>
        <li className="flex items-center gap-3 justify-center md:justify-start">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          Room & Attendance Management
        </li>
        <li className="flex items-center gap-3 justify-center md:justify-start">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          Complaints & Notifications System
        </li>
      </ul>

      {/* PLAY STORE BUTTON */}
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <img
          src={PlayStoreBadge}
          alt="Get it on Google Play"
          className="h-14 hover:scale-105 transition duration-300"
        />
      </a>
    </div>

  </div>
</section>


        {/* <section className="w-full bg-[#0B0B18] text-white py-20 px-6 md:px-20">

     
      <div className="max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-6">
          OUR PRODUCTS
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          With a clear focus on transformation across Digital, Automation,
          Infrastructure and Cloud domains, our products enable higher impact
          with quicker go to market potential.
        </p>
      </div>

     
      <div className="mt-16">

       
        <div className="flex justify-between text-sm md:text-lg font-semibold tracking-wider text-gray-300">
          <span>COSMOS</span>
          <span>GARUDA</span>
          <span>DIGITAL FACTORY</span>
        </div>

        
        <div className="relative w-full mt-6">
         
          <div className="border-t border-dotted border-gray-500 w-full"></div>

         
          <div className="absolute top-[-6px] left-0 w-full flex justify-between">
            <span className="w-3 h-3 rounded-full border border-gray-300 bg-[#0B0B18]"></span>
            <span className="w-3 h-3 rounded-full border border-gray-300 bg-[#0B0B18]"></span>
            <span className="w-3 h-3 rounded-full border border-gray-300 bg-[#0B0B18]"></span>
          </div>
        </div>

      </div>
    </section> */}

    <section className="w-full bg-[#1B1D21] py-32 flex flex-col items-center text-center px-6">

        {/* Text */}
        <h2 className="text-3xl md:text-5xl font-semibold text-white leading-[1.3] max-w-4xl">
            Get to know more about us and discover how our expertise,
            <br />
            innovative thinking, and technology-driven approach help businesses 
        </h2>

        {/* Button */}
        <button
            className="mt-10 px-10 py-3 text-white border border-gray-400 rounded-full
            hover:bg-white hover:text-black transition duration-300 text-sm tracking-wide"
        >
            EMAIL US
        </button>

        </section>

        <section className="w-full bg-[#F6F5EF] py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">

            {/* LEFT TEXT BLOCK */}
            <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Where will your career take you?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Build a career that challenges you and helps you grow every day.
Work with a talented team, solve meaningful problems, and create digital solutions that make a real impact.
Grow your skills, expand your opportunities, and shape a future you can be proud of.
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


    </div>
  );
}
