import React, { useState, useEffect } from 'react';

export default function UpdateAccount() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');
    if (savedEmail) setEmail(savedEmail);
    else setEmail('obagavathsai@gmail.com');
    if (savedPhone) setPhone(savedPhone);
    else setPhone('8106736469');
  }, []);

  const handleUpdate = () => {
    setError('');

    // If user is trying to change password
    if (oldPassword || newPassword || confirmPassword) {
      const currentPassword = localStorage.getItem('userPassword') || 'niyathi@0125';

      if (oldPassword !== currentPassword) {
        setError('Incorrect old password');
        return;
      }

      if (newPassword !== confirmPassword) {
        setError('New passwords do not match');
        return;
      }

      if (newPassword.length < 6) {
        setError('New password must be at least 6 characters');
        return;
      }

      localStorage.setItem('userPassword', newPassword);
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);
    alert('Account details updated successfully!');
  };

  return (
    <div className="space-y-4" style={{ backgroundColor: '#f0f0f0', minHeight: 'calc(100vh - 120px)' }}>
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase" style={{ color: '#26a69a' }}>
            UPDATE ACCOUNT
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-6 text-sm">
            <div className="flex">
              <span className="text-gray-700 w-20">RollNo</span>
              <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
            </div>
            <div></div>
            <div className="flex">
              <span className="text-gray-700 w-24">Name</span>
            </div>

            <div className="flex">
              <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
            <div className="flex">
              <span className="text-gray-700 w-40">Academic Program</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-gray-900 uppercase">B.Tech 2023 AIE</span>
            </div>

            <div className="flex">
              <span className="text-gray-700 w-20">Branch</span>
              <span className="font-semibold text-gray-900">AIE</span>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded border border-red-200 font-semibold">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <div className="border border-gray-300 rounded-sm bg-white">
                <div className="px-3 pt-1">
                  <label className="text-xs text-gray-500">Email *</label>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none"
                />
              </div>
            </div>

            <div>
              <div className="border border-gray-300 rounded-sm bg-white">
                <div className="px-3 pt-1">
                  <label className="text-xs text-gray-500">PhoneNo *</label>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <h2 className="text-sm font-bold text-gray-700 uppercase mb-4">Change Password</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="border border-gray-300 rounded-sm bg-white">
                  <div className="px-3 pt-1">
                    <label className="text-xs text-gray-500">Old Password</label>
                  </div>
                  <input
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none"
                    placeholder="Enter current password"
                  />
                </div>
              </div>

              <div>
                <div className="border border-gray-300 rounded-sm bg-white">
                  <div className="px-3 pt-1">
                    <label className="text-xs text-gray-500">New Password</label>
                  </div>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none"
                    placeholder="Min. 6 characters"
                  />
                </div>
              </div>

              <div>
                <div className="border border-gray-300 rounded-sm bg-white">
                  <div className="px-3 pt-1">
                    <label className="text-xs text-gray-500">Confirm New Password</label>
                  </div>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none"
                    placeholder="Repeat new password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleUpdate}
              className="px-6 py-2 text-white text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity shadow-sm uppercase tracking-wide"
              style={{ backgroundColor: '#ffa100' }}
            >
              Update Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
