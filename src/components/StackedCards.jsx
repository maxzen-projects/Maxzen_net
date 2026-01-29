import React, { useState, useEffect } from "react";
import img1 from "../assets/Career.jpg";
import img2 from "../assets/Bfsi.jpg";
import img3 from "../assets/Healthcare.jpg";
import img4 from "../assets/Pharma.jpg";

const initialCards = [
  { number: "01.", title: "Advertising", image: img1 },
  { number: "02.", title: "Branding", image: img2 },
  { number: "03.", title: "UI/UX", image: img3 },
  { number: "04.", title: "Strategy", image: img4 },
];

export default function StackedCards() {
  const [cards, setCards] = useState(initialCards);

  // Rotate cards automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const first = prev[0];
        const rest = prev.slice(1);
        return [...rest, first]; // Move card1 to last (4th position)
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-700 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-white">
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1]">
            We introduce methodologies, processes,
            and learnings to drive digital innovation projects.
          </h1>

          <p className="mt-10 text-lg opacity-80">
            Ensuring impactful experiences that drive growth and success.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="relative md:w-1/2 h-[420px] flex justify-end mt-6 md:mt-32">

          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute w-[330px] md:w-[450px] h-[400px] bg-white rounded-3xl 
                         shadow-2xl px-4 py-4 transition-all duration-700"
              style={{
                transform: `
                  translateY(${index * -45}px)
                  translateX(${index * 25}px)
                `,
                zIndex: 10 - index,
              
              }}
            >
              <span className="text-gray-600 text-xl font-semibold">{card.number}</span>
              <h2 className="text-4xl font-bold mt-6">{card.title}</h2>

              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover rounded-xl mt-6"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
