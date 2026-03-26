import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== currentPassword) {
      setError('Current password is incorrect');
      setSuccess('');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      setSuccess('');
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setSuccess('Password updated successfully');
    setError('');
    setTimeout(() => navigate('/dashboard'), 2000);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-main">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-teal-50">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-6">
          <form onSubmit={handleUpdate} className="max-w-md space-y-4">
            {error && <p className="text-aums-red-error text-sm font-bold">{error}</p>}
            {success && <p className="text-green-600 text-sm font-bold">{success}</p>}

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-2 text-white text-sm font-bold rounded shadow-sm bg-aums-orange uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
