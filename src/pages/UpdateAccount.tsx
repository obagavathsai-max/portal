import React, { useState } from 'react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    email: localStorage.getItem('userEmail') || 'av.sc.u4aie23132@amrita.edu',
    phone: localStorage.getItem('userPhone') || '9876543210',
    address: localStorage.getItem('userAddress') || 'Amrita Vishwa Vidyapeetham, Amritapuri Campus'
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPhone', formData.phone);
    localStorage.setItem('userAddress', formData.address);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)] p-5">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            UPDATE ACCOUNT INFORMATION
          </h1>
        </div>

        <div className="p-8">
          {isSaved && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded border border-green-200">
              Account information updated successfully!
            </div>
          )}

          <div className="max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm">
              <div className="space-y-1">
                <span className="text-gray-500 block">Roll No</span>
                <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
              </div>
              <div className="space-y-1">
                <span className="text-gray-500 block">Name</span>
                <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Current Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                  required
                />
              </div>

              <button
                type="submit"
                className="px-8 py-2.5 text-white text-sm font-bold rounded-sm hover:opacity-90 transition-opacity bg-aums-orange"
              >
                UPDATE INFORMATION
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
