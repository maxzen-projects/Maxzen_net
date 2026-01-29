import React from "react";
import heroBg from "../assets/about.jpg";

import {
  CodeBracketIcon,
  CubeIcon,
  ServerStackIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export default function FullStackDevelopment() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen overflow-hidden mt-[5px]">
        <img
          src={heroBg}
          alt="Full Stack Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-24 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Full Stack Development
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            We build scalable, secure, and high-performance full stack solutions
            that seamlessly connect user experience, business logic, and data.
          </p>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-20 px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          End-to-End Full Stack Engineering
        </h2>

        <p className="text-gray-700 text-lg max-w-5xl mb-10 leading-relaxed">
          Our Full Stack Development practice combines frontend excellence,
          robust backend engineering, and cloud-native architectures to deliver
          digital products that scale effortlessly. We work across the entire
          technology stack — from intuitive user interfaces to resilient APIs
          and data layers.
        </p>

        <p className="text-gray-700 text-lg max-w-5xl mb-14 leading-relaxed">
          Enterprises today require development partners who can move fast
          without compromising security, performance, or maintainability.
          Our full stack teams are built to do exactly that.
        </p>

        {/* CHALLENGES */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl">

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Frontend Experience & Performance
            </h3>
            <p className="text-gray-700 mb-4">
              Modern users expect fast, responsive, and intuitive interfaces
              across devices and platforms.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Performance bottlenecks</li>
              <li>• Inconsistent UX across devices</li>
              <li>• Maintainability challenges</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Backend Scalability & Security
            </h3>
            <p className="text-gray-700 mb-4">
              As systems grow, backend services must scale reliably while
              protecting sensitive data.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• API performance</li>
              <li>• Authentication & authorization</li>
              <li>• Secure data handling</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Deployment & Lifecycle Management
            </h3>
            <p className="text-gray-700 mb-4">
              Continuous delivery and operational excellence are critical for
              business agility.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• CI/CD automation</li>
              <li>• Cloud readiness</li>
              <li>• Monitoring & observability</li>
            </ul>
          </div>

        </div>

        <p className="text-gray-700 text-lg max-w-5xl mt-14 leading-relaxed">
          Our full stack approach ensures every layer of your application works
          in harmony, delivering reliability, performance, and long-term value.
        </p>
      </section>

      {/* ================= GET IN TOUCH ================= */}
      <section className="w-full bg-white py-16 px-6 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-16">
            Get in touch
          </h2>

          <form className="space-y-8">
            {[
              ["Name", "text"],
              ["Email", "email"],
              ["Designation (optional)", "text"],
              ["Phone (optional)", "tel"],
            ].map(([label, type], i) => (
              <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
                <label className="text-gray-700">{label}</label>
                <input
                  type={type}
                  className="h-12 border border-gray-300 rounded-md px-4 focus:border-blue-500 outline-none"
                />
              </div>
            ))}

            <div className="grid md:grid-cols-2 gap-10 items-start">
              <label className="text-gray-700 pt-2">
                How can we help? (optional)
              </label>
              <textarea
                rows="5"
                className="border border-gray-300 rounded-md px-4 py-3 resize-none focus:border-blue-500 outline-none"
              />
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Submit
            </button>

            <p className="text-sm text-gray-500">
              Never share sensitive information through this form.
            </p>
          </form>
        </div>
      </section>

      {/* ================= DELIVERY GRID ================= */}
      <section className="bg-[#1B1D21] py-28 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16">
          Our Full Stack Capabilities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {[
            { title: "UI Engineering", icon: PencilSquareIcon },
            { title: "Frontend Development", icon: CodeBracketIcon },
            { title: "Backend Services", icon: ServerStackIcon },
            { title: "System Architecture", icon: CubeIcon },
            { title: "Product Delivery", icon: RocketLaunchIcon },
          ].map((item, i) => (
            <Card key={i} title={item.title} Icon={item.icon} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card title="Application Migration" Icon={ArrowTrendingUpIcon} />
          <Card title="Performance Optimisation" Icon={Cog6ToothIcon} />
          <Card title="Support & Maintenance" Icon={LifebuoyIcon} />
        </div>
      </section>

      {/* ================= CAREER CTA ================= */}
      <section className="w-full bg-[#F6F5EF] py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              Where will your career take you?
            </h2>
            <p className="text-lg text-gray-600">
              Join our full stack teams and build products that impact millions
              across industries and geographies.
            </p>
          </div>

          <button className="px-12 py-4 rounded-full bg-white border shadow-sm hover:shadow-md">
            APPLY TO FIND
          </button>
        </div>
      </section>

    </div>
  );
}

/* ================= CARD ================= */
function Card({ title, Icon }) {
  return (
    <div className="border border-gray-600 bg-[#2A2D32] py-14 px-6 flex flex-col items-center hover:border-yellow-400 transition">
      <Icon className="w-12 h-12 text-yellow-400 mb-6" />
      <h3 className="text-white text-lg font-semibold text-center">
        {title}
      </h3>
    </div>
  );
}
