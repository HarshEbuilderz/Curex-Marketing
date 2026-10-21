
import React from "react";
import { Search, Gauge, FileText, Route, ArrowUpRight } from "lucide-react";

function HowItWorks() {
  return (
    <section className="bg-blue-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <p className="text-sm text-blue-800 font-semibold tracking-widest">
            SIMPLE PROCESS
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#22395A] mt-4">
            How It Works
          </h2>

          <p className="text-gray-500 mt-4">
            Simple, fast, and fully automated
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-3xl text-blue-800">01</span>
              <Search size={25} className="text-blue-800" />
            </div>

            <h3 className="text-xl font-semibold mt-10 text-[#22395A]">
              Search Your Clinic
            </h3>

            <p className="text-gray-500 text-sm mt-3 leading-6">
              Type your clinic name - we auto-detect it from Google.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-3xl text-blue-800">02</span>
              <Gauge size={25} className="text-blue-800" />
            </div>

            <h3 className="text-xl font-semibold mt-10 text-[#22395A]">
              See Your Quick Score
            </h3>

            <p className="text-gray-500 text-sm mt-3 leading-6">
              Instant visibility score from your Google presence.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-3xl text-blue-800">03</span>
              <FileText size={25} className="text-blue-800" />
            </div>

            <h3 className="text-xl font-semibold mt-10 text-[#22395A]">
              Unlock Full Report
            </h3>

            <p className="text-gray-500 text-sm mt-3 leading-6">
              Enter your email - we run the deep scan and send the full report.
            </p>
          </div>

          <div className="bg-[#294C85] p-6 rounded-2xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-3xl text-blue-200">04</span>
              <Route size={25} className="text-blue-200" />
            </div>

            <h3 className="text-xl font-semibold mt-10 text-white">
              Get the Action Plan
            </h3>

            <p className="text-blue-100 text-sm mt-3 leading-6">
              Receive a prioritized roadmap with the right next steps, tools,
              and services.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="#services"
            className="bg-blue-900 text-white px-8 py-4 rounded-lg flex items-center gap-3 font-medium hover:bg-[#1B3565] hover:scale-105 transition-all duration-300"
          >
            Learn more about our SEO services
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>

      <img></img>
    </section>
  );
}

export default HowItWorks;
