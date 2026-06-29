import React, { useState } from 'react';
import { ChevronRight, Save, User, Mail, Phone, MapPin } from 'lucide-react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    email: 'av.sc.u4aie23132@av.students.amrita.edu',
    phone: '+91 98765 43210',
    address: 'Amritapuri Campus, Clappana P.O., Kollam, Kerala - 690525',
    emergencyContact: '+91 99887 76655'
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded shadow-sm border border-gray-200">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account
          </h1>
          <ChevronRight size={18} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-600">ORUGANTI BAGAVATH SAI (AV.SC.U4AIE23132)</span>
        </div>
      </div>

      <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden max-w-4xl">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Contact Information</h2>
        </div>
        <form onSubmit={handleSave} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-600 uppercase">Personal Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-600 uppercase">Mobile Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-teal-500"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-600 uppercase">Communication Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={3}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 bg-aums-orange text-white rounded font-bold text-sm shadow-sm hover:brightness-105 active:scale-[0.98] transition-all"
            >
              <Save size={18} />
              Save Changes
            </button>
            {isSaved && (
              <span className="text-green-600 text-sm font-bold animate-in fade-in slide-in-from-left-2">
                ✓ Details updated successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
