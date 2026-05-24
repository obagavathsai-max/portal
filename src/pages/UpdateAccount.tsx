import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [phone, setPhone] = useState('+91 98765 43210');
  const [email, setEmail] = useState('av.sc.u4aie23132@amrita.edu');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('account_data');
    if (saved) {
      const data = JSON.parse(saved);
      setPhone(data.phone);
      setEmail(data.email);
    }
  }, []);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('account_data', JSON.stringify({ phone, email }));
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account Details
          </h1>
        </div>

        <div className="p-5">
          {showSuccess && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded">
              Account details updated successfully!
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-8 text-sm">
            <div className="flex">
              <span className="text-gray-700 w-32">Roll No</span>
              <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
            </div>
            <div></div>
            <div className="flex">
              <span className="text-gray-700 w-32">Name</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleUpdate} className="max-w-md space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Mobile Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-aums-teal text-sm"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Email ID</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-aums-teal text-sm"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 text-white text-sm font-bold rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity bg-aums-orange"
            >
              Update Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
