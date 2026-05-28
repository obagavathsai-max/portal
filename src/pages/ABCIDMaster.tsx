import React, { useState, useEffect } from 'react';
import { Save, Search, User, CreditCard, ShieldCheck } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState(localStorage.getItem('abcId') || '');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('aadhaarName') || '');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (abcId && aadhaarName) {
      localStorage.setItem('abcId', abcId);
      localStorage.setItem('aadhaarName', aadhaarName);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABCID Master
          </h1>
        </div>

        <div className="p-6">
          {/* Student Info Card */}
          <div className="bg-aums-bg-main p-4 rounded border border-gray-200 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Roll No</p>
              <p className="text-sm font-semibold text-gray-800">AV.SC.U4AIE23132</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</p>
              <p className="text-sm font-semibold text-gray-800">ORUGANTI BAGAVATH SAI</p>
            </div>
          </div>

          <form onSubmit={handleSave} className="max-w-xl space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700 block uppercase tracking-wider">
                  ABC ID (12 Digit Number) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <CreditCard size={16} />
                  </div>
                  <input
                    type="text"
                    value={abcId}
                    onChange={(e) => setAbcId(e.target.value)}
                    placeholder="Enter 12 digit ABC ID"
                    required
                    maxLength={12}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-aums-teal focus:ring-1 focus:ring-aums-teal/10 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-700 block uppercase tracking-wider">
                  Name as per Aadhaar <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={16} />
                  </div>
                  <input
                    type="text"
                    value={aadhaarName}
                    onChange={(e) => setAadhaarName(e.target.value)}
                    placeholder="Enter name exactly as on Aadhaar"
                    required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:border-aums-teal focus:ring-1 focus:ring-aums-teal/10 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto bg-aums-teal hover:bg-aums-teal-dark text-white px-8 py-2.5 rounded text-[13px] font-bold shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Save size={16} />
                SAVE DETAILS
              </button>

              {isSaved && (
                <div className="flex items-center gap-2 text-green-600 text-[13px] font-semibold animate-in fade-in slide-in-from-left-2">
                  <ShieldCheck size={18} />
                  Saved Successfully
                </div>
              )}
            </div>
          </form>

          {/* Instructions */}
          <div className="mt-12 p-4 bg-orange-50 border border-orange-100 rounded text-[12px] text-orange-800 space-y-2">
            <p className="font-bold uppercase tracking-wider flex items-center gap-2">
              <Search size={14} />
              Important Instructions:
            </p>
            <ul className="list-disc ml-4 space-y-1">
              <li>Academic Bank of Credits (ABC) ID is mandatory for all students.</li>
              <li>Ensure the ABC ID entered is correct and belongs to you.</li>
              <li>Name should be exactly as it appears on your Aadhaar card.</li>
              <li>Once saved, any changes require approval from the academic office.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
