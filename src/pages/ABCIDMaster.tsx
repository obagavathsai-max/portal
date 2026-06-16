import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedAbcId = localStorage.getItem('abcId');
    const savedAadhaarName = localStorage.getItem('aadhaarName');
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');

    if (savedAbcId) setAbcId(savedAbcId);
    if (savedAadhaarName) setAadhaarName(savedAadhaarName);
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4">
      {/* Page Header */}
      <div className="flex items-center gap-2 mb-4">
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

      {/* Main Card */}
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="p-6">
          {/* Student Info Readonly Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-10">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">Roll No</label>
              <div className="text-[13px] font-semibold text-gray-800 pb-1 border-b border-gray-200">
                AV.SC.U4AIE23132
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">Name</label>
              <div className="text-[13px] font-semibold text-gray-800 pb-1 border-b border-gray-200 uppercase">
                ORUGANTI BAGAVATH SAI
              </div>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">ABC ID</label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all"
                  placeholder="Enter your ABC ID"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">Name as per Aadhaar</label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-[13px] focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all"
                  placeholder="Enter name as per Aadhaar"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">Email</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent text-[13px] outline-none py-1"
                    placeholder="Enter email address"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-tight">Phone Number</label>
                <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-transparent text-[13px] outline-none py-1"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button
                type="submit"
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5"
              >
                SAVE DETAILS
              </button>
              {isSaved && (
                <span className="text-green-600 text-[13px] font-semibold animate-pulse">
                  ✓ Details saved successfully
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
