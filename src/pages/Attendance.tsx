import React, { useState } from 'react';
import { HelpCircle, Link as LinkIcon, Maximize2, Download } from 'lucide-react';

const attendanceData = [
  { slNo: 1, className: 'CSEC3', course: '21AIE311 Software Engineering', faculty: 'Dr. Ramesh R', total: 42, present: 38, dutyLeave: 0, absent: 4, percentage: '90.48%', medical: 0 },
  { slNo: 2, className: 'CSEC3', course: '21AIE312 Big Data Analytics', faculty: 'Prof. Sangeetha K', total: 40, present: 35, dutyLeave: 2, absent: 3, percentage: '92.50%', medical: 0 },
  { slNo: 3, className: 'CSEC3', course: '21AIE313 Computer Vision', faculty: 'Dr. Anand V', total: 38, present: 30, dutyLeave: 0, absent: 8, percentage: '78.95%', medical: 0 },
  { slNo: 4, className: 'CSEC3', course: '21AIE314 Computer Security', faculty: 'Mr. Vinay Kumar', total: 44, present: 40, dutyLeave: 0, absent: 4, percentage: '90.91%', medical: 0 },
  { slNo: 5, className: 'CSEC3', course: '21AIE315 Natural Language Processing', faculty: 'Dr. Deepa S', total: 36, present: 32, dutyLeave: 1, absent: 3, percentage: '91.67%', medical: 0 },
  { slNo: 6, className: 'CSEC3', course: '21CSS301 Full Stack Development', faculty: 'Prof. Rajesh M', total: 45, present: 42, dutyLeave: 0, absent: 3, percentage: '93.33%', medical: 0 },
  { slNo: 7, className: 'CSEC3', course: '21SSK301 Life Skills III', faculty: 'Ms. Meera Nair', total: 20, present: 18, dutyLeave: 0, absent: 2, percentage: '90.00%', medical: 0 },
  { slNo: 8, className: 'CSEC3', course: '21HUM302 Principles of Economics', faculty: 'Dr. Lakshmi R', total: 30, present: 22, dutyLeave: 0, absent: 8, percentage: '73.33%', medical: 0 },
];

export default function Attendance() {
  const [semester, setSemester] = useState('6');

  return (
    <div className="space-y-4 p-5 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            View Attendance
          </h1>
          <div className="flex gap-1.5">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <LinkIcon size={12} strokeWidth={2.5} /> Link
            </button>
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
            <button className="p-1 border border-gray-300 bg-white rounded-sm text-gray-700 hover:bg-gray-50">
              <Maximize2 size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-4 items-center mb-8 bg-gray-50 p-4 rounded-md border border-gray-200">
            <div className="flex items-center gap-2">
              <label className="text-sm font-bold text-gray-700">Semester:</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-aums-teal"
              >
                {[1, 2, 3, 4, 5, 6].map(s => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
            </div>
            <button className="px-6 py-1.5 text-white text-sm font-bold rounded-sm shadow-sm hover:brightness-110 transition-all bg-aums-teal">
              Search
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 text-white text-sm font-bold rounded-sm shadow-sm hover:brightness-110 transition-all bg-aums-teal ml-auto">
              <Download size={16} /> Export to Excel
            </button>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-aums-teal text-white">
                  <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider border-r border-white/20">Sl No</th>
                  <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider border-r border-white/20">Class Name</th>
                  <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider border-r border-white/20">Course</th>
                  <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider border-r border-white/20">Faculty</th>
                  <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider border-r border-white/20 text-center">Total</th>
                  <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider border-r border-white/20 text-center">Present</th>
                  <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider border-r border-white/20 text-center">Duty Leave</th>
                  <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider border-r border-white/20 text-center">Absent</th>
                  <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider border-r border-white/20 text-center">Percentage</th>
                  <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wider text-center">Medical</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {semester === '6' ? attendanceData.map((row) => (
                  <tr key={row.slNo} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 text-center font-medium">{row.slNo}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">{row.className}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 font-semibold border-r border-gray-200">{row.course}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">{row.faculty}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 text-center">{row.total}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 text-center">{row.present}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 text-center">{row.dutyLeave}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200 text-center">{row.absent}</td>
                    <td className="px-4 py-3 border-r border-gray-200 text-center">
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-aums-red-error">
                        {row.percentage}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 text-center">{row.medical}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={10} className="px-4 py-12 text-center text-gray-500 font-medium">
                      No attendance data found for Semester {semester}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
