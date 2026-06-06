import React, { useState, useEffect } from 'react';
import { Save, User as UserIcon } from 'lucide-react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    abcId: localStorage.getItem('abcId') || '123-456-789-012',
    aadhaarName: localStorage.getItem('aadhaarName') || 'ORUGANTI BAGAVATH SAI',
    email: localStorage.getItem('userEmail') || 'av.sc.u4aie23132@amrita.edu',
    phone: localStorage.getItem('userPhone') || '9876543210'
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('abcId', formData.abcId);
    localStorage.setItem('aadhaarName', formData.aadhaarName);
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPhone', formData.phone);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account
          </h1>
          {isSaved && (
            <span className="text-xs font-bold text-green-600 animate-pulse">
              ✓ Details updated successfully
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6 flex items-start gap-4">
            <div className="p-3 bg-white rounded-full border border-gray-200">
              <UserIcon size={24} className="text-gray-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">Roll Number</p>
              <p className="text-sm font-bold text-gray-800">AV.SC.U4AIE23132</p>
              <p className="text-xs font-bold text-gray-500 uppercase mt-2">Full Name</p>
              <p className="text-sm font-bold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-600 uppercase">ABC ID</label>
                <input
                  type="text"
                  value={formData.abcId}
                  onChange={(e) => setFormData({ ...formData, abcId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-600 uppercase">Name as per Aadhaar</label>
                <input
                  type="text"
                  value={formData.aadhaarName}
                  onChange={(e) => setFormData({ ...formData, aadhaarName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-600 uppercase">Email ID</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-600 uppercase">Mobile Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="flex items-center gap-2 text-white px-6 py-2 rounded text-sm font-bold shadow-sm transition-all hover:brightness-105 active:scale-95 bg-aums-orange"
              >
                <Save size={16} />
                UPDATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
