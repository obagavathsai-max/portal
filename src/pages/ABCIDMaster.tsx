import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');

  useEffect(() => {
    const savedAbcId = localStorage.getItem('userAbcId');
    const savedAadhaarName = localStorage.getItem('userAadhaarName');
    if (savedAbcId) setAbcId(savedAbcId);
    else setAbcId('4125 0125 9411');
    if (savedAadhaarName) setAadhaarName(savedAadhaarName);
    else setAadhaarName('ORUGANTI BAGAVATH SAI');
  }, []);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userAbcId', abcId);
    localStorage.setItem('userAadhaarName', aadhaarName);
    alert('ABCID details saved successfully!');
  };

  return (
    <div className="space-y-4">
      {/* Page Header */}
      <div className="flex items-center gap-2 mt-2 mb-4">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="w-1.5 h-1.5 bg-[var(--color-aums-teal)]"></div>
          <div className="w-1.5 h-1.5 bg-[var(--color-aums-teal)]"></div>
          <div className="w-1.5 h-1.5 bg-[var(--color-aums-teal)]"></div>
          <div className="w-1.5 h-1.5 bg-[var(--color-aums-teal)]"></div>
        </div>
        <h1 className="text-[14px] font-bold text-[var(--color-aums-teal)] uppercase tracking-wide">
          ABCID MASTER
        </h1>
      </div>

      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleUpdate} className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* ABC ID Field */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-gray-700">
                  ABC ID <span className="text-red-500">*</span>
                </label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-[var(--color-aums-bg-main)]">
                  <input
                    type="text"
                    value={abcId}
                    onChange={(e) => setAbcId(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-[14px] py-1 text-gray-800"
                    placeholder="Enter ABC ID"
                    required
                  />
                </div>
              </div>

              {/* Name as per Aadhaar Field */}
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-gray-700">
                  Name as per Aadhaar <span className="text-red-500">*</span>
                </label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-[var(--color-aums-bg-main)]">
                  <input
                    type="text"
                    value={aadhaarName}
                    onChange={(e) => setAadhaarName(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-[14px] py-1 text-gray-800"
                    placeholder="Enter Name as per Aadhaar"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <button
                type="submit"
                className="bg-[var(--color-aums-teal)] hover:bg-[var(--color-aums-teal-dark)] text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SAVE
              </button>

              <div className="space-y-1 mt-2">
                <p className="text-[13px] font-bold text-gray-800">Note:</p>
                <ul className="list-decimal list-inside text-[12px] text-gray-600 space-y-1 pl-1">
                  <li>Please make sure that the ABCID is correct.</li>
                  <li>Academic bank of credits will use this ABCID to credit your credits.</li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
