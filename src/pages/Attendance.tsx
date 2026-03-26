import React, { useState } from 'react';
import { ChevronDown, Search, Printer, FileDown } from 'lucide-react';

const attendanceData = [
  { slNo: 1, className: 'B.Tech..2023.R.AIE.16', course: '19AIE311 - Software Engineering', faculty: 'Dr. Rahul M', total: 45, present: 42, dutyLeave: 0, absent: 3, percentage: 93.33, medical: 0 },
  { slNo: 2, className: 'B.Tech..2023.R.AIE.16', course: '19AIE312 - Big Data Analytics', faculty: 'Prof. Sangeetha K', total: 42, present: 38, dutyLeave: 2, absent: 2, percentage: 95.24, medical: 0 },
  { slNo: 3, className: 'B.Tech..2023.R.AIE.16', course: '19AIE313 - Computer Vision', faculty: 'Dr. Anand V', total: 40, present: 35, dutyLeave: 1, absent: 4, percentage: 90.00, medical: 0 },
  { slNo: 4, className: 'B.Tech..2023.R.AIE.16', course: '19AIE314 - Computer Security', faculty: 'Ms. Priya S', total: 38, present: 36, dutyLeave: 0, absent: 2, percentage: 94.74, medical: 0 },
  { slNo: 5, className: 'B.Tech..2023.R.AIE.16', course: '19AIE315 - Natural Language Processing', faculty: 'Dr. Rajesh N', total: 44, present: 40, dutyLeave: 0, absent: 4, percentage: 90.91, medical: 0 },
  { slNo: 6, className: 'B.Tech..2023.R.AIE.16', course: '19CSE305 - Full Stack Development', faculty: 'Mr. Vignesh R', total: 48, present: 45, dutyLeave: 1, absent: 2, percentage: 95.83, medical: 0 },
  { slNo: 7, className: 'B.Tech..2023.R.AIE.16', course: '19AVP211 - Life Skills III', faculty: 'Ms. Lakshmi P', total: 15, present: 14, dutyLeave: 0, absent: 1, percentage: 93.33, medical: 0 },
  { slNo: 8, className: 'B.Tech..2023.R.AIE.16', course: '19HUM239 - Principles of Economics', faculty: 'Dr. Meera G', total: 30, present: 28, dutyLeave: 0, absent: 2, percentage: 93.33, medical: 0 },
];

export default function Attendance() {
  const [semester, setSemester] = useState('6');

  return (
    <div className="space-y-4 p-5 min-h-[calc(100vh-120px)] bg-aums-bg-main">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-teal-50">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            View Attendance
          </h1>
        </div>

        <div className="p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded px-4 py-1.5 pr-10 text-sm focus:outline-none focus:border-aums-teal"
              >
                <option value="6">Semester 6</option>
                <option value="5">Semester 5</option>
                <option value="4">Semester 4</option>
                <option value="3">Semester 3</option>
                <option value="2">Semester 2</option>
                <option value="1">Semester 1</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            <button className="px-6 py-1.5 text-white text-sm font-bold rounded shadow-sm bg-aums-teal">
              VIEW
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-1.5 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
              <Printer size={16} />
            </button>
            <button className="p-1.5 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
              <FileDown size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-white bg-aums-teal">
                <th className="px-4 py-2 text-xs font-bold uppercase border-r border-teal-600/30">Sl No</th>
                <th className="px-4 py-2 text-xs font-bold uppercase border-r border-teal-600/30">Class Name</th>
                <th className="px-4 py-2 text-xs font-bold uppercase border-r border-teal-600/30">Course</th>
                <th className="px-4 py-2 text-xs font-bold uppercase border-r border-teal-600/30">Faculty</th>
                <th className="px-4 py-2 text-xs font-bold uppercase border-r border-teal-600/30 text-center">Total</th>
                <th className="px-4 py-2 text-xs font-bold uppercase border-r border-teal-600/30 text-center">Present</th>
                <th className="px-4 py-2 text-xs font-bold uppercase border-r border-teal-600/30 text-center">Duty Leave</th>
                <th className="px-4 py-2 text-xs font-bold uppercase border-r border-teal-600/30 text-center">Absent</th>
                <th className="px-4 py-2 text-xs font-bold uppercase border-r border-teal-600/30 text-center">Percentage</th>
                <th className="px-4 py-2 text-xs font-bold uppercase text-center">Medical</th>
              </tr>
            </thead>
            <tbody>
              {semester === '6' ? (
                attendanceData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-2.5 text-xs text-gray-700 border-r border-gray-100">{row.slNo}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-700 border-r border-gray-100">{row.className}</td>
                    <td className="px-4 py-2.5 text-xs font-medium text-gray-800 border-r border-gray-100">{row.course}</td>
                    <td className="px-4 py-2.5 text-xs text-gray-600 border-r border-gray-100">{row.faculty}</td>
                    <td className="px-4 py-2.5 text-xs text-center border-r border-gray-100">{row.total}</td>
                    <td className="px-4 py-2.5 text-xs text-center border-r border-gray-100">{row.present}</td>
                    <td className="px-4 py-2.5 text-xs text-center border-r border-gray-100">{row.dutyLeave}</td>
                    <td className="px-4 py-2.5 text-xs text-center border-r border-gray-100">{row.absent}</td>
                    <td className="px-4 py-2.5 text-xs font-bold text-center text-white border-r border-gray-100 bg-aums-red-error">
                      {row.percentage.toFixed(2)}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-center">{row.medical}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="px-4 py-10 text-center text-gray-500 italic">
                    No data available for this semester.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
