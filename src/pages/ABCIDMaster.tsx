import React, { useState } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState(localStorage.getItem('abcId') || '');
  const [success, setSuccess] = useState(false);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mt-6 mb-3">
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

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden p-6">
        {success && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-sm text-sm font-bold">
            ABC ID Updated Successfully!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Student Roll No</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[14px] font-semibold text-gray-700">AV.SC.U4AIE23132</span>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Student Name</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[14px] font-semibold text-gray-700 uppercase">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">ABC ID <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={abcId}
                onChange={(e) => setAbcId(e.target.value)}
                placeholder="Enter ABC ID"
                className="w-full border border-gray-300 rounded-md px-3 py-1 text-[14px] focus:border-aums-teal focus:outline-none transition-colors"
              />
            </div>
            <div className="pt-2">
              <button
                onClick={handleSave}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SUBMIT ABCID
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6">
          <h3 className="text-sm font-bold text-gray-800 mb-2 uppercase tracking-tight">Instructions:</h3>
          <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4">
            <li>ABC ID is mandatory for all students as per UGC norms.</li>
            <li>Ensure the name on Aadhaar matches your university records.</li>
            <li>For any discrepancy, contact the academic cell.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
