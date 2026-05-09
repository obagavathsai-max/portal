import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

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
      setError('Password must be at least 6 characters');
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setSuccess('Password changed successfully!');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-6">
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-aums-red-error rounded-md flex items-center gap-2">
              <AlertCircle size={18} />
              <span className="text-sm font-medium">{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center gap-2">
              <CheckCircle2 size={18} />
              <span className="text-sm font-medium">{success}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="max-w-md space-y-5">
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-gray-500 uppercase">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal transition-colors"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2 text-white font-bold rounded shadow-sm transition-opacity hover:opacity-90 bg-aums-orange"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
