
import React from "react";
import { ChartNoAxesCombined } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#EFF5FF] px-6 py-8 border-t border-blue-100">

      <div className="max-w-7xl mx-auto">

        {/* Logo and System Status */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">

        

            <div>
              <h2 className="text-2xl font-extrabold text-[#2864C5] leading-none">
                CUREX
              </h2>

              <p className="text-xs font-bold tracking-[3px] text-[#3979D2]">
                MARKETING
              </p>
            </div>

          </div>

          {/* System Status */}
          <div className="flex items-center gap-3 bg-white border border-blue-300 px-5 py-3 rounded-sm">

           

            <p className="text-sm text-[#47708B]">
              Systems Operational
            </p>

          </div>

        </div>

        {/* Divider */}
        <hr className="border-[#D2E1F6] my-7" />

        {/* Legal Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm text-[#557399]">

          <a href="#" className="hover:text-blue-600 transition">
            Privacy Policy
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Cookie Policy
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Terms of Service
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Disclaimer
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Corrections & Removal
          </a>

        </div>

       
        <p className="text-center text-[#8194AD] text-sm mt-7">
          © 2026 Curex Marketing. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
