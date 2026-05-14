import React, { useState } from 'react';

export default function UpdateAccount() {
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || 'av.sc.u4aie23132@av.students.amrita.edu');
  const [phone, setPhone] = useState(localStorage.getItem('userPhone') || '+91 81067 36469');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account Details
          </h1>
        </div>

        <div className="p-6 max-w-lg">
          {isSaved && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded">
              Account details updated successfully.
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2 text-white text-sm font-bold rounded shadow-sm hover:opacity-90 bg-aums-orange"
              >
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
