import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Clock, MapPin, Star, Bell, Info, ChevronDown } from 'lucide-react';

const courses = [
  { id: 1, name: 'Environmental Science and Sustainability', code: '21ENV111', slot: 'A', faculty: 'Venkatesh B.', attendance: 92 },
  { id: 2, name: 'Calculus', code: '21MAT101', slot: 'B', faculty: 'Dr. Ramesh K.', attendance: 85 },
  { id: 3, name: 'Computer Programming', code: '21CSE102', slot: 'C', faculty: 'Saranya M.', attendance: 88 },
  { id: 4, name: 'Engineering Physics', code: '21PHY103', slot: 'D', faculty: 'Senthil Kumar', attendance: 78 },
];

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const startDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const prevMonth = () => setCurrentDate(new Date(year, currentDate.getMonth() - 1));
  const nextMonth = () => setCurrentDate(new Date(year, currentDate.getMonth() + 1));

  const days = [];
  for (let i = 0; i < startDayOfMonth(currentDate); i++) {
    days.push(<div key={`empty-${i}`} className="h-8"></div>);
  }
  for (let i = 1; i <= daysInMonth(currentDate); i++) {
    const isToday = i === new Date().getDate() && currentDate.getMonth() === new Date().getMonth();
    days.push(
      <div
        key={i}
        className="h-8 flex items-center justify-center text-[11px] rounded-sm transition-colors cursor-pointer hover:bg-gray-100"
        style={isToday ? { backgroundColor: 'var(--color-aums-yellow-highlight)', border: '1px solid var(--color-aums-yellow-border)' } : {}}
      >
        <span
          className={isToday ? "font-bold text-aums-teal" : "text-gray-800"}
        >
          {i}
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-10">
      {/* Top Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, Oruganti Bagavath Sai</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-aums-teal text-white p-2 rounded-lg shadow-sm">
            <CalendarIcon size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase">Current Session</p>
            <p className="text-sm font-semibold text-gray-700">2023-2024 Odd Semester</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Calendar & Overview */}
        <div className="lg:col-span-1 space-y-6">
          {/* Calendar Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Calendar</span>
              <div className="flex items-center gap-2">
                <button onClick={prevMonth} className="p-1 hover:bg-black/5 rounded transition-colors">
                  <ChevronLeft size={14} className="text-aums-teal" />
                </button>
                <button onClick={nextMonth} className="p-1 hover:bg-black/5 rounded transition-colors">
                  <ChevronRight size={14} className="text-aums-teal" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="text-center mb-4">
                <span className="font-bold text-sm text-aums-teal">{monthName}</span>
                <span className="text-sm text-gray-500 ml-1">{year}</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                  <div key={day} className="text-[10px] font-bold text-gray-400">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {days}
              </div>
            </div>
          </div>

          {/* Quick Overview */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <h2 className="text-[13px] font-semibold text-aums-teal">Overview</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Overall Attendance</p>
                    <p className="text-sm font-bold text-gray-800">86.5%</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">GOOD</span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-aums-teal h-1.5 rounded-full" style={{ width: '86.5%' }}></div>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Courses</p>
                  <p className="text-xl font-bold text-gray-800">6</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Credits</p>
                  <p className="text-xl font-bold text-gray-800">22</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: News & Courses */}
        <div className="lg:col-span-2 space-y-6">
          {/* Message of the Day */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Message Of The Day</span>
              <Bell size={14} className="text-aums-teal" />
            </div>
            <div className="p-6 text-center">
              <p className="font-bold text-[18px] text-aums-maroon">Om Amriteswaryai Namah</p>
              <div className="mt-4 inline-block text-left">
                <p className="text-[14px] font-bold text-aums-maroon">Chancellor,</p>
                <p className="text-[14px] font-bold text-aums-maroon">Sri Mata Amritanandamayi Devi</p>
              </div>
            </div>
          </div>

          {/* Active Courses */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Registered Courses</span>
              <button className="text-[11px] font-bold text-aums-teal hover:underline">View All</button>
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold shadow-sm text-gray-700 transition-colors hover:bg-aums-teal/20 group active:scale-95 bg-aums-teal-light">
                  <Star size={13} className="shrink-0 text-aums-teal fill-aums-teal" />
                  Regular Courses
                  <ChevronDown size={14} className="shrink-0 text-aums-teal/60 group-hover:text-aums-teal" />
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold text-gray-500 hover:bg-gray-50 transition-colors">
                  Electives
                </button>
              </div>

              <div className="space-y-3">
                {courses.map(course => (
                  <div key={course.id} className="flex items-center p-3 border border-gray-100 rounded-lg hover:border-aums-teal/30 hover:bg-gray-50 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-aums-teal group-hover:bg-aums-teal group-hover:text-white transition-colors">
                      <span className="font-bold text-sm">{course.slot}</span>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-gray-800">{course.name}</p>
                        <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{course.code}</span>
                      </div>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <MapPin size={10} /> {course.faculty}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-gray-400 uppercase">Attendance</p>
                      <p className={`text-sm font-bold ${course.attendance < 80 ? 'text-aums-red-error' : 'text-aums-teal'}`}>
                        {course.attendance}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
