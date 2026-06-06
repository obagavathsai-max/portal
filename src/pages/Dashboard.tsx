import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, User, GraduationCap, Clock, CheckCircle, Star, ChevronDown, Award } from 'lucide-react';

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Basic Calendar Logic
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const days = daysInMonth(year, currentDate.getMonth());
  const firstDay = firstDayOfMonth(year, currentDate.getMonth());

  const prevMonth = () => setCurrentDate(new Date(year, currentDate.getMonth() - 1));
  const nextMonth = () => setCurrentDate(new Date(year, currentDate.getMonth() + 1));

  const stats = [
    { label: 'CGPA', value: '9.25', icon: GraduationCap, color: 'text-aums-teal' },
    { label: 'Attendance', value: '92%', icon: Clock, color: 'text-aums-orange' },
    { label: 'Courses', value: '6', icon: CheckCircle, color: 'text-green-600' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Left Column - Main Content */}
      <div className="lg:col-span-8 space-y-6">
        {/* Welcome Card */}
        <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light flex items-center justify-between">
            <h2 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">Overview</h2>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-aums-teal"></div>
              <div className="w-1.5 h-1.5 bg-aums-teal"></div>
              <div className="w-1.5 h-1.5 bg-aums-teal"></div>
              <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 p-4 bg-gray-50 rounded-sm border border-gray-100">
                  <div className={`p-3 rounded-full bg-white shadow-sm ${stat.color}`}>
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Card */}
        <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
            <span className="text-[13px] font-semibold text-aums-teal">Message Of The Day</span>
            <Award size={14} className="text-aums-teal/60" />
          </div>
          <div className="p-8 text-center bg-gray-50/50">
            <div className="max-w-md mx-auto space-y-4">
              <p className="font-bold text-[18px] text-aums-maroon italic">Om Amriteswaryai Namah</p>
              <div className="h-px bg-aums-maroon/10 w-24 mx-auto"></div>
              <div className="space-y-1">
                <p className="text-[14px] font-bold text-aums-maroon">Chancellor,</p>
                <p className="text-[14px] font-bold text-aums-maroon">Sri Mata Amritanandamayi Devi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
            <span className="text-[13px] font-semibold text-aums-teal">Home Information Display</span>
            <Star size={13} className="text-aums-teal/60" />
          </div>
          <div className="p-12 text-center text-gray-400">
            <div className="flex flex-col items-center gap-3">
              <Star size={40} className="text-gray-100" />
              <p className="text-xs font-medium uppercase tracking-widest">No important information to display at the moment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Sidebar Widgets */}
      <div className="lg:col-span-4 space-y-6">
        {/* Profile Quick View */}
        <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 flex flex-col items-center text-center bg-aums-teal text-white">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-4 border-2 border-white/30">
              <User size={40} />
            </div>
            <h3 className="font-bold text-sm uppercase">ORUGANTI BAGAVATH SAI</h3>
            <p className="text-[11px] opacity-90 mt-1">AV.SC.U4AIE23132</p>

            <button className="mt-4 flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-semibold shadow-sm transition-colors bg-aums-teal-light text-gray-700 hover:bg-white active:scale-95 group">
              <Star size={13} className="shrink-0 text-aums-teal fill-aums-teal" />
              S4 B.Tech AI
              <ChevronDown size={14} className="shrink-0 text-aums-teal/60 group-hover:text-aums-teal" />
            </button>
          </div>
        </div>

        {/* Calendar Widget */}
        <div className="bg-white rounded-sm border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
            <span className="text-[13px] font-semibold text-aums-teal">Calendar</span>
            <CalendarIcon size={14} className="text-aums-teal/60" />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="font-bold text-sm text-aums-teal">{monthName}</span>
              <div className="flex gap-2">
                <button onClick={prevMonth} className="p-1 hover:bg-gray-100 rounded transition-colors text-gray-500">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={nextMonth} className="p-1 hover:bg-gray-100 rounded transition-colors text-gray-500">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                <span key={d} className="text-[10px] font-bold text-gray-400 uppercase">{d}</span>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="h-8"></div>
              ))}
              {Array.from({ length: days }).map((_, i) => {
                const day = i + 1;
                const isToday = day === new Date().getDate() &&
                                currentDate.getMonth() === new Date().getMonth() &&
                                currentDate.getFullYear() === new Date().getFullYear();

                return (
                  <div
                    key={day}
                    className={`
                      h-8 flex items-center justify-center text-[11px] font-medium rounded-sm cursor-default
                      ${isToday
                        ? 'bg-aums-yellow-highlight border border-aums-yellow-border text-gray-800'
                        : 'hover:bg-gray-50 text-gray-800'}
                    `}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
