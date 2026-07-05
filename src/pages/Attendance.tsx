import React, { useState, useEffect } from 'react';
import { Search, Filter, Download } from 'lucide-react';

const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'];

const attendanceData: Record<string, any[]> = {
  'Semester 6': [
    { slNo: 1, className: '2023-24-Even-ASE-CBE', course: '23AIE311 - Computer Vision', faculty: 'Dr. Anandh', total: 42, present: 38, dutyLeave: 2, absent: 2, percentage: 95.23, medical: 0 },
    { slNo: 2, className: '2023-24-Even-ASE-CBE', course: '23AIE312 - Deep Learning', faculty: 'Dr. Bindu', total: 40, present: 36, dutyLeave: 0, absent: 4, percentage: 90.00, medical: 0 },
    { slNo: 3, className: '2023-24-Even-ASE-CBE', course: '23AIE313 - Reinforcement Learning', faculty: 'Dr. Chitra', total: 38, present: 35, dutyLeave: 1, absent: 2, percentage: 94.73, medical: 0 },
    { slNo: 4, className: '2023-24-Even-ASE-CBE', course: '23AIE314 - Natural Language Processing', faculty: 'Dr. Deepak', total: 44, present: 32, dutyLeave: 0, absent: 12, percentage: 72.72, medical: 0 },
    { slNo: 5, className: '2023-24-Even-ASE-CBE', course: '23MAT311 - Optimization Techniques', faculty: 'Dr. Elizabeth', total: 36, present: 34, dutyLeave: 2, absent: 0, percentage: 100.00, medical: 0 },
  ],
};

export default function Attendance() {
  const [semester, setSemester] = useState('');
  const [data, setData] = useState<any[]>([]);

  const handleSearch = () => {
    if (semester) {
      setData(attendanceData[semester] || []);
    }
  };

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)] p-5">
      {/* Search Header */}
      <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <div className="grid grid-cols-2 gap-[2px]">
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          </div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Attendance Summary
          </h1>
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <div className="w-full max-w-xs">
            <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full border border-gray-300 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-aums-teal"
            >
              <option value="">-- Select --</option>
              {semesters.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 text-white px-6 py-1.5 rounded-sm text-sm font-bold shadow-sm transition-opacity hover:opacity-90 bg-aums-teal"
          >
            <Search size={16} /> Attendance Summary
          </button>
          <button
            className="flex items-center gap-2 text-white px-6 py-1.5 rounded-sm text-sm font-bold shadow-sm transition-opacity hover:opacity-90 bg-aums-teal"
          >
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Results Table */}
      {data.length > 0 && (
        <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[13px]">
              <thead>
                <tr className="bg-aums-teal text-white">
                  <th className="px-4 py-3 font-bold border-r border-white/20">Sl No</th>
                  <th className="px-4 py-3 font-bold border-r border-white/20">Class Name</th>
                  <th className="px-4 py-3 font-bold border-r border-white/20">Course</th>
                  <th className="px-4 py-3 font-bold border-r border-white/20">Faculty</th>
                  <th className="px-4 py-3 font-bold border-r border-white/20">Total</th>
                  <th className="px-4 py-3 font-bold border-r border-white/20">Present</th>
                  <th className="px-4 py-3 font-bold border-r border-white/20">Duty Leave</th>
                  <th className="px-4 py-3 font-bold border-r border-white/20">Absent</th>
                  <th className="px-4 py-3 font-bold border-r border-white/20">Percentage</th>
                  <th className="px-4 py-3 font-bold">Medical</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-r border-gray-100">{row.slNo}</td>
                    <td className="px-4 py-3 border-r border-gray-100">{row.className}</td>
                    <td className="px-4 py-3 border-r border-gray-100 font-medium">{row.course}</td>
                    <td className="px-4 py-3 border-r border-gray-100">{row.faculty}</td>
                    <td className="px-4 py-3 border-r border-gray-100">{row.total}</td>
                    <td className="px-4 py-3 border-r border-gray-100">{row.present}</td>
                    <td className="px-4 py-3 border-r border-gray-100">{row.dutyLeave}</td>
                    <td className="px-4 py-3 border-r border-gray-100">{row.absent}</td>
                    <td className="px-4 py-3 border-r border-gray-100">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${row.percentage < 75 ? 'text-white bg-aums-red-error' : 'text-gray-700'
                          }`}
                      >
                        {row.percentage}%
                      </span>
                    </td>
                    <td className="px-4 py-3">{row.medical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
