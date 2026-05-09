import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState(() => localStorage.getItem('abcId') || '9876 5432 1098');
  const [aadhaarName, setAadhaarName] = useState(() => localStorage.getItem('aadhaarName') || 'ORUGANTI BAGAVATH SAI');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  useEffect(() => {
    const savedAbcId = localStorage.getItem('abcId');
    const savedName = localStorage.getItem('aadhaarName');
    if (savedAbcId) setAbcId(savedAbcId);
    if (savedName) setAadhaarName(savedName);
  }, []);

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABCID Master
          </h1>
        </div>

        <div className="p-6">
          {showSuccess && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 size={18} />
              <span className="text-sm font-medium">ABC ID details updated successfully!</span>
            </div>
          )}

          <div className="max-w-xl space-y-6">
            <div className="space-y-1">
              <label className="block text-[13px] font-bold text-gray-700">ABC ID <span className="text-aums-red-error">*</span></label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-[13px] text-gray-800 py-1"
                />
              </div>
              <p className="text-[11px] text-gray-500 italic">Example: 123 456 789 012</p>
            </div>

            <div className="space-y-1">
              <label className="block text-[13px] font-bold text-gray-700">NAME AS PER AADHAAR <span className="text-aums-red-error">*</span></label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-[13px] text-gray-800 py-1 uppercase"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleSave}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
