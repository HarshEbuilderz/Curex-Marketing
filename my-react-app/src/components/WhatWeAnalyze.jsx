
import React from "react";
import {
  MapPin,
  Star,
  ChartNoAxesColumn,
  Globe,
  ShieldCheck,
  Zap
} from "lucide-react";

function WhatWeAnalyze() {
  return (
    <section className="bg-[#F1F3EC] py-20 px-6">

      <div className="max-w-7xl mx-auto">

   
        <div className="text-center mb-12">

          <p className="text-green-800 text-sm tracking-widest font-semibold">
            SEO SIGNALS
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#263A2C] mt-4">
            What We{" "}
            <span className="text-green-800 ">
              Analyze
            </span>
          </h2>

          <p className="text-gray-500 mt-4">
            A 6-point Local SEO health check built for medical and aesthetic clinics
          </p>

        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

         
          <div className="bg-[#E0EBDD] p-7 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center">
              <MapPin size={26} className="text-green-800" />
            </div>

            <h3 className="text-xl font-semibold text-[#293E2F] mt-8">
              Local Citations
            </h3>

            <p className="text-gray-600 mt-3">
              Check presence across 30+ key directories
            </p>

          </div>

       
          <div className="bg-[#F0E8D8] p-7 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center">
              <Star size={26} className="text-green-800" />
            </div>

            <h3 className="text-xl font-semibold text-[#293E2F] mt-8">
              Reviews & Ratings
            </h3>

            <p className="text-gray-600 mt-3">
              Analyze reputation vs local competitors
            </p>

          </div>

       
          <div className="bg-[#E8E8DF] p-7 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center">
              <ChartNoAxesColumn size={26} className="text-green-800" />
            </div>

            <h3 className="text-xl font-semibold text-[#293E2F] mt-8">
              Competitor Analysis
            </h3>

            <p className="text-gray-600 mt-3">
              See who’s outranking you and why
            </p>

          </div>

       
          <div className="bg-[#E7EDE5] p-7 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center">
              <Globe size={26} className="text-green-800" />
            </div>

            <h3 className="text-xl font-semibold text-[#293E2F] mt-8">
              Website SEO Signals
            </h3>

            <p className="text-gray-600 mt-3">
              Schema, mobile, HTTPS, and more
            </p>

          </div>

    
          <div className="bg-[#F0E9E1] p-7 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center">
              <ShieldCheck size={26} className="text-green-800" />
            </div>

            <h3 className="text-xl font-semibold text-[#293E2F] mt-8">
              Google Business Profile
            </h3>

            <p className="text-gray-600 mt-3">
              Completeness score and optimization gaps
            </p>

          </div>

     
          <div className="bg-[#DCE9D9] p-7 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center">
              <Zap size={26} className="text-green-800" />
            </div>

            <h3 className="text-xl font-semibold text-[#293E2F] mt-8">
              Ranking Visibility
            </h3>

            <p className="text-gray-600 mt-3">
              Your local search visibility position
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhatWeAnalyze;
