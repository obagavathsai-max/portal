import React, { useState } from 'react';
import { HelpCircle, Lock, Save, AlertCircle } from 'lucide-react';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const currentStored = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== currentStored) {
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
    setSuccess('Password changed successfully');
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-sm shadow-sm border-l-4 border-aums-teal">
        <div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
          <p className="text-xs text-gray-500 mt-1">Update your account security credentials</p>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <span className="text-[13px] font-semibold text-aums-teal">Security Settings</span>
          <div className="flex gap-1.5">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
          </div>
        </div>

        <div className="p-6">
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 text-aums-red-error text-[13px] font-medium rounded-sm flex items-center gap-2">
              <AlertCircle size={16} /> {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-3 bg-green-50 border border-green-200 text-green-700 text-[13px] font-medium rounded-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6 max-w-md">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Current Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-aums-teal"
                    required
                  />
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">New Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-aums-teal"
                    required
                  />
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Confirm New Password <span className="text-red-500">*</span></label>
                <div className="relative">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-aums-teal"
                    required
                  />
                  <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-2.5 text-white text-sm font-bold rounded shadow-sm hover:brightness-110 transition-all bg-aums-orange"
              >
                <Save size={16} /> CHANGE PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
