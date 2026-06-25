import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, GraduationCap, Calendar, Edit3, Save, X } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@amrita.edu',
    phone: '9876543210',
    program: 'B.Tech in Artificial Intelligence',
    batch: '2023-2027',
    advisor: 'Dr. Ram Kumar',
    address: 'Amrita Vishwa Vidyapeetham, Coimbatore'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Logic to save would go here
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header Profile Card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Student Profile</h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-aums-teal-light shadow-lg bg-aums-teal flex items-center justify-center">
                <User size={64} className="text-white" />
              </div>
              <button className="absolute bottom-1 right-1 p-2 bg-white rounded-full shadow-md text-aums-teal hover:bg-aums-teal hover:text-white transition-all">
                <Edit3 size={16} />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                  <p className="text-xs mt-1 text-aums-orange font-bold uppercase tracking-wider">{profile.program}</p>
                </div>
                <div className="flex items-center gap-2">
                  {isEditing ? (
                    <>
                      <button onClick={handleSave} className="flex items-center gap-2 bg-aums-teal text-white px-4 py-2 rounded text-xs font-bold uppercase shadow-sm hover:brightness-110">
                        <Save size={14} /> Save
                      </button>
                      <button onClick={() => setIsEditing(false)} className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded text-xs font-bold uppercase hover:bg-gray-200">
                        <X size={14} /> Cancel
                      </button>
                    </>
                  ) : (
                    <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 bg-aums-teal text-white px-4 py-2 rounded text-xs font-bold uppercase shadow-sm hover:brightness-110">
                      <Edit3 size={14} /> Edit Profile
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  { icon: Mail, label: 'Email', value: profile.email, type: 'email', name: 'email' },
                  { icon: Phone, label: 'Phone', value: profile.phone, type: 'tel', name: 'phone' },
                  { icon: GraduationCap, label: 'Advisor', value: profile.advisor, type: 'text', name: 'advisor' },
                  { icon: MapPin, label: 'Address', value: profile.address, type: 'text', name: 'address' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-transparent hover:border-aums-teal/20 transition-all">
                    <div className="p-2 rounded bg-white shadow-sm">
                      <item.icon size={16} className="text-aums-teal" />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                      {isEditing ? (
                        <input
                          type={item.type}
                          value={item.value}
                          onChange={(e) => setProfile({ ...profile, [item.name]: e.target.value })}
                          className="w-full text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded px-2 py-1 mt-1 focus:ring-1 focus:ring-aums-teal outline-none border-aums-teal"
                        />
                      ) : (
                        <p className="text-sm font-semibold text-gray-700">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Details Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
          </div>
          <div className="p-6 grid grid-cols-2 gap-6">
            {[
              { label: 'Current Semester', value: '5' },
              { label: 'Total Credits', value: '84' },
              { label: 'CGPA', value: '9.15' },
              { label: 'Arrears', value: '0' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-4 rounded-lg bg-gray-50 border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">{item.label}</p>
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Registration Details</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-50 pb-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase">Roll Number</span>
              <span className="text-[13px] font-bold text-gray-700">{profile.rollNo}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-50 pb-2">
              <span className="text-[11px] font-bold text-gray-400 uppercase">Batch</span>
              <span className="text-[13px] font-bold text-gray-700">{profile.batch}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-gray-400 uppercase">Department</span>
              <span className="text-[13px] font-bold text-gray-700">TIFAC CORE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
