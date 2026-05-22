import React, { useState } from 'react';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }
    localStorage.setItem('userPassword', newPassword);
    setShowSuccess(true);
    setError('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-5">
          {showSuccess && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm font-medium">
              Password updated successfully!
            </div>
          )}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-aums-red-error rounded text-sm font-medium">
              {error}
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

          <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal text-sm"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal text-sm"
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal text-sm"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-[13px] font-bold rounded-sm shadow-sm transition-opacity hover:opacity-90 active:scale-95 bg-aums-orange"
              >
                CHANGE PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
