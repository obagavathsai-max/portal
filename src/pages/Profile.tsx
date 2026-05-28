import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, MapPin, Award, BookOpen, Clock, Camera } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const profile = {
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    program: 'Bachelor of Technology (Artificial Intelligence)',
    campus: 'Amritapuri',
    batch: '2021-2025',
    email: 'bagavath.sai@student.amrita.edu',
    phone: '+91 98765 43210',
    dob: '15-05-2003',
    bloodGroup: 'B+',
    advisor: 'Dr. Ramesh Kumar',
    address: 'Amrita Vishwa Vidyapeetham, Clappana P.O., Vallikavu, Kollam, Kerala 690525'
  };

  const academicSummary = [
    { label: 'Current Semester', value: '6', icon: Clock },
    { label: 'CGPA', value: '8.45', icon: Award },
    { label: 'Total Credits', value: '132', icon: BookOpen },
    { label: 'Rank in Class', value: '12th', icon: Award },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Profile Header Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Student Profile</h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative shrink-0">
              <div className="w-32 h-32 rounded-lg border-2 border-aums-teal/20 overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute -bottom-2 -right-2 p-2 bg-aums-teal text-white rounded-full shadow-lg hover:bg-aums-teal-dark transition-colors">
                <Camera size={16} />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                <p className="text-sm font-semibold text-aums-teal mt-1 tracking-wide">{profile.rollNo}</p>
                <p className="text-xs mt-1 text-aums-orange-dark font-medium">{profile.program}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                <div className="flex items-center gap-3 text-gray-600 justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full bg-aums-teal-light flex items-center justify-center text-aums-teal">
                    <Mail size={14} />
                  </div>
                  <span className="text-[13px]">{profile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full bg-aums-teal-light flex items-center justify-center text-aums-teal">
                    <Phone size={14} />
                  </div>
                  <span className="text-[13px]">{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full bg-aums-teal-light flex items-center justify-center text-aums-teal">
                    <Calendar size={14} />
                  </div>
                  <span className="text-[13px]">{profile.dob} ({profile.batch})</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 justify-center md:justify-start">
                  <div className="w-8 h-8 rounded-full bg-aums-teal-light flex items-center justify-center text-aums-teal">
                    <MapPin size={14} />
                  </div>
                  <span className="text-[13px]">Campus: {profile.campus}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`px-6 py-2 rounded text-[12px] font-bold shadow-sm transition-all border ${isEditing ? 'bg-white text-aums-teal border-aums-teal' : 'bg-aums-teal text-white border-transparent'
                    }`}
                >
                  {isEditing ? 'SAVE CHANGES' : 'EDIT PROFILE'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Academic Summary Card */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
          </div>
          <div className="p-4 space-y-4">
            {academicSummary.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 bg-aums-bg-main rounded-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-aums-teal shadow-sm">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-xl font-bold text-aums-teal">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Details Card */}
        <div className="md:col-span-2 bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Personal Details</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {[
                { label: 'Full Name', value: profile.name },
                { label: 'Date of Birth', value: profile.dob },
                { label: 'Blood Group', value: profile.bloodGroup },
                { label: 'Academic Advisor', value: profile.advisor },
                { label: 'Permanent Address', value: profile.address, fullWidth: true }
              ].map((item, idx) => (
                <div key={idx} className={item.fullWidth ? 'sm:col-span-2' : ''}>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">{item.label}</p>
                  <p className="text-sm text-gray-800 font-medium leading-relaxed">{item.value}</p>
                  <div className="mt-2 h-px bg-gray-50"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
