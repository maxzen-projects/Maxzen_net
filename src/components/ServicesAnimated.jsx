import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import service1 from "../assets/services/App-development.jpeg";
import service2 from "../assets/services/Cloud Computing.jpeg";
import service3 from "../assets/services/Database-security.jpeg";
import service4 from "../assets/services/Digital-Marketing.jpeg";
import service5 from "../assets/services/Webdevelopment.jpeg";

export default function ServicesAnimated() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // --- Animations per card ---
  const anim = (start, mid, end) => ({
    x: useTransform(scrollYProgress, [start, mid, end], ["40vw", "0vw", "-40vw"]),
    opacity: useTransform(scrollYProgress, [start, start + 0.02, mid, end], [0, 1, 1, 0]),
  });

  const cardAnims = [
    anim(0.0, 0.12, 0.25),
    anim(0.22, 0.34, 0.46),
    anim(0.42, 0.54, 0.66),
    anim(0.62, 0.74, 0.86),
    anim(0.82, 0.92, 1.05),
  ];

  const services = [
    {
      title: "Cyber Security",
      subtitle: "Protecting Digital Assets",
      desc: "Complete cyber protection for individuals, startups.",
      img: service1,
    },
    {
      title: "Cloud Solutions",
      subtitle: "Modern Cloud Architecture",
      desc: "Cloud deployment, scaling and monitoring on AWS, Azure & GCP.",
      img: service2,
    },
    {
      title: "AI Automations",
      subtitle: "AI For Your Business",
      desc: "We automate workflows using AI to improve efficiency and accuracy.",
      img: service3,
    },
    {
      title: "Web Development",
      subtitle: "High-Performance Websites",
      desc: "We build powerful, responsive, visually stunning web applications.",
      img: service4,
    },
    {
      title: "Mobile Applications",
      subtitle: "Android & iOS Apps",
      desc: "Native and cross-platform mobile apps for all business workflows.",
      img: service5,
    },
  ];

  return (
    <section ref={scrollRef} className="relative w-full h-[450vh] bg-white px-4 sm:px-10">
      <div className="sticky top-20 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl flex justify-center">

          {services.map((service, i) => (
            <motion.div
              key={i}
              style={cardAnims[i]}
              className="absolute inset-0 flex items-center justify-center"
            >
              <ServiceCard {...service} z={100 - i * 10} />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, subtitle, desc, img, z }) {
  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center 
                 w-full max-w-[90%] md:h-[80vh] gap-6 md:gap-12"
      style={{ zIndex: z }}
    >
      {/* Image */}
      <div className="w-full md:w-[45%] h-[40vh] md:h-[75vh] rounded-2xl overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover md:rotate-[-6deg]"
          draggable={false}
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-[50%] py-6 px-5 md:px-8 text-center md:text-left">
        <p className="text-gray-500 text-sm uppercase tracking-wide">{subtitle}</p>

        <h3 className="text-black text-3xl md:text-[64px] md:leading-[70px] font-bold mt-2">
          {title}
        </h3>

        <button className="mt-6 w-36 h-12 border border-black rounded-full text-black
                           flex items-center justify-center text-lg font-semibold transition 
                           hover:bg-black hover:text-white mx-auto md:mx-0">
          Explore
        </button>

        <p className="text-gray-700 text-base md:text-lg mt-6 leading-6 md:leading-7 max-w-md">
          {desc}
        </p>
      </div>
    </div>
  );
}
