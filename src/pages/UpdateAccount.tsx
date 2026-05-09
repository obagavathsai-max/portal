import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function UpdateAccount() {
  const [email, setEmail] = useState(() => localStorage.getItem('userEmail') || 'av.sc.u4aie23132@av.students.amrita.edu');
  const [phone, setPhone] = useState(() => localStorage.getItem('userPhone') || '+91 81067 36469');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
  }, []);

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Contact Information
          </h1>
        </div>

        <div className="p-6">
          {showSuccess && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center gap-2">
              <CheckCircle2 size={18} />
              <span className="text-sm font-medium">Contact details updated successfully!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-md space-y-5">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2 text-white font-bold rounded shadow-sm transition-opacity hover:opacity-90 bg-aums-orange"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
