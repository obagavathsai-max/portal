import React, { useState, useEffect } from 'react';
import { Save, CheckCircle2 } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedAbcId = localStorage.getItem('abcId') || '';
    const savedAadhaarName = localStorage.getItem('aadhaarName') || '';
    setAbcId(savedAbcId);
    setAadhaarName(savedAadhaarName);
  }, []);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4">
      {/* Page Header */}
      <div className="flex items-center gap-2 mb-3">
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
        <div className="p-8 max-w-2xl">
          {showSuccess && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center gap-2 text-sm animate-in fade-in slide-in-from-top-1">
              <CheckCircle2 size={18} />
              ABC ID details updated successfully!
            </div>
          )}

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-[13px] font-bold text-gray-700">
                ABC ID <span className="text-red-500">*</span>
              </label>
              <div className="md:col-span-2 relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full bg-transparent border-none outline-none py-1 text-[13px]"
                  placeholder="Enter ABC ID"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <label className="text-[13px] font-bold text-gray-700">
                Name as per Aadhaar <span className="text-red-500">*</span>
              </label>
              <div className="md:col-span-2 relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full bg-transparent border-none outline-none py-1 text-[13px]"
                  placeholder="Enter name as per Aadhaar"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={handleSave}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5 flex items-center gap-2"
              >
                <Save size={16} />
                Update
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              Ensure your ABC ID is correctly linked with your Aadhaar for seamless credit transfer and academic record management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
