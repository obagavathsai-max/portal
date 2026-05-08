import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState(localStorage.getItem('userAbcId') || '123456789012');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('userAadhaarName') || 'ORUGANTI BAGAVATH SAI');
  const [success, setSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userAbcId', abcId);
    localStorage.setItem('userAadhaarName', aadhaarName);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mt-2 mb-3">
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

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden p-6">
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-200 text-green-700 rounded text-sm font-medium">
            ABC details saved successfully!
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-600">
                ABC ID <span className="text-red-500">*</span>
              </label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full bg-transparent text-sm py-1.5 outline-none font-medium text-gray-700"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-600">
                Aadhaar Name <span className="text-red-500">*</span>
              </label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full bg-transparent text-sm py-1.5 outline-none font-medium text-gray-700"
                  required
                />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
            >
              SAVE ABC ID
            </button>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <h3 className="text-sm font-bold text-gray-700 mb-3">Important Instructions</h3>
          <ul className="text-xs text-gray-500 space-y-2 list-disc pl-4 leading-relaxed">
            <li>Ensure that your ABC ID is 12 digits long and correctly represents your academic bank of credits account.</li>
            <li>The name provided must exactly match the name on your Aadhaar card for verification purposes.</li>
            <li>In case of any discrepancies, please contact the academic office immediately.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
