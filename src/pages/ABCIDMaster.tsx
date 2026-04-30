import React, { useState } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('123456789012');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4">
      {/* Header heading */}
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

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="max-w-md space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">ABC ID</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <input
                    type="text"
                    value={abcId}
                    onChange={(e) => setAbcId(e.target.value)}
                    className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-700 py-1"
                    placeholder="Enter your ABC ID"
                  />
                </div>
                <p className="text-[10px] text-gray-400">Please ensure your ABC ID matches your academic records.</p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Aadhaar Name</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <input
                    type="text"
                    defaultValue="ORUGANTI BAGAVATH SAI"
                    className="w-full bg-transparent border-none focus:outline-none text-sm text-gray-700 py-1"
                    readOnly
                  />
                </div>
              </div>

              <button
                onClick={handleSave}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SAVE ABCID
              </button>

              {isSaved && (
                <p className="text-green-600 text-xs font-bold animate-pulse">ABC ID updated successfully!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
