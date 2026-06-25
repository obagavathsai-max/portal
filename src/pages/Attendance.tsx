import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, XCircle, AlertCircle, Clock } from 'lucide-react';

const attendanceData = [
  { slNo: 1, className: 'L1', course: '19AIE302 - Design and Analysis of Algorithms', faculty: 'Dr. Ram Kumar', total: 45, present: 42, dutyLeave: 0, absent: 3, percentage: 93.33, medical: 0 },
  { slNo: 2, className: 'L1', course: '19AIE304 - Deep Learning', faculty: 'Prof. Sarah Wilson', total: 40, present: 38, dutyLeave: 1, absent: 1, percentage: 95.00, medical: 0 },
  { slNo: 3, className: 'L1', course: '19AIE311 - Computer Vision', faculty: 'Dr. Anita Raj', total: 38, present: 30, dutyLeave: 0, absent: 8, percentage: 78.95, medical: 0 },
  { slNo: 4, className: 'L1', course: '19MAT302 - Optimization Techniques', faculty: 'Dr. S. Murali', total: 42, present: 40, dutyLeave: 0, absent: 2, percentage: 95.24, medical: 0 },
  { slNo: 5, className: 'L1', course: '19HUM301 - Ethics in AI', faculty: 'Prof. James Bond', total: 30, present: 29, dutyLeave: 0, absent: 1, percentage: 96.67, medical: 0 },
];

export default function Attendance() {
  const [semester, setSemester] = useState('5');

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)] p-5">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm rounded-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-aums-teal"></div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            View Attendance
          </h1>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white p-4 shadow-sm rounded-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase">Semester:</span>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:ring-1 focus:ring-aums-teal focus:border-aums-teal outline-none transition-all bg-aums-teal text-white font-bold"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                <option key={sem} value={sem} className="bg-white text-gray-800">Semester {sem}</option>
              ))}
            </select>
          </div>
          <button className="bg-aums-teal text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-sm transition-all">
            Filter
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Courses', value: '5', icon: CalendarIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Avg Percentage', value: '91.84%', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Shortage Alert', value: '1', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
          { label: 'Last Updated', value: 'Today', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 shadow-sm rounded-sm flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.bg}`}>
              <stat.icon className={stat.color} size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase">{stat.label}</p>
              <p className="text-lg font-bold text-gray-700">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Attendance Table */}
      <div className="bg-white shadow-sm rounded-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-aums-teal text-white">
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Sl No</th>
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Class Name</th>
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Course</th>
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Faculty</th>
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10 text-center">Total</th>
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10 text-center">Present</th>
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10 text-center">Duty Leave</th>
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10 text-center">Absent</th>
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10 text-center">Percentage</th>
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider text-center">Medical</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {attendanceData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 text-sm text-gray-600 border-r border-gray-100">{row.slNo}</td>
                  <td className="px-4 py-4 text-sm font-semibold text-gray-700 border-r border-gray-100">{row.className}</td>
                  <td className="px-4 py-4 text-sm text-gray-700 border-r border-gray-100 max-w-xs">{row.course}</td>
                  <td className="px-4 py-4 text-sm text-gray-600 border-r border-gray-100">{row.faculty}</td>
                  <td className="px-4 py-4 text-sm font-bold text-gray-700 text-center border-r border-gray-100">{row.total}</td>
                  <td className="px-4 py-4 text-sm font-bold text-green-600 text-center border-r border-gray-100">{row.present}</td>
                  <td className="px-4 py-4 text-sm text-gray-600 text-center border-r border-gray-100">{row.dutyLeave}</td>
                  <td className="px-4 py-4 text-sm font-bold text-red-500 text-center border-r border-gray-100">{row.absent}</td>
                  <td className="px-4 py-4 border-r border-gray-100">
                    <div className="flex flex-col items-center gap-1">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold text-white ${row.percentage < 80 ? 'bg-aums-red-error' : 'bg-green-500'}`}>
                        {row.percentage}%
                      </span>
                      <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${row.percentage < 80 ? 'bg-aums-red-error' : 'bg-green-500'}`}
                          style={{ width: `${row.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 text-center">{row.medical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
