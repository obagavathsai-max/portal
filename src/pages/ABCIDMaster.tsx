import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedAbcId = localStorage.getItem('abcId');
    const savedName = localStorage.getItem('aadhaarName');
    if (savedAbcId) setAbcId(savedAbcId);
    if (savedName) setAadhaarName(savedName);
  }, []);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
        </div>
        <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
          ABC ID MASTER
        </h1>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {/* Left Column: Read-only info */}
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">Roll No</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[13px] text-gray-700">AV.SC.U4AIE23132</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">Student Name</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[13px] text-gray-700">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editable info */}
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">ABC ID</label>
              <input
                type="text"
                value={abcId}
                onChange={(e) => setAbcId(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-1 text-[13px] focus:outline-none focus:border-aums-teal"
                placeholder="Enter ABC ID"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">Name as per Aadhaar</label>
              <input
                type="text"
                value={aadhaarName}
                onChange={(e) => setAadhaarName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-1 text-[13px] focus:outline-none focus:border-aums-teal"
                placeholder="Enter name as per Aadhaar"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <button
            onClick={handleSave}
            className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
          >
            SUBMIT
          </button>

          {isSaved && (
            <div className="text-green-600 text-[13px] font-bold animate-in fade-in duration-300">
              ✓ Information Saved Successfully
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 text-[12px] text-blue-700">
        <p className="font-bold mb-1">Information:</p>
        <p>Please ensure that the ABC ID and Aadhaar Name entered are correct as per your official documents.</p>
      </div>
    </div>
  );
}
