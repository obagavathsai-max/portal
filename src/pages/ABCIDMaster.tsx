import React, { useState, useEffect } from 'react';
import { CreditCard, User, Mail, Phone, CheckCircle, Save } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('abc_id_details');
    if (savedData) {
      const data = JSON.parse(savedData);
      setAbcId(data.abcId || '');
      setAadhaarName(data.aadhaarName || '');
      setEmail(data.email || '');
      setPhone(data.phone || '');
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { abcId, aadhaarName, email, phone };
    localStorage.setItem('abc_id_details', JSON.stringify(data));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Overview Header */}
      <div className="flex items-center gap-2 mb-2">
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

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        {/* Header Section */}
        <div className="px-5 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="text-[13px] font-semibold text-aums-teal">Student Information</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-8">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Roll No</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-sm font-semibold text-gray-800">AV.SC.U4AIE23132</span>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Name</label>
              <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                <span className="text-sm font-semibold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-[14px] font-bold text-gray-800 mb-6 flex items-center gap-2">
              <CreditCard size={18} className="text-aums-teal" />
              Academic Bank of Credits (ABC) Details
            </h3>

            {isSaved && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-3 text-green-700 animate-in fade-in slide-in-from-top-2 duration-300">
                <CheckCircle size={20} />
                <span className="text-sm font-medium">Details successfully saved and synchronized!</span>
              </div>
            )}

            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-600 uppercase flex items-center gap-2">
                  <HashIcon size={12} /> ABC ID (12 Digits)
                </label>
                <input
                  type="text"
                  maxLength={12}
                  required
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value.replace(/\D/g, ''))}
                  placeholder="e.g. 123456789012"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-600 uppercase flex items-center gap-2">
                  <User size={12} /> Name (As per Aadhaar)
                </label>
                <input
                  type="text"
                  required
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-600 uppercase flex items-center gap-2">
                  <Mail size={12} /> Registered Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter registered email"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-600 uppercase flex items-center gap-2">
                  <Phone size={12} /> Registered Phone
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter registered phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>

              <div className="md:col-span-2 pt-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors flex items-center gap-2"
                >
                  <Save size={16} /> SAVE ABC DETAILS
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function HashIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="9" x2="20" y2="9"></line>
      <line x1="4" y1="15" x2="20" y2="15"></line>
      <line x1="10" y1="3" x2="8" y2="21"></line>
      <line x1="16" y1="3" x2="14" y2="21"></line>
    </svg>
  );
}
