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

    const currentStored = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== currentStored) {
      setError('Old password does not match current records.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirmation do not match.');
      return;
    }

    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters long.');
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
            Change Password
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-sm bg-gray-50 p-4 rounded-sm border border-gray-200">
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs font-bold uppercase">Roll No</span>
              <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-xs font-bold uppercase">Name</span>
              <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm font-bold">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-sm text-sm font-bold">
                {success}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Old Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:border-aums-teal outline-none transition-colors"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:border-aums-teal outline-none transition-colors"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-500 uppercase">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:border-aums-teal outline-none transition-colors"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="px-10 py-2.5 text-white text-sm font-bold rounded-sm uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all bg-aums-orange"
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
