import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');
    if (savedEmail) setEmail(savedEmail);
    else setEmail('av.sc.u4aie23132@av.students.amrita.edu');
    if (savedPhone) setPhone(savedPhone);
    else setPhone('+91 81067 36469');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setSuccess('Contact details updated successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden max-w-2xl mx-auto">
        <div className="px-5 py-3 border-b border-gray-100 bg-aums-teal-light">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            Update Account Details
          </h1>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {success && (
              <div className="p-3 text-sm text-white bg-aums-teal rounded-sm">
                {success}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal transition-colors text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal transition-colors text-sm"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-8 py-2.5 rounded-sm text-sm font-bold shadow-sm transition-all active:scale-95"
              >
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
