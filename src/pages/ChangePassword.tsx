import React, { useState } from 'react';
import { HelpCircle, Link as LinkIcon, Maximize2, Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      localStorage.setItem('userPassword', newPassword);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Change Password
          </h1>
          <div className="flex gap-1.5">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <LinkIcon size={12} strokeWidth={2.5} /> Link
            </button>
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
            <button className="p-1 border border-gray-300 bg-white rounded-sm text-gray-700 hover:bg-gray-50">
              <Maximize2 size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Student Info Bar */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-aums-bg-alt p-4 rounded-sm border border-gray-200">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Roll No</p>
              <p className="text-sm font-bold text-gray-700">AV.SC.U4AIE23132</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Name</p>
              <p className="text-sm font-bold text-gray-700">ORUGANTI BAGAVATH SAI</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600">Current Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  <input
                    type={showCurrent ? 'text' : 'password'}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600">New Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  <input
                    type={showNew ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                  >
                    {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600">Confirm New Password *</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                className="text-white px-8 py-2.5 rounded-sm text-[13px] font-bold shadow-sm hover:brightness-110 transition-all bg-aums-orange"
              >
                Change Password
              </button>
              {isSaved && (
                <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                  <CheckCircle2 size={18} />
                  <span>Password updated successfully!</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
