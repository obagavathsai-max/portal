import React, { useState } from 'react';
import { Save } from 'lucide-react';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== storedPassword) {
      setError('Current password is incorrect');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setError('');
    setShowSuccess(true);
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Page Header */}
      <div className="bg-white px-4 py-3 rounded shadow-sm border-l-4 border-aums-teal">
        <h1 className="text-base font-bold uppercase text-aums-teal">
          Change Password
        </h1>
      </div>

      <div className="bg-white rounded shadow-sm p-6 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="text-aums-red-error text-xs font-bold text-center bg-red-50 py-2 rounded">{error}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase">Roll Number</p>
              <p className="text-sm font-semibold text-gray-800">AV.SC.U4AIE23132</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-gray-500 uppercase">Full Name</p>
              <p className="text-sm font-semibold text-gray-800">ORUGANTI BAGAVATH SAI</p>
            </div>
          </div>

          <div className="pt-4 space-y-4 border-t border-gray-100">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 text-white rounded text-sm font-bold transition-all active:scale-95 bg-aums-orange hover:bg-aums-orange-dark"
            >
              <Save size={16} /> Update Password
            </button>
            {showSuccess && (
              <span className="text-green-600 text-xs font-bold animate-in fade-in">
                ✓ Password updated successfully
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
