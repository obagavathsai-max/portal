import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Bell,
  Book,
  Clock,
  CheckCircle2,
  GraduationCap,
  Star,
  ChevronDown,
  Info
} from 'lucide-react';

const courses = [
  { code: '19AIE302', name: 'Design and Analysis of Algorithms', attendance: '93%', color: 'border-l-teal-500' },
  { code: '19AIE304', name: 'Deep Learning', attendance: '95%', color: 'border-l-orange-500' },
  { code: '19AIE311', name: 'Computer Vision', attendance: '78%', color: 'border-l-red-500' },
  { code: '19MAT302', name: 'Optimization Techniques', attendance: '95%', color: 'border-l-blue-500' },
];

export default function Dashboard() {
  const [currentDate] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const days = Array.from({ length: daysInMonth(year, month) }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth(year, month) }, (_, i) => i);

  return (
    <div className="space-y-6">
      {/* Calendar and Overview Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Calendar Card */}
        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <span className="font-bold text-sm text-aums-teal">{monthName}</span>
            <div className="flex gap-2">
              <button className="p-1 hover:bg-gray-100 rounded transition-colors"><ChevronLeft size={16} /></button>
              <button className="p-1 hover:bg-gray-100 rounded transition-colors"><ChevronRight size={16} /></button>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-center text-[11px] font-bold text-gray-400 uppercase">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {blanks.map(b => <div key={`b-${b}`} className="h-8"></div>)}
              {days.map(day => {
                const isToday = day === currentDate.getDate();
                return (
                  <div
                    key={day}
                    className={`h-8 flex items-center justify-center text-[12px] font-medium rounded-sm transition-colors cursor-pointer ${
                      isToday
                        ? 'bg-aums-yellow-highlight border border-aums-yellow-border'
                        : 'hover:bg-gray-100 text-gray-800'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-aums-teal p-3 flex justify-between items-center text-white">
             <span className="text-[11px] font-bold uppercase tracking-wider">Upcoming Events</span>
             <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-bold">2</span>
          </div>
        </div>

        {/* Dashboard Actions / Course Tabs */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold shadow-sm text-gray-700 transition-colors hover:bg-aums-teal/20 group active:scale-95 bg-aums-teal-light">
              <Star size={13} className="shrink-0 text-aums-teal fill-aums-teal" />
              <span>Registered Courses</span>
              <ChevronDown size={14} className="shrink-0 text-aums-teal/60 group-hover:text-aums-teal" />
            </button>
            <div className="flex gap-1 ml-auto">
              <div className="w-1.5 h-1.5 bg-aums-teal"></div>
              <div className="w-1.5 h-1.5 bg-aums-teal"></div>
              <div className="w-1.5 h-1.5 bg-aums-teal"></div>
              <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courses.map((course, idx) => (
              <div key={idx} className={`bg-white p-4 rounded-lg shadow-sm border-l-4 ${course.color} hover:shadow-md transition-all group cursor-pointer`}>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{course.code}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-aums-teal-light transition-colors">
                    <Book size={14} className="text-gray-400 group-hover:text-aums-teal" />
                  </div>
                </div>
                <h3 className="text-[13px] font-bold text-gray-700 leading-snug mb-4 h-10 overflow-hidden">{course.name}</h3>
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-gray-400" />
                    <span className="text-[11px] font-bold text-gray-500 uppercase">Attendance</span>
                  </div>
                  <span className={`text-[12px] font-black ${parseInt(course.attendance) < 80 ? 'text-red-500' : 'text-aums-teal'}`}>{course.attendance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden lg:col-span-1">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
            <span className="text-[13px] font-semibold text-aums-teal">Message Of The Day</span>
            <Info size={14} className="text-aums-teal" />
          </div>
          <div className="p-6 text-center space-y-4">
            <div className="flex justify-center">
               <div className="w-12 h-12 rounded-full bg-aums-maroon/10 flex items-center justify-center">
                 <Bell size={24} className="text-aums-maroon" />
               </div>
            </div>
            <div>
              <p className="font-bold text-[18px] text-aums-maroon">Om Amriteswaryai Namah</p>
              <div className="mt-4 pt-4 border-t border-gray-100 italic text-gray-600 text-sm">
                <p className="text-[14px] font-bold text-aums-maroon">Chancellor,</p>
                <p className="text-[14px] font-bold text-aums-maroon">Sri Mata Amritanandamayi Devi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden lg:col-span-2">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
            <span className="text-[13px] font-semibold text-aums-teal">Home Information Display</span>
            <div className="flex gap-1">
              <button className="p-1 hover:bg-aums-teal/10 rounded transition-colors text-aums-teal"><ChevronLeft size={16} /></button>
              <button className="p-1 hover:bg-aums-teal/10 rounded transition-colors text-aums-teal"><ChevronRight size={16} /></button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                <GraduationCap size={48} className="text-gray-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-800">Academic Progress</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  You are currently in Semester 5. Your internal marks are being updated periodically by respective course instructors.
                  Please keep track of your attendance and internal marks.
                </p>
                <div className="flex gap-3 pt-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-full">
                    <CheckCircle2 size={12} className="text-green-600" />
                    <span className="text-[10px] font-bold text-green-700 uppercase">Status Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
