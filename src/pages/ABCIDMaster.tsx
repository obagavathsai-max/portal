import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState(localStorage.getItem('abcId') || '845 231 697 410');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('aadhaarName') || 'ORUGANTI BAGAVATH SAI');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdate = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-200 bg-teal-50">
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

        <div className="p-6">
          <div className="max-w-xl space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-700">
                  ABC ID <span className="text-red-500">*</span>
                </label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-gray-100">
                  <input
                    type="text"
                    value={abcId}
                    onChange={(e) => setAbcId(e.target.value)}
                    className="w-full bg-transparent text-[13px] text-gray-800 outline-none py-1"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[13px] font-bold text-gray-700">
                  Name as per Aadhaar <span className="text-red-500">*</span>
                </label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-gray-100">
                  <input
                    type="text"
                    value={aadhaarName}
                    onChange={(e) => setAadhaarName(e.target.value)}
                    className="w-full bg-transparent text-[13px] text-gray-800 outline-none py-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handleUpdate}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SUBMIT
              </button>
              {showSuccess && (
                <span className="text-green-600 text-[13px] font-bold">Successfully updated!</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
