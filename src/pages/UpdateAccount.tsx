import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@av.students.amrita.edu',
    phone: '8106736469'
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');
    if (savedEmail || savedPhone) {
      setFormData(prev => ({
        ...prev,
        email: savedEmail || prev.email,
        phone: savedPhone || prev.phone
      }));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', formData.email);
    localStorage.setItem('userPhone', formData.phone);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Information
          </h1>
        </div>

        <div className="p-5">
          <div className="bg-gray-50 border border-gray-200 p-4 mb-6 rounded-sm">
            <h2 className="text-sm font-bold text-gray-700 mb-4 border-b pb-2">Student Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex">
                <span className="text-gray-500 w-32">Roll No</span>
                <span className="font-semibold text-gray-800">{formData.rollNo}</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-32">Student Name</span>
                <span className="font-semibold text-gray-800 uppercase">{formData.name}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase">E-Mail Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                type="submit"
                className="px-6 py-2 text-white text-sm font-bold rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity bg-aums-orange"
              >
                Update Account
              </button>
              {isSaved && (
                <span className="text-green-600 text-sm font-bold animate-fade-in">
                  ✓ Information updated successfully
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
