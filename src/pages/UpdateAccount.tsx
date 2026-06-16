import React, { useState } from 'react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    email: 'bagavathsai@amrita.edu',
    phone: '9876543210',
    address: 'Amrita Vishwa Vidyapeetham, Ettimadai, Coimbatore'
  });

  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Account details updated successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account
          </h1>
        </div>

        <div className="p-5">
          {message && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 text-sm rounded-sm border border-green-200">
              {message}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Roll No</label>
              <div className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-1">AV.SC.U4AIE23132</div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Name</label>
              <div className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-1 uppercase">ORUGANTI BAGAVATH SAI</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase">Personal Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Current Address</label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 text-white text-sm font-bold rounded-sm shadow-sm hover:brightness-110 transition-all bg-aums-orange"
            >
              Update Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
