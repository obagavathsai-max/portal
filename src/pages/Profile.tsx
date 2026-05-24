import React, { useState, useEffect } from 'react';
import { Camera, Mail, Phone, MapPin, Calendar, User, BookOpen } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@amrita.edu',
    phone: '+91 98765 43210',
    dob: '15-05-2005',
    bloodGroup: 'O+',
    program: 'Bachelor of Technology (Artificial Intelligence)',
    campus: 'Amritapuri',
    batch: '2023-2027',
    address: 'Amrita Vishwa Vidyapeetham, Amritapuri, Kollam, Kerala - 690525'
  });

  useEffect(() => {
    const saved = localStorage.getItem('student_profile');
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  const handleSave = () => {
    localStorage.setItem('student_profile', JSON.stringify(profile));
    setIsEditing(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Profile Header Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Student Profile
          </h1>
        </div>
        <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
          <div className="relative group mx-auto md:mx-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-100 shadow-md flex items-center justify-center bg-aums-teal overflow-hidden">
              <User size={80} className="text-white opacity-80" />
            </div>
            <button className="absolute bottom-1 right-1 p-2 bg-white rounded-full shadow-lg text-gray-600 hover:text-aums-teal transition-colors border border-gray-100">
              <Camera size={18} />
            </button>
          </div>

          <div className="flex-1 space-y-4 text-center md:text-left w-full">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
              <p className="text-sm font-semibold text-gray-500 mt-1 uppercase tracking-wider">{profile.rollNo}</p>
              <p className="text-xs mt-1 text-aums-orange">{profile.program}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-2">
              <div className="flex items-center gap-3 justify-center md:justify-start text-[13px] text-gray-600">
                <Mail size={16} className="text-aums-teal" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start text-[13px] text-gray-600">
                <Phone size={16} className="text-aums-teal" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start text-[13px] text-gray-600">
                <Calendar size={16} className="text-aums-teal" />
                <span>DOB: {profile.dob}</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start text-[13px] text-gray-600">
                <BookOpen size={16} className="text-aums-teal" />
                <span>Batch: {profile.batch}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center md:justify-start gap-3">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-aums-teal text-white rounded text-sm font-bold shadow-sm hover:brightness-110"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-6 py-2 bg-aums-orange text-white rounded text-sm font-bold shadow-sm hover:brightness-110"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
              <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Personal Details</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Blood Group</label>
                  <input
                    disabled={!isEditing}
                    value={profile.bloodGroup}
                    onChange={(e) => setProfile({ ...profile, bloodGroup: e.target.value })}
                    className={`w-full text-sm font-semibold text-gray-700 bg-transparent border-b mt-1 pb-1 focus:outline-none ${isEditing ? 'border-aums-teal' : 'border-transparent'}`}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Campus</label>
                  <p className="text-sm font-semibold text-gray-700 mt-1">{profile.campus}</p>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1">
                  <MapPin size={10} /> Contact Address
                </label>
                <textarea
                  disabled={!isEditing}
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  rows={2}
                  className={`w-full text-sm font-semibold text-gray-700 bg-transparent border-b mt-1 pb-1 focus:outline-none resize-none ${isEditing ? 'border-aums-teal' : 'border-transparent'}`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
              <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Current CGPA</p>
                  <p className="text-xl font-bold text-aums-teal">8.82</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Total Credits</p>
                  <p className="text-xl font-bold text-aums-teal">84</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Attendance</p>
                  <p className="text-xl font-bold text-aums-teal">92%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
