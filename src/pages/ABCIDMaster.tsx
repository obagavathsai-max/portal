import React, { useState, useEffect } from 'react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('abcid_data');
    if (saved) {
      const data = JSON.parse(saved);
      setAbcId(data.abcId || '');
      setAadhaarName(data.aadhaarName || '');
      setEmail(data.email || '');
      setPhone(data.phone || '');
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { abcId, aadhaarName, email, phone };
    localStorage.setItem('abcid_data', JSON.stringify(data));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
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
          {showSuccess && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded">
              ABC ID details updated successfully!
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-1">
              <label className="text-[12px] font-bold text-gray-500 uppercase">Roll No</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[14px] text-gray-700">AV.SC.U4AIE23132</span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[12px] font-bold text-gray-500 uppercase">Student Name</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-[14px] text-gray-700">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[12px] font-bold text-gray-700 uppercase">ABC ID <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-[14px] focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none"
                  placeholder="Enter 12 digit ABC ID"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[12px] font-bold text-gray-700 uppercase">Name as per Aadhaar <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-[14px] focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none"
                  placeholder="Enter name as on Aadhaar card"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[12px] font-bold text-gray-700 uppercase">Email ID <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-[14px] focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none"
                  placeholder="Enter email address"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[12px] font-bold text-gray-700 uppercase">Mobile Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-[14px] focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none"
                  placeholder="Enter 10 digit mobile number"
                  required
                />
              </div>
            </div>

            <div className="flex justify-start pt-2">
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
    </div>
  );
}
