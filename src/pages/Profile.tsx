import React, { useState, useEffect } from 'react';
import { Camera, Mail, Phone, MapPin, User, Hash, Calendar, Book, GraduationCap, Briefcase, Heart, Edit2, Check, X } from 'lucide-react';

interface StudentProfile {
  name: string;
  rollNo: string;
  email: string;
  phone: string;
  program: string;
  branch: string;
  semester: string;
  batch: string;
  dob: string;
  gender: string;
  bloodGroup: string;
  address: string;
  parentName: string;
  parentPhone: string;
  cgpa: string;
  attendance: string;
  credits: string;
}

const initialProfile: StudentProfile = {
  name: 'ORUGANTI BAGAVATH SAI',
  rollNo: 'AV.SC.U4AIE23132',
  email: 'bagavathsai@example.com',
  phone: '+91 9876543210',
  program: 'B.Tech. in Artificial Intelligence & Data Science',
  branch: 'AIE',
  semester: '6',
  batch: '2023-2027',
  dob: '15-05-2005',
  gender: 'Male',
  bloodGroup: 'O+',
  address: 'Hyderabad, Telangana, India',
  parentName: 'O. Venkatesh',
  parentPhone: '+91 9876543211',
  cgpa: '8.75',
  attendance: '85%',
  credits: '124'
};

export default function Profile() {
  const [profile, setProfile] = useState<StudentProfile>(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<StudentProfile>(initialProfile);

  useEffect(() => {
    const storedProfile = localStorage.getItem('studentProfile');
    if (storedProfile) {
      const parsed = JSON.parse(storedProfile);
      setProfile(parsed);
      setEditedProfile(parsed);
    }
  }, []);

  const handleSave = () => {
    setProfile(editedProfile);
    localStorage.setItem('studentProfile', JSON.stringify(editedProfile));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="font-bold text-sm uppercase tracking-wide text-aums-teal">
            Student Profile
          </h1>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full border-4 border-gray-100 shadow-md flex items-center justify-center text-white text-4xl font-bold bg-aums-teal">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg border border-gray-200 text-gray-600 hover:text-aums-teal transition-colors">
                  <Camera size={16} />
                </button>
              </div>
              <div className="text-center">
                <h2 className="text-lg font-bold text-gray-800 uppercase leading-tight">{profile.name}</h2>
                <p className="text-sm font-semibold text-gray-500 mt-1">{profile.rollNo}</p>
                <p className="text-xs mt-1 text-aums-orange">{profile.program}</p>
              </div>
            </div>

            {/* Profile Details */}
            <div className="flex-1 w-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider border-b-2 border-aums-teal pb-1">Personal Details</h3>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white rounded shadow-sm hover:opacity-90 transition-opacity bg-aums-teal"
                  >
                    <Edit2 size={14} /> Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white rounded shadow-sm hover:opacity-90 transition-opacity bg-aums-teal"
                    >
                      <Check size={14} /> Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white rounded shadow-sm hover:opacity-90 transition-opacity bg-aums-orange"
                    >
                      <X size={14} /> Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                {[
                  { label: 'Email Address', value: 'email', icon: Mail },
                  { label: 'Phone Number', value: 'phone', icon: Phone },
                  { label: 'Date of Birth', value: 'dob', icon: Calendar },
                  { label: 'Gender', value: 'gender', icon: User },
                  { label: 'Blood Group', value: 'bloodGroup', icon: Heart },
                  { label: 'Current Address', value: 'address', icon: MapPin },
                  { label: 'Parent/Guardian', value: 'parentName', icon: User },
                  { label: 'Parent Phone', value: 'parentPhone', icon: Phone },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold text-gray-500 uppercase flex items-center gap-2">
                      <item.icon size={12} className="text-gray-400" /> {item.label}
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile[item.value as keyof StudentProfile]}
                        onChange={(e) => setEditedProfile({ ...editedProfile, [item.value]: e.target.value })}
                        className="text-sm font-semibold text-gray-800 bg-gray-50 border border-gray-200 rounded px-2 py-1 outline-none focus:border-aums-teal"
                      />
                    ) : (
                      <p className="text-sm font-semibold text-gray-800 px-2 py-1">{profile[item.value as keyof StudentProfile]}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Summary Grid */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: 'Current CGPA', value: profile.cgpa, icon: GraduationCap },
              { label: 'Attendance', value: profile.attendance, icon: Briefcase },
              { label: 'Credits Earned', value: profile.credits, icon: Book },
              { label: 'Current Sem', value: profile.semester, icon: Hash },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-100 text-center">
                <item.icon size={20} className="text-gray-400 mb-2" />
                <p className="text-[10px] font-bold text-gray-500 uppercase mb-1">{item.label}</p>
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
