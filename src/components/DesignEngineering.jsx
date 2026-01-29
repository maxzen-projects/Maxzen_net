import React from "react";
import heroBg from "../assets/about.jpg"; // change if needed
import stepsImg from "../assets/Design Eng.svg"; // you will add this

export default function DesignEngineering() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen overflow-hidden mt-[5px]">
        <img
          src={heroBg}
          alt="Design Engineering"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-24 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Design Engineering
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-4xl leading-relaxed">
            A human-centric, insight-driven approach that blends design thinking
            with engineering rigor to arrive at meaningful, scalable solutions.
          </p>
        </div>
      </div>

      {/* ================= DESIGN ENGINEERING CONTENT ================= */}
      <section className="w-full bg-[#F6F5EF] py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-medium text-black mb-10">
            Design Engineering
          </h2>

          {/* PARAGRAPHS */}
          <div className="space-y-6 max-w-6xl text-gray-600 text-base md:text-lg leading-relaxed">

            <p>
              Design Engineering is the art of knowing – after a thorough and
              circumspect evaluation and analysis of a problem scenario – what
              the best solution would be.
            </p>

            <p>
              It is a painstaking and thought-intensive approach that challenges
              status quo, generates new ideas, and connects with the hypothesis
              in a human-centric and empathetic manner. This helps arrive at a
              comprehensive and to-the-point definition of both problem and
              solution scenarios, leading teams to the threshold of the next big
              step – the creation of a prototype or a pilot – that must stand the
              test of viability and relevance in an immediate rapid-result
              context.
            </p>

            <p>
              Deploying it enables teams to perform better UX research,
              prototyping, and usability testing to uncover new ways to meet
              users’ needs. Additionally, it allows access to hard-to-reach
              insights and the application of hands-on methods to discover
              innovative answers.
            </p>

            <p>
              Our Design Engineering paradigm is all about adapting to the
              present and enhancing outcomes in real time, right from the word
              go.
            </p>

          </div>
        </div>
      </section>

      {/* ================= SIX STEPS SECTION ================= */}
      <section className="w-full bg-white py-28 px-6 md:px-24">

        {/* TITLE */}
        <h3 className="text-2xl md:text-3xl font-medium text-center text-black mb-20">
          The six steps of design engineering @ EM
        </h3>

        {/* IMAGE PLACEHOLDER */}
        <div className="max-w-6xl mx-auto flex justify-center">
          {/* Replace src with your actual image */}
          <img
            src={stepsImg}
            alt="Six steps of design engineering"
            className="w-full max-w-5xl object-contain"
          />
        </div>

      </section>

      {/* ================= CAREER CTA ================= */}
      <section className="w-full bg-[#F6F5EF] py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-medium text-black mb-4">
              Where will your career take you?
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              At Enterprise Minds, we believe in expanding your frontiers
              intellectually and geographically. Achieve the highest and go the
              farthest is the mantra. Join us and explore a whole new world of
              opportunities across continents.
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
