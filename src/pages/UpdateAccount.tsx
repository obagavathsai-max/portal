import React, { useState, useEffect } from 'react';
import { Save, User, Mail, Phone, Fingerprint } from 'lucide-react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    email: 'av.sc.u4aie23132@av.students.amrita.edu',
    phone: '9876543210',
    aadhaarName: 'ORUGANTI BAGAVATH SAI',
    abcId: '123-456-789-012'
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');
    const savedABCId = localStorage.getItem('abcId');
    const savedAadhaar = localStorage.getItem('aadhaarName');

    if (savedEmail || savedPhone || savedABCId || savedAadhaar) {
      setFormData(prev => ({
        ...prev,
        email: savedEmail || prev.email,
        phone: savedPhone || prev.phone,
        abcId: savedABCId || prev.abcId,
        aadhaarName: savedAadhaar || prev.aadhaarName
      }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPhone', formData.phone);
    localStorage.setItem('abcId', formData.abcId);
    localStorage.setItem('aadhaarName', formData.aadhaarName);

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-main min-h-full">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account Information
          </h1>
        </div>

        <div className="p-8 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-sm text-sm font-semibold">
                Account information updated successfully!
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                  <Mail size={14} className="text-aums-teal" /> University Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                  <Phone size={14} className="text-aums-teal" /> Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                  <User size={14} className="text-aums-teal" /> Name as per Aadhaar
                </label>
                <input
                  type="text"
                  value={formData.aadhaarName}
                  onChange={(e) => setFormData({ ...formData, aadhaarName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2">
                  <Fingerprint size={14} className="text-aums-teal" /> ABC ID
                </label>
                <input
                  type="text"
                  value={formData.abcId}
                  onChange={(e) => setFormData({ ...formData, abcId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 text-white text-sm font-bold rounded-sm uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all bg-aums-orange"
              >
                <Save size={18} /> Update Information
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 p-4 rounded-sm">
        <h3 className="text-sm font-bold text-blue-800 mb-1">Note:</h3>
        <p className="text-xs text-blue-700 leading-relaxed">
          The information updated here will be reflected in your academic records. Please ensure all details are accurate as per your official documents.
        </p>
      </div>
    </div>
  );
}
