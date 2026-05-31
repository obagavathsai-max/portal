import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [formData, setFormData] = useState({
    abcId: '',
    aadhaarName: '',
    email: '',
    phone: ''
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('studentAccountData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('studentAccountData', JSON.stringify(formData));
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Student Information
          </h1>
        </div>

        <div className="p-5">
          {/* Header Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
            <div className="flex border-b border-gray-100 pb-2">
              <span className="text-gray-500 w-32">Roll No:</span>
              <span className="font-bold text-gray-800">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex border-b border-gray-100 pb-2">
              <span className="text-gray-500 w-32">Student Name:</span>
              <span className="font-bold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
            {success && (
              <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded">
                Account details updated successfully!
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-600 uppercase">ABC ID</label>
                <input
                  type="text"
                  name="abcId"
                  value={formData.abcId}
                  onChange={handleChange}
                  placeholder="Enter 12 digit ABC ID"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-aums-teal text-sm"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-600 uppercase">Name as per Aadhaar</label>
                <input
                  type="text"
                  name="aadhaarName"
                  value={formData.aadhaarName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-aums-teal text-sm"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-600 uppercase">Personal Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-aums-teal text-sm"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold text-gray-600 uppercase">Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10 digit number"
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-aums-teal text-sm"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-2 text-white text-sm font-bold rounded uppercase tracking-wide bg-aums-orange hover:brightness-110 transition-all shadow-sm"
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
