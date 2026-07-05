import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Edit2, Check, X } from 'lucide-react';

interface ProfileData {
  name: string;
  rollNo: string;
  email: string;
  phone: string;
  dob: string;
  program: string;
  semester: string;
  advisor: string;
  bloodGroup: string;
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    name: 'NIYATHI S RAJESH',
    rollNo: 'AV.SC.U4AIE23132',
    email: localStorage.getItem('studentEmail') || 'niyathi@amrita.edu.in',
    phone: localStorage.getItem('studentPhone') || '+91 98765 43210',
    dob: '15-05-2005',
    program: 'B.Tech in Artificial Intelligence & Data Science',
    semester: 'Semester 4',
    advisor: 'Dr. Rahul Sharma',
    bloodGroup: 'O+'
  });

  const [editedProfile, setEditedProfile] = useState<ProfileData>(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    localStorage.setItem('studentEmail', editedProfile.email);
    localStorage.setItem('studentPhone', editedProfile.phone);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

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
            <div className="shrink-0 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl font-bold bg-aums-teal">
                N
              </div>
              <p className="text-xs mt-1 text-aums-orange-dark font-bold">{profile.program}</p>
            </div>

            <div className="flex-1 w-full">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                  <p className="text-gray-500 font-medium">{profile.rollNo}</p>
                </div>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-300 rounded text-xs font-bold text-gray-700 hover:bg-gray-50 bg-white"
                  >
                    <Edit2 size={14} /> EDIT PROFILE
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-1.5 px-4 py-1.5 text-white rounded text-xs font-bold hover:brightness-110 bg-aums-teal"
                    >
                      <Check size={14} /> SAVE
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-1.5 px-4 py-1.5 text-white rounded text-xs font-bold hover:brightness-110 bg-aums-orange"
                    >
                      <X size={14} /> CANCEL
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <ProfileField
                  icon={<Mail size={16} />}
                  label="Email"
                  value={editedProfile.email}
                  isEditing={isEditing}
                  onChange={(val) => setEditedProfile({ ...editedProfile, email: val })}
                />
                <ProfileField
                  icon={<Phone size={16} />}
                  label="Phone"
                  value={editedProfile.phone}
                  isEditing={isEditing}
                  onChange={(val) => setEditedProfile({ ...editedProfile, phone: val })}
                />
                <ProfileField
                  icon={<Calendar size={16} />}
                  label="Date of Birth"
                  value={editedProfile.dob}
                  isEditing={isEditing}
                  onChange={(val) => setEditedProfile({ ...editedProfile, dob: val })}
                />
                <ProfileField
                  icon={<Briefcase size={16} />}
                  label="Advisor"
                  value={editedProfile.advisor}
                  isEditing={isEditing}
                  onChange={(val) => setEditedProfile({ ...editedProfile, advisor: val })}
                />
                <ProfileField
                  icon={<GraduationCap size={16} />}
                  label="Semester"
                  value={editedProfile.semester}
                  isEditing={false}
                />
                <ProfileField
                  icon={<MapPin size={16} />}
                  label="Blood Group"
                  value={editedProfile.bloodGroup}
                  isEditing={isEditing}
                  onChange={(val) => setEditedProfile({ ...editedProfile, bloodGroup: val })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Summary */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="font-bold text-sm uppercase tracking-wide text-aums-teal">Academic Summary</h2>
        </div>
        <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'CGPA', value: '8.92' },
            { label: 'SGPA (Last Sem)', value: '9.15' },
            { label: 'Attendance', value: '94%' },
            { label: 'Credits Earned', value: '72' },
          ].map((item, idx) => (
            <div key={idx} className="text-center p-4 bg-gray-50 rounded-sm border border-gray-100">
              <p className="text-[11px] font-bold text-gray-500 uppercase mb-1">{item.label}</p>
              <p className="text-xl font-bold text-aums-teal">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfileField({ icon, label, value, isEditing, onChange }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  isEditing: boolean;
  onChange?: (val: string) => void;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-gray-400">{icon}</div>
      <div className="flex-1">
        <p className="text-[11px] font-bold text-gray-400 uppercase leading-none mb-1">{label}</p>
        {isEditing ? (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="w-full text-sm font-semibold text-gray-800 border-b border-aums-teal focus:outline-none bg-transparent py-0.5"
          />
        ) : (
          <p className="text-sm font-semibold text-gray-800">{value}</p>
        )}
      </div>
    </div>
  );
}
