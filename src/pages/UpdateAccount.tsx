import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    setFormData({
      email: localStorage.getItem('userEmail') || 'av.sc.u4aie23132@av.students.amrita.edu',
      phone: localStorage.getItem('userPhone') || '+91 81067 36469',
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPhone', formData.phone);
    setMessage('Information updated successfully');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Contact Information
          </h1>
        </div>

        <div className="p-6">
          <div className="max-w-md space-y-4">
            {message && (
              <div className="p-3 bg-aums-teal-light text-aums-teal-dark border border-aums-teal rounded text-sm font-semibold">
                {message}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">University Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:border-aums-teal"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:border-aums-teal"
              />
            </div>

            <div className="pt-2">
              <button
                onClick={handleUpdate}
                className="px-6 py-2 text-white text-sm font-bold rounded shadow-sm hover:bg-aums-orange-dark transition-colors bg-aums-orange"
              >
                Update Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
