import React, { useState, useEffect } from 'react';
import { Save, CheckCircle, Info } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedAbcId = localStorage.getItem('abcId');
    const savedAadhaarName = localStorage.getItem('aadhaarName');
    if (savedAbcId) setAbcId(savedAbcId);
    if (savedAadhaarName) setAadhaarName(savedAadhaarName);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded shadow-md overflow-hidden border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light flex items-center justify-between">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABC ID Registration
          </h1>
          <div className="flex items-center gap-2 text-[11px] font-bold text-aums-teal bg-white/50 px-2 py-1 rounded">
            <Info size={14} />
            Mandatory for Exam Registration
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Roll No</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[13px] font-semibold text-gray-700">AV.SC.U4AIE23132</span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Student Name</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[13px] font-semibold text-gray-700">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-gray-600">ABC ID (12 Digit Number) *</label>
                <input
                  type="text"
                  maxLength={12}
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 12 digit ABC ID"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-gray-600">Name as per Aadhaar *</label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  placeholder="Enter name exactly as in Aadhaar"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <p className="text-[11px] text-gray-400 italic">
                * Please ensure the details match your official documents.
              </p>
              <button
                type="submit"
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5 flex items-center gap-2"
              >
                <Save size={16} />
                SAVE DETAILS
              </button>
            </div>
          </form>

          {saved && (
            <div className="mt-6 flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded border border-green-100 animate-in fade-in slide-in-from-top-2">
              <CheckCircle size={18} />
              <span className="text-sm font-bold">ABC ID details saved successfully!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
