import React, { useState } from 'react';
import { Key, ShieldCheck, AlertCircle } from 'lucide-react';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== storedPassword) {
      setMessage('Invalid old password');
      setIsError(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match');
      setIsError(true);
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setMessage('Password changed successfully');
    setIsError(false);
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
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
            Change Password
          </h1>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="p-5">
          {message && (
            <div className={`mb-6 p-3 rounded-sm flex items-center gap-2 text-sm border ${isError ? 'bg-red-50 border-red-200 text-aums-red-error' : 'bg-green-50 border-green-200 text-green-700'
              }`}>
              {isError ? <AlertCircle size={16} /> : <ShieldCheck size={16} />}
              {message}
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

            {/* Change Password Form */}
            <div className="space-y-4">
              <h3 className="text-[13px] font-bold text-gray-700 border-b border-gray-100 pb-2 uppercase tracking-wider">Security Details</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase">Old Password <span className="text-red-500">*</span></label>
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-1 text-[14px] focus:outline-none focus:border-aums-teal"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase">New Password <span className="text-red-500">*</span></label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-1 text-[14px] focus:outline-none focus:border-aums-teal"
                    required
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold text-gray-400 uppercase">Confirm New Password <span className="text-red-500">*</span></label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-1 text-[14px] focus:outline-none focus:border-aums-teal"
                    required
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="text-white px-8 py-2 rounded text-[13px] font-bold shadow-sm transition-opacity hover:opacity-90 bg-aums-orange"
                  >
                    CHANGE PASSWORD
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
