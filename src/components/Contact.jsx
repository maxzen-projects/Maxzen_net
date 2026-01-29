import React from "react";
import { MapPin, Phone, Mail } from "lucide-react"; // icons
import image from "../assets/contact.jpeg"; // background image
import pattern from "../assets/lines.svg"; // your uploaded SVG lines

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative h-[400px] w-full overflow-hidden -mt-[100px]">
        {/* Background Image */}
        <img
          src={image}
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ✅ Soft Transparent Blue Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00205B]/60 via-[#001b4b]/45 to-[#00205B]/60 backdrop-blur-[1px]"></div>

        {/* Curved Line SVG Pattern (Bottom Right) */}
        <img
          src={pattern}
          alt="Pattern Overlay"
          className="absolute bottom-0 right-0 w-[55%] opacity-35 pointer-events-none object-contain"
        />

        {/* Title & Breadcrumb */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 lg:px-24 text-white">
          <h1 className="text-5xl font-bold mb-2">Contact</h1>
          <div className="text-sm flex items-center space-x-2">
            <a
              href="/"
              className="font-semibold text-white hover:text-blue-400 transition"
            >
              Home
            </a>
            <span className="text-gray-300">»</span>
            <span className="text-blue-400 font-semibold">Contact</span>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT SECTION ---------------- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Info Section */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold mb-6">
            Let’s <span className="text-blue-600">Get in Touch</span>
          </h2>
          <p className="text-gray-600">
            We’d love to hear from you. Whether you have a question about our
            services, need support, or just want to say hello — our team is
            ready to help.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="p-3 bg-blue-100 rounded-xl">
                <MapPin className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm text-blue-600 font-medium">Location</h4>
                <p className="text-lg font-semibold">4140 Parker, USA</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Phone className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm text-blue-600 font-medium">
                  Call Us 24/7
                </h4>
                <p className="text-lg font-semibold">+208-555-0112</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Mail className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm text-blue-600 font-medium">
                  Make a Quote
                </h4>
                <p className="text-lg font-semibold">info@wotech.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <form className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-6">
          <div>
            <h3 className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
              Let’s Talk
            </h3>
            <h2 className="text-3xl font-bold mt-1">Send Us a Message</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Name*"
              className="p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email*"
              className="p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Phone*"
              className="p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none"
            />
          </div>

          <textarea
            placeholder="Write Message"
            rows="5"
            className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* ---------------- GOOGLE MAP SECTION ---------------- */}
      <section className="w-full mt-10">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.895436576928!2d78.3902119!3d17.4892568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91004d41cd2b%3A0xef841891a7d0ef28!2sMaxzen%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full"
        />
      </section>
    </div>
  );
};

export default Contact;
