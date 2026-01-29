import React, { useEffect, useRef, useState } from 'react';

const WheelSection = () => {
  const wheelRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Adjust these thresholds & distances as needed
  const wheelMove = Math.min(scrollY * 0.5, 200); // wheel moves up to 200px left
  const contentOpacity = Math.min(scrollY / 300, 1); // content fades in

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Wheel image */}
      <div
        ref={wheelRef}
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-transform ease-out"
        style={{
          transform: `translate(-50%, -50%) translateX(${-wheelMove}px)`,
        }}
      >
        <img src="/path/to/wheel.png" alt="Wheel" className="w-64 h-64" />
      </div>

      {/* Content that comes into center */}
      <div
        ref={contentRef}
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center px-4"
        style={{
          opacity: contentOpacity,
        }}
      >
        <h1 className="text-4xl font-bold">Your Headline</h1>
        <p className="mt-4 text-lg">Some supporting text goes here.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default WheelSection;
