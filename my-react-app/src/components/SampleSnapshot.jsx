
import React from "react";
import { FileText } from "lucide-react";
import sampleSnapshotImage from "../assets/example-report-preview.avif";

function SampleSnapshot() {
  return (
    <section className="bg-blue-100 py-16 px-6">

      <div className="max-w-6xl mx-auto text-center">

     
        <p className="inline-flex items-center gap-2 bg-[#EDF3FF] text-blue-900 text-m font-semibold px-4 py-2 rounded-full">

          <span className="w-2 h-2 bg-green-500 rounded-full"></span>

          SAMPLE SNAPSHOT
        </p>

    
        <h2 className="text-3xl md:text-4xl font-semibold text-[#111827] mt-5 tracking-tight">

          Your Clinic Found Locally{" "}

          <span className="text-blue-900">
            Chosen First
          </span>

        </h2>

      
        <p className="text-gray-500 text-sm mt-3">
          Real Reports. Real Insights. Real Results.
        </p>

      
        <div className="flex justify-center mt-12">

          <div className="inline-flex items-center gap-3 bg-[#FFFCF2] border border-yellow-300 text-[#A66B2E] px-5 py-3 rounded-2xl">

            <FileText size={18} />

            <p className="text-lg">
              Full reports include audit pages, score breakdowns,
              competitor insights, and a prioritized fix list
            </p>

          </div>

        </div>

      </div>

      <img src ={sampleSnapshotImage} alt="Sample Snapshot" className="mx-auto mt-12 rounded-2xl shadow-lg" />

    </section>
  );
}

export default SampleSnapshot;
