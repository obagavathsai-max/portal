import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentPass = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== currentPass) {
      setError('Incorrect old password');
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
    setSuccess('Password changed successfully! Redirecting...');
    setError('');
    setTimeout(() => navigate('/dashboard'), 2000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="max-w-md space-y-6">
            {error && <div className="p-3 bg-red-100 text-red-700 rounded text-sm font-bold">{error}</div>}
            {success && <div className="p-3 bg-green-100 text-green-700 rounded text-sm font-bold">{success}</div>}

            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Old Password</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-sm font-bold rounded shadow-sm hover:brightness-110 transition-all bg-aums-orange"
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
