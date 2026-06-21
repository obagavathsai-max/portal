import React, { useState } from 'react';

export default function Dashboard() {
  const [currentDate] = useState(new Date());

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const daysInMonth = getDaysInMonth(year, currentDate.getMonth());
  const firstDay = getFirstDayOfMonth(year, currentDate.getMonth());
  const today = currentDate.getDate();

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Messages & Info */}
        <div className="lg:col-span-8 space-y-6">
          {/* Message of the Day */}
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Message Of The Day</span>
            </div>
            <div className="p-8 flex flex-col items-center text-center space-y-4">
              <p className="font-bold text-[18px] text-amrita-maroon">Om Amriteswaryai Namah</p>
              <div className="space-y-1">
                <p className="text-[14px] font-bold text-amrita-maroon">Chancellor,</p>
                <p className="text-[14px] font-bold text-amrita-maroon">Sri Mata Amritanandamayi Devi</p>
              </div>
            </div>
          </div>

          {/* Home Information Display */}
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Home Information Display</span>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-aums-teal mt-1.5 shrink-0"></div>
                  <p className="text-[13px] text-gray-700">Odd Semester 2025-26 Registration is now open.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-aums-teal mt-1.5 shrink-0"></div>
                  <p className="text-[13px] text-gray-700">Upcoming internal assessment schedules have been posted.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-aums-teal mt-1.5 shrink-0"></div>
                  <p className="text-[13px] text-gray-700">Library working hours extended for the examination period.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Calendar & Overview */}
        <div className="lg:col-span-4 space-y-6">
          {/* Calendar */}
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Calendar</span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold text-sm text-aums-teal">{monthName} {year}</span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                  <div key={day} className="text-[10px] font-bold text-gray-400 py-1">{day}</div>
                ))}
                {days.map((day, i) => (
                  <div
                    key={i}
                    className={`
                      text-[11px] py-1.5 rounded-sm
                      ${day === today ? 'bg-aums-yellow-highlight border border-aums-yellow-border' : ''}
                      ${day ? 'text-gray-800' : ''}
                    `}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200">
              <h2 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">Overview</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center text-[13px]">
                <span className="text-gray-600">Attendance Avg</span>
                <span className="font-bold text-aums-teal">84.5%</span>
              </div>
              <div className="flex justify-between items-center text-[13px]">
                <span className="text-gray-600">Current CGPA</span>
                <span className="font-bold text-aums-teal">9.41</span>
              </div>
              <div className="flex justify-between items-center text-[13px]">
                <span className="text-gray-600">Pending Fees</span>
                <span className="font-bold text-aums-orange">₹0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
