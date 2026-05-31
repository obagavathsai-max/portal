import React, { useState } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    alert('ABC ID saved successfully!');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mt-2 mb-3">
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

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Roll No</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <span className="text-[13px] text-gray-700 font-medium">AV.SC.U4AIE23132</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Name</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <span className="text-[13px] text-gray-700 font-medium uppercase">ORUGANTI BAGAVATH SAI</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">ABC ID</label>
                <div className="relative">
                  <input
                    type="text"
                    value={abcId}
                    onChange={(e) => setAbcId(e.target.value)}
                    placeholder="Enter your ABC ID"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:outline-none focus:border-aums-teal transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SAVE ABCID
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
