import React from 'react';
import { Star, ChevronDown, Calendar } from 'lucide-react';

export default function Dashboard() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const monthName = today.toLocaleString('default', { month: 'long' });
  const dayOfWeek = today.toLocaleString('default', { weekday: 'long' });

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const academicInfo = [
    { label: 'Program', value: 'B.Tech. AI' },
    { label: 'Semester', value: '6' },
    { label: 'CGPA', value: '8.45' },
    { label: 'Attendance', value: '92%' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner / Welcome */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <span className="text-[13px] font-semibold text-aums-teal">Home Information Display</span>
        </div>
        <div className="p-6 flex flex-col md:flex-row items-center gap-8">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-aums-teal/20 p-1">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&h=150&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-aums-teal text-white p-1.5 rounded-full shadow-lg">
              <Star size={12} fill="white" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-xl font-bold text-gray-800">ORUGANTI BAGAVATH SAI</h1>
            <p className="text-sm text-gray-500 font-medium mt-0.5">AV.SC.U4AIE23132</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              {academicInfo.map((info, idx) => (
                <div key={idx} className="px-3 py-1 bg-aums-bg-main rounded text-[11px] font-bold text-aums-teal border border-aums-teal/10">
                  <span className="text-gray-500 font-normal mr-1.5">{info.label}:</span>
                  {info.value}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-48 shrink-0">
            <div className="bg-aums-teal-light rounded-lg p-4 border border-aums-teal/10">
              <div className="text-[10px] uppercase font-bold text-aums-teal/60 mb-1">Today</div>
              <div className="text-2xl font-bold text-aums-teal leading-tight">{dayOfWeek}</div>
              <div className="text-sm font-medium text-gray-600">{today.toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Calendar & Overview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Calendar Card */}
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Calendar</span>
              <span className="font-bold text-sm text-aums-teal">{monthName}</span>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-sm overflow-hidden">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="bg-gray-50 py-2 text-center text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    {day}
                  </div>
                ))}
                {calendarDays.map((day, idx) => (
                  <div
                    key={idx}
                    className={`
                      h-12 sm:h-16 bg-white p-1 text-right text-[12px] relative
                      ${day === today.getDate() ? 'bg-aums-yellow-highlight border border-aums-yellow-border z-10' : ''}
                      ${day === null ? 'bg-gray-50/50' : ''}
                    `}
                  >
                    <span className={`font-medium ${day === today.getDate() ? 'text-aums-teal' : 'text-gray-800'}`}>
                      {day}
                    </span>
                    {day === today.getDate() && (
                      <div className="absolute bottom-1 left-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-aums-teal"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 border border-gray-200 rounded-sm shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Course Attendance</h3>
                <Star size={16} className="text-aums-teal" />
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Software Eng', val: 94 },
                  { name: 'Computer Vision', val: 88 },
                  { name: 'NLP', val: 92 }
                ].map((course, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-medium">
                      <span>{course.name}</span>
                      <span>{course.val}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-aums-teal rounded-full"
                        style={{ width: `${course.val}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-5 border border-gray-200 rounded-sm shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Upcoming Exams</h3>
                <Calendar size={16} className="text-aums-orange" />
              </div>
              <div className="space-y-3">
                {[
                  { name: 'End Sem - NLP', date: 'May 15' },
                  { name: 'End Sem - CV', date: 'May 18' },
                  { name: 'End Sem - SE', date: 'May 20' }
                ].map((exam, i) => (
                  <div key={i} className="flex items-center justify-between p-2 bg-aums-bg-main rounded-sm border-l-2 border-aums-orange">
                    <span className="text-[12px] font-semibold text-gray-700">{exam.name}</span>
                    <span className="text-[11px] font-bold text-aums-orange">{exam.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Message of the Day & Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Message Of The Day</span>
            </div>
            <div className="p-6 text-center">
              <div className="inline-block p-2 rounded-full bg-aums-teal-light mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-aums-teal">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=150&h=150&auto=format&fit=crop"
                    alt="Chancellor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="font-bold text-[18px] text-amrita-maroon italic mb-3">"Om Amriteswaryai Namah"</p>
              <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
                "Education should be for life, not just for a living. Real education is that which prepares us for life, not only for a career."
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-[14px] font-bold text-amrita-maroon">Chancellor,</p>
                <p className="text-[14px] font-bold text-amrita-maroon">Sri Mata Amritanandamayi Devi</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
              <span className="text-[13px] font-semibold text-aums-teal">Quick Links</span>
            </div>
            <div className="p-2">
              {[
                { name: 'Download ID Card', icon: Star },
                { name: 'Bus Pass Application', icon: Star },
                { name: 'WiFi Registration', icon: Star },
                { name: 'Academic Calendar', icon: Star }
              ].map((link, i) => (
                <button
                  key={i}
                  className="w-full flex items-center justify-between p-3 hover:bg-aums-bg-main transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-aums-teal-light flex items-center justify-center text-aums-teal group-hover:bg-aums-teal group-hover:text-white transition-colors">
                      <link.icon size={14} />
                    </div>
                    <span className="text-[13px] font-medium text-gray-700">{link.name}</span>
                  </div>
                  <ChevronDown size={14} className="text-gray-400 -rotate-90 group-hover:text-aums-teal transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
