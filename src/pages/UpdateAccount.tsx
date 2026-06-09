import React, { useState } from 'react';

export default function UpdateAccount() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Profile Account
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-sm">
            <div className="flex border-b border-gray-100 pb-2">
              <span className="text-gray-500 w-32 font-medium">Roll No</span>
              <span className="font-bold text-gray-800">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex border-b border-gray-100 pb-2">
              <span className="text-gray-500 w-32 font-medium">Name</span>
              <span className="font-bold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          {isSuccess && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded flex items-center gap-2">
              <span>✓ Account details updated successfully!</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
            <div className="grid grid-cols-1 gap-6">
              <div className="relative">
                <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Official Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter university email"
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>

              <div className="relative">
                <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter mobile number"
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>

              <div className="relative">
                <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5 ml-1">Name as per Aadhaar</label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  placeholder="Full name as in Aadhaar card"
                  required
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-sm font-bold rounded shadow-sm hover:opacity-90 transition-opacity bg-aums-orange"
              >
                UPDATE ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
