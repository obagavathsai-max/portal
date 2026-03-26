import React, { useState } from 'react';

export default function UpdateAccount() {
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || 'av.sc.u4aie23132@av.students.amrita.edu');
  const [phone, setPhone] = useState(localStorage.getItem('userPhone') || '+91 81067 36469');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-main">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-teal-50">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Personal Account
          </h1>
        </div>

        <div className="p-6">
          <form onSubmit={handleUpdate} className="max-w-md space-y-4">
            {showSuccess && <p className="text-green-600 text-sm font-bold">Details updated successfully!</p>}

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-2 text-white text-sm font-bold rounded shadow-sm bg-aums-orange uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all"
            >
              Update Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
