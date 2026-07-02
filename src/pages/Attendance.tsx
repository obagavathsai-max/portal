import React, { useState } from 'react';
import { ChevronDown, Calendar, CheckCircle, XCircle, Clock } from 'lucide-react';

interface AttendanceRecord {
  slNo: number;
  className: string;
  course: string;
  faculty: string;
  total: number;
  present: number;
  dutyLeave: number;
  absent: number;
  percentage: number;
  medical: number;
}

const attendanceData: AttendanceRecord[] = [
  { slNo: 1, className: 'S3-AIE-A', course: '23AIE211 - Operating Systems', faculty: 'Vinu Warior', total: 45, present: 40, dutyLeave: 2, absent: 3, percentage: 93.33, medical: 0 },
  { slNo: 2, className: 'S3-AIE-A', course: '23AIE212 - Database Management', faculty: 'Ramya C', total: 42, present: 38, dutyLeave: 0, absent: 4, percentage: 90.48, medical: 0 },
  { slNo: 3, className: 'S3-AIE-A', course: '23AIE213 - Machine Learning', faculty: 'Nidheesh N', total: 48, present: 45, dutyLeave: 1, absent: 2, percentage: 95.83, medical: 0 },
  { slNo: 4, className: 'S3-AIE-A', course: '23AIE214 - Computer Networks', faculty: 'Senthil Kumar', total: 40, present: 32, dutyLeave: 3, absent: 5, percentage: 87.50, medical: 0 },
  { slNo: 5, className: 'S3-AIE-A', course: '23MAT211 - Linear Algebra', faculty: 'Rajesh Kannan', total: 50, present: 48, dutyLeave: 0, absent: 2, percentage: 96.00, medical: 0 },
];

export default function Attendance() {
  const [semester, setSemester] = useState('Semester 3');

  return (
    <div className="space-y-4 p-5 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-sm shadow-sm border-l-4 border-aums-teal">
        <div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Attendance Details
          </h1>
          <p className="text-xs text-gray-500 mt-1">View your course-wise attendance summary</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 border border-gray-300 rounded text-sm font-medium focus:outline-none focus:ring-1 focus:ring-aums-teal bg-white"
            >
              <option>Semester 1</option>
              <option>Semester 2</option>
              <option>Semester 3</option>
              <option>Semester 4</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-bold rounded shadow-sm hover:brightness-110 transition-all bg-aums-teal">
            <Calendar size={16} /> History
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Overall %', value: '92.6%', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Total Classes', value: '225', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Total Present', value: '203', icon: CheckCircle, color: 'text-teal-600', bg: 'bg-teal-50' },
          { label: 'Total Absent', value: '16', icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
        ].map((stat, i) => (
          <div key={i} className={`p-4 rounded-sm border border-gray-100 shadow-sm flex items-center justify-between bg-white`}>
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
              <p className={`text-xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            </div>
            <div className={`p-2 rounded-full ${stat.bg}`}>
              <stat.icon size={20} className={stat.color} />
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-white bg-aums-teal">
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
              {attendanceData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-100">{row.slNo}</td>
                  <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-100">{row.className}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-gray-800 border-r border-gray-100">{row.course}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-r border-gray-100">{row.faculty}</td>
                  <td className="px-4 py-3 text-sm text-center font-medium border-r border-gray-100">{row.total}</td>
                  <td className="px-4 py-3 text-sm text-center font-medium text-green-600 border-r border-gray-100">{row.present}</td>
                  <td className="px-4 py-3 text-sm text-center font-medium text-blue-500 border-r border-gray-100">{row.dutyLeave}</td>
                  <td className="px-4 py-3 text-sm text-center font-medium text-red-500 border-r border-gray-100">{row.absent}</td>
                  <td className="px-4 py-3 text-sm text-center border-r border-gray-100">
                    <span className="px-2 py-1 rounded text-white text-xs font-bold bg-aums-red-error">
                      {row.percentage}%
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-center font-medium text-gray-500">{row.medical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
