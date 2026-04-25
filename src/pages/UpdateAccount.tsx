import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || 'av.sc.u4aie23132@av.students.amrita.edu');
  const [phone, setPhone] = useState(localStorage.getItem('userPhone') || '8106736469');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Account
          </h1>
        </div>

        <div className="p-5 max-w-2xl">
          {success && (
            <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded border border-green-200">
              Account details updated successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">University Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Mobile Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2 text-white text-sm font-bold rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity bg-aums-orange"
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
