import React from 'react';
import { cn } from '../lib/utils';

const attendanceData = [
  { code: 'CSE301', name: 'Machine Learning', faculty: 'Dr. Smitha P', total: 45, attended: 38, percentage: 84.4 },
  { code: 'CSE302', name: 'Computer Networks', faculty: 'Prof. Rajesh K', total: 40, attended: 36, percentage: 90.0 },
  { code: 'CSE303', name: 'Software Engineering', faculty: 'Dr. Anitha S', total: 42, attended: 33, percentage: 78.5 },
  { code: 'MAT301', name: 'Probability & Statistics', faculty: 'Dr. Kumar V', total: 38, attended: 34, percentage: 89.4 },
  { code: 'ENG301', name: 'Professional Communication', faculty: 'Prof. Meena R', total: 20, attended: 19, percentage: 95.0 },
  { code: 'CSE381', name: 'Machine Learning Lab', faculty: 'Dr. Smitha P', total: 12, attended: 12, percentage: 100.0 },
  { code: 'CSE382', name: 'Computer Networks Lab', faculty: 'Prof. Rajesh K', total: 12, attended: 11, percentage: 91.6 },
];

export default function Attendance() {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200" style={{ backgroundColor: '#e0f2f1' }}>
          <h1 className="font-bold text-sm uppercase tracking-wide" style={{ color: '#26a69a' }}>
            Attendance Details
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">Semester 5 · Academic Year 2025–26</p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 border-b border-gray-200">Course Code</th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 border-b border-gray-200">Course Name</th>
                <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-600 border-b border-gray-200">Faculty</th>
                <th className="px-4 py-2.5 text-center text-xs font-semibold text-gray-600 border-b border-gray-200">Classes Held</th>
                <th className="px-4 py-2.5 text-center text-xs font-semibold text-gray-600 border-b border-gray-200">Attended</th>
                <th className="px-4 py-2.5 text-center text-xs font-semibold text-gray-600 border-b border-gray-200">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((course, i) => (
                <tr
                  key={course.code}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  style={{ borderBottom: '1px solid #eee' }}
                >
                  <td className="px-4 py-2.5 text-gray-800 font-medium">{course.code}</td>
                  <td className="px-4 py-2.5 text-gray-700">{course.name}</td>
                  <td className="px-4 py-2.5 text-gray-600">{course.faculty}</td>
                  <td className="px-4 py-2.5 text-center text-gray-600">{course.total}</td>
                  <td className="px-4 py-2.5 text-center text-gray-600">{course.attended}</td>
                  <td className="px-4 py-2.5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            'h-full rounded-full',
                            course.percentage >= 80 ? 'bg-green-500' : course.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                          )}
                          style={{ width: `${course.percentage}%` }}
                        />
                      </div>
                      <span
                        className="text-xs font-semibold w-10 text-right"
                        style={{
                          color: course.percentage >= 80 ? '#2e7d32' : course.percentage >= 75 ? '#f57c00' : '#c62828'
                        }}
                      >
                        {course.percentage}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
