import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function UpdateAccount() {
  const [email, setEmail] = useState(localStorage.getItem('studentEmail') || 'niyathi@amrita.edu.in');
  const [phone, setPhone] = useState(localStorage.getItem('studentPhone') || '+91 98765 43210');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('studentEmail', email);
    localStorage.setItem('studentPhone', phone);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <div className="grid grid-cols-2 gap-[2px]">
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          </div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Account Details
          </h1>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="p-5">
          {isSaved && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-sm flex items-center gap-2 text-green-700 text-sm">
              <CheckCircle2 size={16} />
              Account details updated successfully!
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {/* Student Information */}
            <div className="space-y-4">
              <h3 className="text-[13px] font-bold text-gray-700 border-b border-gray-100 pb-2 uppercase tracking-wider">Student Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase">Roll No</label>
                  <div className="border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt text-[14px] text-gray-700 font-medium">
                    AV.SC.U4AIE23132
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase">Name</label>
                  <div className="border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt text-[14px] text-gray-700 font-medium">
                    NIYATHI S RAJESH
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details Form */}
            <div className="space-y-4">
              <h3 className="text-[13px] font-bold text-gray-700 border-b border-gray-100 pb-2 uppercase tracking-wider">Contact Details</h3>
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-1 text-[14px] focus:outline-none focus:border-aums-teal"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase">Phone Number <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-1 text-[14px] focus:outline-none focus:border-aums-teal"
                    required
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="text-white px-8 py-2 rounded text-[13px] font-bold shadow-sm transition-opacity hover:opacity-90 bg-aums-orange"
                  >
                    UPDATE ACCOUNT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
