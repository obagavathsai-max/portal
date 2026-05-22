import React, { useState, useEffect } from 'react';
import { Save, Info, AlertCircle } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('abcId');
    if (saved) {
      setAbcId(saved);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
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
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
            {/* Student Info (Read-only) */}
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Roll No</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <span className="text-[13px] font-semibold text-gray-700">AV.SC.U4AIE23132</span>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Student Name</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <span className="text-[13px] font-semibold text-gray-700 uppercase">ORUGANTI BAGAVATH SAI</span>
                </div>
              </div>
            </div>

            {/* ABC ID Input */}
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">ABC ID <span className="text-aums-red-error">*</span></label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  placeholder="Enter your 12 digit ABC ID"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:border-aums-teal text-[13px]"
                />
              </div>
              <div className="flex items-end justify-start h-full pb-0.5">
                <button
                  onClick={handleSave}
                  className="bg-aums-teal hover:brightness-110 text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
                >
                  SAVE
                </button>
                {isSaved && (
                  <span className="ml-4 mb-2 text-[12px] font-bold text-green-600 flex items-center gap-1">
                    <Save size={14} /> Saved Successfully
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-2 mb-4 text-aums-teal">
              <Info size={18} />
              <h2 className="text-[13px] font-bold uppercase">Instructions</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-3 text-[12px] text-gray-600">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-aums-teal-light text-aums-teal flex items-center justify-center font-bold">1</span>
                <span>The Academic Bank of Credits (ABC) ID is mandatory for all students as per UGC guidelines.</span>
              </li>
              <li className="flex gap-3 text-[12px] text-gray-600">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-aums-teal-light text-aums-teal flex items-center justify-center font-bold">2</span>
                <span>Students must ensure that their name in ABC matches exactly with their name in University records.</span>
              </li>
              <li className="flex gap-3 text-[12px] text-gray-600">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-aums-teal-light text-aums-teal flex items-center justify-center font-bold">3</span>
                <span>Verify your ABC ID on the DigiLocker portal before submitting it here.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
