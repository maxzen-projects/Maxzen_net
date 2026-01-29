import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ====================== TIMELINE COMPONENT ======================
export const Timeline = ({ data = [] }) => { // ✅ added default value to avoid .map undefined
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="relative w-full bg-white dark:bg-[#0A0B1A] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-bold">
          Our Company <span className="text-blue-500">Timeline</span>
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md">
          A quick journey through our evolution — from our first steps to
          shaping digital excellence.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10 relative"
            >
              {/* LEFT SIDE STICKY YEAR + DOT */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-[#0A0B1A] flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-600 border border-blue-400 shadow-[0_0_10px_#3b82f6]" />
                </div>
                <h3 className="hidden md:block text-3xl md:pl-20 md:text-5xl font-bold text-gray-500 dark:text-gray-400">
                  {item.title}
                </h3>
              </div>

              {/* RIGHT SIDE CONTENT */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-500 dark:text-gray-400">
                  {item.title}
                </h3>
                <div className="bg-gray-50 dark:bg-[#11152A] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-500">
                  {item.content}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 py-10">
            No timeline data found.
          </p>
        )}

        {/* SCROLLING LINE */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-300 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-cyan-400 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

// ====================== TIMELINE DEMO DATA ======================
const TimelineDemo = () => {
  const data = [
  {
    title: "2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
          In 2025, we accelerated our global expansion and reinforced our cloud engineering division. This progress empowered us to build stronger, more resilient, and 
          scalable digital platforms for project clients.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=60"
            alt="AI Solutions"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
          />

          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=60"
            alt="Cloud Infrastructure"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
          A major year of innovation — we successfully completed several high-value projects, implementing advanced real-time monitoring systems and 
          security-focused Maxzen solutions that strengthened digital reliability and performance for our clients.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600&q=60"
            alt="IoT Development"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
          />

          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=60"
            alt="Cybersecurity"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-6">
          Established in 2024, Maxzen Technologies began with a compact but highly skilled IT team dedicated to engineering next-generation digital systems. 
          With a strong focus on cloud architecture, cybersecurity, and intelligent automation, we set out to deliver solutions that scale with business needs while ensuring data integrity and operational reliability.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=60"
            alt="Team Collaboration"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
          />

          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=60"
            alt="Company Start"
            className="rounded-lg object-cover h-32 md:h-48 w-full shadow-md"
          />
        </div>
      </div>
    ),
  },
];


  return (
    <section className="bg-white dark:bg-[#0A0B1A] text-gray-800 dark:text-white py-20">
      <Timeline data={data} />
    </section>
  );
};

// ✅ Export the demo as default, and Timeline as named
export default TimelineDemo;
