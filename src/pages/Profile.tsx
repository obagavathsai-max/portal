import React, { useState } from 'react';
import { User as UserIcon, Mail, Phone, MapPin, Calendar, BookOpen, Edit3, Save, X, Briefcase, GraduationCap } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@amrita.edu',
    phone: '+91 98765 43210',
    program: 'B.Tech in Artificial Intelligence',
    semester: '5th Semester',
    campus: 'Amritapuri',
    address: 'Amrita Vishwa Vidyapeetham, Amritapuri, Clappana P.O., Kollam - 690525, Kerala, India'
  });

  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-10">
      {/* Header Profile Section */}
      <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-100">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Student Profile
          </h1>
        </div>

        <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar Area */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-inner bg-aums-teal">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800">{profile.rollNo}</p>
              <p className="text-xs mt-1 text-aums-orange">{profile.program}</p>
            </div>
          </div>

          {/* Details Area */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {[
              { label: 'Full Name', key: 'name', icon: UserIcon },
              { label: 'Email Address', key: 'email', icon: Mail },
              { label: 'Phone Number', key: 'phone', icon: Phone },
              { label: 'Semester', key: 'semester', icon: Calendar },
              { label: 'Campus', key: 'campus', icon: MapPin },
            ].map((field) => (
              <div key={field.key} className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <field.icon size={12} className="text-aums-teal" />
                  {field.label}
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={(tempProfile as any)[field.key]}
                    onChange={(e) => setTempProfile({ ...tempProfile, [field.key]: e.target.value })}
                    className="w-full px-3 py-1.5 text-sm border-b-2 bg-gray-50 focus:outline-none transition-colors border-aums-teal"
                  />
                ) : (
                  <p className="text-sm font-semibold text-gray-700">{(profile as any)[field.key]}</p>
                )}
              </div>
            ))}

            <div className="md:col-span-2 space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <MapPin size={12} className="text-aums-teal" />
                Permanent Address
              </label>
              {isEditing ? (
                <textarea
                  value={tempProfile.address}
                  onChange={(e) => setTempProfile({ ...tempProfile, address: e.target.value })}
                  className="w-full px-3 py-1.5 text-sm border-b-2 bg-gray-50 focus:outline-none transition-colors border-aums-teal"
                  rows={2}
                />
              ) : (
                <p className="text-sm font-semibold text-gray-700 leading-relaxed">{profile.address}</p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto shrink-0">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-aums-teal text-white rounded font-bold text-[13px] hover:bg-aums-teal-dark transition-colors"
                >
                  <Save size={16} /> SAVE
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-aums-red-error text-white rounded font-bold text-[13px] hover:brightness-90 transition-colors"
                >
                  <X size={16} /> CANCEL
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-aums-teal text-white rounded font-bold text-[13px] hover:bg-aums-teal-dark transition-colors"
              >
                <Edit3 size={16} /> EDIT PROFILE
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Academic Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-100">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
          </div>
          <div className="p-6 grid grid-cols-2 gap-6">
            {[
              { label: 'CGPA', value: '8.92', icon: Star },
              { label: 'Credits Earned', value: '84', icon: BookOpen },
              { label: 'Active Backlogs', value: '0', icon: AlertCircle },
              { label: 'Attendance (Avg)', value: '88%', icon: Calendar },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                <item.icon size={20} className="text-aums-teal mb-2" />
                <p className="text-[10px] font-bold text-gray-400 uppercase">{item.label}</p>
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-100">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Institutional Roles</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg">
              <div className="p-2 rounded bg-blue-50 text-blue-600">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Class Representative</p>
                <p className="text-xs text-gray-500">Academic Year 2023-24</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-lg">
              <div className="p-2 rounded bg-orange-50 text-orange-600">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Student Coordinator</p>
                <p className="text-xs text-gray-500">Tech Fest - Pragyan 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
