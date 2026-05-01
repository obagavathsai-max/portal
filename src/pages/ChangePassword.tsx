import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== storedPassword) {
      setError('Incorrect current password');
      setSuccess('');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      setSuccess('');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long');
      setSuccess('');
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setSuccess('Password updated successfully');
    setError('');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');

    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="max-w-md space-y-4">
            {error && <p className="text-aums-red-error text-sm font-bold">{error}</p>}
            {success && <p className="text-aums-teal text-sm font-bold">{success}</p>}

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:border-aums-teal"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:border-aums-teal"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 focus:outline-none focus:border-aums-teal"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-6 py-2 text-white text-sm font-bold rounded shadow-sm hover:opacity-90 transition-opacity bg-aums-orange"
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
