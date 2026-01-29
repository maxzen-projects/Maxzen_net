import React from "react";
import educationImg from "../../assets/Education.jpg"; // update filename if needed

export default function Education() {
  return (
    <div>

      {/* ================= EDUCATION MAIN SECTION ================= */}
      <section className="w-full bg-white text-[#1A1A1A] py-20 px-10 md:px-24 mt-[50px]">
        <div className="flex flex-col md:flex-row items-start gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            <p className="text-sm tracking-widest text-blue-600 mb-3">
              OVERVIEW
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Education
            </h2>

            <p className="text-lg leading-relaxed text-gray-600 mb-6">
              AI and ML have been rapidly bridging the technology gap between students 
              and teachers, infusing ethics and transparency in education, refining 
              operations and reshaping policies, allowing remote learning, skill-building 
              and enhancement, and developing quality data and information solutions for 
              the modern education process.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              EM is devising solutions to empower the student community, taking classrooms 
              and learning beyond just virtual, focusing on right-skills-at-the-right-time 
              paradigm, automating interactions and collaborations, learning and assessments, 
              in novel and innovative ways.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1">
            <img
              src={educationImg}
              alt="Education"
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
