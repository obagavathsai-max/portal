import React, { useState, useEffect } from 'react';
import { Save, User, Mail, Phone, Fingerprint } from 'lucide-react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    abcId: localStorage.getItem('abcId') || '872-918-273-645',
    aadhaarName: localStorage.getItem('aadhaarName') || 'ORUGANTI BAGAVATH SAI',
    email: localStorage.getItem('userEmail') || 'av.sc.u4aie23132@am.students.amrita.edu',
    phone: localStorage.getItem('userPhone') || '9876543210'
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('abcId', formData.abcId);
    localStorage.setItem('aadhaarName', formData.aadhaarName);
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPhone', formData.phone);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-aums-teal"></div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Details
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          {/* Student Info (Read-only) */}
          <div className="bg-gray-50 border-b border-gray-200 p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Roll Number</p>
              <p className="text-sm font-bold text-gray-700">AV.SC.U4AIE23132</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Student Name</p>
              <p className="text-sm font-bold text-gray-700">ORUGANTI BAGAVATH SAI</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ABC ID */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase">
                  <Fingerprint size={14} className="text-aums-teal" />
                  ABC ID (12 Digit)
                </label>
                <input
                  type="text"
                  value={formData.abcId}
                  onChange={(e) => setFormData({ ...formData, abcId: e.target.value })}
                  placeholder="XXX-XXX-XXX-XXX"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-aums-teal outline-none transition-all"
                />
              </div>

              {/* Aadhaar Name */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase">
                  <User size={14} className="text-aums-teal" />
                  Name as per Aadhaar
                </label>
                <input
                  type="text"
                  value={formData.aadhaarName}
                  onChange={(e) => setFormData({ ...formData, aadhaarName: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-aums-teal outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase">
                  <Mail size={14} className="text-aums-teal" />
                  Preferred Email ID
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-aums-teal outline-none transition-all"
                />
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="flex items-center gap-2 text-xs font-bold text-gray-600 uppercase">
                  <Phone size={14} className="text-aums-teal" />
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-aums-teal outline-none transition-all"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-2.5 bg-aums-orange text-white text-sm font-bold rounded shadow-md hover:brightness-110 transition-all active:scale-95"
              >
                <Save size={16} /> SAVE DETAILS
              </button>

              {success && (
                <span className="text-sm font-bold text-green-600 animate-fade-in">
                  ✓ Successfully Updated
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
