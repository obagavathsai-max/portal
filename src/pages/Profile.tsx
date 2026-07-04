import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Edit2, Check, X } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@amrita.edu',
    phone: '+91 98765 43210',
    program: 'B.Tech. Artificial Intelligence',
    batch: '2023-2027',
    semester: '6',
    advisor: 'Dr. Ramesh P.',
    cgpa: '8.75',
    attendance: '91.5%',
    credits: '124'
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Profile Header Card */}
      <div className="bg-white rounded shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Student Profile</h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="relative group">
              <div className="w-32 h-32 rounded bg-gray-100 flex items-center justify-center border-4 border-white shadow-md overflow-hidden bg-aums-teal">
                <User size={64} className="text-white/80" />
              </div>
              <button className="absolute bottom-1 right-1 p-1.5 bg-white rounded-full shadow-lg text-gray-600 hover:text-aums-teal transition-colors">
                <Edit2 size={14} />
              </button>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{profile.rollNo}</p>
                  <p className="text-xs mt-1 text-aums-orange-dark">{profile.program}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide transition-all shadow-sm flex items-center gap-2 ${
                    isEditing ? 'bg-red-50 text-red-600 border border-red-200' : 'text-white bg-aums-teal'
                  }`}
                >
                  {isEditing ? <><X size={14} /> Cancel</> : <><Edit2 size={14} /> Edit Profile</>}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail size={16} className="text-aums-teal" />
                  <span className="font-medium">Email:</span>
                  <input
                    type="text"
                    value={profile.email}
                    disabled={!isEditing}
                    className={`bg-transparent outline-none flex-1 py-0.5 border-b border-transparent ${isEditing ? 'border-aums-teal' : ''}`}
                  />
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone size={16} className="text-aums-teal" />
                  <span className="font-medium">Phone:</span>
                  <input
                    type="text"
                    value={profile.phone}
                    disabled={!isEditing}
                    className={`bg-transparent outline-none flex-1 py-0.5 border-b border-transparent ${isEditing ? 'border-aums-teal' : ''}`}
                  />
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <BookOpen size={16} className="text-aums-orange-dark" />
                  <span className="font-medium">Batch:</span>
                  <span>{profile.batch}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Calendar size={16} className="text-aums-orange-dark" />
                  <span className="font-medium">Semester:</span>
                  <span>{profile.semester}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Summary Grid */}
      <div className="bg-white rounded shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Current CGPA', value: profile.cgpa, color: 'teal' },
              { label: 'Attendance %', value: profile.attendance, color: 'teal' },
              { label: 'Credits Earned', value: profile.credits, color: 'teal' },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded border border-gray-100 flex flex-col items-center justify-center text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
