import React, { useState } from 'react';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const actualOldPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== actualOldPassword) {
      setMessage('Invalid old password');
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setMessage('Password updated successfully');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            CHANGE PASSWORD
          </h1>
        </div>

        <div className="p-6 max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-5">
            {message && (
              <div className={`p-3 rounded text-sm font-medium ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Old Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 text-white text-sm font-bold rounded-sm hover:brightness-110 transition-all bg-aums-orange"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
