import React, { useState, useEffect } from 'react';
import { HelpCircle, Save } from 'lucide-react';

export default function UpdateAccount() {
  const [email, setEmail] = useState('av.sc.u4aie23132@amrita.edu');
  const [phone, setPhone] = useState('9876543210');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-sm shadow-sm border-l-4 border-aums-teal">
        <div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account
          </h1>
          <p className="text-xs text-gray-500 mt-1">Manage your contact information and account settings</p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <span className="text-[13px] font-semibold text-aums-teal">Account Details</span>
          <div className="flex gap-1.5">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
          </div>
        </div>

        <div className="p-6">
          {showSuccess && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 text-[13px] font-medium rounded-sm">
              Account details updated successfully.
            </div>
          )}

          {/* Read-only Student Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Roll No</label>
              <div className="bg-gray-100 border border-gray-200 rounded px-3 py-1.5 text-sm font-semibold text-gray-700">
                AV.SC.U4AIE23132
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Student Name</label>
              <div className="bg-gray-100 border border-gray-200 rounded px-3 py-1.5 text-sm font-semibold text-gray-700">
                ORUGANTI BAGAVATH SAI
              </div>
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">University Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Phone Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-2.5 text-white text-sm font-bold rounded shadow-sm hover:brightness-110 transition-all bg-aums-orange"
              >
                <Save size={16} /> SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
