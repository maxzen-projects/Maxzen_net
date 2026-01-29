import React from "react";
import mediaImg from "../../assets/Media.jpg"; // update filename if needed

export default function Media() {
  return (
    <div>

      {/* ================= MEDIA MAIN SECTION ================= */}
      <section className="w-full bg-white text-[#1A1A1A] py-20 px-10 md:px-24 mt-[50px]">
        <div className="flex flex-col md:flex-row items-start gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            <p className="text-sm tracking-widest text-blue-600 mb-3">
              OVERVIEW
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Media
            </h2>

            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              AI and ML have been a key tool for media platforms and OTT platforms
              defining and driving user engagement. These technologies offer media
              companies the ability to streamline any content-related workflows,
              automating processes, FR/image recognition, improve decision-making,
              and most importantly, personalizing the customer experience.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              Filtering fake news, chatbots, fact-checking applications and profiling
              user preferences have become increasingly relevant in recent years and
              also critical to ensuring the best possible experience for subscribers.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              EM has earmarked Media as a key vertical for driving digital
              transformation, digital marketing, focusing on end user experience
              and content delivery paradigm; packaging, personalization, promotion,
              real-time transmission and more.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1">
            <img
              src={mediaImg}
              alt="Media"
              className="w-full h-[380px] rounded-lg object-cover shadow-md"
            />
          </div>

        </div>
      </section>

      {/* ================= COMMON CAREER SECTION ================= */}
      <section className="w-full bg-[#F5F4EE] py-20 px-10 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT TEXT */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-[#1A1A1A]">
              Where will your career take you?
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              At Maxzen Minds, we believe in expanding your frontiers intellectually
              and geographically. Achieve the highest and go the farthest is the mantra.
              Join us and explore a whole new world of opportunities across continents.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <button className="bg-white text-[#1A1A1A] px-12 py-4 rounded-full text-sm font-medium shadow hover:shadow-lg hover:bg-gray-100 transition">
            APPLY TO FIND
          </button>

        </div>
      </section>

    </div>
  );
}
