import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    email: 'av.sc.u4aie23132@av.students.amrita.edu',
    phone: '8106736469',
    aadhaarName: 'ORUGANTI BAGAVATH SAI',
    abcId: '123456789012'
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('accountData');
    if (stored) setFormData(JSON.parse(stored));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('accountData', JSON.stringify(formData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account Details
          </h1>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
            {saved && (
              <div className="p-4 bg-green-100 text-green-700 rounded text-sm font-bold">
                Details updated successfully!
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Name as per Aadhaar</label>
                <input
                  type="text"
                  name="aadhaarName"
                  value={formData.aadhaarName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">ABC ID</label>
                <input
                  type="text"
                  name="abcId"
                  value={formData.abcId}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-sm font-bold rounded shadow-sm hover:brightness-110 transition-all bg-aums-orange"
              >
                UPDATE DETAILS
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
