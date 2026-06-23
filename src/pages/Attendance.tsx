import React, { useState } from 'react';
import { Search, ChevronDown, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';

const semesterAttendance: Record<string, any[]> = {
  '1': [
    { slNo: 1, className: 'Regular', course: 'Environmental Science and Sustainability (21ENV111)', faculty: 'Venkatesh B.', total: 13, present: 12, dutyLeave: 0, absent: 1, percentage: 92.31, medical: 0 },
    { slNo: 2, className: 'Regular', course: 'Foundations of Computer Science (21CSE101)', faculty: 'Anjali V.', total: 24, present: 22, dutyLeave: 0, absent: 2, percentage: 91.67, medical: 0 },
    { slNo: 3, className: 'Regular', course: 'Applied Mathematics (21MAT102)', faculty: 'Dr. Subramanian', total: 28, present: 24, dutyLeave: 1, absent: 3, percentage: 89.29, medical: 0 },
    { slNo: 4, className: 'Regular', course: 'Physics of Semiconductors (21PHY104)', faculty: 'Prof. Rajesh', total: 20, present: 15, dutyLeave: 0, absent: 5, percentage: 75.00, medical: 0 },
  ],
  '2': [
    { slNo: 1, className: 'Regular', course: 'Data Structures and Algorithms (21CSE102)', faculty: 'Dr. Senthil', total: 30, present: 28, dutyLeave: 0, absent: 2, percentage: 93.33, medical: 0 },
    { slNo: 2, className: 'Regular', course: 'Digital Electronics (21ECE101)', faculty: 'Meera K.', total: 25, present: 20, dutyLeave: 2, absent: 3, percentage: 88.00, medical: 0 },
  ],
  '3': []
};

export default function Attendance() {
  const [semester, setSemester] = useState('1');
  const attendanceData = semesterAttendance[semester] || [];

  return (
    <div className="space-y-4 p-5 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Header Card */}
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            View Attendance
          </h1>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Semester</label>
            <div className="relative">
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-aums-teal"
              >
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 text-gray-400" size={16} />
            </div>
          </div>

          <div className="md:col-span-2"></div>

          <div>
            <button
              className="w-full text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors bg-aums-teal hover:bg-aums-teal-dark"
            >
              GENERATE
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Table */}
      <div className="bg-white rounded shadow-sm overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="text-white bg-aums-teal">
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Sl No</th>
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Class Name</th>
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Course</th>
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Faculty</th>
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Total</th>
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Present</th>
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Duty Leave</th>
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Absent</th>
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Percentage</th>
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider">Medical</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {attendanceData.length > 0 ? (
              attendanceData.map((row) => (
                <tr key={row.slNo} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-[13px] border-r border-gray-100">{row.slNo}</td>
                  <td className="px-4 py-3 text-[13px] border-r border-gray-100">{row.className}</td>
                  <td className="px-4 py-3 text-[13px] border-r border-gray-100 font-medium text-gray-700">{row.course}</td>
                  <td className="px-4 py-3 text-[13px] border-r border-gray-100">{row.faculty}</td>
                  <td className="px-4 py-3 text-[13px] border-r border-gray-100 font-bold">{row.total}</td>
                  <td className="px-4 py-3 text-[13px] border-r border-gray-100 font-bold text-green-600">{row.present}</td>
                  <td className="px-4 py-3 text-[13px] border-r border-gray-100 text-blue-600">{row.dutyLeave}</td>
                  <td className="px-4 py-3 text-[13px] border-r border-gray-100 font-bold text-red-500">{row.absent}</td>
                  <td className="px-4 py-3 border-r border-gray-100">
                    <div
                      className="inline-block px-3 py-1 rounded text-white font-bold text-[13px] bg-aums-red-error"
                    >
                      {row.percentage}%
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[13px]">{row.medical}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={10} className="px-4 py-10 text-center text-gray-400 italic text-sm">
                  No attendance data available for the selected semester.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-3 h-3 rounded bg-aums-teal"></div>
          <span>Active Course</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-3 h-3 rounded bg-aums-red-error"></div>
          <span>Low Attendance</span>
        </div>
      </div>
    </div>
  );
}
