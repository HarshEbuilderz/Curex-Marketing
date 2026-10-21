
import React from "react";
import {
  House,
  BriefcaseBusiness,
  Wrench,
  BookOpen,
  ShieldCheck
} from "lucide-react";

function Details() {
  return (
    <section className="bg-blue-100 px-6 py-16">

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-12">

          <h2 className="text-5xl font-extrabold text-[#2456AF]">
            CUREX
          </h2>

          <p className="text-lg font-bold tracking-[4px] text-[#477EC8]">
            MARKETING
          </p>

          <p className="text-gray-800 mt-5 max-w-2xl mx-auto leading-7">
            Local SEO software, services, and visibility tools
            for clinics, local businesses, agencies, and
            multi-location brands.
          </p>

        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          
          <div className="bg-white p-7 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <House size={26} className="text-blue-600 mb-5" />

            <h3 className="text-xl font-semibold text-[#244A8E] mb-5">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-gray-800">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/pricing" className="hover:text-blue-600">Pricing</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </div>

          </div>

          {/* Solutions */}
          <div className="bg-white p-7 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <BriefcaseBusiness size={26} className="text-blue-600 mb-5" />

            <h3 className="text-xl font-semibold text-[#244A8E] mb-5">
              Solutions
            </h3>

            <div className="flex flex-col gap-3 text-gray-800">
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

       
          <div className="bg-white p-7 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <Wrench size={26} className="text-blue-600 mb-5" />

            <h3 className="text-xl font-semibold text-[#244A8E] mb-5">
              Free Tools
            </h3>

            <div className="flex flex-col gap-3 text-gray-800">
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

         
          <div className="bg-white p-7 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <BookOpen size={26} className="text-blue-600 mb-5" />

            <h3 className="text-xl font-semibold text-[#244A8E] mb-5">
              Guides
            </h3>

            <div className="flex flex-col gap-3 text-gray-800">
              <a href="#" className="hover:text-blue-600">
                Local SEO
              </a>

              <a href="#" className="hover:text-blue-600">
                Learning Hub
              </a>

              <a href="#" className="hover:text-blue-600">
                Top Citation Sources by Country
              </a>

              <a href="#" className="hover:text-blue-600">
                Clinic SEO NAP Variations
              </a>

              <a href="#" className="hover:text-blue-600">
                Hidden Address GBP Guide
              </a>

              <a href="#" className="hover:text-blue-600">
                Clinic Visibility Methodology
              </a>
            </div>

          </div>

         
          <div className="bg-white p-7 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

            <ShieldCheck size={26} className="text-blue-600 mb-5" />

            <h3 className="text-xl font-semibold text-[#244A8E] mb-5">
              Trust
            </h3>

            <div className="flex flex-col gap-3 text-gray-800">
              <a href="#" className="hover:text-blue-600">
                Editorial Team
              </a>

              <a href="#" className="hover:text-blue-600">
                Local SEO Review Team
              </a>

              <a href="#" className="hover:text-blue-600">
                Clinic Directory
              </a>

              <a href="#" className="hover:text-blue-600">
                Sitemap
              </a>
            </div>

          </div>

        </div>

        
      </div>

    </section>
  );
}

export default Details;
