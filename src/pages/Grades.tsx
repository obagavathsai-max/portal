import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const gradeData = {
  '1': [
    { code: '19MAT111', title: 'Mathematics for Intelligent Systems 1', type: 'Core', credits: 4, grade: 'A' },
    { code: '22AIE101', title: 'Problem Solving and Algorithmic Thinking 1', type: 'Core', credits: 4, grade: 'A' },
    { code: '22ADM101', title: 'Foundations of Data Science', type: 'Core', credits: 3, grade: 'B+' },
    { code: '22ENG101', title: 'Communicative English', type: 'General', credits: 2, grade: 'A' },
  ],
  '2': [
    { code: '19MAT112', title: 'Mathematics for Intelligent Systems 2', type: 'Core', credits: 4, grade: 'B+' },
    { code: '22AIE102', title: 'Problem Solving and Algorithmic Thinking 2', type: 'Core', credits: 4, grade: 'A' },
    { code: '22AIE103', title: 'Introduction to Artificial Intelligence', type: 'Core', credits: 3, grade: 'B' },
  ],
  '3': [
    { code: '19MAT211', title: 'Mathematics for Intelligent Systems 3', type: 'Core', credits: 4, grade: 'A' },
    { code: '22AIE201', title: 'Data Structures and Algorithms 1', type: 'Core', credits: 4, grade: 'B+' },
  ]
};

export default function Grades() {
  const [semester, setSemester] = useState('1');

  const currentGrades = gradeData[semester as keyof typeof gradeData] || [];

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      {/* Header */}
      <div className="flex items-center justify-between bg-white px-4 py-3 rounded shadow-sm border-l-4 border-aums-teal">
        <h1 className="text-[15px] font-bold uppercase text-aums-teal">
          Grade Report
        </h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="appearance-none bg-white border border-gray-300 px-4 pr-10 py-1.5 rounded text-[13px] font-semibold outline-none cursor-pointer focus:border-aums-teal"
            >
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={14} />
          </div>
          <button className="p-2 bg-aums-teal text-white rounded shadow-sm hover:brightness-110">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px] border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 border-b border-gray-200">
                <th className="px-4 py-3 font-bold border-r border-gray-200">Course Code</th>
                <th className="px-4 py-3 font-bold border-r border-gray-200">Course Title</th>
                <th className="px-4 py-3 font-bold border-r border-gray-200">Type</th>
                <th className="px-4 py-3 font-bold border-r border-gray-200 text-center">Credits</th>
                <th className="px-4 py-3 font-bold text-center">Grade</th>
              </tr>
            </thead>
            <tbody>
              {currentGrades.length > 0 ? (
                currentGrades.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 border-r border-gray-100 font-mono text-[12px]">{row.code}</td>
                    <td className="px-4 py-3 border-r border-gray-100 font-medium text-gray-800">{row.title}</td>
                    <td className="px-4 py-3 border-r border-gray-100">{row.type}</td>
                    <td className="px-4 py-3 border-r border-gray-100 text-center">{row.credits}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${row.grade === 'A' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {row.grade}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-gray-400 italic">
                    No grade data available for this semester.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
