import React from "react";

import Navbar from "../components/Navbar";

import {
  SearchCheckIcon,
  ScanSearch,
  ArrowUpRight
} from "lucide-react";

import SeoImage from "../assets/home-page1.png.avif";

import GBPImage from "../assets/gbp-management-dashboard.avif";

import AiChatbot from "../assets/ai-chatbot-dashboard.avif";

import RankingIntelligence from "../assets/ranking-intelligence-dashboard.avif";

import CitationMonitoring from "../assets/citation-monitoring-dashboard.avif";

import HowItWorks from "../components/HowItWorks";

import WhatWeAnalyze from "../components/WhatWeAnalyze";

import SpecialtyGuides from "../components/SpecialtyGuides";

import SampleSnapshot from "../components/SampleSnapshot";

import ClinicCTA from "../components/ClinicCTA";

import Details from "../components/Details";

import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <Navbar />

      <div className="bg-white min-h-screen">
        <div className="bg-blue-100 mx-4 mt-5 py-5 rounded-2xl flex items-center justify-center gap-8 top-50  ">
          <h2 className="text-xl text-blue-600">
            FREE INSTANT SCAN - NO CREDIT CARD REQUIRED
          </h2>
        </div>

        <div className="max-w-7xl mx-auto  px-8 py-20 flex flex-col lg:flex-row justify-between gap-16">
          <div className="lg:w-3/5">
            <h1 className="text-5xl lg:text-6xl font-normal leading-tight mt-6 tracking-tight">
              How Visible Is Your
              <span className="font-bold text-blue-500">
                {" "}
                Clinic on Google
              </span>
            </h1>

            <p className="text-gray-800 text-lg mt-7 leading-8">
              Search your clinic name below for a fast local visibility check.
              Then use Curex to fix listings, improve GBP, strengthen map-pack
              rankings, and convert more of the traffic your clinic already
              earns.
            </p>

            <p className="mt-8 text-gray-700 text-lg leading-8">
              Trusted by clinics across the USA to improve visibility and
              patient growth.
            </p>

            <a
              href="#search"
              className="inline-block text-blue-500 font-semibold mt-12 hover:underline"
            >
              Check your clinic's visibility →
            </a>

            <hr className="my-10" />

            <div className="flex flex-wrap gap-6 text-lg text-gray-600">
              <span>🇺🇸 USA-based data</span>
              <span> Fast visibility check</span>
              <span> No credit card required</span>
            </div>
          </div>

          <div id="search" className="lg:w-2/5">
            <div className="bg-blue-100 p-8 rounded-2xl">
              <p className="text-sm text-blue-600 font-semibold">
                CUREX MARKETING
              </p>

              <h2 className="text-4xl mt-5 leading-tight">
                Your Clinic.
                <br />
                More Visibility.
              </h2>

              <p className="text-gray-600 mt-5">
                Search your clinic name and discover your local visibility.
              </p>

              <form className="mt-8">
                <label className="block mb-3 font-medium">Clinic Name</label>
                <SearchCheckIcon
                  size={20}
                  className="absolute mt-4 ml-3 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search your clinic name..."
                  required
                  className="w-full p-4 rounded-xl bg-white border border-gray-200 outline-none focus:border-green-700 pl-10"
                />

                <button
                  type="submit"
                  className="bg-blue-500 text-white w-full py-4 rounded-lg mt-4 hover:bg-green-800"
                >
                  Search to Start →
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-8 border-t border-gray-300 pt-5">
                ✓ Free instant scan
                <br />✓ No credit card required
              </p>
            </div>
          </div>
        </div>

        <div classname="max-w-7xl mx-auto px-8 py-20"></div>

        <img src={SeoImage} alt="SEO Image" className="w-half mt-6 p-20 " />
        <section className="bg-[#F7F7F2] py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="inline-block bg-blue-100 text-blue-600 text-lg tracking-widest px-5 py-2 rounded-full">
              WHAT HAPPENS NEXT
            </p>

            <h2 className="text-4xl md:text-5xl font-medium text-black mt-8 leading-tight tracking-tight">
              The free scan shows the gaps. Curex helps you fix{" "}
              <span className="text-blue-600 ">them.</span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg mt-6 leading-8 max-w-2xl mx-auto">
              Your homepage scanner is the entry point. The broader platform
              helps clinics improve visibility, control listings, optimize
              Google Business Profiles, and turn more local traffic into patient
              inquiries.
            </p>

            <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-9"></div>
          </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">

      
          <div className="bg-white p-4 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300">
            <img
              src={GBPImage}
              alt="Local SEO"
              className="w-full h-auto  rounded-xl hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mt-5">
            Control GBP and Listening Accuracy
            </h3>
            <p className="text-gray-500 mt-2">
              Monitor and manage your Google Business Profile and local listings to ensure accuracy and consistency across platforms.
            </p>
          </div>

     
          <div className="bg-white p-4 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300">
            <img
              src={AiChatbot}
              alt="Google Business Profile"
              className="w-full h-auto  rounded-xl hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mt-5">
              Convert More patinets into Visitors
            </h3>
            <p className="text-gray-500 mt-2">
             Use automation to capture leads , answers questions, and turn traffic into more patient inquiries.
            </p>
          </div>

        
          <div className="bg-white p-4 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300">
            <img
              src={RankingIntelligence}
              alt="Business Listings"
              className="w-full h-auto  rounded-xl hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mt-5">
              Improve Local Rankings 
            </h3>
            <p className="text-gray-500 mt-2">
            Turn the audit into action with ranking insights,map visibility Tools and Medical SEO Strategy
            </p>
          </div>


          <div className="bg-white p-4 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-all duration-300">
            <img
              src={CitationMonitoring}
              alt="Patient Growth"
              className="w-full h-auto  rounded-xl hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-xl font-semibold mt-5">
              Clean up and Expand listings
            </h3>
            <p className="text-gray-500 mt-2">
             Strengthn citation Coverage , improve consistency and build a healther local presence across key Directroies
            </p>
          </div>

        </div>
        </section>

        <section>
          <HowItWorks/>
        </section>

        <section>
          <WhatWeAnalyze/>
        </section>

        <section>
          <SpecialtyGuides/>
        </section>

        <section>
          <SampleSnapshot/>
        </section>

        <section>
          <ClinicCTA/>
        </section>

        <section>
          <Details/>
        </section>

        <section>
          <Footer/>
        </section>
      </div>

    </>
  );
}

export default Homepage;
