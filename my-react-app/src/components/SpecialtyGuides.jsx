
import React from "react";
import {
  HeartPulse,
  Sparkles,
  Flower2,
  Heart,
  TrendingUp,
  MapPinned,
  ArrowUpRight
} from "lucide-react";

function SpecialtyGuides() {
  return (
    <section className="bg-green-100 py-20 px-6">

      <div className="max-w-6xl mx-auto">

     
        <div className="mb-12">

          <p className="text-green-800 text-sm font-semibold tracking-widest">
             SPECIALTY GUIDES
          </p>

          <h2 className="text-4xl md:text-5xl font-medium text-[#263C2C] mt-4">
            Local SEO Guides  {" "}
            <span className="text-green-800 ">
              by Specialty.
            </span>
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Different clinics. Different strategies. Better local visibility.
          </p>

        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        
          <div className="bg-[#DDE9D7] rounded-3xl p-8 flex flex-col justify-between min-h-[260px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="flex justify-between items-center">
              <HeartPulse size={32} className="text-[#42664A]" />
              <ArrowUpRight size={22} className="text-[#42664A]" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#263C2C]">
                Local SEO for Dentists
              </h3>

              <p className="text-gray-600 mt-3">
                Rank in Google's local pack for dental searches.
              </p>
            </div>

          </div>

       
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[260px] border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="flex justify-between items-center">
              <Sparkles size={30} className="text-[#42664A]" />
              <ArrowUpRight size={22} className="text-[#42664A]" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#263C2C]">
                Local SEO for Dermatologists
              </h3>

              <p className="text-gray-500 mt-3">
                Attract nearby patients.
              </p>
            </div>

          </div>

       
          <div className="bg-[#E9E5DC] rounded-3xl p-8 flex flex-col justify-between min-h-[260px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="flex justify-between items-center">
              <Flower2 size={30} className="text-[#42664A]" />
              <ArrowUpRight size={22} className="text-[#42664A]" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#263C2C]">
                Local SEO for Med Spas
              </h3>

              <p className="text-gray-600 mt-3">
                Grow aesthetic searches.
              </p>
            </div>

          </div>

         
          <div className="bg-[#F0E9E1] rounded-3xl p-8 flex flex-col justify-between min-h-[260px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="flex justify-between items-center">
              <Heart size={30} className="text-[#42664A]" />
              <ArrowUpRight size={22} className="text-[#42664A]" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#263C2C]">
                Local SEO for Gynecologists
              </h3>

              <p className="text-gray-600 mt-3">
                Improve OB-GYN visibility.
              </p>
            </div>

          </div>

         
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-[260px] border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="flex justify-between items-center">
              <TrendingUp size={30} className="text-[#42664A]" />
              <ArrowUpRight size={22} className="text-[#42664A]" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#263C2C]">
                Google Ranking for Clinics
              </h3>

              <p className="text-gray-500 mt-3">
                Understand your Google position.
              </p>
            </div>

          </div>

      
          <div className="bg-[#294C35] text-white rounded-3xl p-8 flex flex-col justify-between min-h-[260px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

            <div className="flex justify-between items-center">
              <MapPinned size={30} className="text-green-200" />
              <ArrowUpRight size={22} className="text-green-200" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Browse Clinic Directory
              </h3>

              <p className="text-green-100 mt-3">
                Explore clinics across cities and specialties.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SpecialtyGuides;
