import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [abcId, setAbcId] = useState(localStorage.getItem('abcId') || '');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('aadhaarName') || 'ORUGANTI BAGAVATH SAI');
  const [email, setEmail] = useState(localStorage.getItem('email') || 'av.sc.u4aie23132@amrita.edu');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '9876543210');
  const [success, setSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Information
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-sm bg-gray-50 p-4 rounded-sm border border-gray-200">
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs font-bold uppercase">Roll No</span>
              <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs font-bold uppercase">Name</span>
              <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-sm text-sm font-bold flex items-center gap-2">
                ✅ Changes saved successfully!
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">ABC ID</label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:border-aums-teal outline-none transition-colors"
                  placeholder="Enter ABC ID"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Name as per Aadhaar</label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:border-aums-teal outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Primary Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:border-aums-teal outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Mobile Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:border-aums-teal outline-none transition-colors"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-sm font-bold rounded-sm uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all bg-aums-orange"
              >
                Save Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
