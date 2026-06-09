import React, { useState } from 'react';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const currentPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== currentPassword) {
      setError('Current password is incorrect');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setSuccess('Password updated successfully!');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            CHANGE PASSWORD
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-sm">
            <div className="flex">
              <span className="text-gray-500 w-32 font-medium">Roll No</span>
              <span className="font-bold text-gray-800">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-32 font-medium">Name</span>
              <span className="font-bold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md space-y-4">
            {error && <div className="p-3 bg-red-50 border border-red-200 text-aums-red-error text-sm rounded">{error}</div>}
            {success && <div className="p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded">{success}</div>}

            <div>
              <label className="block text-xs text-gray-500 mb-1">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2 text-white text-sm font-bold rounded-sm shadow-sm hover:opacity-90 transition-opacity bg-aums-orange"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
