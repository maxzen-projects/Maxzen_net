import React from "react";
import heroBg from "../assets/about.jpg";

import {
  LightBulbIcon,
  CubeIcon,
  WrenchScrewdriverIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export default function ITConsultant() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen overflow-hidden mt-[5px]">
        <img
          src={heroBg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-24 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Outcome-Based Product Delivery
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            We partner with enterprises to build, scale and optimise products
            using a structured, outcome-driven delivery model.
          </p>
        </div>
      </div>

      {/* ================= TEXT + POINTS ================= */}
      <section className="bg-white py-20 px-6 md:px-24">

  {/* TITLE */}
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
    Product Engineering
  </h2>

  {/* INTRO */}
  <p className="text-gray-700 text-lg max-w-5xl mb-10 leading-relaxed">
    Enterprise Minds is pioneering <strong>Agentic Business Automation</strong> to help
    enterprises safely adopt AI with autonomous, process-driven agents that deliver
    <strong> 10x+ productivity, cost savings, and revenue growth</strong>, leveraging
    expertise across SAP, Data Engineering, Design, Application, and Intelligence Engineering.
  </p>

  {/* ENTERPRISE PROBLEM STATEMENT */}
  <p className="text-gray-700 text-lg max-w-5xl mb-14 leading-relaxed">
    Enterprises urgently need to adopt AI — but not before addressing three
    critical concerns that determine long-term success, trust, and ROI.
  </p>

  {/* CHALLENGES GRID */}
  <div className="grid md:grid-cols-3 gap-10 max-w-7xl">

    {/* 1 */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        1. Security, Privacy & Governance
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The autonomous nature of agentic AI dramatically increases the attack
        surface and introduces new categories of security risks.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li>• Data privacy risks</li>
        <li>• Novel attack vectors</li>
        <li>• Traceability & accountability challenges</li>
      </ul>
    </div>

    {/* 2 */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        2. Integration with Legacy Systems
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        For large enterprises, integrating agentic AI with decades-old systems
        is a significant engineering challenge.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li>• Technical complexity</li>
        <li>• Siloed data infrastructure</li>
        <li>• Limited interoperability</li>
      </ul>
    </div>

    {/* 3 */}
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        3. Reliability, Control & Ethical Behavior
      </h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Unlike rule-based automation, agentic AI systems must be governed to
        ensure predictability, trust, and ethical outcomes.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li>• Unpredictable actions</li>
        <li>• Bias & unintended outcomes</li>
        <li>• Human-in-the-loop control & oversight</li>
      </ul>
    </div>

  </div>

  {/* CONCLUSION */}
  <p className="text-gray-700 text-lg max-w-5xl mt-14 leading-relaxed">
    It has become imperative for enterprises adopting AI and Automation to
    proactively address these scenarios, establish resolution frameworks,
    and position themselves as <strong>early, successful adopters of Agentic AI</strong>.
  </p>

  {/* CTA */}
  <p className="text-gray-900 text-lg font-medium mt-6">
    Connect with us to audit, explore, engage, and initiate the <strong>NEXT</strong>.
  </p>

</section>

<section className="w-full bg-white py-16 px-6 md:px-24">
  <div className="max-w-4xl mx-auto">

    {/* TITLE */}
    <h2 className="text-3xl font-semibold text-gray-900 mb-16 text-left">
      Get in touch
    </h2>

    {/* FORM */}
    <form className="space-y-8">

      {/* ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <label className="text-gray-700 text-base">Name</label>
        <input
          type="text"
          className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <label className="text-gray-700 text-base">Email</label>
        <input
          type="email"
          className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <label className="text-gray-700 text-base">
          Designation <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="text"
          className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <label className="text-gray-700 text-base">
          Phone <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="tel"
          className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
        <label className="text-gray-700 text-base pt-2">
          How can we help? <span className="text-gray-400">(optional)</span>
        </label>
        <textarea
          rows="5"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <div className="pt-8">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-lg py-3 rounded-md
          hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </div>

      {/* DISCLAIMER */}
      <p className="text-sm text-gray-500 mt-6 max-w-2xl">
        Never share sensitive information (credit card numbers, social security
        numbers, passwords) through this form.
      </p>

      <p className="text-sm text-gray-500">
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="#" className="text-blue-600 underline">Privacy Policy</a> and{" "}
        <a href="#" className="text-blue-600 underline">Terms of Service</a> apply.
      </p>

    </form>
  </div>
</section>

<section className="w-full bg-[#F6F5EF] py-24 px-6 md:px-24">
  <div className="max-w-6xl">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
      Our Product Engineering DNA
    </h2>

    {/* INTRO PARAGRAPH */}
    <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-5xl">
      With over <strong>30+ years of experience</strong> in core software development,
      our core team—including organizational leadership—demonstrates a
      DNA-level affinity to product engineering. Our design thinking approach,
      with a sharp focus on <strong>micro-interactions, micro frontends, and
      microservices</strong>, enables the implementation of cutting-edge
      technologies and frameworks.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-5xl">
      A deeply entrenched innovation and research mindset allows us to partner
      with clients globally to build scalable products through a modular
      development methodology that empowers us to:
    </p>

    {/* THREE PILLARS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* CO-DEVELOPMENT */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Co-Development
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Collaborate at every stage of product development with product owners,
          ensuring alignment, transparency, and faster decision-making.
        </p>
      </div>

      {/* CO-CREATION */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Co-Creation
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Chalk out, plan, and own the delivery of finished products through
          shared ownership and accountability from concept to launch.
        </p>
      </div>

      {/* CO-INNOVATION */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Co-Innovation
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Accelerate innovation by leveraging new-age technologies, modern
          frameworks, and experimental approaches to stay ahead of the curve.
        </p>
      </div>

    </div>
  </div>
</section>





      {/* ================= OUTCOME BASED GRID ================= */}
      <section className="bg-[#1B1D21] py-28 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16">
          Our Outcome-Based Delivery Encompasses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {[
            { title: "Product Ideation", icon: LightBulbIcon },
            { title: "Product Prototyping", icon: CubeIcon },
            { title: "Product Architecture", icon: WrenchScrewdriverIcon },
            { title: "Product Design", icon: PencilSquareIcon },
            { title: "Product Development", icon: RocketLaunchIcon },
          ].map((item, i) => (
            <Card key={i} title={item.title} Icon={item.icon} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card title="Product Migration" Icon={ArrowTrendingUpIcon} />
          <Card title="Product Optimisation" Icon={Cog6ToothIcon} />
          <Card title="Product Support" Icon={LifebuoyIcon} />
        </div>
      </section>

      <section className="w-full bg-[#F6F5EF] py-20 px-6 md:px-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

    {/* LEFT CONTENT */}
    <div className="max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
        Where will your career take you?
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        At Enterprise Minds, we believe in expanding your frontiers intellectually
        and geographically. Achieve the highest and go the farthest is the mantra.
        Join us and explore a whole new world of opportunities across continents.
      </p>
    </div>

    {/* RIGHT BUTTON */}
    <div className="flex-shrink-0">
      <button
        className="px-12 py-4 rounded-full bg-white text-black
        text-sm tracking-widest font-medium
        shadow-sm border border-gray-200
        hover:shadow-md hover:bg-gray-100 transition duration-300"
      >
        APPLY TO FIND
      </button>
    </div>

  </div>
</section>


    </div>
  );
}

function Card({ title, Icon }) {
  return (
    <div className="border border-gray-600 bg-[#2A2D32] py-14 px-6
      flex flex-col items-center justify-center
      hover:black transition duration-300">

      <Icon className="w-12 h-12 text-yellow-400 mb-6" />

      <h3 className="text-white text-lg font-semibold tracking-wide text-center">
        {title}
      </h3>
    </div>
  );
}
