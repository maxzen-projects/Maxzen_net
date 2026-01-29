import React from "react";
import heroBg from "../assets/about.jpg";

import {
  DevicePhoneMobileIcon,
  CubeIcon,
  ServerStackIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export default function AppDevelopment() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen overflow-hidden mt-[5px]">
        <img
          src={heroBg}
          alt="App Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-24 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            App Development
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            We design and build secure, high-performance mobile applications
            that deliver seamless user experiences and measurable business value.
          </p>
        </div>
      </div>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-20 px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          End-to-End Mobile App Engineering
        </h2>

        <p className="text-gray-700 text-lg max-w-5xl mb-10 leading-relaxed">
          Our App Development practice covers the complete lifecycle of mobile
          products — from ideation and UX design to development, deployment,
          and continuous optimization. We build native and cross-platform
          applications that scale with your business.
        </p>

        <p className="text-gray-700 text-lg max-w-5xl mb-14 leading-relaxed">
          Enterprises today need mobile solutions that are fast, secure,
          resilient, and deeply integrated with backend systems and cloud
          platforms. Our teams are built to deliver exactly that.
        </p>

        {/* CHALLENGES */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl">

          {/* 1 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. User Experience & Performance
            </h3>
            <p className="text-gray-700 mb-4">
              Mobile users expect intuitive, responsive, and visually
              consistent experiences across devices and platforms.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• App performance bottlenecks</li>
              <li>• Fragmented device ecosystems</li>
              <li>• UX consistency challenges</li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Backend Integration & Security
            </h3>
            <p className="text-gray-700 mb-4">
              Mobile apps must integrate securely with APIs, databases,
              and enterprise systems.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• API scalability</li>
              <li>• Authentication & authorization</li>
              <li>• Secure data storage</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Deployment, Updates & Maintenance
            </h3>
            <p className="text-gray-700 mb-4">
              Managing releases, updates, and long-term maintenance is
              critical for mobile success.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• App store compliance</li>
              <li>• Continuous delivery pipelines</li>
              <li>• Monitoring & crash analytics</li>
            </ul>
          </div>

        </div>

        <p className="text-gray-700 text-lg max-w-5xl mt-14 leading-relaxed">
          Our app development approach ensures your mobile products are reliable,
          scalable, and built to evolve with changing user and business needs.
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
          Our App Development Capabilities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {[
            { title: "UI / UX Design", icon: PencilSquareIcon },
            { title: "Mobile App Development", icon: DevicePhoneMobileIcon },
            { title: "Backend Integration", icon: ServerStackIcon },
            { title: "Scalable Architecture", icon: CubeIcon },
            { title: "Product Launch", icon: RocketLaunchIcon },
          ].map((item, i) => (
            <Card key={i} title={item.title} Icon={item.icon} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card title="App Migration" Icon={ArrowTrendingUpIcon} />
          <Card title="Performance Optimization" Icon={Cog6ToothIcon} />
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
              Join our app development teams and create mobile products
              that users love and businesses rely on.
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
