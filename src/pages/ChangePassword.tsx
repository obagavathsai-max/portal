import React, { useState } from 'react';
import { Lock, Save, AlertCircle } from 'lucide-react';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setStatus({ type: 'error', message: 'New passwords do not match' });
      return;
    }
    if (newPassword.length < 8) {
      setStatus({ type: 'error', message: 'Password must be at least 8 characters long' });
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setStatus({ type: 'success', message: 'Password changed successfully' });
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setStatus({ type: '', message: '' }), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden max-w-2xl mx-auto">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-6">
          <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-full border border-gray-200">
                <Lock size={20} className="text-gray-400" />
              </div>
              <p className="text-sm font-medium text-gray-600">
                Update your account password to maintain security.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {status.message && (
              <div className={`p-3 rounded text-sm font-medium flex items-center gap-2 ${
                status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                <AlertCircle size={16} />
                {status.message}
              </div>
            )}

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-600 uppercase">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-600 uppercase">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-600 uppercase">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="flex items-center gap-2 text-white px-6 py-2 rounded text-sm font-bold shadow-sm transition-all hover:brightness-105 active:scale-95 bg-aums-orange"
              >
                <Save size={16} />
                SAVE PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
