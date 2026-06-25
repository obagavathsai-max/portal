import React, { useState } from 'react';
import { KeyRound, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ChangePassword() {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (passwords.current !== storedPassword) {
      setMessage({ type: 'error', text: 'Current password is incorrect' });
      return;
    }

    if (passwords.new !== passwords.confirm) {
      setMessage({ type: 'error', text: 'New passwords do not match' });
      return;
    }

    setIsUpdating(true);
    setTimeout(() => {
      localStorage.setItem('userPassword', passwords.new);
      setIsUpdating(false);
      setMessage({ type: 'success', text: 'Password changed successfully!' });
      setPasswords({ current: '', new: '', confirm: '' });
      setTimeout(() => setMessage(null), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm rounded-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-aums-teal"></div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleUpdate} className="bg-white shadow-sm rounded-sm overflow-hidden">
          <div className="p-8 space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-2">
              <ShieldCheck className="text-aums-teal" size={24} />
              <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Security Settings</h2>
            </div>

            {message && (
              <div className={`p-4 rounded-md flex items-center gap-3 ${
                message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                <span className="text-sm font-medium">{message.text}</span>
              </div>
            )}

            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[12px] font-semibold text-gray-600 uppercase tracking-tight">Current Password</label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="password"
                    required
                    value={passwords.current}
                    onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-semibold text-gray-600 uppercase tracking-tight">New Password</label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="password"
                    required
                    value={passwords.new}
                    onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-semibold text-gray-600 uppercase tracking-tight">Confirm New Password</label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="password"
                    required
                    value={passwords.confirm}
                    onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-4 flex justify-end border-t border-gray-100">
            <button
              type="submit"
              disabled={isUpdating}
              className="flex items-center gap-2 text-white px-8 py-2.5 rounded text-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 bg-aums-orange"
            >
              {isUpdating ? 'UPDATING...' : 'UPDATE PASSWORD'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
