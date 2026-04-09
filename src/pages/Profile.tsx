import React, { useState } from 'react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@av.students.amrita.edu',
    phone: '+91 81067 36469',
    department: 'Artificial Intelligence and Data Science',
    program: 'B.Tech 2023 AIE',
    batch: '2023-2027'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Personal Information
          </h1>
        </div>

        <div className="p-6">
          {/* Profile header */}
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold bg-aums-teal"
            >
              OB
            </div>
            <div>
              <p className="text-base font-bold text-gray-800">{profile.name}</p>
              <p className="text-sm text-gray-500">{profile.rollNo}</p>
              <p className="text-xs mt-1 text-aums-orange">{profile.program}</p>
            </div>
            <div className="ml-auto">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-1.5 text-xs font-semibold text-white rounded bg-aums-teal hover:bg-aums-teal-dark"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-1.5 text-xs font-semibold text-white rounded bg-aums-orange hover:bg-aums-orange-dark"
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              { label: 'Full Name', key: 'name', type: 'text' },
              { label: 'Roll Number', key: 'rollNo', type: 'text' },
              { label: 'University Email', key: 'email', type: 'email' },
              { label: 'Phone Number', key: 'phone', type: 'tel' },
              { label: 'Department', key: 'department', type: 'text' },
              { label: 'Batch', key: 'batch', type: 'text' },
            ].map(field => (
              <div key={field.key}>
                <label className="block text-xs font-semibold text-gray-500 mb-1">{field.label}</label>
                <input
                  type={field.type}
                  name={field.key}
                  value={profile[field.key as keyof typeof profile]}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 bg-gray-50 disabled:opacity-80 focus:outline-none ${isEditing ? 'border-aums-teal' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Academic Summary */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Current CGPA', value: '9.41' },
              { label: 'Credits Earned', value: '105' },
              { label: 'Current Semester', value: '5' },
              { label: 'Program', value: 'B.Tech AIE' },
            ].map(item => (
              <div key={item.label} className="text-center p-3 border border-gray-100 rounded bg-gray-50">
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
                <p className="text-xs text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
