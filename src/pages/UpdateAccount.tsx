import React, { useState, useEffect } from 'react';
import { Save, User, Hash, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function UpdateAccount() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [email, setEmail] = useState('av.sc.u4aie23132@amrita.edu');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [showSuccess, setShowSuccess] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedAbcId = localStorage.getItem('abcId');
    const savedAadhaar = localStorage.getItem('aadhaarName');
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');

    if (savedAbcId) setAbcId(savedAbcId);
    if (savedAadhaar) setAadhaarName(savedAadhaar);
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
  }, []);

  const handleSave = () => {
    localStorage.setItem('abcId', abcId);
    localStorage.setItem('aadhaarName', aadhaarName);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Header Card */}
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account Information
          </h1>
        </div>

        <div className="p-6">
          {showSuccess && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-center gap-3">
              <CheckCircle2 size={18} />
              <p className="text-sm font-medium">Account details updated successfully!</p>
            </div>
          )}

          {/* Student Info Read-Only */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Hash size={16} className="text-aums-teal" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Roll No</p>
                <p className="text-sm font-bold text-gray-700">AV.SC.U4AIE23132</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User size={16} className="text-aums-teal" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Name</p>
                <p className="text-sm font-bold text-gray-700">ORUGANTI BAGAVATH SAI</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">ABC ID</label>
              <input
                type="text"
                value={abcId}
                onChange={(e) => setAbcId(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-aums-teal transition-colors text-sm"
                placeholder="12 digit ABC ID"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Name as per Aadhaar</label>
              <input
                type="text"
                value={aadhaarName}
                onChange={(e) => setAadhaarName(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-aums-teal transition-colors text-sm"
                placeholder="Full name as per Aadhaar"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center gap-2">
                <Mail size={14} className="text-aums-teal" /> Official Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-aums-teal transition-colors text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide flex items-center gap-2">
                <Phone size={14} className="text-aums-teal" /> Mobile Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-aums-teal transition-colors text-sm"
              />
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 flex justify-center">
            <button
              onClick={handleSave}
              className="px-10 py-3 text-white rounded font-bold text-sm shadow-md transition-all active:scale-95 bg-aums-orange hover:bg-aums-orange-dark"
            >
              <div className="flex items-center gap-2">
                <Save size={18} /> SAVE CHANGES
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
