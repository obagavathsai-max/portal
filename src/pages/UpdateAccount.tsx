import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');
    if (savedEmail) setEmail(savedEmail);
    else setEmail('av.sc.u4aie23132@av.students.amrita.edu');
    if (savedPhone) setPhone(savedPhone);
    else setPhone('+91 81067 36469');
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Details
          </h1>
        </div>

        <div className="p-6">
          {/* Student Info (Read-only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 font-medium">Roll No</span>
              <span className="text-gray-800 font-semibold">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 font-medium">Name</span>
              <span className="text-gray-800 font-semibold uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleSave} className="max-w-2xl space-y-6">
            {isSaved && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-sm font-medium">
                Student details updated successfully!
              </div>
            )}

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-sm"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-sm font-bold rounded uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all bg-aums-orange"
              >
                Save Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
