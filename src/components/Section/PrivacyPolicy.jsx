import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      {/* ================= PRIVACY POLICY SECTION ================= */}
      <section className="w-full bg-[#fafafa] py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Personal Information that we process
          </h2>

          {/* Intro */}
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At Maxzen, we value your trust and are committed to protecting your
            personal information. “Personal Information” refers to any data that
            can identify an individual, either directly or indirectly, through
            one or more data points collected through our website or services.
          </p>

          {/* Categories */}
          <p className="text-lg text-gray-700 font-semibold mb-4">
            We collect the following categories of Personal Information:
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Information that you provide while interacting with our website or 
            submitting any form. This may include your name, email address, 
            phone number, designation, company name, country, and any additional 
            details you choose to share while contacting Maxzen or registering 
            for an inquiry.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Information collected automatically during your visit, including 
            your IP address, device details, operating system, browser type, 
            time spent on pages, and cookie-based data. This information helps 
            us improve website performance, enhance user experience, and 
            understand visitor behavior.
          </p>

          {/* Note */}
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            <strong>Note:</strong> Maxzen does not share phone numbers or 
            personal information with any third-party organizations for 
            marketing or promotional purposes. All data is handled securely 
            and responsibly.
          </p>

        </div>
      </section>

        {/* ================= CAREER DIRECTION SECTION ================= */}
<section className="w-full bg-[#f7f6ef] py-20 px-6 md:px-20">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">

    {/* LEFT CONTENT */}
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Where will your career take you?
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed">
        At Maxzen, we believe in helping you explore and expand your career 
        horizons—technically and professionally. Whether you want to master 
        emerging technologies, take on leadership roles, or work across 
        diverse projects, Maxzen gives you the platform to grow with purpose.  
        <br /><br />
        Join us and discover new opportunities that take your career further 
        than you ever imagined.
      </p>
    </div>

    {/* RIGHT BUTTON */}
    <div className="mt-10 md:mt-0">
      <button className="px-10 py-4 bg-white text-gray-900 border border-gray-300 rounded-full shadow-md text-lg font-semibold hover:bg-gray-100 transition">
        APPLY TO FIND
      </button>
    </div>

  </div>
</section>


    </>
  );
};

export default PrivacyPolicy;
