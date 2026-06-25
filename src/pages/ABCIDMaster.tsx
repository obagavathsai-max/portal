import React, { useState, useEffect } from 'react';
import { Save, AlertCircle, CheckCircle2, User, Fingerprint, Mail, Phone, Hash } from 'lucide-react';

export default function ABCIDMaster() {
  const [formData, setFormData] = useState({
    abcId: '',
    aadhaarName: '',
    email: 'av.sc.u4aie23132@amrita.edu',
    phone: '9876543210'
  });

  const [studentInfo] = useState({
    rollNo: 'AV.SC.U4AIE23132',
    name: 'ORUGANTI BAGAVATH SAI'
  });

  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    const savedAbcId = localStorage.getItem('abcId');
    const savedAadhaarName = localStorage.getItem('aadhaarName');
    if (savedAbcId || savedAadhaarName) {
      setFormData(prev => ({
        ...prev,
        abcId: savedAbcId || '',
        aadhaarName: savedAadhaarName || ''
      }));
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    setTimeout(() => {
      localStorage.setItem('abcId', formData.abcId);
      localStorage.setItem('aadhaarName', formData.aadhaarName);
      setIsSaving(false);
      setMessage({ type: 'success', text: 'ABC ID details saved successfully!' });
      setTimeout(() => setMessage(null), 3000);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm rounded-sm border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-6 bg-aums-teal rounded-full"></div>
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            ABCID Master
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Student Information */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-aums-teal-light px-4 py-3 border-b border-aums-teal/10">
              <h2 className="text-[13px] font-bold text-aums-teal uppercase">Student Information</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-3">
                <Hash size={16} className="text-gray-400 mt-1" />
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase block">Roll No</label>
                  <p className="text-[13px] font-bold text-gray-700">{studentInfo.rollNo}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User size={16} className="text-gray-400 mt-1" />
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase block">Student Name</label>
                  <p className="text-[13px] font-bold text-gray-700">{studentInfo.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Entry Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSave} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6">
              {message && (
                <div className={`mb-6 p-4 rounded-md flex items-center gap-3 ${
                  message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                }`}>
                  {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span className="text-[13px] font-semibold">{message.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-2">
                    <Fingerprint size={12} className="text-aums-teal" />
                    ABC ID
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.abcId}
                    onChange={(e) => setFormData({ ...formData, abcId: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-[13px] bg-white"
                    placeholder="Enter ABC ID"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-2">
                    <User size={12} className="text-aums-teal" />
                    Name as in Aadhaar
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.aadhaarName}
                    onChange={(e) => setFormData({ ...formData, aadhaarName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all text-[13px] bg-white"
                    placeholder="Enter name as per Aadhaar"
                  />
                </div>

                <div className="space-y-1.5 opacity-80">
                  <label className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-2">
                    <Mail size={12} className="text-gray-400" />
                    Email (Read Only)
                  </label>
                  <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                    <span className="text-[13px] text-gray-600 leading-8">{formData.email}</span>
                  </div>
                </div>

                <div className="space-y-1.5 opacity-80">
                  <label className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-2">
                    <Phone size={12} className="text-gray-400" />
                    Phone (Read Only)
                  </label>
                  <div className="relative border border-gray-300 rounded-md px-3 py-1 bg-aums-bg-alt">
                    <span className="text-[13px] text-gray-600 leading-8">{formData.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end border-t border-gray-100">
              <button
                type="submit"
                disabled={isSaving}
                className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5 flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    SAVING...
                  </>
                ) : (
                  <>
                    <Save size={14} />
                    SUBMIT
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
