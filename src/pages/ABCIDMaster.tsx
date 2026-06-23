import React, { useState, useEffect } from 'react';
import { Save, User, Hash, FileText, CheckCircle2 } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedAbcId = localStorage.getItem('abcId');
    const savedAadhaar = localStorage.getItem('aadhaarName');
    if (savedAbcId) setAbcId(savedAbcId);
    if (savedAadhaar) setAadhaarName(savedAadhaar);
  }, []);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-100">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABCID Master
          </h1>
        </div>

        <div className="p-6">
          {showSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 size={18} />
              <p className="text-sm font-medium">ABC ID details saved successfully!</p>
            </div>
          )}

          {/* Student Info Grid (Read Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-gray-50 p-4 rounded-lg">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Hash size={12} className="text-aums-teal" />
                Roll No
              </label>
              <p className="text-sm font-semibold text-gray-700">AV.SC.U4AIE23132</p>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <User size={12} className="text-aums-teal" />
                Name
              </label>
              <p className="text-sm font-semibold text-gray-700">ORUGANTI BAGAVATH SAI</p>
            </div>
          </div>

          {/* Input Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="space-y-2">
              <label className="text-[12px] font-bold text-gray-600">
                ABC ID <span className="text-red-500">*</span>
              </label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  placeholder="Enter 12 digit ABC ID"
                  className="w-full bg-transparent border-none outline-none text-[14px] py-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-bold text-gray-600">
                Name as per Aadhaar <span className="text-red-500">*</span>
              </label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  placeholder="Full Name as per Aadhaar"
                  className="w-full bg-transparent border-none outline-none text-[14px] py-1"
                />
              </div>
            </div>

            <div className="md:col-span-2 pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={handleSave}
                className="text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5 bg-aums-teal hover:bg-aums-teal-dark"
              >
                <div className="flex items-center gap-2">
                  <Save size={16} /> SAVE ABC ID
                </div>
              </button>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex gap-3">
              <FileText className="text-blue-600 shrink-0" size={20} />
              <div>
                <p className="text-[13px] font-bold text-blue-800 mb-1">Instructions:</p>
                <ul className="text-[12px] text-blue-700 space-y-1 list-disc ml-4 leading-relaxed">
                  <li>ABC ID must be a 12-digit numeric value.</li>
                  <li>Ensure the name matches exactly as it appears on your Aadhaar card.</li>
                  <li>This information is mandatory for credit transfers and degree issuance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
