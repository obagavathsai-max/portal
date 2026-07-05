import React, { useState } from 'react';
import { Database, Search, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState(localStorage.getItem('abcId') || '');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('aadhaarName') || '');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
        </div>
        <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
          ABC ID Master
        </h1>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="p-5">
          {isSaved && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-sm flex items-center gap-2 text-green-700 text-sm">
              <CheckCircle2 size={16} />
              ABC ID details updated successfully!
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Left side: Student Info */}
            <div className="space-y-4">
              <h3 className="text-[13px] font-bold text-gray-700 border-b border-gray-100 pb-2 uppercase tracking-wider">Student Information</h3>

              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase">Roll No</label>
                  <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                    <span className="text-[14px] text-gray-700 font-medium">AV.SC.U4AIE23132</span>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase">Name</label>
                  <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                    <span className="text-[14px] text-gray-700 font-medium">NIYATHI S RAJESH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: ABC ID Form */}
            <div className="space-y-4">
              <h3 className="text-[13px] font-bold text-gray-700 border-b border-gray-100 pb-2 uppercase tracking-wider">ABC Details</h3>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="abcId" className="text-[11px] font-bold text-gray-400 uppercase">ABC ID <span className="text-red-500">*</span></label>
                  <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-white focus-within:border-aums-teal transition-colors">
                    <input
                      id="abcId"
                      type="text"
                      value={abcId}
                      onChange={(e) => setAbcId(e.target.value)}
                      className="w-full text-[14px] text-gray-800 outline-none bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="aadhaarName" className="text-[11px] font-bold text-gray-400 uppercase">Name as per Aadhaar <span className="text-red-500">*</span></label>
                  <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-white focus-within:border-aums-teal transition-colors">
                    <input
                      id="aadhaarName"
                      type="text"
                      value={aadhaarName}
                      onChange={(e) => setAadhaarName(e.target.value)}
                      className="w-full text-[14px] text-gray-800 outline-none bg-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
                  >
                    SAVE DETAILS
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-400 text-blue-800">
            <div className="flex gap-2">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <div className="text-[13px]">
                <p className="font-bold mb-1">Important Instruction:</p>
                <p>Please ensure that your ABC ID is correct as it is essential for the credit transfer process. The name should exactly match the one on your Aadhaar card.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
