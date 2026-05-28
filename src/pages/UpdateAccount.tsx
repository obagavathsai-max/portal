import React, { useState, useEffect } from 'react';
import { Save, User, Mail, Phone, Fingerprint, CreditCard } from 'lucide-react';

export default function UpdateAccount() {
  const [abcId, setAbcId] = useState(localStorage.getItem('abcId') || '1234-5678-9012');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('aadhaarName') || 'ORUGANTI BAGAVATH SAI');
  const [email, setEmail] = useState(localStorage.getItem('studentEmail') || 'bagavath.sai@student.amrita.edu');
  const [phone, setPhone] = useState(localStorage.getItem('studentPhone') || '+91 98765 43210');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    localStorage.setItem('studentEmail', email);
    localStorage.setItem('studentPhone', phone);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Account
          </h1>
        </div>

        <div className="p-6">
          {showSuccess && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Account details updated successfully!
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
            {/* Read-only info section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-aums-bg-main rounded-sm border border-gray-200 mb-8">
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">Roll No</p>
                <p className="text-sm font-semibold text-gray-800">AV.SC.U4AIE23132</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase">Student Name</p>
                <p className="text-sm font-semibold text-gray-800">ORUGANTI BAGAVATH SAI</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600 flex items-center gap-2">
                  <Fingerprint size={14} className="text-aums-teal" />
                  ABC ID
                </label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal focus:ring-1 focus:ring-aums-teal/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600 flex items-center gap-2">
                  <User size={14} className="text-aums-teal" />
                  Name as per Aadhaar
                </label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal focus:ring-1 focus:ring-aums-teal/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600 flex items-center gap-2">
                  <Mail size={14} className="text-aums-teal" />
                  Contact Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal focus:ring-1 focus:ring-aums-teal/20"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600 flex items-center gap-2">
                  <Phone size={14} className="text-aums-teal" />
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal focus:ring-1 focus:ring-aums-teal/20"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-aums-orange hover:bg-aums-orange-dark text-white px-8 py-2.5 rounded-sm text-sm font-bold shadow-sm transition-all flex items-center gap-2"
              >
                <Save size={16} />
                UPDATE DETAILS
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
