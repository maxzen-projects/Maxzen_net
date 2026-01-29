import React from "react";
import heroImg from "../assets/Connect.jpg";

const Connect = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full min-h-screen -mt-[150px]">
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Connect Collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content - bottom LEFT */}
        <div className="relative z-10 flex flex-col items-start justify-end min-h-screen px-6 md:px-20 pb-20 text-left text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Connect. Collaborate. Conquer.
          </h1>

          <p className="text-lg md:text-xl mt-4 opacity-90 max-w-lg">
            Let’s make great new things happen, together.
          </p>

          <button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold shadow hover:bg-gray-200 transition">
            Connect
          </button>
        </div>
      </div>

      {/* ================= CONTACT US SECTION ================= */}
      <section className="w-full bg-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-widest text-gray-700 mb-6">
            CONTACT US
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Reach us at{" "}
            <a
              href="mailto:info@maxzen.net"
              className="text-blue-600 underline hover:text-blue-800"
            >
              info@maxzen.net
            </a>{" "}
            with your requirements and we will be happy to help you at the earliest!
          </p>
        </div>
      </section>

      {/* ================= CAREER CTA SECTION ================= */}
      <section className="w-full bg-[#F5F4EE] py-20 px-10 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT TEXT */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1A1A1A]">
              Where will your career take you?
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              At Maxzen, we believe in expanding your frontiers 
              intellectually and geographically. Achieve the highest and go 
              the farthest is the mantra. Join us and explore a whole new 
              world of opportunities across continents.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <button className="bg-white text-[#1A1A1A] px-12 py-4 rounded-full text-sm font-medium shadow hover:shadow-lg hover:bg-gray-100 transition">
            APPLY TO FIND
          </button>

        </div>
      </section> 

      {/* ---------------- GOOGLE MAP SECTION ---------------- */}
      <section className="w-full mt-10">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.895436576928!2d78.3902119!3d17.4892568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91004d41cd2b%3A0xef841891a7d0ef28!2sMaxzen%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
        />
      </section>

      
    </>
  );
};

export default Connect;
