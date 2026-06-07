import React, { useState } from 'react';
import { Save, Lock, ShieldCheck, AlertCircle } from 'lucide-react';

export default function ChangePassword() {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const storedPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (passwords.current !== storedPassword) {
      setError('Current password is incorrect');
      return;
    }

    if (passwords.new !== passwords.confirm) {
      setError('New passwords do not match');
      return;
    }

    if (passwords.new.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    localStorage.setItem('userPassword', passwords.new);
    setSuccess(true);
    setPasswords({ current: '', new: '', confirm: '' });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-aums-teal"></div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 sm:p-6">
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 p-6 flex items-center gap-3">
            <ShieldCheck className="text-aums-teal" size={24} />
            <div>
              <h2 className="text-sm font-bold text-gray-700">Security Update</h2>
              <p className="text-xs text-gray-500">Keep your account secure by using a strong password.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {error && (
              <div className="p-3 bg-red-50 border border-red-100 rounded flex items-center gap-2 text-aums-red-error text-xs font-bold">
                <AlertCircle size={14} /> {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Current Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="password"
                  value={passwords.current}
                  onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-aums-teal outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="password"
                  value={passwords.new}
                  onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-aums-teal outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Confirm New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="password"
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded text-sm focus:ring-1 focus:ring-aums-teal outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="submit"
                className="flex items-center gap-2 px-8 py-2.5 bg-aums-orange text-white text-sm font-bold rounded shadow-md hover:brightness-110 transition-all active:scale-95"
              >
                <Save size={16} /> UPDATE PASSWORD
              </button>

              {success && (
                <span className="text-sm font-bold text-green-600 animate-fade-in">
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
