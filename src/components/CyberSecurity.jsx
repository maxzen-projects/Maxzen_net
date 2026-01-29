import React from "react";
import heroBg from "../assets/about.jpg";

import {
  ShieldExclamationIcon,
  LockClosedIcon,
  FingerPrintIcon,
  ServerStackIcon,
  RocketLaunchIcon,
  ArrowTrendingUpIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

export default function CyberSecurity() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen overflow-hidden mt-[5px]">
        <img
          src={heroBg}
          alt="Cyber Security"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-24 pb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cyber Security
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Building cyber-resilient enterprises through intelligent security
            engineering, continuous monitoring, and proactive defense strategies.
          </p>
        </div>
      </div>

      {/* ================= SECURITY PHILOSOPHY ================= */}
      <section className="bg-white py-20 px-6 md:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Security-First Engineering
        </h2>

        <p className="text-gray-700 text-lg max-w-5xl mb-10 leading-relaxed">
          Cyber security today is no longer limited to perimeter defense.
          It is an enterprise-wide discipline that must be embedded into
          applications, infrastructure, data pipelines, and user workflows.
        </p>

        <p className="text-gray-700 text-lg max-w-5xl mb-14 leading-relaxed">
          Our cyber security services help organizations transition from
          reactive security postures to proactive, intelligence-driven
          defense models that reduce risk and improve operational confidence.
        </p>

        {/* CORE CHALLENGES */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl">

          {/* 1 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. Advanced Threat Exposure
            </h3>
            <p className="text-gray-700 mb-4">
              Attack surfaces continue to expand across cloud, mobile,
              APIs, and remote work environments.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Targeted cyber attacks</li>
              <li>• Insider threats</li>
              <li>• Supply chain vulnerabilities</li>
            </ul>
          </div>

          {/* 2 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. Identity & Access Control
            </h3>
            <p className="text-gray-700 mb-4">
              Managing user identities and permissions securely is critical
              to protecting enterprise systems and data.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Weak access controls</li>
              <li>• Credential misuse</li>
              <li>• Privilege escalation risks</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. Detection, Response & Recovery
            </h3>
            <p className="text-gray-700 mb-4">
              Organizations must be prepared to identify incidents quickly
              and recover with minimal business disruption.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Delayed threat detection</li>
              <li>• Incident response readiness</li>
              <li>• Operational resilience</li>
            </ul>
          </div>

        </div>

        <p className="text-gray-700 text-lg max-w-5xl mt-14 leading-relaxed">
          By combining governance, technology, and operational discipline,
          we help enterprises build cyber resilience that scales with growth.
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

      {/* ================= CYBER CAPABILITIES ================= */}
      <section className="bg-[#1B1D21] py-28 px-6 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16">
          Our Cyber Security Capabilities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {[
            { title: "Threat Assessment", icon: ShieldExclamationIcon },
            { title: "Identity Security", icon: FingerPrintIcon },
            { title: "Application Security", icon: LockClosedIcon },
            { title: "Infrastructure Security", icon: ServerStackIcon },
            { title: "Secure Delivery", icon: RocketLaunchIcon },
          ].map((item, i) => (
            <Card key={i} title={item.title} Icon={item.icon} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card title="Security Modernization" Icon={ArrowTrendingUpIcon} />
          <Card title="Risk Optimization" Icon={Cog6ToothIcon} />
          <Card title="Managed Security Support" Icon={LifebuoyIcon} />
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
              Join our cyber security teams and help protect digital ecosystems
              that power modern enterprises.
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
