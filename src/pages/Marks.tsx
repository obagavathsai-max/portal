import React, { useState } from 'react';
import { ChevronDown, Printer, FileDown } from 'lucide-react';

const semesterMarks = {
  '5': [
    { code: '19AIE301', course: 'Formal Languages and Automata Theory', internal: 48, external: 42, total: 90 },
    { code: '19AIE302', course: 'Machine Learning', internal: 50, external: 45, total: 95 },
    { code: '19AIE303', course: 'Computer Networks', internal: 45, external: 40, total: 85 },
    { code: '19AIE304', course: 'Operating Systems', internal: 47, external: 43, total: 90 },
    { code: '19AIE305', course: 'Artificial Intelligence', internal: 49, external: 46, total: 95 },
    { code: '19AVP211', course: 'Life Skills III', internal: 46, external: 38, total: 84 },
  ],
  '4': [
    { code: '19AIE211', course: 'Introduction to Deep Learning', internal: 45, external: 40, total: 85 },
    { code: '19AIE212', course: 'Design and Analysis of Algorithms', internal: 48, external: 42, total: 90 },
    { code: '19AIE213', course: 'Database Management Systems', internal: 50, external: 45, total: 95 },
    { code: '19AIE214', external: 40, internal: 46, total: 86, course: 'Embedded Systems' },
    { code: '19AIE215', internal: 47, external: 43, total: 90, course: 'Optimization Techniques' },
    { code: '19AVP201', internal: 49, external: 46, total: 95, course: 'Life Skills II' },
  ],
  '3': [
    { code: '19AIE201', course: 'Introduction to Probability and Statistics', internal: 50, external: 45, total: 95 },
    { code: '19AIE202', course: 'Data Structures and Algorithms', internal: 47, external: 43, total: 90 },
    { code: '19AIE203', course: 'Object Oriented Programming', internal: 45, external: 40, total: 85 },
    { code: '19AIE204', internal: 48, external: 42, total: 90, course: 'Digital Electronics' },
    { code: '19AIE205', internal: 49, external: 46, total: 95, course: 'Python for Machine Learning' },
    { code: '19AVP111', internal: 46, external: 38, total: 84, course: 'Life Skills I' },
  ],
  '2': [
    { code: '19MAT112', internal: 47, external: 43, total: 90, course: 'Linear Algebra' },
    { code: '19AIE111', internal: 50, external: 45, total: 95, course: 'Introduction to Computer Science' },
    { code: '19AIE112', internal: 45, external: 40, total: 85, course: 'Problem Solving and Algorithmic Thinking' },
    { code: '19AIE113', internal: 48, external: 42, total: 90, course: 'Computer Organization and Architecture' },
    { code: '19AIE114', internal: 49, external: 46, total: 95, course: 'Digital Signal Processing' },
    { code: '19ENG111', internal: 46, external: 38, total: 84, course: 'Technical Communication' },
  ],
  '1': [
    { code: '19MAT101', course: 'Single Variable Calculus', internal: 50, external: 45, total: 95 },
    { code: '19AIE101', internal: 47, external: 43, total: 90, course: 'Introduction to AI and Data Science' },
    { code: '19AIE102', internal: 45, external: 40, total: 85, course: 'Computational Problem Solving' },
    { code: '19AIE103', internal: 50, external: 45, total: 95, course: 'Discrete Mathematics' },
    { code: '19AIE104', internal: 45, external: 40, total: 85, course: 'Introduction to Electrical Engineering' },
    { code: '19CUL101', internal: 50, external: 45, total: 95, course: 'Cultural Education I' },
  ]
};

export default function Marks() {
  const [semester, setSemester] = useState('5');
  const marks = semesterMarks[semester as keyof typeof semesterMarks] || [];

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-main">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-teal-50">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Internal and External Marks
          </h1>
        </div>

        <div className="p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="relative pt-2">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded px-4 py-1.5 pr-10 text-sm focus:outline-none focus:border-aums-teal"
              >
                <option value="5">Semester 5</option>
                <option value="4">Semester 4</option>
                <option value="3">Semester 3</option>
                <option value="2">Semester 2</option>
                <option value="1">Semester 1</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-[calc(50%+4px)] -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded text-xs font-bold text-gray-700 hover:bg-gray-50">
              <Printer size={14} /> Print
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded text-xs font-bold text-gray-700 hover:bg-gray-50">
              <FileDown size={14} /> Download
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Course Code</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Course Name</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Internal (50)</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">External (50)</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Total (100)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {marks.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-xs font-bold text-gray-700">{row.code}</td>
                  <td className="px-6 py-4 text-xs text-gray-700">{row.course}</td>
                  <td className="px-6 py-4 text-xs text-gray-700 text-center">{row.internal}</td>
                  <td className="px-6 py-4 text-xs text-gray-700 text-center">{row.external}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-xs font-bold text-aums-teal">{row.total}</span>
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
