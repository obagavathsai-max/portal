import React from 'react';
import { Download, Filter, Printer } from 'lucide-react';

export default function Attendance() {
  const attendanceData = [
    { id: 1, class: '2023-2027 B.Tech (AIE)', course: '21AIE201 Artificial Intelligence I', faculty: 'Dr. Ramesh M', total: 42, present: 38, dutyLeave: 0, absent: 4, percentage: 90.48, medical: 0 },
    { id: 2, class: '2023-2027 B.Tech (AIE)', course: '21AIE202 Data Structures & Algorithms', faculty: 'Ms. Priya S', total: 40, present: 37, dutyLeave: 1, absent: 2, percentage: 92.50, medical: 0 },
    { id: 3, class: '2023-2027 B.Tech (AIE)', course: '21AIE203 Computer Systems Organization', faculty: 'Dr. Anand V', total: 38, present: 35, dutyLeave: 0, absent: 3, percentage: 92.11, medical: 0 },
    { id: 4, class: '2023-2027 B.Tech (AIE)', course: '21AIE204 Mathematics for AI III', faculty: 'Dr. Sunitha K', total: 44, present: 40, dutyLeave: 2, absent: 2, percentage: 90.91, medical: 0 },
    { id: 5, class: '2023-2027 B.Tech (AIE)', course: '21MAT205 Optimization Techniques', faculty: 'Mr. Rajesh P', total: 36, present: 34, dutyLeave: 0, absent: 2, percentage: 94.44, medical: 0 },
    { id: 6, class: '2023-2027 B.Tech (AIE)', course: '21ENV201 Environmental Science', faculty: 'Dr. Lakshmi R', total: 20, present: 19, dutyLeave: 0, absent: 1, percentage: 95.00, medical: 0 }
  ];

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)] p-5">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            View Attendance
          </h1>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-aums-teal text-white text-[11px] font-bold rounded uppercase shadow-sm transition-all hover:brightness-105 active:scale-95">
              <Download size={14} />
              Export
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-aums-teal text-white text-[11px] font-bold rounded uppercase shadow-sm transition-all hover:brightness-105 active:scale-95">
              <Printer size={14} />
              Print
            </button>
          </div>
        </div>

        <div className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-aums-teal text-white">
                  <th className="px-3 py-3 text-[10px] font-bold uppercase border-r border-white/10 text-center">Sl No</th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase border-r border-white/10">Class Name</th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase border-r border-white/10">Course</th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase border-r border-white/10">Faculty</th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase border-r border-white/10 text-center">Total</th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase border-r border-white/10 text-center">Present</th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase border-r border-white/10 text-center">Duty Leave</th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase border-r border-white/10 text-center">Absent</th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase border-r border-white/10 text-center">Percentage</th>
                  <th className="px-3 py-3 text-[10px] font-bold uppercase text-center">Medical</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {attendanceData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors text-[12px] text-gray-700">
                    <td className="px-3 py-4 border-r border-gray-100 text-center">{row.id}</td>
                    <td className="px-3 py-4 border-r border-gray-100 font-medium">{row.class}</td>
                    <td className="px-3 py-4 border-r border-gray-100">{row.course}</td>
                    <td className="px-3 py-4 border-r border-gray-100">{row.faculty}</td>
                    <td className="px-3 py-4 border-r border-gray-100 text-center font-semibold">{row.total}</td>
                    <td className="px-3 py-4 border-r border-gray-100 text-center text-green-600 font-bold">{row.present}</td>
                    <td className="px-3 py-4 border-r border-gray-100 text-center text-blue-600 font-bold">{row.dutyLeave}</td>
                    <td className="px-3 py-4 border-r border-gray-100 text-center text-aums-red-error font-bold">{row.absent}</td>
                    <td className="px-3 py-4 border-r border-gray-100 text-center">
                      <span className="px-2 py-1 rounded text-white font-bold bg-aums-red-error">
                        {row.percentage}%
                      </span>
                    </td>
                    <td className="px-3 py-4 text-center font-bold text-orange-500">{row.medical}</td>
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
