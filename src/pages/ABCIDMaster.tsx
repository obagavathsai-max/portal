import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setAbcId(localStorage.getItem('abcId') || '123456789012');
    setAadhaarName(localStorage.getItem('aadhaarName') || 'ORUGANTI BAGAVATH SAI');
  }, []);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    setMessage('ABCID Details Updated Successfully');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center gap-2">
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

      {/* Main Content Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="p-6 space-y-6">
          {/* Instructions */}
          <div className="space-y-4 text-[13px] text-gray-700 leading-relaxed">
            <p className="font-bold">Instructions to create/find ABCID:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Visit <a href="https://www.abc.gov.in" target="_blank" rel="noopener noreferrer" className="text-aums-teal hover:underline font-semibold">www.abc.gov.in</a></li>
              <li>Click on My Account -&gt; Student</li>
              <li>Login with DigiLocker. If you don't have a DigiLocker account, click on "Sign up" to create one.</li>
              <li>After login, you will find your ABC ID on the dashboard.</li>
              <li>Enter the ABC ID below and save.</li>
            </ol>
            <p className="mt-4 italic text-gray-500 bg-gray-50 p-3 border-l-4 border-aums-teal">
              <strong>Note:</strong> Ensure that your Name in the Student Portal matches exactly with your Name on your Aadhaar card.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-xl pt-4 space-y-5">
            {message && (
              <div className="p-3 bg-aums-teal-light text-aums-teal-dark border border-aums-teal rounded text-sm font-semibold">
                {message}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-600 block">
                Academic Bank of Credits ID (ABC ID) <span className="text-red-500">*</span>
              </label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  placeholder="Enter 12 digit ABC ID"
                  className="w-full py-1 text-[13px] outline-none bg-transparent"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-bold text-gray-600 block">
                Name as per Aadhaar <span className="text-red-500">*</span>
              </label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <input
                  type="text"
                  placeholder="Enter name exactly as on Aadhaar"
                  className="w-full py-1 text-[13px] outline-none bg-transparent uppercase"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleSave}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SAVE ABCID
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
