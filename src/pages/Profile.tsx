import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, MapPin, Edit2, Save, X, BookOpen, GraduationCap, Award } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@amrita.edu',
    phone: '+91 98765 43210',
    dob: 'January 15, 2005',
    address: 'Amritapuri, Kollam, Kerala, 690525',
    program: 'B.Tech in Artificial Intelligence',
    semester: '4th Semester',
    cgpa: '9.25'
  });

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you'd send this to an API
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Profile Header Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Student Profile
          </h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold bg-aums-teal">
                {profile.name.charAt(0)}
              </div>
              <div className="text-center">
                <h2 className="font-bold text-lg text-gray-800">{profile.name}</h2>
                <p className="text-sm text-gray-500">{profile.rollNo}</p>
                <p className="text-xs mt-1 text-aums-orange-dark">{profile.program}</p>
              </div>
              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="mt-2 flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold text-white transition-all hover:brightness-110 active:scale-95 bg-aums-teal"
              >
                {isEditing ? <><Save size={14} /> Save</> : <><Edit2 size={14} /> Edit Profile</>}
              </button>
              {isEditing && (
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold text-white transition-all hover:brightness-110 active:scale-95 bg-aums-orange-dark"
                >
                  <X size={14} /> Cancel
                </button>
              )}
            </div>

            {/* Info Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 w-full">
              {[
                { icon: Mail, label: 'Email', key: 'email', value: profile.email },
                { icon: Phone, label: 'Phone', key: 'phone', value: profile.phone },
                { icon: Calendar, label: 'Date of Birth', key: 'dob', value: profile.dob },
                { icon: MapPin, label: 'Address', key: 'address', value: profile.address },
              ].map((item) => (
                <div key={item.key} className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-500">
                    <item.icon size={14} />
                    <span className="text-[11px] font-bold uppercase tracking-wider">{item.label}</span>
                  </div>
                  {isEditing ? (
                    <input
                      type="text"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal"
                      value={item.value}
                      onChange={(e) => setProfile({ ...profile, [item.key]: e.target.value })}
                    />
                  ) : (
                    <p className="text-sm font-medium text-gray-800 ml-6">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Academic Info */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: GraduationCap, label: 'Program', value: profile.program },
              { icon: BookOpen, label: 'Current Semester', value: profile.semester },
              { icon: Award, label: 'Current CGPA', value: profile.cgpa },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-4 bg-gray-50 rounded-sm border border-gray-100 text-center">
                <item.icon size={24} className="text-gray-400 mb-2" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</span>
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
