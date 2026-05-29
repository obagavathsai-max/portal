import React, { useState } from 'react';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    localStorage.setItem('userPassword', newPassword);
    setIsSaved(true);
    setError('');
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-6">
          {/* Student Info (Read-only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 font-medium">Roll No</span>
              <span className="text-gray-800 font-semibold">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500 font-medium">Name</span>
              <span className="text-gray-800 font-semibold uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
            {isSaved && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-sm font-medium">
                Password changed successfully!
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm font-medium">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
                Current Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
                New Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider">
                Confirm New Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-sm"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-sm font-bold rounded uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all bg-aums-orange"
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
