import lokesh from "../assets/choose-1.png"
import Lokesh from "../assets/Lokesh.JPG"


export default function TeamCards() {
  const team = [
    {
      name: "Lokesh Naidu",
      role: "Frontend-Developer",
      img: Lokesh,
      bio: "Lokesh has 4+ years of experience in developing frontend."
    },
    {
      name: "Vamsi",
      role: "CEO",
      img: lokesh,
      bio: "James founded InnovateX and leads the company with a vision for innovation."
    },
    {
      name: "Olivia Carter",
      role: "Marketing Lead",
      img: lokesh,
      bio: "Olivia specializes in digital campaigns and influencer marketing strategies."
    },
    {
      name: "Michael Lee",
      role: "COO, Cafe Bliss",
      img: lokesh,
      bio: "Michael manages teams and operations with efficiency and creativity."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0d1b2a] px-6 py-20 flex items-center justify-center">
      <div className="flex gap-10 flex-wrap justify-center">

        {team.map((person, i) => (
          <div
            key={i}
            className={`
              w-72 h-96 rounded-2xl cursor-pointer 
              [perspective:1000px] 
              transition-transform duration-700 hover:scale-105

              ${i === 0 ? "rotate-3" : ""}
              ${i === 1 ? "rotate-3" : ""}
              ${i === 2 ? "rotate-3" : ""}
              ${i === 3 ? "rotate-3" : ""}
            `}
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">

              {/* Front Side */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl shadow-white/20 [backface-visibility:hidden]">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white drop-shadow-lg">
                  <h2 className="text-xl font-bold">{person.name}</h2>
                  <p className="opacity-80">{person.role}</p>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-black/80 text-white p-6 rounded-2xl flex flex-col justify-center items-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h2 className="text-2xl font-bold mb-2">{person.name}</h2>
                <p className="text-purple-300 mb-4">{person.role}</p>
                <p className="text-sm opacity-90">{person.bio}</p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
