import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, BookOpen, GraduationCap, Calendar, Award } from 'lucide-react';

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@av.students.amrita.edu',
    phone: '9876543210',
    program: 'B.Tech 2023 AIE',
    semester: '6',
    advisor: 'Dr. Praveen K',
    dob: '15-08-2005',
    bloodGroup: 'O+',
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    const savedPhone = localStorage.getItem('userPhone');
    if (savedEmail || savedPhone) {
      setProfile(prev => ({
        ...prev,
        email: savedEmail || prev.email,
        phone: savedPhone || prev.phone
      }));
    }
  }, []);

  const stats = [
    { label: 'CGPA', value: '9.41', icon: Award },
    { label: 'Attendance', value: '88%', icon: Calendar },
    { label: 'Credits', value: '112', icon: BookOpen },
    { label: 'Backlogs', value: '0', icon: GraduationCap },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Student Profile
          </h1>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="w-32 h-32 bg-aums-teal rounded-sm flex items-center justify-center shrink-0">
              <User size={64} className="text-white" />
            </div>

            {/* Basic Info */}
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                <p className="text-sm font-semibold text-gray-500">{profile.rollNo}</p>
                <p className="text-xs mt-1 text-aums-orange">{profile.program}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-sm">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-aums-teal" />
                  <span className="text-gray-700">{profile.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-aums-teal" />
                  <span className="text-gray-700">{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-aums-teal" />
                  <span className="text-gray-700">DOB: {profile.dob}</span>
                </div>
                <div className="flex items-center gap-3">
                  <User size={16} className="text-aums-teal" />
                  <span className="text-gray-700">Advisor: {profile.advisor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, i) => (
          <div key={i} className="bg-white p-4 border border-gray-200 rounded-sm shadow-sm text-center">
            <div className="w-10 h-10 mx-auto mb-2 bg-aums-teal-light rounded-full flex items-center justify-center">
              <item.icon size={20} className="text-aums-teal" />
            </div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{item.label}</p>
            <p className="text-xl font-bold text-aums-teal">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Detailed Info */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 border-b pb-1">Current Enrollment</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Semester</span>
                  <span className="font-semibold">{profile.semester}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Section</span>
                  <span className="font-semibold">A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Academic Year</span>
                  <span className="font-semibold">2023-2024</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900 border-b pb-1">Personal Details</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Blood Group</span>
                  <span className="font-semibold">{profile.bloodGroup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Hostel Resident</span>
                  <span className="font-semibold">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Nationality</span>
                  <span className="font-semibold">Indian</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
