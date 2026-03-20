import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');
    if (savedEmail) setEmail(savedEmail);
    else setEmail('obagavathsai@gmail.com');
    if (savedPhone) setPhone(savedPhone);
    else setPhone('8106736469');
  }, []);

  const handleUpdate = () => {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    alert('Account details updated successfully!');
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-[var(--color-aums-bg-main)]">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-[var(--color-aums-teal)]">
            UPDATE ACCOUNT
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-6 text-sm">
            <div className="flex">
              <span className="text-gray-700 w-20">RollNo</span>
              <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
            </div>
            <div></div>
            <div className="flex">
              <span className="text-gray-700 w-24">Name</span>
            </div>

            <div className="flex">
              <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
            <div className="flex">
              <span className="text-gray-700 w-40">Academic Program</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-gray-900 uppercase">B.Tech 2023 AIE</span>
            </div>

            <div className="flex">
              <span className="text-gray-700 w-20">Branch</span>
              <span className="font-semibold text-gray-900">AIE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="border border-gray-300 rounded-sm bg-white">
                <div className="px-3 pt-1">
                  <label className="text-xs text-gray-500">Email *</label>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none"
                />
              </div>
            </div>

            <div>
              <div className="border border-gray-300 rounded-sm bg-white">
                <div className="px-3 pt-1">
                  <label className="text-xs text-gray-500">PhoneNo *</label>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleUpdate}
              className="px-6 py-2 text-white text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity shadow-sm uppercase tracking-wide bg-[var(--color-aums-orange)]"
            >
              Update Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
