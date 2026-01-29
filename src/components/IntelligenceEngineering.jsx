import React from "react";
import heroBg from "../assets/about.jpg"; // change to your actual hero image

import {
  CircleStackIcon,
  CpuChipIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline";

export default function IntelligenceEngineering() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden mt-[5px]">

        {/* Background Image */}
        <img
          src={heroBg}
          alt="Intelligence Engineering"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-24 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Intelligence Engineering
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-4xl leading-relaxed">
            Data is the new oil and AI is the new electricity. We apply AI to every
            nook and corner of the product life cycle – product discovery,
            product buildout, testing, dev-ops, support, and customer experience.
          </p>
        </div>
      </section>

      {/* ================= DARK CONTENT SECTION ================= */}
      <section className="w-full bg-[#1B1D21] py-28 px-6 md:px-24">

        <div className="max-w-7xl space-y-24">

          {/* ================= DATA PRODUCTS ================= */}
          <div className="max-w-3xl">
            <div className="mb-6">
              <CircleStackIcon className="w-12 h-12 text-yellow-400" />
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">
              Data Products
            </h2>

            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              We help co-build data products with our customers in the areas of
              measurement, recommendation, and prediction. Our experience lies
              in building products at scale with large datasets. We marry data,
              compute, and algorithms to extract significant value for our
              customers.
            </p>
          </div>

          {/* ================= AI PRODUCTS ================= */}
          <div className="max-w-3xl">
            <div className="mb-6">
              <CpuChipIcon className="w-12 h-12 text-yellow-400" />
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">
              AI Products
            </h2>

            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              The future is happening now. Computers can think, analyze, and make
              decisions. We engineer products inspired by the human brain and
              decision-making process. Our solutions comprehend human speech and
              vision to extract patterns and insights that drive better decisions
              and actions.
            </p>
          </div>

          {/* ================= AI STUDIO ================= */}
          <div className="max-w-4xl">
            <div className="mb-6">
              <BeakerIcon className="w-12 h-12 text-yellow-400" />
            </div>

            <h2 className="text-2xl font-semibold text-white mb-4">
              AI Studio
            </h2>

            <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-6">
              Ready, Set, Action! Accelerate innovation and deliver high value in
              a shorter duration. AI Studio is our true value to customers and
              differentiator.
            </p>

            <p className="text-gray-400 leading-relaxed text-base md:text-lg">
              The AI Studio is a high-tech simulation zone designed to increase
              productivity and enable rapid experimentation. It facilitates the
              design and development of an exact replica of your needs and vision
              in a fast, high-quality, and secure manner. With strong security
              controls, the latest AI technologies, and highly acclaimed AI
              professionals, we ensure high ROI by accelerating innovation and
              delivering results faster.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
