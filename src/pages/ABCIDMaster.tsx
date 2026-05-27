import React, { useState, useEffect } from 'react';
import { HelpCircle, Link as LinkIcon, Maximize2, CheckCircle2 } from 'lucide-react';

export default function ABCIDMaster() {
  const [abcId, setAbcId] = useState('');
  const [aadhaarName, setAadhaarName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  // Load existing data if available
  useEffect(() => {
    const savedId = localStorage.getItem('abc_id');
    const savedName = localStorage.getItem('abc_aadhaar_name');
    const savedEmail = localStorage.getItem('abc_email');
    const savedPhone = localStorage.getItem('abc_phone');

    if (savedId) setAbcId(savedId);
    if (savedName) setAadhaarName(savedName);
    if (savedEmail) setEmail(savedEmail);
    if (savedPhone) setPhone(savedPhone);
  }, []);

  const handleSave = () => {
    if (abcId && aadhaarName && email && phone) {
      localStorage.setItem('abc_id', abcId);
      localStorage.setItem('abc_aadhaar_name', aadhaarName);
      localStorage.setItem('abc_email', email);
      localStorage.setItem('abc_phone', phone);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABCID Master
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
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Batch</p>
              <p className="text-sm font-bold text-gray-700">2021-2025</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Program</p>
              <p className="text-sm font-bold text-gray-700">B.Tech. AIE</p>
            </div>
          </div>

          <div className="max-w-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600">ABC ID *</label>
                <input
                  type="text"
                  value={abcId}
                  onChange={(e) => setAbcId(e.target.value)}
                  placeholder="Enter 12 digit ABC ID"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600">Name as per Aadhaar *</label>
                <input
                  type="text"
                  value={aadhaarName}
                  onChange={(e) => setAadhaarName(e.target.value)}
                  placeholder="Enter full name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600">Email ID *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] font-bold text-gray-600">Phone Number *</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter mobile number"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={handleSave}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors"
              >
                Save Details
              </button>
              {isSaved && (
                <div className="flex items-center gap-2 text-green-600 font-bold text-sm animate-in fade-in slide-in-from-left-2">
                  <CheckCircle2 size={18} />
                  <span>Successfully Saved!</span>
                </div>
              )}
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-sm">
              <h3 className="text-[12px] font-bold text-blue-800 mb-2 uppercase">Instructions</h3>
              <ul className="text-[11px] text-blue-700 space-y-1.5 list-disc pl-4">
                <li>Ensure your ABC ID is correct as per the DigiLocker portal.</li>
                <li>The name must match exactly with your Aadhaar card for verification.</li>
                <li>Providing incorrect information may lead to issues with credit transfers.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
