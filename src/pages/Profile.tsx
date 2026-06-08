import React, { useState } from 'react';
import { Camera, Mail, Phone, MapPin, Calendar, BookOpen, User as UserIcon, Edit2, Check } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@amrita.edu',
    phone: '+91 98765 43210',
    dob: '15-May-2005',
    program: 'B.Tech. Artificial Intelligence and Data Science (2023)',
    semester: '6',
    advisor: 'Dr. Srinivasu P.'
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Student Profile
          </h1>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-3">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-gray-100 shadow-inner flex items-center justify-center bg-aums-teal overflow-hidden">
                  <UserIcon size={64} className="text-white" />
                </div>
                <button className="absolute bottom-1 right-1 p-2 bg-white rounded-full shadow-md border border-gray-200 hover:bg-gray-50 transition-colors">
                  <Camera size={16} className="text-gray-600" />
                </button>
              </div>
              <div className="text-center">
                <h2 className="font-bold text-lg text-gray-900">{profile.name}</h2>
                <p className="text-sm font-medium text-gray-500 uppercase">{profile.rollNo}</p>
                <p className="text-xs mt-1 text-aums-orange">{profile.program}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-700 text-sm uppercase">Personal Information</h3>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-sm text-xs font-bold text-white transition-all shadow-sm active:scale-95 bg-aums-teal"
                >
                  {isEditing ? <><Check size={14} /> Save Changes</> : <><Edit2 size={14} /> Edit Profile</>}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  { icon: Mail, label: 'Email', value: profile.email, key: 'email' },
                  { icon: Phone, label: 'Phone', value: profile.phone, key: 'phone' },
                  { icon: Calendar, label: 'Date of Birth', value: profile.dob, key: 'dob' },
                  { icon: BookOpen, label: 'Academic Advisor', value: profile.advisor, key: 'advisor' },
                ].map((item) => (
                  <div key={item.key} className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1.5">
                      <item.icon size={11} /> {item.label}
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) => setProfile({ ...profile, [item.key]: e.target.value })}
                        className="w-full px-3 py-1.5 text-sm border-b-2 bg-gray-50 outline-none transition-colors border-aums-teal"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-gray-800">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'CGPA', value: '8.45' },
              { label: 'Total Credits', value: '112' },
              { label: 'Current Semester', value: '6' },
              { label: 'Backlogs', value: '0' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 p-4 rounded-sm border border-gray-100 text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">{item.label}</p>
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
