import React, { useState } from 'react';
import { Lock, Save, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentStoredPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (oldPassword !== currentStoredPassword) {
      setStatus({ type: 'error', msg: 'Current password is incorrect' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setStatus({ type: 'error', msg: 'Passwords do not match' });
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    setStatus({ type: 'success', msg: 'Password updated successfully' });
    setOldPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white rounded shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b border-gray-100">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Roll No</label>
              <div className="text-sm font-semibold text-gray-700">AV.SC.U4AIE23132</div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Name</label>
              <div className="text-sm font-semibold text-gray-700">ORUGANTI BAGAVATH SAI</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-600">Current Password</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-600">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-600">Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal transition-all"
                required
              />
            </div>

            <div className="flex flex-col gap-4 pt-2">
              <button
                type="submit"
                className="w-fit px-8 py-2 text-white text-sm font-bold rounded shadow-sm hover:brightness-110 transition-all bg-aums-orange flex items-center gap-2"
              >
                <Save size={16} />
                UPDATE PASSWORD
              </button>

              {status && (
                <div className={`flex items-center gap-2 p-3 rounded text-sm font-bold animate-in fade-in ${
                  status.type === 'success' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'
                }`}>
                  {status.type === 'success' ? <CheckCircle size={18} /> : <AlertTriangle size={18} />}
                  {status.msg}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
