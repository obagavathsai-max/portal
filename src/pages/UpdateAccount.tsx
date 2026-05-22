import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [phone, setPhone] = useState('9876543210');
  const [email, setEmail] = useState('av.sc.u4aie23132@amrita.edu');
  const [aadhaarName, setAadhaarName] = useState('ORUGANTI BAGAVATH SAI');
  const [abcId, setAbcId] = useState('123456789012');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('studentProfile');
    if (saved) {
      const data = JSON.parse(saved);
      setPhone(data.phone.replace('+91 ', '').replace(/ /g, ''));
      setEmail(data.email);
    }
    const savedAbc = localStorage.getItem('abcId');
    if (savedAbc) setAbcId(savedAbc);
  }, []);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const current = JSON.parse(localStorage.getItem('studentProfile') || '{}');
    localStorage.setItem('studentProfile', JSON.stringify({
      ...current,
      phone: `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`,
      email
    }));
    localStorage.setItem('abcId', abcId);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Details
          </h1>
        </div>

        <div className="p-5">
          {showSuccess && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm font-medium">
              Details updated successfully!
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-sm bg-gray-50 p-4 rounded-sm border border-gray-200">
            <div className="flex">
              <span className="text-gray-500 w-32">Roll No</span>
              <span className="font-bold text-gray-800">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-32">Name</span>
              <span className="font-bold text-gray-800">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleUpdate} className="space-y-4 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">ABC ID</label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Name as per Aadhaar</label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Phone Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-sm">+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-r-sm focus:outline-none focus:border-aums-teal text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-[13px] font-bold rounded-sm shadow-sm transition-opacity hover:opacity-90 active:scale-95 bg-aums-orange"
              >
                UPDATE DETAILS
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
