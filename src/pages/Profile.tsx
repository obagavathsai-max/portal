import React, { useState } from 'react';
import { User, Mail, Phone, Book, GraduationCap, MapPin, Calendar, Clock, Edit2, CheckCircle } from 'lucide-react';

interface ProfileData {
  name: string;
  rollNo: string;
  email: string;
  phone: string;
  program: string;
  semester: string;
  batch: string;
  advisor: string;
  dob: string;
  bloodGroup: string;
  address: string;
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'bagavathsai@amrita.edu',
    phone: '+91 98765 43210',
    program: 'B.Tech in Artificial Intelligence and Data Science',
    semester: '6',
    batch: '2023-2027',
    advisor: 'Dr. Ramesh Kumar',
    dob: '15-05-2005',
    bloodGroup: 'O+',
    address: 'Amrita Vishwa Vidyapeetham, Ettimadai, Coimbatore'
  });

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-10">
      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg flex items-center gap-2 z-50 animate-in fade-in slide-in-from-top-4">
          <CheckCircle size={20} />
          <span className="font-semibold">Profile updated successfully!</span>
        </div>
      )}

      {/* Header Profile Card */}
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Student Profile
          </h1>
        </div>
        <div className="p-6 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-md bg-aums-teal flex items-center justify-center">
              <User size={64} className="text-white" />
            </div>
            <button className="absolute bottom-1 right-1 p-2 bg-white rounded-full shadow-md border border-gray-200 text-gray-600 hover:text-aums-teal transition-colors">
              <Edit2 size={16} />
            </button>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                <p className="text-aums-teal font-semibold tracking-wide mt-0.5">{profile.rollNo}</p>
                <p className="text-xs mt-1 text-aums-orange-dark">{profile.program}</p>
              </div>
              <div className="flex gap-2 justify-center">
                {isEditing ? (
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 text-white rounded-sm text-sm font-bold shadow-sm transition-opacity hover:opacity-90 bg-aums-teal"
                  >
                    Save Profile
                  </button>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 text-white rounded-sm text-sm font-bold shadow-sm transition-opacity hover:opacity-90 bg-aums-orange-dark"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-y-4 gap-x-8">
              <div className="flex items-center gap-3 text-sm text-gray-600 justify-center md:justify-start">
                <Mail size={16} className="text-aums-teal" />
                <input
                  type="text"
                  value={profile.email}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className={`bg-transparent border-b-2 outline-none transition-colors w-full ${isEditing ? 'border-aums-teal' : 'border-transparent'}`}
                />
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 justify-center md:justify-start">
                <Phone size={16} className="text-aums-teal" />
                <input
                  type="text"
                  value={profile.phone}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  className={`bg-transparent border-b-2 outline-none transition-colors w-full ${isEditing ? 'border-aums-teal' : 'border-transparent'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Details</h2>
          </div>
          <div className="p-5 space-y-4">
            {[
              { label: 'Batch', value: profile.batch, icon: Calendar },
              { label: 'Semester', value: profile.semester, icon: Clock },
              { label: 'Academic Advisor', value: profile.advisor, icon: GraduationCap },
              { label: 'Blood Group', value: profile.bloodGroup, icon: Heart },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <item.icon size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{item.label}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
            <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
          </div>
          <div className="p-5 grid grid-cols-2 gap-4">
            {[
              { label: 'Current CGPA', value: '8.45' },
              { label: 'Total Credits', value: '112' },
              { label: 'Attendance', value: '88%' },
              { label: 'Backlogs', value: '0' },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
                <p className="text-[10px] uppercase font-bold text-gray-500 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Address Card */}
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Contact Information</h2>
        </div>
        <div className="p-5 flex gap-4">
          <MapPin size={20} className="text-gray-400 shrink-0" />
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-500 uppercase mb-1">Permanent Address</p>
            {isEditing ? (
              <textarea
                value={profile.address}
                onChange={(e) => setProfile({...profile, address: e.target.value})}
                className="w-full text-sm text-gray-700 bg-gray-50 p-3 border border-aums-teal rounded-sm focus:outline-none"
                rows={3}
              />
            ) : (
              <p className="text-sm text-gray-700 leading-relaxed">{profile.address}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
