import React, { useState } from 'react';

const attendanceData = [
  { slNo: 1, className: 'B.Tech. AI 2023', course: 'Computer Networks', faculty: 'Dr. Ramesh P.', total: 45, present: 42, dutyLeave: 0, absent: 3, percentage: 93.3, medical: 0 },
  { slNo: 2, className: 'B.Tech. AI 2023', course: 'Design and Analysis of Algorithms', faculty: 'Prof. Sunitha K.', total: 42, present: 37, dutyLeave: 2, absent: 3, percentage: 88.1, medical: 0 },
  { slNo: 3, className: 'B.Tech. AI 2023', course: 'Software Engineering', faculty: 'Dr. Anand M.', total: 38, present: 36, dutyLeave: 0, absent: 2, percentage: 94.7, medical: 0 },
  { slNo: 4, className: 'B.Tech. AI 2023', course: 'Artificial Intelligence', faculty: 'Dr. Bindu V.', total: 40, present: 36, dutyLeave: 1, absent: 3, percentage: 90.0, medical: 0 },
  { slNo: 5, className: 'B.Tech. AI 2023', course: 'Principles of Economics', faculty: 'Prof. Rajesh G.', total: 30, present: 28, dutyLeave: 0, absent: 2, percentage: 93.3, medical: 0 },
];

export default function Attendance() {
  const [semester, setSemester] = useState('6');

  return (
    <div className="space-y-4 p-5 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white rounded shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Attendance Summary
          </h1>
        </div>

        <div className="p-4 bg-white">
          <div className="flex flex-wrap items-end gap-4 mb-6">
            <div className="w-full sm:w-48">
              <label className="block text-[11px] font-bold text-gray-500 mb-1 uppercase">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm focus:outline-none focus:border-aums-teal"
              >
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
              </select>
            </div>
            <button className="px-4 py-1.5 text-white text-xs font-bold rounded shadow-sm hover:brightness-110 bg-aums-teal">
              ATTENDANCE SUMMARY
            </button>
            <button className="px-4 py-1.5 text-white text-xs font-bold rounded shadow-sm hover:brightness-110 bg-aums-teal">
              VIEW DUTY LEAVE DETAILS
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[11px]">
              <thead>
                <tr className="text-white bg-aums-teal">
                  <th className="border border-white/20 p-2 text-left font-bold">Sl No</th>
                  <th className="border border-white/20 p-2 text-left font-bold">Class Name</th>
                  <th className="border border-white/20 p-2 text-left font-bold">Course</th>
                  <th className="border border-white/20 p-2 text-left font-bold">Faculty</th>
                  <th className="border border-white/20 p-2 text-center font-bold">Total</th>
                  <th className="border border-white/20 p-2 text-center font-bold">Present</th>
                  <th className="border border-white/20 p-2 text-center font-bold">Duty Leave</th>
                  <th className="border border-white/20 p-2 text-center font-bold">Absent</th>
                  <th className="border border-white/20 p-2 text-center font-bold">Percentage</th>
                  <th className="border border-white/20 p-2 text-center font-bold">Medical</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="border border-gray-200 p-2">{row.slNo}</td>
                    <td className="border border-gray-200 p-2">{row.className}</td>
                    <td className="border border-gray-200 p-2 font-medium">{row.course}</td>
                    <td className="border border-gray-200 p-2">{row.faculty}</td>
                    <td className="border border-gray-200 p-2 text-center">{row.total}</td>
                    <td className="border border-gray-200 p-2 text-center">{row.present}</td>
                    <td className="border border-gray-200 p-2 text-center">{row.dutyLeave}</td>
                    <td className="border border-gray-200 p-2 text-center">{row.absent}</td>
                    <td className="border border-gray-200 p-2 text-center text-white font-bold bg-aums-red-error">
                      {row.percentage}%
                    </td>
                    <td className="border border-gray-200 p-2 text-center">{row.medical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
