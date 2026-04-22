import React, { useState } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState(localStorage.getItem('abcId') || '845 236 987 104');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('aadhaarName') || 'ORUGANTI BAGAVATH SAI');
  const [status, setStatus] = useState('');

  const handleUpdate = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setStatus('Details updated successfully!');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABCID MASTER
          </h1>
        </div>

        <div className="p-6">
          <div className="max-w-xl space-y-5">
            {status && (
              <div className="p-3 bg-green-50 text-green-700 text-[13px] rounded border border-green-200">
                {status}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-gray-700">Roll No</label>
                <div className="text-[13px] text-gray-600 px-3 py-1 bg-gray-100 rounded border border-gray-200">
                  AV.SC.U4AIE23132
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-gray-700">ABC Id</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-gray-50">
                  <input
                    type="text"
                    value={abcId}
                    onChange={(e) => setAbcId(e.target.value)}
                    className="w-full text-[13px] text-gray-800 bg-transparent outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-bold text-gray-700">Aadhaar Name</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-gray-50">
                  <input
                    type="text"
                    value={aadhaarName}
                    onChange={(e) => setAadhaarName(e.target.value)}
                    className="w-full text-[13px] text-gray-800 bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={handleUpdate}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                Update
              </button>
            </div>
          </div>

          <div className="mt-10 p-5 bg-blue-50/50 border border-blue-100 rounded">
            <h3 className="text-[13px] font-bold text-blue-800 mb-2">Instructions:</h3>
            <ul className="text-[12px] text-blue-700/80 space-y-2 list-disc pl-4">
              <li>Academic Bank of Credits (ABC) ID is mandatory for all students as per UGC guidelines.</li>
              <li>Please ensure the name entered matches exactly as it appears on your Aadhaar card.</li>
              <li>You can generate your ABC ID via DigiLocker if you haven't already.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
