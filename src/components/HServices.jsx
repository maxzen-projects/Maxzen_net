import React, { useState } from "react";
import {
  FaMicrochip,
  FaCode,
  FaDatabase,
  FaChartPie,
  FaCheckCircle,
} from "react-icons/fa";
import img from "../assets/services.jpeg";

export default function HServices() {
  const services = [
    {
      id: 1,
      title: "IT Consultancy",
      icon: <FaMicrochip size={28} />,
      image: img,
      desc: "It is a long established fact that a reader will be distracted by layout content.",
      points: [
        "Accurate Testing Processes",
        "100% Satisfaction Guarantee",
        "Award Winning Company",
      ],
    },
    {
      id: 2,
      title: "App Development",
      icon: <FaCode size={28} />,
      image: img,
      desc: "We develop world-class Android, iOS, and Web Applications.",
      points: ["Custom App Solutions", "Optimized Performance", "24/7 Support"],
    },
    {
      id: 3,
      title: "Database Security",
      icon: <FaDatabase size={28} />,
      image: img,
      desc: "Top-notch database monitoring and secure storage.",
      points: ["High-Level Encryption", "Cloud Backup", "Zero-Downtime Monitoring"],
    },
    {
      id: 4,
      title: "Marketing & Reporting",
      icon: <FaChartPie size={28} />,
      image: img,
      desc: "Advanced business marketing and reporting tools.",
      points: ["Powerful Analytics", "Smart Campaigns", "Realtime Reports"],
    },
  ];

  const [active, setActive] = useState(1);
  const selected = services.find((s) => s.id === active);

  return (
    <section className="w-full bg-[#071A35] py-20 text-white">
      {/* ===== TOP HEADING ===== */}
      <div className="max-w-7xl mx-auto mb-10 px-4 flex justify-between items-start">
        <div>
          <p className="text-blue-400 flex items-center gap-2 tracking-wide">
            <span className="w-10 h-[3px] bg-blue-500 inline-block"></span>
            SERVICES WE'RE OFFERING
          </p>
          <h2 className="text-5xl font-bold mt-3">Exclusive IT Services</h2>
        </div>

        {/* RIGHT TOP BUTTON */}
        <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
          ALL SERVICES | →
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[30%,70%] gap-20 px-4">

        {/* LEFT SIDE LIST */}
        <div className="space-y-5">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActive(service.id)}
              className={`
                relative w-full flex items-center gap-3 px-6 py-5 text-left
                transition-all duration-300
                ${active === service.id ? "bg-blue-600 text-white" : "bg-white text-black"}
              `}
            >
              <span className={`${active === service.id ? "text-white" : "text-blue-600"}`}>
                {service.icon}
              </span>

              <span className="font-semibold text-lg">{service.title}</span>

              {/* PERFECT ARROW SHAPE */}
              <span
                className={`
                  absolute right-[-22px] top-0 h-full w-[30px]
                  ${active === service.id ? "bg-blue-600" : "bg-white"}
                  [clip-path:polygon(0_0,100%_50%,0_100%)]
                `}
              ></span>
            </button>
          ))}
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="bg-[#0D2445] p-10 rounded-lg shadow-lg flex gap-8 relative">

          {/* TOP RIGHT BUTTON */}
          <button className="absolute right-8 top-8 bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition">
            READ MORE →
          </button>

          {/* LEFT IMAGE */}
          <img
            src={selected.image}
            alt={selected.title}
            className="w-[300px] h-[250px] object-cover rounded-md"
          />

          {/* TEXT CONTENT */}
          <div className="flex-1 mt-10">
            <h2 className="text-3xl font-bold">{selected.title}</h2>
            <p className="text-gray-300 mt-3">{selected.desc}</p>

            <ul className="mt-6 space-y-3">
              {selected.points.map((p, i) => (
                <li key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
