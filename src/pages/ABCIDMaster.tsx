import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');

  useEffect(() => {
    const savedAbcId = localStorage.getItem('abcId');
    const savedAadhaarName = localStorage.getItem('aadhaarName');
    if (savedAbcId) setAbcId(savedAbcId);
    else setAbcId('740923811437');
    if (savedAadhaarName) setAadhaarName(savedAadhaarName);
    else setAadhaarName('Oruganti bagavath Sai');
  }, []);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    alert('ABCId details saved permanently!');
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 bg-white">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABCID MASTER UI
          </h1>
        </div>

        <div className="p-6">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 mb-10">
            <div>
              <p className="text-[13px] text-gray-600 mb-1">Roll No</p>
              <p className="text-[14px] font-medium text-gray-800">AV.SC.U4AIE23132</p>
            </div>
            <div>
              <p className="text-[13px] text-gray-600 mb-1">Name</p>
              <p className="text-[14px] font-medium text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</p>
            </div>
            <div>
              <p className="text-[13px] text-gray-600 mb-1">Academic Program</p>
              <p className="text-[14px] font-medium text-gray-800 uppercase">B.Tech 2023</p>
            </div>
            <div>
              <p className="text-[13px] text-gray-600 mb-1">Branch</p>
              <p className="text-[14px] font-medium text-gray-800">AIE</p>
            </div>
            <div>
              <p className="text-[13px] text-gray-600 mb-1">ABCId</p>
              <p className="text-[14px] font-medium text-gray-800">{abcId}</p>
            </div>
            <div>
              <p className="text-[13px] text-gray-600 mb-1">Name same as in Aadhaar</p>
              <p className="text-[14px] font-medium text-gray-800">{aadhaarName}</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col md:flex-row items-end gap-4 max-w-4xl">
            <div className="flex-1 w-full">
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <label className="absolute -top-2 left-3 bg-white px-1 text-[11px] text-aums-red-error font-medium">
                  Save ABCId <span className="text-aums-red-error">*</span>
                </label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full bg-transparent outline-none py-1.5 text-[14px] text-gray-800"
                />
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <label className="absolute -top-2 left-3 bg-white px-1 text-[11px] text-aums-red-error font-medium">
                  Name same as in Aadhaar <span className="text-aums-red-error">*</span>
                </label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full bg-transparent outline-none py-1.5 text-[14px] text-gray-800"
                />
              </div>
            </div>

            <button
              onClick={handleSave}
              className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
            >
              Save
            </button>
          </div>

          <p className="mt-6 text-[12px] text-gray-700 italic">
            NB:- Please enter the name as per the Aadhar.
          </p>
        </div>
      </div>
    </div>
  );
}
