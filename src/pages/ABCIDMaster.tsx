import React, { useState } from 'react';
import { Save, ExternalLink } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState(localStorage.getItem('abcId') || '');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('aadhaarName') || '');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABCID Master
          </h1>
          <button className="flex items-center gap-1.5 text-[11px] font-bold text-aums-teal hover:underline uppercase">
            <ExternalLink size={12} />
            What is ABC ID?
          </button>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Student Information</p>
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Roll No</label>
                  <p className="text-[14px] font-bold text-gray-800">AV.SC.U4AIE23132</p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Name</label>
                  <p className="text-[14px] font-bold text-gray-800">ORUGANTI BAGAVATH SAI</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Academic Details</p>
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Batch</label>
                  <p className="text-[14px] font-bold text-gray-800">2023-2027</p>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Program</label>
                  <p className="text-[14px] font-bold text-gray-800">B.Tech Artificial Intelligence</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-md p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-600 uppercase">ABC ID (12 Digits)</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <input
                    type="text"
                    value={abcId}
                    onChange={(e) => setAbcId(e.target.value)}
                    className="w-full bg-transparent text-[14px] font-medium text-gray-800 outline-none py-1.5"
                    placeholder="Enter ABC ID"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-600 uppercase">Name as per Aadhaar</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <input
                    type="text"
                    value={aadhaarName}
                    onChange={(e) => setAadhaarName(e.target.value)}
                    className="w-full bg-transparent text-[14px] font-medium text-gray-800 outline-none py-1.5"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center pt-4 border-t border-gray-200">
              <button
                onClick={handleSave}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SAVE ABCID DETAILS
              </button>
              {isSaved && (
                <p className="text-[11px] font-bold text-green-600 mt-2">Details saved successfully!</p>
              )}
              <p className="text-[10px] text-gray-400 mt-4 text-center max-w-md">
                Note: Please ensure the ABC ID and Name match your official documents. This information is mandatory for credit transfer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
