import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState(localStorage.getItem('abcId') || '');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('aadhaarName') || '');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('abcId')) {
      setIsSaved(true);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setIsSaved(true);
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
          ABCID MASTER
        </h1>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-gray-700">
                ABC ID <span className="text-red-500">*</span>
              </label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  placeholder="Enter ABC ID"
                  className="w-full bg-transparent border-none outline-none text-[13px] py-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[13px] font-bold text-gray-700">
                NAME AS PER AADHAAR <span className="text-red-500">*</span>
              </label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  placeholder="Enter Name as per Aadhaar"
                  className="w-full bg-transparent border-none outline-none text-[13px] py-1"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <button
              onClick={handleSave}
              className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
            >
              SAVE
            </button>
          </div>

          {isSaved && (
            <div className="mt-4 p-3 bg-green-50 text-green-700 text-xs rounded border border-green-200">
              ABC ID details have been saved successfully.
            </div>
          )}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded p-4 text-[13px] text-blue-800 leading-relaxed">
        <p className="font-bold mb-2">Important Note:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Ensure your ABC ID is correct as per the Digilocker portal.</li>
          <li>Your name should exactly match the name mentioned on your Aadhaar card.</li>
          <li>Academic credits will be transferred to your ABC account based on this information.</li>
        </ul>
      </div>
    </div>
  );
}
