import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState(localStorage.getItem('student_abcId') || '');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('student_aadhaarName') || '');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    localStorage.setItem('student_abcId', abcId);
    localStorage.setItem('student_aadhaarName', aadhaarName);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
        </div>
        <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
          Update ABC ID
        </h1>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 max-w-4xl">
        {showSuccess && (
          <div className="mb-4 p-3 bg-green-100 border border-green-200 text-green-700 text-sm rounded">
            ABC ID details saved successfully!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Left Column: Read-only info */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Roll No</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[13px] text-gray-700 font-medium">AV.SC.U4AIE23132</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Name</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[13px] text-gray-700 font-medium uppercase">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Input fields */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                ABC ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={abcId}
                onChange={(e) => setAbcId(e.target.value)}
                placeholder="Enter ABC ID"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-[13px] focus:outline-none focus:border-aums-teal transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Name as per Aadhaar <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={aadhaarName}
                onChange={(e) => setAadhaarName(e.target.value)}
                placeholder="Enter Name as per Aadhaar"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-[13px] focus:outline-none focus:border-aums-teal transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={handleSave}
            className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
          >
            SAVE DETAILS
          </button>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 border-l-4 border-aums-teal text-[13px] text-gray-700 leading-relaxed max-w-4xl">
        <p className="font-bold mb-2">Instructions for ABC ID:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Ensure the ABC ID entered is correct as per your DigiLocker account.</li>
          <li>The name as per Aadhaar should match exactly with your Aadhaar card.</li>
          <li>ABC ID is mandatory for credit transfers and degree issuance.</li>
        </ul>
      </div>
    </div>
  );
}
