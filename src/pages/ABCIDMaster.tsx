import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setAbcId(localStorage.getItem('abcId') || '740923811437');
    setAadhaarName(localStorage.getItem('aadhaarName') || 'Oruganti bagavath Sai');
    setEmail(localStorage.getItem('abc_email') || 'av.sc.u4aie23132@amrita.edu');
    setPhone(localStorage.getItem('abc_phone') || '9876543210');
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    localStorage.setItem('abc_email', email);
    localStorage.setItem('abc_phone', phone);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 bg-aums-teal-light">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABCID Student Master
          </h1>
        </div>

        <div className="p-8">
          {isSaved && (
            <div className="mb-6 p-3 bg-green-50 text-green-700 text-[13px] rounded border border-green-200 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              Details updated successfully
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-8">
            {/* Student Info - Read Only */}
            <div className="space-y-4">
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[11px] text-gray-500">Roll No</label>
                <div className="py-2 text-[13px] font-semibold text-gray-800">AV.SC.U4AIE23132</div>
              </div>

              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[11px] text-gray-500">Name</label>
                <div className="py-2 text-[13px] font-semibold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</div>
              </div>
            </div>

            {/* Editable Fields */}
            <form onSubmit={handleSave} className="space-y-4">
              <div className="relative border border-gray-300 rounded-md px-3 py-1">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[11px] text-aums-teal font-medium">ABC ID *</label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full py-2 text-[13px] text-gray-800 bg-transparent outline-none"
                  placeholder="Enter 12 digit ABC ID"
                  required
                />
              </div>

              <div className="relative border border-gray-300 rounded-md px-3 py-1">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[11px] text-aums-teal font-medium">Name as per Aadhaar *</label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full py-2 text-[13px] text-gray-800 bg-transparent outline-none"
                  placeholder="Enter name as per Aadhaar"
                  required
                />
              </div>

              <div className="relative border border-gray-300 rounded-md px-3 py-1">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[11px] text-aums-teal font-medium">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 text-[13px] text-gray-800 bg-transparent outline-none"
                />
              </div>

              <div className="relative border border-gray-300 rounded-md px-3 py-1">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[11px] text-aums-teal font-medium">Phone No</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full py-2 text-[13px] text-gray-800 bg-transparent outline-none"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded p-4">
            <h3 className="text-blue-800 text-[13px] font-bold mb-2">Instructions:</h3>
            <ul className="text-blue-700 text-[12px] space-y-1 list-disc ml-4">
              <li>Please ensure your ABC ID is correct as per the Digilocker portal.</li>
              <li>Name as per Aadhaar should exactly match your Aadhaar card.</li>
              <li>This information is mandatory for credit transfer and degree issuance.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
