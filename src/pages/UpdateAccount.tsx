import React, { useState, useEffect } from 'react';
import { Save, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    rollNo: 'AV.SC.U4AIE23132',
    name: 'ORUGANTI BAGAVATH SAI',
    phone: '',
    email: '',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    const savedPhone = localStorage.getItem('studentPhone');
    const savedEmail = localStorage.getItem('studentEmail');
    if (savedPhone || savedEmail) {
      setFormData(prev => ({
        ...prev,
        phone: savedPhone || '',
        email: savedEmail || ''
      }));
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('studentPhone', formData.phone);
      localStorage.setItem('studentEmail', formData.email);
      setIsSaving(false);
      setMessage({ type: 'success', text: 'Account details updated successfully!' });
      setTimeout(() => setMessage(null), 3000);
    }, 800);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm rounded-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-aums-teal"></div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Student Info Card (Read Only) */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 shadow-sm rounded-sm border-t-2 border-aums-teal">
            <h2 className="text-sm font-bold text-gray-700 mb-6 uppercase tracking-wider">Student Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase">Roll No</label>
                <p className="text-sm font-semibold text-gray-800">{formData.rollNo}</p>
              </div>
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase">Name</label>
                <p className="text-sm font-semibold text-gray-800">{formData.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Update Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSave} className="bg-white shadow-sm rounded-sm overflow-hidden">
            <div className="p-6 space-y-6">
              <h2 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Contact Details</h2>

              {message && (
                <div className={`p-4 rounded-md flex items-center gap-3 ${
                  message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span className="text-sm font-medium">{message.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[12px] font-semibold text-gray-600">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-sm"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[12px] font-semibold text-gray-600">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-sm"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end">
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center gap-2 text-white px-6 py-2 rounded text-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 bg-aums-orange"
              >
                <Save size={16} />
                {isSaving ? 'SAVING...' : 'SAVE CHANGES'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
