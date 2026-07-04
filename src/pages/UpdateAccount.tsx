import React, { useState } from 'react';
import { User, Mail, Phone, Save, CheckCircle } from 'lucide-react';

export default function UpdateAccount() {
  const [email, setEmail] = useState('av.sc.u4aie23132@amrita.edu');
  const [phone, setPhone] = useState('9876543210');
  const [saved, setSaved] = useState(false);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white rounded shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Account
          </h1>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Roll No</label>
              <div className="border-b border-gray-100 pb-1">
                <span className="text-sm font-semibold text-gray-700">AV.SC.U4AIE23132</span>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Name</label>
              <div className="border-b border-gray-100 pb-1">
                <span className="text-sm font-semibold text-gray-700">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleUpdate} className="max-w-md space-y-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-600">
                <Mail size={16} className="text-aums-teal" />
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-600">
                <Phone size={16} className="text-aums-teal" />
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal transition-all"
                required
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="px-6 py-2 text-white text-sm font-bold rounded shadow-sm hover:brightness-110 transition-all bg-aums-orange flex items-center gap-2"
              >
                <Save size={16} />
                UPDATE ACCOUNT
              </button>
              {saved && (
                <div className="flex items-center gap-2 text-green-600 animate-in fade-in">
                  <CheckCircle size={18} />
                  <span className="text-sm font-bold">Saved</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
