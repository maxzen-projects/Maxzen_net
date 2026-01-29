import React from "react";
import telecomImg from "../../assets/Telecom.jpg";

export default function Telecom() {
  return (
    <div>  {/* <-- wrapper required for multiple sections */}

      {/* ================= TELECOM MAIN SECTION ================= */}
      <section className="w-full bg-white text-[#1A1A1A] py-20 px-10 md:px-24">
        <div className="flex flex-col md:flex-row items-start gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl mt-[50px]">

            <p className="text-sm tracking-widest text-blue-600 mb-3">
              OVERVIEW
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Telecom
            </h2>

            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              With latent and proven potential to help improve customer satisfaction,
              reduce customer service costs, anticipate, predict and prevent outages
              and sustain network quality in the orbit of 5G and next gen technologies,
              emerging technologies and AI are increasingly becoming an essential in
              the telecom vertical.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              EM has core competencies to devise and deploy complex AI algorithms
              derived from ML to predict future results, enhance operational
              efficiencies utilizing the potential of data-driven facts and insights
              which help in decision making and reduce the problems with hardware,
              cell towers, and power lines.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              Our products and solutions make it easier for telecommunication
              companies to automate customer services and provide a personalized
              experience to the customers.
            </p>

          </div>

          {/* RIGHT CONTENT (IMAGE) */}
          <div className="flex-1 mt-[50px]">
            <img
              src={telecomImg}
              alt="Telecom"
              className="w-full h-auto rounded-lg object-cover shadow-md"
            />
          </div>

        </div>
      </section>

      {/* ================= CAREER SECTION ================= */}
      <section className="w-full bg-[#F5F4EE] py-20 px-10 md:px-24 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT SIDE CONTENT */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1A1A1A]">
              Where will your career take you?
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              At Maxzen Minds, we believe in expanding your frontiers intellectually 
              and geographically. Achieve the highest and go the farthest is the mantra. 
              Join us and explore a whole new world of opportunities across continents.
            </p>
          </div>

          {/* RIGHT SIDE BUTTON */}
          <div>
            <button className="bg-white text-[#1A1A1A] px-12 py-4 rounded-full text-sm font-medium shadow hover:shadow-lg hover:bg-gray-100 transition">
              APPLY TO FIND
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
