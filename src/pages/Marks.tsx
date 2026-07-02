import React, { useState } from 'react';
import { ChevronDown, BarChart2, Info, Download } from 'lucide-react';

interface MarkRecord {
  courseCode: string;
  courseTitle: string;
  internal: number;
  external: number;
  total: number;
  maxMarks: number;
}

const marksData: MarkRecord[] = [
  { courseCode: '23AIE211', courseTitle: 'Operating Systems', internal: 45, external: 42, total: 87, maxMarks: 100 },
  { courseCode: '23AIE212', courseTitle: 'Database Management', internal: 48, external: 46, total: 94, maxMarks: 100 },
  { courseCode: '23AIE213', courseTitle: 'Machine Learning', internal: 38, external: 40, total: 78, maxMarks: 100 },
  { courseCode: '23AIE214', courseTitle: 'Computer Networks', internal: 42, external: 39, total: 81, maxMarks: 100 },
  { courseCode: '23MAT211', courseTitle: 'Linear Algebra', internal: 49, external: 48, total: 97, maxMarks: 100 },
];

export default function Marks() {
  const [semester, setSemester] = useState('Semester 3');

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Exam Marks
          </h1>
          <p className="text-[11px] text-gray-500 font-medium">Internal and External marks breakdown</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] font-medium text-aums-teal">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="appearance-none pl-3 pr-9 py-2 border border-gray-200 rounded text-[13px] font-bold focus:outline-none focus:border-aums-teal bg-white min-w-[140px]"
            >
              <option>Semester 1</option>
              <option>Semester 2</option>
              <option>Semester 3</option>
              <option>Semester 4</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 text-white text-[12px] font-bold rounded shadow-sm hover:brightness-110 transition-all bg-aums-teal">
            <Download size={14} /> Download
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-sm">
        <Info size={18} className="text-blue-500" />
        <p className="text-xs text-blue-700 font-medium">Final marks are subject to university moderation and verification.</p>
      </div>

      {/* Marks Table */}
      <div className="border border-gray-200 rounded-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase">Course</th>
              <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase text-center">Internal (50)</th>
              <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase text-center">External (50)</th>
              <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase text-center">Total (100)</th>
              <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {marksData.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/50">
                <td className="px-4 py-3">
                  <p className="text-sm font-bold text-gray-800">{row.courseCode}</p>
                  <p className="text-xs text-gray-500">{row.courseTitle}</p>
                </td>
                <td className="px-4 py-3 text-sm text-center font-medium text-gray-700">{row.internal}</td>
                <td className="px-4 py-3 text-sm text-center font-medium text-gray-700">{row.external}</td>
                <td className="px-4 py-3 text-sm text-center font-bold text-aums-teal">{row.total}</td>
                <td className="px-4 py-3 text-center">
                  <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase">
                    Pass
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
