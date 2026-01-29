import React from "react";
import whyImg from "../assets/Why.jpg"; // <-- replace with your actual hero image

export default function WhyUs() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[120vh] overflow-hidden -mt-[60px]">

        {/* Background Image */}
        <img
          src={whyImg}
          alt="Why Us"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Text */}
        <div className="absolute bottom-20 left-10 md:left-24 text-white">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">Why MAXZEN</h1>
          <p className="text-lg md:text-xl max-w-xl text-gray-300">
            We believe experiences predict and define outcomes
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="w-full bg-white text-[#1A1A1A] py-20 px-10 md:px-24">
        <div className="max-w-4xl">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Why Maxzen Minds?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            At Maxzen Minds, our purpose is to create transformational value 
            through intelligence, automation and experience. We look beyond 
            conventional approaches and deliver solutions designed to empower 
            organizations to scale, innovate and evolve confidently in a digital-first era.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            From engineering next-gen products to implementing maxzen-grade 
            solutions, our focus remains on measurable outcomes, customer-centric 
            innovation, and delivering exceptional experiences across industries.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            We are more than just a technology partner — we pioneer change, fuel 
            growth and help businesses accelerate their vision with cutting-edge 
            tech, operational intelligence and trusted expertise.
          </p>

        </div>
      </section>

      {/* ================= EXPERIENCES SECTION ================= */}
        <section className="w-full bg-white text-[#1A1A1A] py-20 px-10 md:px-24">
        <div className="flex flex-col md:flex-row items-start gap-16">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">

            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                Experiences
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                At EM, we are all about Experiences.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Projects, successes, laurels, and milestones are all soon forgotten
                and left behind for the archives; but it is the memory of the quality
                of one’s experience that is flagged and bookmarked in the awareness
                of those who strive together towards a common goal.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                This is the paradigm we strive to impart to every stakeholder within 
                our ecosystem, to each and every Customer, Employee, Affiliate, and 
                Societal beneficiary.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
                Our stakeholder testimonials are proof of our constant and unwavering
                efforts to enable the best-in-class experiences.
            </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1">
            <img
                src={require("../assets/Experience.jpg")}
                alt="Experiences"
                className="w-full h-[380px] rounded-lg object-cover shadow-md"
            />
            </div>

        </div>
        </section>

        {/* ================= CULTURE SECTION ================= */}
        <section className="w-full bg-[#1A1A1A] text-white py-20 px-10 md:px-24">

        <h2 className="text-4xl md:text-5xl font-semibold mb-10">
            Culture
        </h2>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
            At Maxzen we encourage and support you to ‘Be Yourself’.  
            We value the diverse and individual self over the conventional and formal,
            hire for Attitude, Aptitude & Skills; invest in personal and professional growth  
            as well as psychological safety.  
            We make careers fit personal life, and not the other way around.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We completely believe that real breakthroughs happen when we are free from 
            others’ expectations and driven by individual passion in a fostering environment 
            that imparts freedom and values responsibility.  
            Fail-fast and succeed next is a mantra that we believe in.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We work as one team and consider providing honest feedback the backbone of 
            highly effective co-creation.  
            As a team and as individuals, we constantly assess our strength, weaknesses,  
            and risks to realign to ensure highest productivity levels.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
            The unspoken drivers of the engineering work culture at Maxzen rest on the firm 
            belief and intent to write high-quality code with code reviews; ensure and maintain 
            respect at the workplace, be on constant automation watch and be fast on iterations.
        </p>

        </section>


       {/* ================= VALUES SECTION ================= */}
        <section className="w-full bg-[#B79425] text-white py-5 px-10 md:px-20">

        <div className="grid grid-cols-1 md:grid-cols-4">

            {/* 01 */}
            <div className="relative px-10 py-10 group transition-all duration-300 hover:-translate-y-2">

            {/* RIGHT DIVIDER */}
            <div className="
                hidden md:block absolute top-0 right-0 h-full w-[1px]
                bg-white/30
            "></div>

            {/* NUMBER */}
            <h2 className="text-7xl font-light text-white/60 mb-5">01</h2>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-4">
                Community involvement
            </h3>

            {/* PARAGRAPH */}
            <p className="text-base leading-relaxed text-white/90">
                We believe in a new improved YOU every day,  
                with at least 2% overall improvement daily.  
                (2% Improvement Every Day; 2% Company Good; 2% Community Good;  
                2% Personal Growth).  
                We don’t hesitate to experiment. We fail fast and grow together.
            </p>
            </div>

            {/* 02 */}
            <div className="relative px-10 py-10 group transition-all duration-300 hover:-translate-y-2">

            {/* RIGHT DIVIDER */}
            <div className="
                hidden md:block absolute top-0 right-0 h-full w-[1px]
                bg-white/30
            "></div>

            <h2 className="text-7xl font-light text-white/60 mb-5">02</h2>

            <h3 className="text-xl font-semibold mb-4">
                Day One Culture
            </h3>

            <p className="text-base leading-relaxed text-white/90">
                We work with a start-up mindset, sleeves rolled up,  
                ready to get hands-on with challenges, and  
                with full ownership of tasks.  
                We encourage brainstorming with like-minded people  
                and continuous learning through Udemy, Skillshare,  
                Kindle and more.
            </p>
            </div>

            {/* 03 */}
            <div className="relative px-10 py-10 group transition-all duration-300 hover:-translate-y-2">

            {/* RIGHT DIVIDER */}
            <div className="
                hidden md:block absolute top-0 right-0 h-full w-[1px]
                bg-white/30
            "></div>

            <h2 className="text-7xl font-light text-white/60 mb-5">03</h2>

            <h3 className="text-xl font-semibold mb-4">
                Open Communication
            </h3>

            <p className="text-base leading-relaxed text-white/90">
                We work in an open, friendly environment  
                and keep our communication short and efficient.  
                We walk the talk, as your happiness is our end goal.
            </p>
            </div>

            {/* 04 */}
            <div className="relative px-10 py-10 group transition-all duration-300 hover:-translate-y-2">

            <h2 className="text-7xl font-light text-white/60 mb-5">04</h2>

            <h3 className="text-xl font-semibold mb-4">
                Mentoring Culture
            </h3>

            <p className="text-base leading-relaxed text-white/90">
                We are all guides, helping individuals grow  
                through formal/informal mentoring.  
                Our work environments encourage engagement,  
                make people feel valued, and foster knowledge-sharing.
            </p>
            </div>

        </div>

        </section>



      {/* ================= CAREER CTA SECTION ================= */}
      <section className="w-full bg-[#F5F4EE] py-20 px-10 md:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT TEXT */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-[#1A1A1A]">
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
