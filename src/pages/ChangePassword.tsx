import React, { useState } from 'react';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentStoredPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== currentStoredPassword) {
      setError('Current password is incorrect');
      setMessage('');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
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
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Roll No</label>
              <div className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-1">AV.SC.U4AIE23132</div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Name</label>
              <div className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-1 uppercase">ORUGANTI BAGAVATH SAI</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
            {message && <div className="p-3 bg-green-100 text-green-700 text-sm rounded-sm border border-green-200">{message}</div>}
            {error && <div className="p-3 bg-red-100 text-red-700 text-sm rounded-sm border border-red-200">{error}</div>}

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-sm focus:outline-none focus:border-aums-teal"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 text-white text-sm font-bold rounded-sm shadow-sm hover:brightness-110 transition-all bg-aums-orange"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
