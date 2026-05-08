import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, BookOpen, Calendar, MapPin, Edit2, Save, X } from 'lucide-react';

interface StudentProfile {
  name: string;
  rollNo: string;
  email: string;
  phone: string;
  program: string;
  semester: string;
  campus: string;
  dob: string;
  bloodGroup: string;
}

const initialProfile: StudentProfile = {
  name: 'ORUGANTI BAGAVATH SAI',
  rollNo: 'AV.SC.U4AIE23132',
  email: localStorage.getItem('userEmail') || 'bagavath@gmail.com',
  phone: localStorage.getItem('userPhone') || '+91 98765 43210',
  program: 'B.Tech 2023 AIE',
  semester: '6th Semester',
  campus: 'Amritapuri',
  dob: '01/01/2005',
  bloodGroup: 'O+'
};

export default function Profile() {
  const [profile, setProfile] = useState<StudentProfile>(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editedEmail, setEditedEmail] = useState(profile.email);
  const [editedPhone, setEditedPhone] = useState(profile.phone);

  const handleSave = () => {
    localStorage.setItem('userEmail', editedEmail);
    localStorage.setItem('userPhone', editedPhone);
    setProfile({ ...profile, email: editedEmail, phone: editedPhone });
    setIsEditing(false);
  };

  const academicSummary = [
    { label: 'CGPA', value: '9.41' },
    { label: 'Total Credits', value: '112' },
    { label: 'Attendance', value: '84%' },
    { label: 'Backlogs', value: '0' }
  ];

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
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold bg-aums-teal">
                {profile.name.charAt(0)}
              </div>
              <div className="text-center">
                <h2 className="font-bold text-lg text-gray-900">{profile.name}</h2>
                <p className="text-sm text-gray-500">{profile.rollNo}</p>
                <p className="text-xs mt-1 text-aums-orange">{profile.program}</p>
              </div>

              <button
                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-white text-sm font-semibold rounded transition-colors bg-aums-teal"
              >
                {isEditing ? <><Save size={16} /> Save Changes</> : <><Edit2 size={16} /> Edit Profile</>}
              </button>
              {isEditing && (
                <button
                  onClick={() => setIsEditing(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-700 text-sm font-semibold rounded border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <X size={16} /> Cancel
                </button>
              )}
            </div>

            {/* Details Section */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">University Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded text-sm focus:outline-none border-aums-teal"
                  />
                ) : (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail size={16} className="text-gray-400" />
                    <span className="text-sm">{profile.email}</span>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Phone Number</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedPhone}
                    onChange={(e) => setEditedPhone(e.target.value)}
                    className="w-full px-3 py-2 border rounded text-sm focus:outline-none border-aums-teal"
                  />
                ) : (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone size={16} className="text-gray-400" />
                    <span className="text-sm">{profile.phone}</span>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Academic Info</label>
                <div className="flex items-center gap-2 text-gray-700">
                  <BookOpen size={16} className="text-gray-400" />
                  <span className="text-sm">{profile.semester}</span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Campus</label>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-sm">{profile.campus}</span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Date of Birth</label>
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-sm">{profile.dob}</span>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Blood Group</label>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-sm font-semibold">{profile.bloodGroup}</span>
                </div>
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
            {academicSummary.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-sm border border-gray-100 text-center">
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">{item.label}</p>
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
