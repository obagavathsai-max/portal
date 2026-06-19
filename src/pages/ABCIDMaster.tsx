import React, { useState } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4">
      {/* Overview Header */}
      <div className="flex items-center gap-2 mt-2 mb-4">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
        </div>
        <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
          ABC ID MASTER
        </h1>
      </div>

      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden max-w-4xl">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">Roll No</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <span className="text-[13px] font-semibold text-gray-700">AV.SC.U4AIE23132</span>
                </div>
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">Name</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <span className="text-[13px] font-semibold text-gray-700">ORUGANTI BAGAVATH SAI</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">ABC ID</label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  placeholder="Enter 12 digit ABC ID"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-[13px] focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">Name as per Aadhaar</label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  placeholder="Enter name exactly as on Aadhaar"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-[13px] focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
            <button
              type="submit"
              className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
            >
              SAVE DETAILS
            </button>
            {showSuccess && (
              <span className="text-green-600 text-xs font-bold animate-in fade-in">
                ✓ ABC ID details updated successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
