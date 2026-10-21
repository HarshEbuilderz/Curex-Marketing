
import React from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-blue-100 px-5 py-5 sticky top-0 z-50">

      
      <nav className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg border border-blue-100 px-8 py-4 flex items-center justify-between gap-6">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <h1 className="text-2xl font-extrabold text-[#2867DF] leading-none">
            CUREX
          </h1>
          <p className="text-[10px] font-bold tracking-widest text-[#7F9AC7]">
            MARKETING
          </p>
        </a>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm text-[#3E5578] font-medium">

          {/* Dropdown 1 - Software */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              Local SEO Software
              <ChevronDown
                size={15}
                className="group-hover:rotate-180 transition-transform"
              />
            </button>

            <div className="absolute top-full left-0 pt-5 hidden group-hover:block group-focus-within:block z-50">
              <div className="bg-white w-64 rounded-2xl shadow-xl border border-blue-100 p-5 flex flex-col gap-4">

                <a href="#" className="hover:text-blue-600">
                  GBP Management
                </a>

                <a href="#" className="hover:text-blue-600">
                  AI Chatbot
                </a>

                <a href="#" className="hover:text-blue-600">
                  Ranking Intelligence
                </a>

                <a href="#" className="hover:text-blue-600">
                  Citation Monitoring
                </a>

              </div>
            </div>
          </div>

          {/* Dropdown 2 - Services */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              Listings & SEO Services
              <ChevronDown
                size={15}
                className="group-hover:rotate-180 transition-transform"
              />
            </button>

            <div className="absolute top-full left-0 pt-5 hidden group-hover:block group-focus-within:block z-50">
              <div className="bg-white w-72 rounded-2xl shadow-xl border border-blue-100 p-5 flex flex-col gap-4">

                <a href="#" className="hover:text-blue-600">
                  Medical Listings & Local SEO Services
                </a>

                <a href="#" className="hover:text-blue-600">
                  Medical Website Design
                </a>

                <a href="#" className="hover:text-blue-600">
                  Medical SEO Services
                </a>

                <a href="#" className="hover:text-blue-600">
                  Citation Builder
                </a>

                <a href="#" className="hover:text-blue-600">
                  Citation Tracker
                </a>

                <a href="#" className="hover:text-blue-600">
                  GBP Reinstatement Service
                </a>

                <a href="#" className="hover:text-blue-600">
                  Yext Replacement Service
                </a>

              </div>
            </div>
          </div>

          {/* Dropdown 3 - Free Tools */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              Free Tools
              <ChevronDown
                size={15}
                className="group-hover:rotate-180 transition-transform"
              />
            </button>

            <div className="absolute top-full left-0 pt-5 hidden group-hover:block group-focus-within:block z-50">
              <div className="bg-white w-72 rounded-2xl shadow-xl border border-blue-100 p-5 flex flex-col gap-4">

                <a href="#" className="hover:text-blue-600">
                  Local Search Preview Tool
                </a>

                <a href="#" className="hover:text-blue-600">
                  Competitor Breakdown Tool
                </a>

                <a href="#" className="hover:text-blue-600">
                  Google Review Link Generator
                </a>

                <a href="#" className="hover:text-blue-600">
                  Missed Revenue Calculator
                </a>

              </div>
            </div>
          </div>

          {/* Normal Links */}
          <a href="#" className="hover:text-blue-600 transition-colors">
            Learning Hub
          </a>

          <a href="#" className="hover:text-blue-600 transition-colors">
            Pricing
          </a>

        </div>

        {/* CTA Button */}
        <a
          href="#search"
          className="bg-[#2867DF] text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 shrink-0 hover:bg-[#1D4FB5] hover:shadow-lg transition-all duration-300"
        >
          Run Free Scan
          <ArrowUpRight size={17} />
        </a>

      </nav>
    </header>
  );
}

export default Navbar;
