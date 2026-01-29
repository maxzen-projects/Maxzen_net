import React from "react";
import socialHero from "../assets/Socialgood.jpg"; // <-- Add your hero image here
import communityImg from "../assets/Community.jpg";


export default function SocialGood() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[90vh] md:h-[100vh] overflow-hidden -mt-[60px]">

        {/* Background Image */}
        <img
          src={socialHero}
          alt="Social Good"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Text */}
        <div className="absolute bottom-20 left-8 md:left-20 text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Reach Out. Volunteer. Transform.
          </h1>

          <p className="text-lg md:text-xl text-gray-200">
            Exploring new ways of connecting people to a better future
          </p>
        </div>

      </section>

      {/* ================= COMMUNITY INVOLVEMENT SECTION ================= */}

        <section className="w-full bg-white text-[#1A1A1A] py-20 px-10 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                Community involvement at Maxzen
            </h2>

            <p className="text-lg leading-relaxed text-gray-600 mb-6">
                At Maxzen, we believe that technology
                becomes meaningful only when it uplifts people and creates real-world
                impact. Our goal is to build a community where learning, collaboration,
                and innovation shape a better tomorrow.
            </p>

            <p className="text-lg leading-relaxed text-gray-600 mb-6">
                We actively contribute to developer ecosystems, design hubs, and
                knowledge-driven tech networks. From workshops and mentoring circles to
                open discussions, we help individuals grow personally and professionally.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
                Our active community groups:
            </h3>

            <ul className="text-lg text-gray-700 leading-relaxed space-y-3 list-disc pl-6">
                <li>
                <strong>Happy2Help</strong> – A volunteer-driven initiative supporting beginners and
                professionals with guidance and practical problem-solving.
                </li>

                <li>
                <strong>UX/UI Experts</strong> – A design-focused group helping creators master user
                experience, visual design, and UI prototyping.
                </li>

                <li>
                <strong>ProgrammersPark</strong> – A collaborative space for coders to learn, solve real
                challenges, and build projects together.
                </li>

                <li>
                <strong>Techboxweb</strong> – A space for full-stack engineers, cloud specialists,
                and IT experts to share best practices and insights.
                </li>

                <li>
                <strong>Logkat</strong> – A productivity-driven community helping individuals grow
                consistently and upgrade their tech skills.
                </li>
            </ul>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div>
            <img
                src={communityImg}
                alt="Community Involvement"
                className="w-full h-[600px] rounded-lg shadow-md object-cover"
            />
            </div>
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
              At Maxzen Minds, we believe in expanding your frontiers 
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

    </div>
  );
}
