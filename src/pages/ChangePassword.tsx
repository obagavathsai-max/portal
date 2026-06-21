import React, { useState } from 'react';

export default function ChangePassword() {
  const [passwords, setPasswords] = useState({
    old: '',
    new: '',
    confirm: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      setStatus({ type: 'error', message: 'New passwords do not match!' });
      return;
    }

    // In a real app, we'd verify 'old' password and update via API
    localStorage.setItem('userPassword', passwords.new);
    setStatus({ type: 'success', message: 'Password changed successfully!' });
    setPasswords({ old: '', new: '', confirm: '' });
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)] p-5">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            CHANGE PASSWORD
          </h1>
        </div>

        <div className="p-8">
          <div className="max-w-md">
            <div className="mb-8 grid grid-cols-1 gap-4 text-sm">
              <div className="flex border-b border-gray-100 pb-2">
                <span className="text-gray-500 w-32">Roll No</span>
                <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
              </div>
              <div className="flex border-b border-gray-100 pb-2">
                <span className="text-gray-500 w-32">Name</span>
                <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
              </div>
            </div>

            {status.message && (
              <div className={`mb-6 p-3 rounded text-sm font-medium border ${
                status.type === 'error' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-green-50 text-green-700 border-green-100'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Old Password *</label>
                <input
                  type="password"
                  value={passwords.old}
                  onChange={(e) => setPasswords({ ...passwords, old: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">New Password *</label>
                <input
                  type="password"
                  value={passwords.new}
                  onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Confirm New Password *</label>
                <input
                  type="password"
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-10 py-2.5 text-white text-sm font-bold rounded-sm hover:opacity-90 transition-opacity bg-aums-orange"
                >
                  CHANGE PASSWORD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
