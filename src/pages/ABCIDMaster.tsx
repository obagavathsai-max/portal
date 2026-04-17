import React, { useState } from 'react';
import { HelpCircle, ExternalLink, Info } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('123456789012');
  const [aadhaarName, setAadhaarName] = useState('ORUGANTI BAGAVATH SAI');

  return (
    <div className="space-y-5">
      {/* Header section with squares icon */}
      <div className="flex items-center gap-2 mb-1">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
        </div>
        <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
          ABCID MASTER
        </h1>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        {/* Gray Header */}
        <div className="bg-aums-bg-main px-4 py-2 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-gray-700">ABCID Master</span>
          </div>
          <div className="flex gap-1">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">
              <ExternalLink size={12} strokeWidth={2.5} /> Link
            </button>
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* ABC ID Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-gray-700">
                ABC ID <span className="text-red-500">*</span>
              </label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-main">
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full bg-transparent outline-none text-[14px] py-1"
                />
              </div>
            </div>

            {/* Name as per Aadhaar Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[13px] font-bold text-gray-700">
                Name as per Aadhaar <span className="text-red-500">*</span>
              </label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-main">
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full bg-transparent outline-none text-[14px] py-1"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
            >
              Update
            </button>
          </div>
        </div>
      </div>

      {/* Info Notice */}
      <div className="flex items-start gap-2 text-[12px] text-gray-600 px-1 italic">
        <Info size={14} className="mt-0.5 shrink-0" />
        <p>Please ensure that your ABC ID and name match exactly with your Aadhaar records to avoid verification issues.</p>
      </div>
    </div>
  );
}
