import React, { useState } from 'react';

const courses = [
  { id: 1, name: 'Software Engineering', code: '21AIE311', faculty: 'Dr. Vidya Balasubramanian', total: 42, present: 40, duty: 0, absent: 2, medical: 0 },
  { id: 2, name: 'Big Data Analytics', code: '21AIE312', faculty: 'Dr. T. Senthilkumar', total: 45, present: 42, duty: 1, absent: 2, medical: 0 },
  { id: 3, name: 'Computer Vision', code: '21AIE313', faculty: 'Dr. S. Sowmya', total: 40, present: 38, duty: 0, absent: 2, medical: 0 },
  { id: 4, name: 'Computer Security', code: '21AIE314', faculty: 'Dr. M. Sethumadhavan', total: 42, present: 40, duty: 0, absent: 2, medical: 0 },
  { id: 5, name: 'Natural Language Processing', code: '21AIE315', faculty: 'Dr. Anand Kumar M', total: 44, present: 41, duty: 1, absent: 2, medical: 0 },
  { id: 6, name: 'Full Stack Development', code: '21AIE341', faculty: 'Mr. Ritwik M', total: 38, present: 36, duty: 0, absent: 2, medical: 0 },
  { id: 7, name: 'Life Skills - III', code: '21SSK301', faculty: 'Mr. Adarsh M', total: 20, present: 19, duty: 0, absent: 1, medical: 0 },
  { id: 8, name: 'Principles of Economics', code: '21ECO201', faculty: 'Dr. P. Kanagasabapathi', total: 40, present: 38, duty: 0, absent: 2, medical: 0 },
];

export default function Attendance() {
  const [semester, setSemester] = useState('6');

  return (
    <div className="space-y-4 p-5 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            View Attendance
          </h1>
          <div className="flex items-center gap-2">
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:border-aums-teal"
            >
              {[1, 2, 3, 4, 5, 6].map(s => (
                <option key={s} value={s}>Semester {s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-0 overflow-x-auto">
          {semester === '6' ? (
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-aums-teal text-white">
                  <th className="px-4 py-3 font-semibold">Sl No</th>
                  <th className="px-4 py-3 font-semibold">Class Name</th>
                  <th className="px-4 py-3 font-semibold">Course</th>
                  <th className="px-4 py-3 font-semibold">Faculty</th>
                  <th className="px-4 py-3 font-semibold text-center">Total</th>
                  <th className="px-4 py-3 font-semibold text-center">Present</th>
                  <th className="px-4 py-3 font-semibold text-center">Duty Leave</th>
                  <th className="px-4 py-3 font-semibold text-center">Absent</th>
                  <th className="px-4 py-3 font-semibold text-center">Percentage</th>
                  <th className="px-4 py-3 font-semibold text-center">Medical</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {courses.map((course, idx) => {
                  const percentage = ((course.present + course.duty) / course.total * 100).toFixed(2);
                  return (
                    <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3">{idx + 1}</td>
                      <td className="px-4 py-3 font-medium">B.Tech 2023 AIE</td>
                      <td className="px-4 py-3">
                        <div className="font-semibold text-gray-800">{course.name}</div>
                        <div className="text-xs text-gray-500">{course.code}</div>
                      </td>
                      <td className="px-4 py-3 text-xs">{course.faculty}</td>
                      <td className="px-4 py-3 text-center">{course.total}</td>
                      <td className="px-4 py-3 text-center text-green-600 font-semibold">{course.present}</td>
                      <td className="px-4 py-3 text-center text-blue-600">{course.duty}</td>
                      <td className="px-4 py-3 text-center text-red-600">{course.absent}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="px-2 py-1 rounded-full text-xs font-bold bg-aums-red-error text-white">
                          {percentage}%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">{course.medical}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="p-10 text-center text-gray-500">
              No attendance data available for Semester {semester}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
