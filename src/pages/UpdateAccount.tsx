import React, { useState } from 'react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    email: 'av.sc.u4aie23132@av.students.amrita.edu',
    phone: '8106736469',
    aadhaarName: 'ORUGANTI BAGAVATH SAI'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Account information updated successfully!');
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-main">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Account
          </h1>
        </div>

        <div className="p-8 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">University Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-aums-teal focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-aums-teal focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Name as per Aadhaar</label>
              <input
                type="text"
                name="aadhaarName"
                value={formData.aadhaarName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-aums-teal focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-2.5 text-white font-bold rounded uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all bg-aums-orange"
              >
                Update Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
