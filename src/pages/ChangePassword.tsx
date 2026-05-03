import React, { useState, useEffect } from 'react';

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

    const currentStored = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== currentStored) {
      setError('Old password is incorrect');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setSuccess('Password updated successfully!');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden max-w-2xl mx-auto">
        <div className="px-5 py-3 border-b border-gray-100 bg-aums-teal-light">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            Change Password
          </h1>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && <div className="p-3 text-sm text-white bg-aums-red-error rounded-sm">{error}</div>}
            {success && <div className="p-3 text-sm text-white bg-aums-teal rounded-sm">{success}</div>}

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Old Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal transition-colors text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal transition-colors text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal transition-colors text-sm"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-8 py-2.5 rounded-sm text-sm font-bold shadow-sm transition-all active:scale-95"
              >
                UPDATE PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
