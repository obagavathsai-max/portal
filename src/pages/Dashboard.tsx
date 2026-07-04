import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Star, ChevronDown, Bell, MessageSquare, Info } from 'lucide-react';

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);
  const prevMonthDays = Array.from({ length: startDay }, (_, i) => i);

  const courses = [
    { code: '19CSE301', name: 'Computer Networks', type: 'Theory', attendance: '92%', grade: 'A' },
    { code: '19CSE302', name: 'Design and Analysis of Algorithms', type: 'Theory', attendance: '88%', grade: 'A' },
    { code: '19CSE303', name: 'Software Engineering', type: 'Theory', attendance: '95%', grade: 'A+' },
    { code: '19CSE304', name: 'Artificial Intelligence', type: 'Theory', attendance: '90%', grade: 'A' },
    { code: '19CSE381', name: 'Computer Networks Lab', type: 'Lab', attendance: '100%', grade: 'O' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Messages and Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Message of the Day */}
          <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Message Of The Day</span>
            </div>
            <div className="p-6 text-center space-y-4">
              <p className="font-bold text-[18px] text-aums-maroon">Om Amriteswaryai Namah</p>
              <div className="max-w-md mx-auto">
                <img
                  src="https://www.amrita.edu/wp-content/uploads/2022/10/amma-signature.png"
                  alt="Amma Signature"
                  className="h-12 mx-auto object-contain opacity-80"
                />
              </div>
              <div className="space-y-0.5">
                <p className="text-[14px] font-bold text-aums-maroon">Chancellor,</p>
                <p className="text-[14px] font-bold text-aums-maroon">Sri Mata Amritanandamayi Devi</p>
              </div>
            </div>
          </div>

          {/* Home Information Display (Overview) */}
          <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Home Information Display</span>
            </div>
            <div className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-500">
                      <th className="px-4 py-3 font-semibold">Course Code</th>
                      <th className="px-4 py-3 font-semibold">Course Name</th>
                      <th className="px-4 py-3 font-semibold">Attendance</th>
                      <th className="px-4 py-3 font-semibold">Internal Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {courses.map((course, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-700">{course.code}</td>
                        <td className="px-4 py-3 text-gray-600">{course.name}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            {course.attendance}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-bold text-aums-teal">{course.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Calendar and Quick Links */}
        <div className="space-y-6">
          {/* Calendar Widget */}
          <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Calendar</span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-sm text-aums-teal">{monthName}</span>
                <div className="flex gap-1">
                  <button className="p-1 hover:bg-gray-100 rounded">&lt;</button>
                  <button className="p-1 hover:bg-gray-100 rounded">&gt;</button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-y-2 text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                  <span key={d} className="text-[10px] font-bold text-gray-400 uppercase">{d}</span>
                ))}
                {prevMonthDays.map(d => <span key={`p-${d}`} />)}
                {days.map(d => {
                  const isToday = d === new Date().getDate();
                  return (
                    <span
                      key={d}
                      className={`
                        text-[12px] py-1 rounded-sm cursor-pointer transition-colors
                        ${isToday ? 'bg-aums-yellow-highlight border border-aums-yellow-border' : 'hover:bg-gray-100'}
                        ${isToday ? 'text-aums-teal' : 'text-gray-800'}
                      `}
                    >
                      {d}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Course Progress / Quick Actions */}
          <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Quick Links</span>
            </div>
            <div className="p-3 space-y-2">
              <button className="w-full flex items-center justify-between px-4 py-2 rounded-full text-[12px] font-semibold shadow-sm text-gray-700 transition-colors hover:bg-aums-teal/20 bg-aums-teal-light group">
                <div className="flex items-center gap-1.5">
                  <Star size={13} className="shrink-0 text-aums-teal fill-aums-teal" />
                  <span>View Registered Courses</span>
                </div>
                <ChevronDown size={14} className="shrink-0 text-aums-teal/60 group-hover:text-aums-teal" />
              </button>
              <button className="w-full flex items-center justify-between px-4 py-2 rounded-full text-[12px] font-semibold shadow-sm text-gray-700 transition-colors hover:bg-aums-teal/20 bg-aums-teal-light group">
                <div className="flex items-center gap-1.5">
                  <Bell size={13} className="shrink-0 text-aums-teal fill-aums-teal" />
                  <span>Examination Schedule</span>
                </div>
                <ChevronDown size={14} className="shrink-0 text-aums-teal/60 group-hover:text-aums-teal" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
