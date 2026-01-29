import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import service1 from "../assets/services/App-development.jpeg";
import service2 from "../assets/services/Cloud Computing.jpeg";
import service3 from "../assets/services/Webdevelopment.jpeg";
import service4 from "../assets/services/Cyber-Security.jpeg";
import service5 from "../assets/services/IT-Consultancy.jpeg";

export default function AnimatedServices() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // ⭐ NEW DIAGONAL MOTION (bottom-right → center → top-left)
  const anim = (start, mid, end) => ({
    y: useTransform(scrollYProgress, [start, mid, end], ["10vh", "0vh", "-25vh"]), // bottom → center → top
    x: useTransform(scrollYProgress, [start, mid, end], ["50vw", "0vw", "-50vw"]), // right → center → left
    rotate: useTransform(scrollYProgress, [start, mid, end], ["6deg", "0deg", "-6deg"]),
    scale: useTransform(scrollYProgress, [start, mid], [0.8, 1]),
    opacity: useTransform(scrollYProgress, [start, start + 0.03, mid, end], [0, 1, 1, 0]),
  });

  const cardAnims = [
    anim(0.0, 0.14, 0.26),
    anim(0.24, 0.36, 0.48),
    anim(0.46, 0.58, 0.70),
    anim(0.68, 0.80, 0.92),
    anim(0.90, 1.02, 1.12),
  ];

  const services = [
    {
      title: "App Development",
      subtitle: "Mobile App Engineering",
      desc: "We build scalable Android, iOS and hybrid applications.",
      img: service1,
    },
    {
      title: "Cloud Solutions",
      subtitle: "Modern Cloud Architecture",
      desc: "Cloud deployment, scaling, monitoring on AWS, Azure & GCP.",
      img: service2,
    },
    {
      title: "Web Development",
      subtitle: "High Performance Websites",
      desc: "We develop modern UI/UX driven websites.",
      img: service3,
    },
    {
      title: "Cyber Security",
      subtitle: "Protecting Digital Assets",
      desc: "Complete cyber protection for businesses & individuals.",
      img: service4,
    },
    {
      title: "IT Consultancy",
      subtitle: "Expert Business Guidance",
      desc: "Strategic planning & technology consulting services.",
      img: service5,
    },
  ];

  return (
    <section ref={scrollRef} className="relative w-full h-[300vh] bg-white px-4 sm:px-10">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl flex justify-center">

          {services.map((service, i) => (
            <motion.div
              key={i}
              style={{
                y: cardAnims[i].y,
                x: cardAnims[i].x,
                rotate: cardAnims[i].rotate,
                scale: cardAnims[i].scale,
                opacity: cardAnims[i].opacity,
              }}
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
                 w-full max-w-[90%] md:h-[90vh] gap-6 md:gap-12"
      style={{ zIndex: z }}
    >
      {/* Image */}
      <div className="w-full md:w-[45%] h-[50vh] md:h-[85vh] rounded-2xl overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover md:rotate-[-4deg]"
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
