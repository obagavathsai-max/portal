import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const storedPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== storedPassword) {
      setError('Current password is incorrect');
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
    <div className="space-y-4" style={{ backgroundColor: 'var(--color-aums-bg-main)', minHeight: 'calc(100vh - 120px)' }}>
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase" style={{ color: 'var(--color-aums-teal)' }}>
            CHANGE PASSWORD
          </h1>
        </div>

        <div className="p-5">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-600 text-sm rounded-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleUpdate} className="max-w-md space-y-4">
            <div className="border border-gray-300 rounded-sm bg-white">
              <div className="px-3 pt-1">
                <label className="text-xs text-gray-500">Current Password *</label>
              </div>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none"
              />
            </div>

            <div className="border border-gray-300 rounded-sm bg-white">
              <div className="px-3 pt-1">
                <label className="text-xs text-gray-500">New Password *</label>
              </div>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none"
              />
            </div>

            <div className="border border-gray-300 rounded-sm bg-white">
              <div className="px-3 pt-1">
                <label className="text-xs text-gray-500">Confirm New Password *</label>
              </div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-2 text-white text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity shadow-sm uppercase tracking-wide"
                style={{ backgroundColor: 'var(--color-aums-orange)' }}
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
