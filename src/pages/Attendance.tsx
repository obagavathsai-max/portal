import React, { useState } from 'react';

export default function Attendance() {
  const [semester, setSemester] = useState('6');

  const attendanceData = [
    { name: 'Software Engineering', code: '19CSE305', faculty: 'Dr. Rahul S', total: 42, present: 38, dutyLeave: 2, absent: 2, percent: 95.2, medical: 0 },
    { name: 'Big Data Analytics', code: '19CSE304', faculty: 'Prof. Meena K', total: 40, present: 36, dutyLeave: 0, absent: 4, percent: 90.0, medical: 0 },
    { name: 'Computer Vision', code: '19CSE311', faculty: 'Dr. Anand P', total: 38, present: 35, dutyLeave: 1, absent: 2, percent: 94.7, medical: 0 },
    { name: 'Computer Security', code: '19CSE303', faculty: 'Prof. Suresh M', total: 45, present: 40, dutyLeave: 0, absent: 5, percent: 88.9, medical: 0 },
    { name: 'NLP', code: '19CSE313', faculty: 'Dr. Priya V', total: 35, present: 32, dutyLeave: 2, absent: 1, percent: 97.1, medical: 0 },
    { name: 'Full Stack Development', code: '19CSE314', faculty: 'Prof. Rajesh G', total: 42, present: 39, dutyLeave: 0, absent: 3, percent: 92.9, medical: 0 },
    { name: 'Life Skills', code: '19HUM201', faculty: 'Ms. Anita L', total: 20, present: 19, dutyLeave: 0, absent: 1, percent: 95.0, medical: 0 },
    { name: 'Principles of Economics', code: '19ECO101', faculty: 'Dr. Vinod K', total: 30, present: 28, dutyLeave: 1, absent: 1, percent: 96.7, medical: 0 },
  ];

  return (
    <div className="space-y-4 p-5 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            View Attendance
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-600">Semester:</span>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="text-xs border border-gray-300 rounded px-2 py-1 outline-none"
            >
              {[1, 2, 3, 4, 5, 6].map(s => (
                <option key={s} value={s}>Semester {s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-4 overflow-x-auto">
          {semester === '6' ? (
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-aums-teal text-white">
                  <th className="border border-white/20 p-2 text-left">Sl No</th>
                  <th className="border border-white/20 p-2 text-left">Class Name</th>
                  <th className="border border-white/20 p-2 text-left">Course</th>
                  <th className="border border-white/20 p-2 text-left">Faculty</th>
                  <th className="border border-white/20 p-2 text-center">Total</th>
                  <th className="border border-white/20 p-2 text-center">Present</th>
                  <th className="border border-white/20 p-2 text-center">Duty Leave</th>
                  <th className="border border-white/20 p-2 text-center">Absent</th>
                  <th className="border border-white/20 p-2 text-center">Percentage</th>
                  <th className="border border-white/20 p-2 text-center">Medical</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((course, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-200 p-2">{idx + 1}</td>
                    <td className="border border-gray-200 p-2">{course.name}</td>
                    <td className="border border-gray-200 p-2">{course.code}</td>
                    <td className="border border-gray-200 p-2">{course.faculty}</td>
                    <td className="border border-gray-200 p-2 text-center font-semibold">{course.total}</td>
                    <td className="border border-gray-200 p-2 text-center text-aums-teal font-bold">{course.present}</td>
                    <td className="border border-gray-200 p-2 text-center">{course.dutyLeave}</td>
                    <td className="border border-gray-200 p-2 text-center text-red-500">{course.absent}</td>
                    <td className="border border-gray-200 p-2 text-center">
                      <span className="inline-block px-2 py-0.5 rounded-sm text-white font-bold bg-aums-red-error">
                        {course.percent}%
                      </span>
                    </td>
                    <td className="border border-gray-200 p-2 text-center">{course.medical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="py-20 text-center text-gray-500 italic">
              No attendance data available for Semester {semester}
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2">
        <button className="px-6 py-2 text-white rounded text-sm font-bold shadow-sm bg-aums-teal hover:brightness-105">
          Print
        </button>
        <button className="px-6 py-2 text-white rounded text-sm font-bold shadow-sm bg-aums-teal hover:brightness-105">
          Export
        </button>
      </div>
    </div>
  );
}
