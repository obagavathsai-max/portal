import React, { useState, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedAbcId = localStorage.getItem('abcId');
    const savedAadhaarName = localStorage.getItem('aadhaarName');
    if (savedAbcId) setAbcId(savedAbcId);
    if (savedAadhaarName) setAadhaarName(savedAadhaarName);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4">
      {/* Page Heading */}
      <div className="flex items-center gap-2 mt-2 mb-6">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
        </div>
        <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
          ABCID Master
        </h1>
      </div>

      {/* Main Content Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <span className="text-[13px] font-semibold text-aums-teal">ABCID Master</span>
          <div className="flex gap-1.5">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {showSuccess && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 text-[13px] font-medium rounded-sm">
              Student details saved successfully.
            </div>
          )}

          {/* Read-only Student Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Roll No</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[13px] font-semibold text-gray-800">AV.SC.U4AIE23132</span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Name</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[13px] font-semibold text-gray-800">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase">ABC ID <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-1 text-[13px] font-medium focus:outline-none focus:border-aums-teal"
                  placeholder="Enter ABC ID"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase">Name (as in Aadhaar) <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-1 text-[13px] font-medium focus:outline-none focus:border-aums-teal"
                  placeholder="Enter Name"
                  required
                />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                type="submit"
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
