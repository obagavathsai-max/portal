import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const savedPhone = localStorage.getItem('userPhone');
    const savedEmail = localStorage.getItem('userEmail');
    if (savedPhone) setPhone(savedPhone);
    else setPhone('+91 81067 36469');
    if (savedEmail) setEmail(savedEmail);
    else setEmail('av.sc.u4aie23132@av.students.amrita.edu');
  }, []);

  const handleUpdate = () => {
    localStorage.setItem('userPhone', phone);
    localStorage.setItem('userEmail', email);
    alert('Account details updated!');
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            UPDATE ACCOUNT DETAILS
          </h1>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-1">
              <p className="text-xs text-gray-500 font-semibold uppercase">Roll Number</p>
              <p className="text-sm font-medium text-gray-800">AV.SC.U4AIE23132</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-500 font-semibold uppercase">Student Name</p>
              <p className="text-sm font-medium text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">University Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
                />
              </div>

              <button
                onClick={handleUpdate}
                className="px-6 py-2 text-white text-sm font-bold rounded-sm hover:brightness-110 transition-all bg-aums-orange"
              >
                Update Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
