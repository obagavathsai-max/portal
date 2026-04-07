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
      setError('Incorrect old password');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setSuccess('Password changed successfully!');
    setTimeout(() => navigate('/profile'), 2000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-main min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            CHANGE PASSWORD
          </h1>
        </div>

        <div className="p-5 max-w-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-600 text-sm font-bold">{error}</p>}
            {success && <p className="text-green-600 text-sm font-bold">{success}</p>}

            <div>
              <label className="block text-xs text-gray-500 mb-1">Old Password *</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-sm outline-none focus:border-aums-teal"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">New Password *</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-sm outline-none focus:border-aums-teal"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-500 mb-1">Confirm New Password *</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-sm outline-none focus:border-aums-teal"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 text-white text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity bg-aums-orange"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
