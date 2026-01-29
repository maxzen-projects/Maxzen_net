import React, { useState } from "react";

const categories = ["All", "Cloud", "Cybersecurity", "AI/ML", "Web Dev", "Networking"];

const posts = [
  {
    id: 1,
    title: "Top 5 Cybersecurity Practices Every Business Should Follow",
    category: "Cybersecurity",
    date: "Nov 15, 2025",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200",
  },
  {
    id: 2,
    title: "How Cloud Computing is Transforming IT Infrastructure",
    category: "Cloud",
    date: "Nov 10, 2025",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
  },
  {
    id: 3,
    title: "The Future of AI: Trends to Watch in 2025",
    category: "AI/ML",
    date: "Nov 02, 2025",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
  },
  {
    id: 4,
    title: "Why Every Business Needs a Modern Website",
    category: "Web Dev",
    date: "Oct 28, 2025",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=1200",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#0b1120] text-white min-h-screen">

      {/* ================= HERO BACKGROUND IMAGE ================= */}
      <div
        className="w-full h-[350px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-wide">
            Blog Page
          </h1>
        </div>
      </div>

      {/* TEXT SECTION */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Insights & Updates from Our IT Experts
        </h2>
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Stay updated with the latest trends in cybersecurity, cloud,
          development, AI, and more.
        </p>
      </section>

      {/* CATEGORY FILTER */}
      <div className="flex justify-center gap-3 flex-wrap px-6 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              activeCategory === cat
                ? "bg-blue-600 border-blue-600"
                : "border-gray-600 hover:bg-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#111827] rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <span className="text-sm text-blue-400">{post.category}</span>
              <h2 className="text-xl font-semibold mt-2 group-hover:text-blue-400 transition">
                {post.title}
              </h2>
              <p className="text-gray-400 text-sm mt-3">{post.date}</p>
              <button className="mt-4 text-blue-500 hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
