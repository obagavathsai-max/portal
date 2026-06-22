import React, { useState } from 'react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    email: 'av.sc.u4aie23132@av.students.amrita.edu',
    phone: '8106736469'
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Account details updated successfully!');
  };

  return (
    <div className="space-y-4 p-5 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account Details
          </h1>
        </div>

        <div className="p-5">
          {/* Read-only info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Roll No</span>
              <span className="font-semibold text-gray-800">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Name</span>
              <span className="font-semibold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleSave} className="max-w-md space-y-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-r-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2 text-white text-sm font-bold rounded-sm hover:opacity-90 transition-opacity bg-aums-orange"
            >
              SAVE CHANGES
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
