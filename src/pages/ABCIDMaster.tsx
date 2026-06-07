import React, { useState } from 'react';
import { Save, User, Fingerprint } from 'lucide-react';

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
      {/* Overview heading */}
      <div className="flex items-center gap-2 mb-3">
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

      {/* Main Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="p-6 space-y-8">
          {/* Student Info Readonly Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-gray-100">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase">Roll No</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[13px] font-bold text-gray-700">AV.SC.U4AIE23132</span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase">Student Name</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[13px] font-bold text-gray-700">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="max-w-md space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[12px] font-bold text-gray-600 uppercase">
                <Fingerprint size={16} className="text-aums-teal" />
                ABC ID
              </label>
              <input
                type="text"
                value={abcId}
                onChange={(e) => setAbcId(e.target.value)}
                placeholder="Enter your 12-digit ABC ID"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-[14px] focus:ring-1 focus:ring-aums-teal outline-none transition-all"
              />
              <p className="text-[11px] text-gray-500 italic">Please ensure your ABC ID is correct as per your DigiLocker account.</p>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={handleSave}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SAVE ABCID
              </button>

              {success && (
                <span className="text-sm font-bold text-green-600 animate-fade-in">
                  ✓ ABC ID saved successfully
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
