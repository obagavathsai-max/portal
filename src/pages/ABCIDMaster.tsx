import React, { useState, useEffect } from 'react';
import { ChevronRight, Save, Info } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedId = localStorage.getItem('abcId');
    const savedName = localStorage.getItem('aadhaarName');
    if (savedId) setAbcId(savedId);
    if (savedName) setAadhaarName(savedName);
  }, []);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-4 py-2.5 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            Student Information
          </h1>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Roll No</label>
              <div className="text-[13px] font-semibold text-gray-800">AV.SC.U4AIE23132</div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Student Name</label>
              <div className="text-[13px] font-semibold text-gray-800">ORUGANTI BAGAVATH SAI</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-4 py-2.5 border-b border-gray-200 bg-aums-teal-light flex items-center justify-between">
          <h2 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABC ID Details
          </h2>
          <div className="flex items-center gap-1.5 text-blue-600">
            <Info size={14} />
            <span className="text-[11px] font-bold uppercase underline cursor-pointer">Help</span>
          </div>
        </div>
        <div className="p-6">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-gray-600">ABC ID <span className="text-red-500">*</span></label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-[13px] py-1.5 font-medium"
                  placeholder="Enter your 12 digit ABC ID"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] font-bold text-gray-600">Name as per Aadhaar <span className="text-red-500">*</span></label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-[13px] py-1.5 font-medium"
                  placeholder="Enter name exactly as on Aadhaar"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={handleSave}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SAVE DETAILS
              </button>
              {isSaved && (
                <span className="text-green-600 text-[13px] font-bold flex items-center gap-1 animate-in fade-in duration-300">
                  ✓ Successfully saved
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
