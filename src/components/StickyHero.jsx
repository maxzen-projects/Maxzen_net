import image from "../assets/Connect.jpg";
import kasi from "../assets/Career.jpg";

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Beckn_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/8/80/ZS_Associates_logo.png",
  "https://seeklogo.com/images/S/stride-learning-logo-6F49D14B83-seeklogo.com.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/ThoughtSpot_logo.svg/2560px-ThoughtSpot_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/9f/Neom_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Flipkart_logo.png",

  "https://upload.wikimedia.org/wikipedia/commons/1/13/DBS_Bank_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/Seagate_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/02/DP_World_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/13/Bonusway_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/45/Zignal_Labs_logo.png",

  "https://upload.wikimedia.org/wikipedia/commons/0/04/T-mobile_logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Protean_logo.svg",
];

export default function StickyHero() {
  return (
    <div className="w-full">

      {/* ===========================
          GLOBAL BACKGROUND IMAGE
      ============================ */}
     <div className="relative w-full h-screen">
  {/* Background Image */}
  <div
    className="
      absolute inset-0
      bg-cover bg-center bg-no-repeat bg-fixed
      -z-10
    "
    style={{
      backgroundImage: `url(${kasi})`,
    }}
  ></div>

  {/* Transparent Section */}
  <section className="h-full flex items-center justify-center text-center text-white px-6">
    <div>
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Tech World</h1>
      <p className="text-xl text-gray-200 max-w-2xl mx-auto">
        Building secured, high-performance digital solutions for modern businesses.
      </p>
    </div>
  </section>
</div>


      {/* ===========================
          SECTION 2 — CONTENT
      ============================ */}
      <section className="bg-[#0b1120] text-black bg-white py-24 px-10 rounded-b-3xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">About Our Technology</h2>

          <p className="text-lg text-gray-900 leading-relaxed mb-6">
            We provide cutting-edge technology solutions designed to enhance
            productivity, security, and performance. From full-stack development
            to cloud and cybersecurity, we transform ideas into powerful digital
            products.
          </p>

          <p className="text-lg text-gray-900 leading-relaxed mb-6">
            Our team specializes in scalable architecture, DevOps, automation,
            AI-driven platform.
          </p>

          <p className="text-lg text-gray-900 leading-relaxed">
            Scroll down to explore more content.
          </p>
        </div>
      </section>

      {/* ===========================
          SECTION 3 — LOGOS
      ============================ */}
      {/* <section className="py-16 ">
        <h2 className="text-center text-3xl font-bold mb-10 text-gray-700">
          Our Trusted Partners
        </h2>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 place-items-center">
          {logos.map((src, index) => (
            <img
              key={index}
              src={src}
              onError={(e) => {
                e.target.style.display = "none"; // Hide broken logos
              }}
              alt="company logo"
              className="w-24 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </section> */}


      {/* ===========================
          SECTION 4 — IMAGE SLIDER
      ============================ */}
      <section className="bg-[#0b1120] py-20 w-full">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-white text-4xl font-bold">
            Smart Digital Transformation, Delivered Faster
          </h2>

          <p className="text-white text-lg mt-8 leading-relaxed">
            We empower businesses with AI-driven and modern digital solutions designed for rapid execution, lean development, and long-term scalability.
          </p>
        </div>

        {/* IMAGE SLIDER */}
        <div className="relative max-w-[1600px] mx-auto mt-20">

          {/* Left Arrow */}
          <button
            onClick={() =>
              document.getElementById("customSlider").scrollBy({ left: -500, behavior: "smooth" })
            }
            className="absolute left-10 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-xl backdrop-blur"
          >
            <span className="text-2xl">←</span>
          </button>

          {/* Slider Wrapper */}
          <div
            id="customSlider"
            className="
              flex gap-20 px-10
              overflow-x-auto items-center scroll-smooth
              scrollbar-hide
            "
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <img src={image} className="w-[350px] h-[350px] object-cover rounded-lg" />
            <img src={image} className="w-[500px] h-[600px] object-cover rounded-lg" />
            <img src={image} className="w-[380px] h-[380px] object-cover rounded-lg" />
            <img src={image} className="w-[500px] h-[600px] object-cover rounded-lg" />
          </div>

          {/* Right Arrow */}
          <button
            onClick={() =>
              document.getElementById("customSlider").scrollBy({ left: 500, behavior: "smooth" })
            }
            className="absolute right-10 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center shadow-xl backdrop-blur"
          >
            <span className="text-2xl">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}
