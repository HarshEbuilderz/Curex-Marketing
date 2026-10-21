
import React from "react";
import {
  Search,
  ArrowRight,
  ScanSearch,
  ShieldCheck
} from "lucide-react";

function ClinicCTA() {
  return (
    <section className="bg-blue-200 px-6 py-16">

      <div className="max-w-7xl mx-auto">

   
        <div className="bg-[#2359DB] rounded-2xl p-8 md:p-14 lg:p-16">

      
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            
            <div>

              <p className="text-blue-200 text-xs font-semibold tracking-widest mb-6">
                CUREX / FREE SCAN
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
                Ready to See How Your Clinic Ranks?
              </h2>

              <p className="text-blue-100 text-lg mt-6 leading-8">
                Search your clinic above for an instant
                visibility preview, then unlock the full
                Local SEO report by email in under 2 minutes.
              </p>

            </div>

           
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:-translate-y-2 transition-all duration-300">

      
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">

                <ScanSearch
                  size={32}
                  className="text-[#2359DB]"
                />

              </div>

              <h3 className="text-2xl font-semibold text-[#1B3263] mt-8">
                Your local visibility starts here.
              </h3>

           
              <a
                href="#search"
                className="bg-[#2359DB] text-white w-full mt-8 px-6 py-4 rounded-xl flex items-center justify-between font-medium hover:bg-[#1745B5] hover:shadow-lg transition-all duration-300"
              >
                <span className="flex items-center gap-3">
                  <Search size={20} />
                  Search My Clinic Now
                </span>

                <ArrowRight size={20} />
              </a>

              <div className="flex items-start gap-3 mt-7">

                <ShieldCheck
                  size={20}
                  className="text-[#2359DB] shrink-0"
                />

                <p className="text-gray-500 text-sm leading-6">
                  No credit card. Instant preview.
                  Full report delivered by email.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ClinicCTA;
