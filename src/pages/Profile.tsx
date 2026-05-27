import React, { useState, useEffect } from 'react';
import { HelpCircle, Link as LinkIcon, Maximize2, User, Camera, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'bagavathsai@amrita.edu',
    phone: '+91 98765 43210',
    program: 'B.Tech. Artificial Intelligence and Data Science',
    semester: '6',
    batch: '2021-2025',
    advisor: 'Dr. Ramesh R',
    bloodGroup: 'O+',
    address: 'Amrita Vishwa Vidyapeetham, Ettimadai, Coimbatore'
  });

  return (
    <div className="space-y-6">
      {/* Profile Header Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Student Profile
          </h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative group">
              <div className="w-40 h-40 rounded-sm overflow-hidden border-4 border-gray-100 shadow-md bg-aums-teal">
                <div className="w-full h-full flex items-center justify-center">
                  <User size={80} className="text-white" />
                </div>
              </div>
              <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg text-gray-600 hover:text-aums-teal transition-colors">
                <Camera size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{profile.rollNo}</p>
                <p className="text-xs mt-1 text-aums-orange">{profile.program}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                {[
                  { icon: Mail, value: profile.email, label: 'Email' },
                  { icon: Phone, value: profile.phone, label: 'Phone' },
                  { icon: GraduationCap, value: `Semester ${profile.semester}`, label: 'Current Semester' },
                  { icon: Calendar, value: profile.batch, label: 'Batch' },
                  { icon: User, value: profile.advisor, label: 'Academic Advisor' },
                  { icon: Briefcase, value: 'Regular Student', label: 'Status' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-aums-teal-light">
                      <item.icon size={14} className="text-aums-teal" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">{item.label}</p>
                      <p className="font-medium text-gray-700">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-6 py-2 text-white text-sm font-bold rounded-sm shadow-sm hover:brightness-110 transition-all bg-aums-teal"
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </button>
              <button className="px-6 py-2 text-white text-sm font-bold rounded-sm shadow-sm hover:brightness-110 transition-all bg-aums-orange">
                Download ID Card
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Details */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Personal Details</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { label: 'Full Name', value: profile.name },
                { label: 'Roll Number', value: profile.rollNo },
                { label: 'Blood Group', value: profile.bloodGroup },
                { label: 'Primary Email', value: profile.email },
                { label: 'Mobile Number', value: profile.phone },
                { label: 'Permanent Address', value: profile.address, isAddress: true },
              ].map((item, i) => (
                <div key={i} className="flex flex-col border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">{item.label}</span>
                  {isEditing && !item.isAddress ? (
                    <input
                      type="text"
                      className="text-sm font-medium text-gray-800 border-b border-aums-teal focus:outline-none bg-gray-50 px-2 py-1"
                      defaultValue={item.value}
                    />
                  ) : (
                    <span className="text-sm font-medium text-gray-800">{item.value}</span>
                  )}
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
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'CGPA', value: '8.75' },
                { label: 'Total Credits', value: '124' },
                { label: 'Arrears', value: '0' },
                { label: 'Attendance', value: '92%' },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-sm border border-gray-100 text-center">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="text-xl font-bold text-aums-teal">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Semester Performance</h3>
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map(sem => (
                  <div key={sem} className="flex items-center justify-between group">
                    <span className="text-sm font-medium text-gray-600">Semester {sem}</span>
                    <div className="flex-1 mx-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-aums-teal"
                        style={{ width: `${80 + Math.random() * 15}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-aums-teal">{(8 + Math.random()).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
