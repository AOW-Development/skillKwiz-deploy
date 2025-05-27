"use client";

import { useState, useRef } from "react";
import { Info, Calendar, Clock } from "lucide-react";

export default function ScheduleAssessment() {
  const [selectedCompany, setSelectedCompany] = useState<string>("microsoft");
  const [showThankYou, setShowThankYou] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = () => {
    setShowThankYou(true);
    setTimeout(() => {
      modalRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <div className="text-white relative min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-2">
        Schedule Assessment
      </h1>
      <p className="text-center text-gray-200 mb-6">
        Register for your preferred skill assessment slot
      </p>

      <div className="space-y-8">
        <p className="text-center text-lg">
          Great!! multiple employers have authorised you to take a skill
          assessment with SkillKwizz. Choose one. You can revisit this page to
          schedule for others.
        </p>

        {/* Company Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["microsoft", "google", "amazon"].map((company) => (
            <button
              key={company}
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
                selectedCompany === company ? "border-2 border-green-500" : ""
              }`}
              onClick={() => setSelectedCompany(company)}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === company ? "bg-green-500" : "bg-gray-500"
                }`}
              ></span>
              {company.charAt(0).toUpperCase() + company.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["facebook1", "facebook2"].map((company) => (
            <button
              key={company}
              className={`flex items-center justify-center gap-2 bg-[#333333] rounded px-4 py-3 text-white hover:bg-[#444444] ${
                selectedCompany === company ? "border-2 border-green-500" : ""
              }`}
              onClick={() => setSelectedCompany(company)}
            >
              <span
                className={`w-4 h-4 rounded-full ${
                  selectedCompany === company ? "bg-green-500" : "bg-gray-500"
                }`}
              ></span>
              Facebook
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-[#2d5184]/80 rounded-lg p-4 flex items-start gap-3">
          <Info className="w-6 h-6 text-white mt-1" />
          <p>
            Microsoft has authorized you to take an assessment for C#, SQL
            Server, Web2.0, and React.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {[
            { label: "Select Country", options: ["India", "United States", "United Kingdom"] },
            { label: "Select Zip Code", options: ["110001", "110002"] },
            { label: "Select Testing Centre", options: ["Centre 1", "Centre 2"] },
          ].map((field, index) => (
            <div key={index}>
              <label className="block mb-2">{field.label}</label>
              <div className="relative">
                <select className="w-full bg-[#333333] rounded px-4 py-3 text-white appearance-none focus:outline-none">
                  {field.options.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date Field */}
            <div>
              <label className="block mb-2">Select a Date</label>
              <div className="flex items-center bg-[#333333] rounded px-4 py-3 text-white">
                <input
                  type="text"
                  placeholder="MM"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <span className="mx-1">|</span>
                <input
                  type="text"
                  placeholder="DD"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <span className="mx-1">|</span>
                <input
                  type="text"
                  placeholder="YYYY"
                  className="w-16 bg-transparent focus:outline-none text-center"
                />
                <Calendar className="ml-auto w-5 h-5" />
              </div>
            </div>

            {/* Time Field */}
            <div>
              <label className="block mb-2">Select Time</label>
              <div className="flex items-center bg-[#333333] rounded px-4 py-3 text-white">
                <input
                  type="text"
                  placeholder="03"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <span className="mx-1">|</span>
                <input
                  type="text"
                  placeholder="35"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <span className="mx-1">|</span>
                <input
                  type="text"
                  placeholder="AM"
                  className="w-12 bg-transparent focus:outline-none text-center"
                />
                <Clock className="ml-auto w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            className="px-20 py-2 rounded bg-gradient-to-r from-[#4ECDC4] to-[#2d8a84] text-white hover:opacity-90"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <div className="bg-white text-black rounded-lg shadow-lg max-w-sm w-full p-6 text-center relative">
            <h2 className="text-xl font-semibold mb-4">Thank You!</h2>
            <p>Your assessment has been scheduled successfully.</p>
            <button
              onClick={() => setShowThankYou(false)}
              className="mt-6 px-4 py-2 rounded bg-[#2d8a84] text-white hover:opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
