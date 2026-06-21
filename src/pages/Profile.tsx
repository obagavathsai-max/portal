import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Book, Award, Building, GraduationCap, Edit2, Check, X } from 'lucide-react';

interface ProfileData {
  name: string;
  rollNo: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  program: string;
  semester: string;
  batch: string;
  advisor: string;
  cgpa: string;
  creditsEarned: number;
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@amrita.edu',
    phone: '+91 98765 43210',
    dob: '15-05-2005',
    address: 'Amrita Vishwa Vidyapeetham, Amritapuri Campus',
    program: 'B.Tech. in Artificial Intelligence and Data Science',
    semester: '6',
    batch: '2023-2027',
    advisor: 'Dr. Ramesh Kumar',
    cgpa: '9.41',
    creditsEarned: 112
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header Profile Card */}
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Student Profile
          </h1>
        </div>
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-aums-teal flex items-center justify-center text-white text-4xl font-bold shadow-inner">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </div>
              <button className="absolute bottom-1 right-1 p-2 bg-white rounded-full shadow-md border border-gray-100 hover:bg-gray-50 transition-colors">
                <Edit2 size={16} className="text-gray-500" />
              </button>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 uppercase">{profile.name}</h2>
                  <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">{profile.rollNo}</p>
                  <p className="text-xs mt-1 text-aums-orange">{profile.program}</p>
                </div>
                <div className="flex gap-2">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-aums-teal text-white rounded text-sm font-bold shadow-sm hover:opacity-90 transition-opacity"
                    >
                      <Edit2 size={14} />
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-4 py-2 bg-aums-teal text-white rounded text-sm font-bold shadow-sm hover:opacity-90 transition-opacity"
                      >
                        <Check size={14} />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 px-4 py-2 bg-aums-red-error text-white rounded text-sm font-bold shadow-sm hover:opacity-90 transition-opacity"
                      >
                        <X size={14} />
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 pt-2">
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-gray-400" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={tempProfile.email}
                      onChange={e => setTempProfile({ ...tempProfile, email: e.target.value })}
                      className="flex-1 border-b px-1 py-0.5 outline-none focus:border-aums-teal"
                    />
                  ) : (
                    <span className="text-gray-700">{profile.email}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-gray-400" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={tempProfile.phone}
                      onChange={e => setTempProfile({ ...tempProfile, phone: e.target.value })}
                      className="flex-1 border-b px-1 py-0.5 outline-none focus:border-aums-teal"
                    />
                  ) : (
                    <span className="text-gray-700">{profile.phone}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-700">{profile.dob}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-gray-700">{profile.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
          </div>
          <div className="p-6 grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Semester</p>
              <p className="text-xl font-bold text-aums-teal">{profile.semester}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Current CGPA</p>
              <p className="text-xl font-bold text-aums-teal">{profile.cgpa}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Batch</p>
              <p className="text-lg font-bold text-gray-800">{profile.batch}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Credits Earned</p>
              <p className="text-lg font-bold text-gray-800">{profile.creditsEarned}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Faculty Advisor</h2>
          </div>
          <div className="p-6 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <User size={32} className="text-gray-400" />
            </div>
            <div>
              <p className="font-bold text-gray-800">{profile.advisor}</p>
              <p className="text-xs text-gray-500 mt-1">Associate Professor, AIE</p>
            </div>
            <button className="text-xs font-bold text-aums-teal hover:underline flex items-center gap-1">
              <Mail size={12} />
              Contact Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
