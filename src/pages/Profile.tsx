import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Camera, Save, Edit2, X } from 'lucide-react';

interface StudentProfile {
  name: string;
  rollNo: string;
  email: string;
  phone: string;
  address: string;
  program: string;
  semester: string;
  bloodGroup: string;
}

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<StudentProfile>({
    name: 'ORUGANTI BAGAVATH SAI',
    rollNo: 'AV.SC.U4AIE23132',
    email: 'av.sc.u4aie23132@amrita.edu',
    phone: '+91 98765 43210',
    address: 'Amrita Vishwa Vidyapeetham, Amritapuri, Kerala',
    program: 'B.Tech. in Artificial Intelligence and Data Science',
    semester: '6',
    bloodGroup: 'O+'
  });

  const [editForm, setEditForm] = useState<StudentProfile>(profile);

  useEffect(() => {
    const saved = localStorage.getItem('studentProfile');
    if (saved) {
      setProfile(JSON.parse(saved));
      setEditForm(JSON.parse(saved));
    }
  }, []);

  const handleSave = () => {
    setProfile(editForm);
    localStorage.setItem('studentProfile', JSON.stringify(editForm));
    setIsEditing(false);
  };

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
            {/* Avatar Section */}
            <div className="relative group mx-auto md:mx-0">
              <div className="w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-aums-teal">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <User size={64} />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg text-gray-600 hover:text-aums-teal transition-colors">
                <Camera size={18} />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-4 w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{profile.rollNo}</p>
                  <p className="text-xs mt-1 text-aums-orange">{profile.program}</p>
                </div>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-sm shadow-sm transition-opacity hover:opacity-90 active:scale-95 bg-aums-teal"
                  >
                    <Edit2 size={16} /> Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-sm shadow-sm transition-opacity hover:opacity-90 active:scale-95 bg-aums-teal"
                    >
                      <Save size={16} /> Save
                    </button>
                    <button
                      onClick={() => { setIsEditing(false); setEditForm(profile); }}
                      className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white rounded-sm shadow-sm transition-opacity hover:opacity-90 active:scale-95 bg-aums-orange"
                    >
                      <X size={16} /> Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-gray-100">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail size={18} className="shrink-0" />
                    {isEditing ? (
                      <input
                        className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-aums-teal"
                        value={editForm.email}
                        onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                      />
                    ) : (
                      <span className="text-sm">{profile.email}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={18} className="shrink-0" />
                    {isEditing ? (
                      <input
                        className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-aums-teal"
                        value={editForm.phone}
                        onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                      />
                    ) : (
                      <span className="text-sm">{profile.phone}</span>
                    )}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin size={18} className="shrink-0 mt-0.5" />
                    {isEditing ? (
                      <textarea
                        className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:border-aums-teal min-h-[60px]"
                        value={editForm.address}
                        onChange={(e) => setEditForm({...editForm, address: e.target.value})}
                      />
                    ) : (
                      <span className="text-sm">{profile.address}</span>
                    )}
                  </div>
                </div>
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
        <div className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { label: 'Current Semester', value: profile.semester },
              { label: 'CGPA', value: '8.45' },
              { label: 'Total Credits', value: '124' },
              { label: 'Attendance', value: '82%' }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-gray-50 rounded-sm border border-gray-100">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-xl font-bold text-aums-teal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
