import React, { useState } from 'react';

export default function ChangePassword() {
  const [passwords, setPasswords] = useState({
    old: '',
    new: '',
    confirm: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentStored = localStorage.getItem('userPassword') || 'niyathi@0125';

    if (passwords.old !== currentStored) {
      alert('Old password is incorrect');
      return;
    }

    if (passwords.new !== passwords.confirm) {
      alert('New passwords do not match');
      return;
    }

    localStorage.setItem('userPassword', passwords.new);
    alert('Password changed successfully!');
    setPasswords({ old: '', new: '', confirm: '' });
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-main">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
        </div>

        <div className="p-8 max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
              <input
                type="password"
                name="old"
                value={passwords.old}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-aums-teal focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                name="new"
                value={passwords.new}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-aums-teal focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm New Password</label>
              <input
                type="password"
                name="confirm"
                value={passwords.confirm}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-aums-teal focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-10 py-3 text-white font-bold rounded uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all bg-aums-orange"
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
