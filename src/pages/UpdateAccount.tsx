import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

export default function UpdateAccount() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('studentEmail') || 'av.sc.u4aie23132@av.amrita.edu';
    const savedPhone = localStorage.getItem('studentPhone') || '+91 98765 43210';
    setEmail(savedEmail);
    setPhone(savedPhone);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('studentEmail', email);
    localStorage.setItem('studentPhone', phone);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Page Header */}
      <div className="bg-white px-4 py-3 rounded shadow-sm border-l-4 border-aums-teal">
        <h1 className="text-base font-bold uppercase text-aums-teal">
          Update Account Details
        </h1>
      </div>

      <div className="bg-white rounded shadow-sm p-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase">Roll Number</p>
              <p className="text-sm font-semibold text-gray-800">AV.SC.U4AIE23132</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase">Full Name</p>
              <p className="text-sm font-semibold text-gray-800">ORUGANTI BAGAVATH SAI</p>
            </div>
          </div>

          <div className="pt-4 space-y-4 border-t border-gray-100">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 text-white rounded text-sm font-bold transition-all active:scale-95 bg-aums-orange hover:bg-aums-orange-dark"
            >
              <Save size={16} /> Save Changes
            </button>
            {showSuccess && (
              <span className="text-green-600 text-xs font-bold animate-in fade-in">
                ✓ Details updated successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
