import React, { useState } from 'react';
import { ChevronRight, FileText, Search } from 'lucide-react';

const gradeData = [
  { code: '19AIE201', title: 'Artificial Intelligence', credits: 4, grade: 'A', semester: 4 },
  { code: '19AIE202', title: 'Machine Learning', credits: 4, grade: 'A+', semester: 4 },
  { code: '19AIE203', title: 'Data Structures', credits: 3, grade: 'B+', semester: 4 },
  { code: '19AIE204', title: 'Computer Networks', credits: 3, grade: 'A', semester: 4 },
  { code: '19AIE205', title: 'Discrete Math', credits: 3, grade: 'A', semester: 4 },
];

export default function Grades() {
  const [semester, setSemester] = useState('4');

  return (
    <div className="space-y-4 bg-white min-h-[calc(100vh-120px)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded shadow-sm border border-gray-200">
        <div className="flex items-center gap-2">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Grades
          </h1>
          <ChevronRight size={18} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-600">ORUGANTI BAGAVATH SAI (AV.SC.U4AIE23132)</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="appearance-none border border-gray-300 rounded px-3 py-1.5 pr-8 text-xs font-bold text-gray-700 bg-white focus:outline-none focus:border-teal-500"
            >
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <button className="flex items-center gap-2 px-4 py-1.5 bg-aums-orange text-white rounded text-xs font-bold hover:brightness-105 transition-all">
            <Search size={14} />
            Search
          </button>
        </div>
      </div>

      <div className="bg-white rounded border border-gray-200 overflow-hidden">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-600 border-r border-gray-200">Course Code</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-600 border-r border-gray-200">Course Title</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-600 border-r border-gray-200 text-center">Credits</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-600 text-center">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {gradeData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 border-r border-gray-100 font-medium">{row.code}</td>
                <td className="px-4 py-3 border-r border-gray-100">{row.title}</td>
                <td className="px-4 py-3 border-r border-gray-100 text-center">{row.credits}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${row.grade.startsWith('A') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {row.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-50 font-bold border-t border-gray-200">
              <td colSpan={2} className="px-4 py-3 text-right uppercase text-[11px]">Semester GPA</td>
              <td colSpan={2} className="px-4 py-3 text-center text-aums-teal text-base">8.85</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-aums-teal text-white rounded text-xs font-bold shadow-sm hover:brightness-105 transition-all">
          <FileText size={14} />
          View Marksheet
        </button>
      </div>
    </div>
  );
}

function ChevronDownIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );
}
