import React, { useState } from 'react';

export default function UpdateAccount() {
  const [abcId, setAbcId] = useState(localStorage.getItem('student_abcId') || '');
  const [aadhaarName, setAadhaarName] = useState(localStorage.getItem('student_aadhaarName') || '');
  const [email, setEmail] = useState(localStorage.getItem('student_email') || '');
  const [phone, setPhone] = useState(localStorage.getItem('student_phone') || '');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('student_abcId', abcId);
    localStorage.setItem('student_aadhaarName', aadhaarName);
    localStorage.setItem('student_email', email);
    localStorage.setItem('student_phone', phone);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt p-5">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            UPDATE STUDENT DETAILS
          </h1>
        </div>

        <div className="p-5">
          {/* Student Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mb-8 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Roll No</span>
              <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Name</span>
              <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
            {showSuccess && (
              <div className="p-3 bg-green-100 border border-green-200 text-green-700 text-sm rounded">
                Details updated successfully!
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase">ABC ID</label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  placeholder="Enter ABC ID"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Name as per Aadhaar</label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  placeholder="Enter Name as per Aadhaar"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Personal Email ID</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Personal Email ID"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Phone Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-2 text-white text-sm font-bold rounded uppercase tracking-wide bg-aums-orange hover:opacity-90 transition-opacity"
              >
                Update Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
