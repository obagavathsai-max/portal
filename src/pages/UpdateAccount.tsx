import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [email, setEmail] = useState(localStorage.getItem('userEmail') || 'av.sc.u4aie23132@av.students.amrita.edu');
  const [phone, setPhone] = useState(localStorage.getItem('userPhone') || '8106736469');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setStatus('Account updated successfully!');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-main min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account Details
          </h1>
        </div>

        <div className="p-6 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {status && (
              <div className="p-3 bg-green-50 text-green-700 text-sm rounded border border-green-200">
                {status}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
                  University Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                type="submit"
                className="px-8 py-2 text-white text-sm font-bold rounded shadow-sm hover:opacity-90 transition-opacity bg-aums-orange"
              >
                Update Information
              </button>
            </div>
          </form>

          <div className="mt-10 p-4 bg-gray-50 rounded border border-gray-200">
            <h3 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Security Notice</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Updates to your primary university email or phone number may require additional verification.
              Please ensure you have access to both your old and new contact methods during this process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
