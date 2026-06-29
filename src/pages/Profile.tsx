import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Calendar, BookOpen, GraduationCap, Award, Edit2, Check } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@av.students.amrita.edu',
    phone: '+91 98765 43210',
    program: 'B.Tech. in Artificial Intelligence and Data Science',
    semester: '4th Semester',
    campus: 'Amritapuri',
    advisor: 'Dr. Senthil Kumar',
    bloodGroup: 'O+',
    address: 'Amritapuri Campus, Clappana P.O., Kollam, Kerala - 690525'
  });

  const academicSummary = [
    { label: 'CGPA', value: '8.75', icon: Award },
    { label: 'Credits Earned', value: '72', icon: BookOpen },
    { label: 'Rank', value: '12th', icon: GraduationCap },
    { label: 'Attendance', value: '92%', icon: Check },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Profile Card */}
      <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Student Profile</h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-white shrink-0 shadow-inner bg-aums-teal">
              <User size={48} strokeWidth={1.5} />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {isEditing ? <Check size={14} /> : <Edit2 size={14} />}
                  {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
              </div>
              <p className="text-sm font-semibold text-gray-600">{profile.rollNo}</p>
              <p className="text-xs mt-1 text-aums-orange-dark">{profile.program}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} className="text-gray-400" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} className="text-gray-400" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={14} className="text-gray-400" />
                  <span>{profile.campus}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={14} className="text-gray-400" />
                  <span>{profile.semester}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {academicSummary.map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded shadow-sm border border-gray-200 flex flex-col items-center text-center space-y-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-aums-teal-light text-aums-teal">
              <item.icon size={20} />
            </div>
            <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">{item.label}</p>
            <p className="text-xl font-bold text-aums-teal">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Details Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Personal Details</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400">Blood Group</label>
              <input
                type="text"
                value={profile.bloodGroup}
                disabled={!isEditing}
                className={`w-full text-sm font-medium border-b py-1 focus:outline-none transition-colors ${isEditing ? 'border-aums-teal' : 'border-transparent bg-transparent'}`}
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-gray-400">Permanent Address</label>
              <textarea
                value={profile.address}
                disabled={!isEditing}
                rows={3}
                className={`w-full text-sm font-medium border-b py-1 focus:outline-none transition-colors resize-none ${isEditing ? 'border-aums-teal' : 'border-transparent bg-transparent'}`}
              />
            </div>
          </div>
        </div>

        {/* Academic Details */}
        <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex justify-between items-center py-1 border-b border-gray-50">
              <span className="text-xs font-bold text-gray-500 uppercase">Class Advisor</span>
              <span className="text-sm font-semibold text-gray-700">{profile.advisor}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-50">
              <span className="text-xs font-bold text-gray-500 uppercase">Program</span>
              <span className="text-sm font-semibold text-gray-700">B.Tech.</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-50">
              <span className="text-xs font-bold text-gray-500 uppercase">Specialization</span>
              <span className="text-sm font-semibold text-gray-700">AIE</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-50">
              <span className="text-xs font-bold text-gray-500 uppercase">Batch</span>
              <span className="text-sm font-semibold text-gray-700">2023-2027</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
