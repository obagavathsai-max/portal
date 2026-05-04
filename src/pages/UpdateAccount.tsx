import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail') || 'av.sc.u4aie23132@av.students.amrita.edu';
    const savedPhone = localStorage.getItem('userPhone') || '+91 81067 36469';
    setEmail(savedEmail);
    setPhone(savedPhone);
  }, []);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setMessage('Account details updated successfully');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="space-y-4 p-5 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden max-w-2xl">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account Details
          </h1>
        </div>

        <div className="p-6">
          {message && (
            <div className="mb-4 p-2 bg-green-100 text-green-700 text-center text-sm font-bold rounded">
              {message}
            </div>
          )}

          <form onSubmit={handleUpdate} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <label className="text-sm font-bold text-gray-700">University Email</label>
              <div className="sm:col-span-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <label className="text-sm font-bold text-gray-700">Phone Number</label>
              <div className="sm:col-span-2">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-8 py-2 text-white text-sm font-bold rounded uppercase tracking-wide bg-aums-orange hover:brightness-105 active:scale-95 transition-all shadow-sm"
              >
                Update Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
