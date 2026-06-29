import React from 'react';
import { ChevronRight, Filter } from 'lucide-react';

const attendanceData = [
  { class: 'A', course: '19AIE201: Artificial Intelligence', faculty: 'Dr. John Doe', total: 45, present: 42, dutyLeave: 0, absent: 3, percentage: 93.3, medical: 0 },
  { class: 'A', course: '19AIE202: Machine Learning', faculty: 'Dr. Jane Smith', total: 45, present: 40, dutyLeave: 2, absent: 3, percentage: 88.9, medical: 0 },
  { class: 'A', course: '19AIE203: Data Structures', faculty: 'Prof. Mike Brown', total: 45, present: 38, dutyLeave: 0, absent: 7, percentage: 84.4, medical: 0 },
  { class: 'A', course: '19AIE204: Computer Networks', faculty: 'Dr. Alice White', total: 45, present: 44, dutyLeave: 0, absent: 1, percentage: 97.8, medical: 0 },
  { class: 'A', course: '19AIE205: Discrete Math', faculty: 'Dr. Bob Black', total: 45, present: 35, dutyLeave: 0, absent: 10, percentage: 77.8, medical: 0 },
];

export default function Attendance() {
  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)] p-[20px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded shadow-sm border border-gray-200">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            View Attendance
          </h1>
          <ChevronRight size={18} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-600">Sem 4 (Jan-May 2024)</span>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded text-xs font-bold text-gray-700 hover:bg-gray-50 bg-aums-teal text-white">
            <Filter size={14} />
            Filter
          </button>
          <button className="px-3 py-1.5 border border-gray-300 rounded text-xs font-bold text-gray-700 hover:bg-gray-50 bg-aums-teal text-white">
            Semester 4
          </button>
        </div>
      </div>

      <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-aums-teal text-white">
              <th className="px-4 py-3 font-bold uppercase text-[11px] tracking-wider border-r border-white/20">Sl No</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] tracking-wider border-r border-white/20">Class Name</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] tracking-wider border-r border-white/20">Course</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] tracking-wider border-r border-white/20">Faculty</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] tracking-wider border-r border-white/20 text-center">Total</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] tracking-wider border-r border-white/20 text-center">Present</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] tracking-wider border-r border-white/20 text-center">Duty Leave</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] tracking-wider border-r border-white/20 text-center">Absent</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] tracking-wider border-r border-white/20 text-center">Percentage</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] tracking-wider text-center">Medical</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {attendanceData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 border-r border-gray-100">{idx + 1}</td>
                <td className="px-4 py-3 border-r border-gray-100">{row.class}</td>
                <td className="px-4 py-3 border-r border-gray-100 font-medium">{row.course}</td>
                <td className="px-4 py-3 border-r border-gray-100">{row.faculty}</td>
                <td className="px-4 py-3 border-r border-gray-100 text-center">{row.total}</td>
                <td className="px-4 py-3 border-r border-gray-100 text-center font-semibold text-green-600">{row.present}</td>
                <td className="px-4 py-3 border-r border-gray-100 text-center">{row.dutyLeave}</td>
                <td className="px-4 py-3 border-r border-gray-100 text-center font-semibold text-red-500">{row.absent}</td>
                <td className="px-4 py-3 border-r border-gray-100 text-center">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-bold text-white bg-aums-red-error`}
                  >
                    {row.percentage}%
                  </span>
                </td>
                <td className="px-4 py-3 text-center">{row.medical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
