import React, { useState } from 'react';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== currentPassword) {
      setError('Current password is incorrect');
      setMessage('');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      setMessage('');
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setMessage('Password changed successfully!');
    setError('');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-5 max-w-2xl">
          {/* Student Info Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm">
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs">Roll No</span>
              <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs">Name</span>
              <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {message && <div className="p-3 bg-green-100 text-green-700 text-sm rounded-sm font-semibold">{message}</div>}
            {error && <div className="p-3 bg-red-100 text-red-700 text-sm rounded-sm font-semibold">{error}</div>}

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2 text-white text-sm font-bold rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity bg-aums-orange"
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
