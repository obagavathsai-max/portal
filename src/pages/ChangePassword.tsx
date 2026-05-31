import React, { useState } from 'react';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    localStorage.setItem('userPassword', newPassword);
    setSuccess(true);
    setError('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
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

          <form onSubmit={handleSubmit} className="max-w-md space-y-5">
            {success && (
              <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded">
                Password changed successfully!
              </div>
            )}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 text-aums-red-error text-sm rounded">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-600 uppercase">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-aums-teal text-sm"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-600 uppercase">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-aums-teal text-sm"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-600 uppercase">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-aums-teal text-sm"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-2 text-white text-sm font-bold rounded uppercase tracking-wide bg-aums-orange hover:brightness-110 transition-all shadow-sm"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
