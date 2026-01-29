import React, { useEffect, useRef, useState } from "react";
import { FaShieldAlt, FaCode, FaNetworkWired } from "react-icons/fa";

const CounterCard = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const increment = Math.ceil(target / (duration / 30));

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(counter);
      }
      setCount(current);
    }, 30);
  }, [start, target]);

  return (
    <div
      ref={cardRef}
      className="w-60 h-48 bg-blue-700 rounded-xl text-center flex flex-col justify-center items-center shadow-lg"
    >
      <p className="text-white text-4xl font-bold">{count}+</p>
      <p className="text-white text-sm mt-2 tracking-wide">{label}</p>
    </div>
  );
};

export default function StatsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Cyber Security",
      desc: "Protect your business with our advanced security solutions.",
    },
    {
      icon: <FaCode className="text-4xl" />,
      title: "Software Development",
      desc: "Custom software solutions tailored to your business needs.",
    },
    {
      icon: <FaNetworkWired className="text-4xl" />,
      title: "Network Solutions",
      desc: "Reliable and scalable network infrastructure.",
    },
  ];

  return (

    <div>

      <section className="bg-[#0b1120] py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-[#0d1835] text-white p-8 rounded-md shadow-lg overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transition-transform duration-500 ${
                  hoveredIndex === idx
                    ? "translate-x-0"
                    : "translate-x-full"
                }`}
              />

              <div className="relative z-10">
                <div className={`mb-6 ${hoveredIndex === idx ? "text-white" : "text-blue-400"}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    <div
      className="
        w-full 
        bg-gray-100
        py-16

        flex 
        flex-col 
        items-center 
        gap-10

        md:flex-row 
        md:justify-between 
        md:px-20
        lg:px-40
      "
    >
      <CounterCard target={8} label="GLOBAL LOCATIONS" />
      <CounterCard target={45} label="RENOWNED CLIENTS" />
      <CounterCard target={7} label="COMMUNITY PLATFORMS" />
      <CounterCard target={9} label="BILLION VALUE CO-CREATED" />



    </div>
     
    </div>
  );
}
