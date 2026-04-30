import React, { useState } from 'react';

const semesters = ['1', '2', '3', '4', '5'];
const marksData = {
  '5': [
    { code: '21AIE301', name: 'Formal Languages and Automata Theory', type: 'Theory', marks: '88', maxMarks: '100', grade: 'A' },
    { code: '21AIE302', name: 'Database Management Systems', type: 'Theory', marks: '92', maxMarks: '100', grade: 'O' },
    { code: '21AIE303', name: 'Introduction to Operating Systems', type: 'Theory', marks: '85', maxMarks: '100', grade: 'A' },
    { code: '21AIE304', name: 'Machine Learning', type: 'Theory', marks: '95', maxMarks: '100', grade: 'O' },
    { code: '21AIE305', name: 'Data Structures and Algorithms', type: 'Theory', marks: '90', maxMarks: '100', grade: 'A' },
  ]
};

export default function Marks() {
  const [semester, setSemester] = useState('5');

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Marks
          </h1>
        </div>

        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="relative w-full sm:w-64">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:border-aums-teal appearance-none"
              >
                {semesters.map(s => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <span className="text-gray-400">▼</span>
              </div>
            </div>
            <button className="px-6 py-2 bg-aums-teal text-white text-sm font-bold rounded shadow-sm hover:bg-aums-teal-dark transition-colors">
              SEARCH
            </button>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 font-bold text-gray-700">Course Code</th>
                  <th className="px-4 py-3 font-bold text-gray-700">Course Name</th>
                  <th className="px-4 py-3 font-bold text-gray-700">Type</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-center">Marks</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-center">Max Marks</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {marksData[semester as keyof typeof marksData] ? (
                  marksData[semester as keyof typeof marksData].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.code}</td>
                      <td className="px-4 py-3 text-gray-700">{row.name}</td>
                      <td className="px-4 py-3 text-gray-600">{row.type}</td>
                      <td className="px-4 py-3 text-center font-bold text-aums-teal">{row.marks}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{row.maxMarks}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${row.grade === 'O' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {row.grade}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-gray-500">
                      No data found for the selected semester.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
