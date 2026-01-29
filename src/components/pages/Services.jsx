import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import serviceBg from "../../assets/services.jpg";

export default function Services() {
  const scrollContainer = useRef(null);
  const navigate = useNavigate();

  /* ================= DRAG TO SCROLL ================= */
  useEffect(() => {
    const el = scrollContainer.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const mouseDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const mouseLeave = () => (isDown = false);
    const mouseUp = () => (isDown = false);

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 2;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", mouseDown);
    el.addEventListener("mouseleave", mouseLeave);
    el.addEventListener("mouseup", mouseUp);
    el.addEventListener("mousemove", mouseMove);

    return () => {
      el.removeEventListener("mousedown", mouseDown);
      el.removeEventListener("mouseleave", mouseLeave);
      el.removeEventListener("mouseup", mouseUp);
      el.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  /* ================= SERVICES WITH ROUTES ================= */
  const services = [
    { name: "IT CONSULTANCY", path: "/ITConsultant" },
    { name: "CYBER SECURITY", path: "/cyber-security" },
    { name: "FULL STACK DEVELOPMENT", path: "/FullStackDevelopment" },
    // { name: "WEB DEVELOPMENT", path: "/web-development" },
    { name: "APP DEVELOPMENT", path: "/app-development" },
    { name: "CLOUD COMPUTING", path: "/cloud-computing" },
    { name: "INTELLIGENCE ENGINEERING", path: "/intelligence-engineering" },
    { name: "DESIGN ENGINEERING", path: "/design-engineering" },
    // { name: "SEO OPTIMIZATION", path: "/seo-optimization" },
  ];

  return (
    <div className="w-full bg-[#0B0B18] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
        <img
          src={serviceBg}
          alt="Services Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-6 md:left-24 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
            Our Services
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Enterprise Minds designs and delivers next generation Automation
            services across key industry verticals by building products that
            deploy emerging technologies.
          </p>
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <div className="px-6 md:px-24 pt-20 pb-10">
        <p className="text-lg md:text-xl max-w-3xl text-gray-200 leading-relaxed">
          We focus on enabling much-needed change in key industry verticals
          through digital and enterprise transformation measures.
        </p>
      </div>

      {/* ================= SERVICES SCROLL ================= */}
      <div className="px-6 md:px-24 pb-20">
        <div className="relative">

          {/* DOTTED LINE */}
          <div
            className="absolute left-0 right-0 top-[97px] h-[2px]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #9ca3af 0 2px, transparent 2px 6px)",
            }}
          />

          {/* SCROLLABLE CONTAINER */}
          <div
            ref={scrollContainer}
            className="overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex gap-32 min-w-max py-10">

              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[250px]"
                >
                  {/* SERVICE NAME */}
                  <p className="text-sm font-semibold tracking-wider mb-8 whitespace-nowrap">
                    {service.name}
                  </p>

                  {/* CLICKABLE DOT */}
                  <button
                    onClick={() => navigate(service.path)}
                    title={`Go to ${service.name}`}
                    className="relative focus:outline-none"
                  >
                    <span
                      className="block w-3 h-3 rounded-full border-2 border-white
                      bg-[#0B0B18]
                      shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]
                      animate-glow
                      hover:scale-125 hover:bg-red-500 hover:border-red-500
                      transition duration-300"
                    />
                  </button>
                </div>
              ))}

            </div>
          </div>

          {/* SCROLL ARROW */}
          <button
            onClick={() => (scrollContainer.current.scrollLeft += 300)}
            className="absolute right-0 top-[30px] w-14 h-14 rounded-full
            border border-white flex items-center justify-center text-xl
            hover:bg-white hover:text-black duration-200"
          >
            →
          </button>
        </div>
      </div>

      {/* ================= CAREER SECTION ================= */}
      <section className="w-full bg-[#F5F4EE] text-[#1A1A1A] py-20 px-6 md:px-24 flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Where will your career take you?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Join us and explore a whole new world of opportunities across
            continents.
          </p>
        </div>

        <button className="bg-white px-10 py-4 rounded-full font-semibold shadow hover:shadow-lg duration-200">
          APPLY TO FIND
        </button>
      </section>

      {/* ================= STYLES ================= */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 6px rgba(255,255,255,0.4);
          }
          50% {
            box-shadow: 0 0 14px rgba(255,255,255,0.8);
          }
          100% {
            box-shadow: 0 0 6px rgba(255,255,255,0.4);
          }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
