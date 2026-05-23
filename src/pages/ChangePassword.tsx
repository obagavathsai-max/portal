import React, { useState } from 'react';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const storedPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (currentPassword !== storedPassword) {
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
    setIsSaved(true);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setIsSaved(false), 3000);
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
          <div className="bg-gray-50 border border-gray-200 p-4 mb-6 rounded-sm">
            <h2 className="text-sm font-bold text-gray-700 mb-4 border-b pb-2">Student Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex">
                <span className="text-gray-500 w-32">Roll No</span>
                <span className="font-semibold text-gray-800">AV.SC.U4AIE23132</span>
              </div>
              <div className="flex">
                <span className="text-gray-500 w-32">Student Name</span>
                <span className="font-semibold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase">Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-600 uppercase">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-aums-teal"
                required
              />
            </div>

            {error && <p className="text-aums-red-error text-xs font-bold">{error}</p>}

            <div className="pt-4 flex items-center gap-4">
              <button
                type="submit"
                className="px-6 py-2 text-white text-sm font-bold rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity bg-aums-orange"
              >
                Change Password
              </button>
              {isSaved && (
                <span className="text-green-600 text-sm font-bold animate-fade-in">
                  ✓ Password changed successfully
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
