import React, { useState } from 'react';
import { Save, Lock, User, Hash, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    const storedPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== storedPassword) {
      setStatus({ type: 'error', message: 'Current password does not match our records.' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setStatus({ type: 'error', message: 'New password and confirmation do not match.' });
      return;
    }

    if (newPassword.length < 6) {
      setStatus({ type: 'error', message: 'Password must be at least 6 characters long.' });
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setStatus({ type: 'success', message: 'Password updated successfully!' });
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Header Card */}
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Update Password
          </h1>
        </div>

        <div className="p-6 max-w-2xl mx-auto">
          {status && (
            <div className={`mb-6 p-4 rounded-lg border flex items-center gap-3 ${status.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
              }`}>
              {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertTriangle size={20} />}
              <p className="text-sm font-medium">{status.message}</p>
            </div>
          )}

          {/* Student Info Read-Only */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-3">
              <Hash size={16} className="text-aums-teal" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Roll No</p>
                <p className="text-sm font-bold text-gray-700">AV.SC.U4AIE23132</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User size={16} className="text-aums-teal" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Name</p>
                <p className="text-sm font-bold text-gray-700">ORUGANTI BAGAVATH SAI</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleUpdate} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Current Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={16} />
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-aums-teal transition-colors text-sm"
                  placeholder="Enter current password"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">New Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400" size={16} />
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-aums-teal transition-colors text-sm"
                    placeholder="Min 6 characters"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Confirm New Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400" size={16} />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-aums-teal transition-colors text-sm"
                    placeholder="Repeat new password"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="px-12 py-3 text-white rounded font-bold text-sm shadow-md transition-all active:scale-95 bg-aums-orange hover:bg-aums-orange-dark"
              >
                UPDATE PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
