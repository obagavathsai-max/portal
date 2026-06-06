import React, { useState } from 'react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@amrita.edu',
    phone: '9876543210',
    program: 'B.Tech in Artificial Intelligence',
    semester: 'S4',
    bloodGroup: 'O+',
    address: '123, Amrita Vishwa Vidyapeetham, Amritapuri, Kerala'
  });

  const academicSummary = [
    { label: 'CGPA', value: '9.25' },
    { label: 'SGPA (Prev)', value: '9.10' },
    { label: 'Attendance', value: '92%' },
    { label: 'Backlogs', value: '0' }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Profile Card */}
      <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Student Profile</h1>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold bg-aums-teal">
                {profile.name.charAt(0)}
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-800">{profile.rollNo}</p>
                <p className="text-xs mt-1 text-aums-orange-dark">{profile.program}</p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="w-full py-2 text-xs font-bold text-white rounded transition-colors bg-aums-teal"
              >
                {isEditing ? 'Save Profile' : 'Edit Profile'}
              </button>
            </div>

            {/* Info Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                { label: 'Name', key: 'name' },
                { label: 'Email', key: 'email' },
                { label: 'Phone', key: 'phone' },
                { label: 'Semester', key: 'semester' },
                { label: 'Blood Group', key: 'bloodGroup' },
                { label: 'Address', key: 'address', fullWidth: true }
              ].map((field) => (
                <div key={field.key} className={field.fullWidth ? "md:col-span-2" : ""}>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase mb-1">{field.label}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none border-aums-teal"
                      value={profile[field.key as keyof typeof profile]}
                      onChange={(e) => setProfile({ ...profile, [field.key]: e.target.value })}
                    />
                  ) : (
                    <p className="text-sm text-gray-800 font-medium">{profile[field.key as keyof typeof profile]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Academic Summary */}
      <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {academicSummary.map((item) => (
              <div key={item.label} className="bg-gray-50 p-4 rounded border border-gray-100 text-center">
                <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">{item.label}</p>
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
