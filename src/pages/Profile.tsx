import React, { useState } from 'react';
import { Camera, Mail, Phone, MapPin, Calendar, Book, Award, Edit2, Save, X, User as UserIcon } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@am.students.amrita.edu',
    phone: '+91 9876543210',
    dob: '15 Jan 2005',
    bloodGroup: 'O+',
    address: '123, Student Hostel, Amrita University, Ettimadai, Coimbatore - 641112',
    program: 'B.Tech. Artificial Intelligence and Data Science',
    batch: '2023-2027',
    currentSemester: '3',
    advisor: 'Dr. Vidya Balasubramanian'
  });

  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Top Profile Header Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Student Profile
          </h1>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar Section */}
            <div className="relative group mx-auto md:mx-0">
              <div className="w-32 h-32 rounded-full border-4 border-aums-teal-light overflow-hidden bg-gray-100 flex items-center justify-center shadow-inner">
                <UserIcon size={64} className="text-gray-300" />
              </div>
              <button className="absolute bottom-1 right-1 p-2 bg-aums-teal text-white rounded-full shadow-lg hover:scale-110 transition-transform">
                <Camera size={16} />
              </button>
            </div>

            {/* Basic Info */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                <p className="text-aums-teal font-bold">{profile.rollNo}</p>
                <p className="text-xs mt-1 text-orange-600">{profile.program}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-gray-600 justify-center md:justify-start">
                  <Mail size={16} className="text-aums-teal" />
                  <span className="truncate">{profile.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 justify-center md:justify-start">
                  <Phone size={16} className="text-aums-teal" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 justify-center md:justify-start">
                  <Calendar size={16} className="text-aums-teal" />
                  <span>DOB: {profile.dob}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 justify-center md:justify-start">
                  <Award size={16} className="text-orange-600" />
                  <span>Blood Group: {profile.bloodGroup}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="w-full md:w-auto">
              {isEditing ? (
                <div className="flex flex-row md:flex-col gap-2">
                  <button
                    onClick={handleSave}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-green-600 text-white text-xs font-bold rounded shadow-md hover:bg-green-700 transition-colors"
                  >
                    <Save size={14} /> SAVE
                  </button>
                  <button
                    onClick={() => { setIsEditing(false); setEditedProfile({ ...profile }); }}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-gray-500 text-white text-xs font-bold rounded shadow-md hover:bg-gray-600 transition-colors"
                  >
                    <X size={14} /> CANCEL
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-2 bg-aums-teal text-white text-xs font-bold rounded shadow-md hover:opacity-90 transition-all"
                >
                  <Edit2 size={14} /> EDIT PROFILE
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Academic Details */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden h-full">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Batch', value: profile.batch, icon: Calendar },
                { label: 'Semester', value: profile.currentSemester, icon: Book },
                { label: 'Advisor', value: profile.advisor, icon: UserIcon },
                { label: 'Campus', value: 'Ettimadai, Coimbatore', icon: MapPin },
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                  <p className="text-xl font-bold text-aums-teal">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact/Other Details */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden h-full">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Contact Details</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Mailing Address</p>
              {isEditing ? (
                <textarea
                  className="w-full text-sm border border-gray-300 rounded p-2 focus:ring-1 focus:ring-aums-teal outline-none"
                  rows={3}
                  value={editedProfile.address}
                  onChange={(e) => setEditedProfile({ ...editedProfile, address: e.target.value })}
                />
              ) : (
                <p className="text-sm font-medium text-gray-700 leading-relaxed">{profile.address}</p>
              )}
            </div>
            <div className="pt-2">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Alternate Email</p>
              <p className="text-sm font-medium text-gray-700">None provided</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
