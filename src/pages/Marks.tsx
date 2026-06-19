import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const marksData = {
  '1': [
    { code: '19MAT111', title: 'Mathematics for Intelligent Systems 1', assessment: 'Periodical 1', max: 50, scored: 42 },
    { code: '19MAT111', title: 'Mathematics for Intelligent Systems 1', assessment: 'Periodical 2', max: 50, scored: 45 },
    { code: '22AIE101', title: 'Problem Solving and Algorithmic Thinking 1', assessment: 'Periodical 1', max: 50, scored: 38 },
  ],
  '4': [
    { code: '22AIE111', title: 'Data Structures and Algorithms 2', assessment: 'Continuous Assessment', max: 100, scored: 88 },
    { code: '22AIE112', title: 'Data Science 1', assessment: 'Continuous Assessment', max: 100, scored: 92 },
  ]
};

export default function Marks() {
  const [semester, setSemester] = useState('4');

  const currentMarks = marksData[semester as keyof typeof marksData] || [];

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      {/* Header */}
      <div className="flex items-center justify-between bg-white px-4 py-3 rounded shadow-sm border-l-4 border-aums-teal">
        <h1 className="text-[15px] font-bold uppercase text-aums-teal">
          Internal Marks
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
                <th className="px-4 py-3 font-bold border-r border-gray-200">Assessment</th>
                <th className="px-4 py-3 font-bold border-r border-gray-200 text-center">Max Marks</th>
                <th className="px-4 py-3 font-bold text-center">Marks Scored</th>
              </tr>
            </thead>
            <tbody>
              {currentMarks.length > 0 ? (
                currentMarks.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 border-r border-gray-100 font-mono">{row.code}</td>
                    <td className="px-4 py-3 border-r border-gray-100 font-medium text-gray-800">{row.title}</td>
                    <td className="px-4 py-3 border-r border-gray-100">{row.assessment}</td>
                    <td className="px-4 py-3 border-r border-gray-100 text-center font-bold">{row.max}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-bold text-aums-teal">{row.scored}</span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-gray-400 italic">
                    No internal marks available for this semester.
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
