import React from "react";
import heroImg from "../assets/Career.jpg";

export default function Career() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Background Image */}
        <img
          src={heroImg}
          alt="Careers"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col justify-end h-full pb-24 px-8 md:px-20">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Careers to shape a new you!
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
            Let’s push the boundaries of ability and geography and forge new trails.
          </p>
        </div>
      </section>


      {/* ================= OPPORTUNITIES SECTION ================= */}
      <section className="w-full bg-[#f7f7f7] py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Opportunities
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            At Maxzen, we believe that people are the driving force behind every breakthrough.
            Our culture thrives on collaboration, ownership, and innovation—empowering teams to
            co-create impactful solutions for businesses across the globe.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We encourage our people not only to excel in their roles, but to grow as confident,
            future-ready professionals. At Maxzen, you’re inspired to think differently, innovate
            boldly, and bring your authentic self to every challenge.
          </p>

          <button className="mt-4 px-10 py-4 bg-black text-white rounded-full text-lg font-semibold shadow-md hover:bg-gray-800 transition">
            Click here to explore open positions
          </button>

        </div>
      </section>

    {/* ================= POLICIES SECTION ================= */}
        <section className="w-full bg-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Policies
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Maxzen is a people-first and inclusive organization that values diversity,
            transparency, and integrity in everything we do. Our culture is built on respect,
            collaboration, and a commitment to empowering individuals to grow both personally 
            and professionally. We strive to maintain an environment where every team member 
            feels supported, valued, and heard.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
            Our workplace policies are designed to uphold fairness and equal opportunity across 
            the organization—including equal hiring and pay practices, structured career 
            development programs, employee engagement initiatives, and comprehensive health 
            and wellness benefits. Maxzen also follows strict workplace safety and conduct 
            guidelines, including the POSH Policy (Prevention of Sexual Harassment), 
            flexible work support systems, and parental benefit policies aligned with 
            Indian standards to ensure a trusted, inclusive, and growth-focused environment 
            for all.
            </p>

        </div>
        </section>


{/* ================= LEARNING & DEVELOPMENT SECTION ================= */}
        <section className="w-full bg-[#1e1e1e] text-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

            {/* TITLE */}
            <h2 className="text-4xl font-bold mb-6">
            Learning and Development
            </h2>

            {/* DESCRIPTION */}
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At Maxzen , continuous learning is at the core of our culture. 
            We believe in enabling our people to stay ahead in a rapidly evolving 
            digital world. Our learning ecosystem includes hands-on training, 
            certifications, mentorship programs, and opportunities to collaborate 
            with some of the best minds across industries.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-10">
            Through structured skilling programs, curated learning paths, 
            and regular knowledge-sharing sessions, we empower individuals 
            to grow confidently while contributing to cutting-edge solutions. 
            Our goal is to nurture a future-ready workforce that thrives on curiosity, 
            creativity, and innovation.
            </p>

            {/* KEY ASPECTS */}
            <h3 className="text-xl font-semibold tracking-widest text-gray-300 mb-6">
            KEY ASPECTS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT LIST */}
            <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-start">• Internal Upskilling Programs</li>
                <li className="flex items-start">• Weekly Tech Sessions & Demo Days</li>
                <li className="flex items-start">• Knowledge Sharing & Brown-Bag Meetups</li>
                <li className="flex items-start">• Access to Tech Blogs & Research Notes</li>
                <li className="flex items-start">• Innovation Brainstorming Circles</li>
                <li className="flex items-start">• Learning Awards & Recognitions</li>
                <li className="flex items-start">• Cross-team Collaboration Forums</li>
            </ul>

            {/* RIGHT LIST */}
            <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-start">• AI-enabled Skill Enhancement Tools</li>
                <li className="flex items-start">• Leadership & Communication Workshops</li>
                <li className="flex items-start">• External Courses (Udemy, Coursera, etc.)</li>
                <li className="flex items-start">• Professional Certification Support</li>
                <li className="flex items-start">• Workplace Culture & Sensitivity Training</li>
                <li className="flex items-start">• Productivity & Email Etiquette Training</li>
            </ul>

            </div>

        </div>
        </section>

        {/* ================= COMMUNITIES SECTION ================= */}
        <section className="w-full bg-[#f7f7f7] py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">

            {/* Title */}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Communities
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Maxzen , our communities play a vital role in fostering collaboration, 
            learning, and innovation. These groups bring together people across teams 
            and technologies—enabling knowledge exchange, peer mentoring, and open 
            discussions that strengthen both our technical culture and our collective growth. 
            Our communities also act as powerful platforms for leadership development, 
            support, and social responsibility within the organization.
            </p>

            {/* Bullet List */}
            <ul className="space-y-4 text-gray-700 text-lg list-disc pl-6">
            <li>Maxzen Knowledge Hub & Collaboration Portal</li>
            <li>Agile, Cloud, and DevOps Best-Practice Circles</li>
            <li>Process Improvement & Support Guilds</li>
            <li>Cybersecurity Awareness & Information Safety Forum</li>
            <li>Mentorship Communities connecting seniors with new talent</li>
            <li>Help & Support Community – “Maxzen Care Circle”</li>
            </ul>

        </div>
        </section>

        {/* ================= CAREER JOURNEY SECTION ================= */}
<section className="w-full bg-[#f7f6ef] py-20 px-6 md:px-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">

    {/* LEFT CONTENT */}
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Where will your career take you?
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed">
        At Maxzen , we believe in expanding your horizons—technically, 
        professionally, and globally. Here, you’ll work with cutting-edge 
        technologies, collaborate with talented teams, and build solutions 
        that make a real impact.  
        <br /><br />
        Whether you're aiming to specialize deeply or explore diverse roles, 
        Maxzen opens doors to a world of growth opportunities shaped around 
        your passion and potential.
      </p>
    </div>

    {/* RIGHT SIDE BUTTON */}
    <div className="mt-10 md:mt-0">
      <button className="px-10 py-4 bg-white text-gray-900 border border-gray-300 rounded-full shadow-md text-lg font-semibold hover:bg-gray-100 transition">
        APPLY TO FIND
      </button>
    </div>

  </div>
</section>




    </>
  );
}
