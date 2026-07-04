import React, { useState } from 'react';

const gradeData = [
  { code: '19CSE301', name: 'Computer Networks', credits: 4, type: 'Theory', grade: 'A', status: 'Passed' },
  { code: '19CSE302', name: 'Design and Analysis of Algorithms', credits: 4, type: 'Theory', grade: 'A', status: 'Passed' },
  { code: '19CSE303', name: 'Software Engineering', credits: 3, type: 'Theory', grade: 'A+', status: 'Passed' },
  { code: '19CSE304', name: 'Artificial Intelligence', credits: 3, type: 'Theory', grade: 'A', status: 'Passed' },
  { code: '19CSE381', name: 'Computer Networks Lab', credits: 1, type: 'Lab', grade: 'O', status: 'Passed' },
  { code: '19ENV300', name: 'Environmental Science', credits: 0, type: 'Theory', grade: 'P', status: 'Passed' },
];

export default function Grades() {
  const [semester, setSemester] = useState('1');

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      <div className="bg-white rounded shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Grade Sheet
          </h1>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="relative min-w-[200px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-4">
              <div className="text-center px-4 border-r border-gray-100">
                <p className="text-[10px] text-gray-400 font-bold uppercase">SGPA</p>
                <p className="text-lg font-bold text-gray-700">8.92</p>
              </div>
              <div className="text-center px-4">
                <p className="text-[10px] text-gray-400 font-bold uppercase">CGPA</p>
                <p className="text-lg font-bold text-gray-700">8.75</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="bg-gray-50 text-gray-500 uppercase tracking-wider">
                  <th className="border-y border-gray-200 p-3 text-left font-bold">Course Code</th>
                  <th className="border-y border-gray-200 p-3 text-left font-bold">Course Name</th>
                  <th className="border-y border-gray-200 p-3 text-center font-bold">Credits</th>
                  <th className="border-y border-gray-200 p-3 text-center font-bold">Grade</th>
                  <th className="border-y border-gray-200 p-3 text-center font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {gradeData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-3 font-medium text-gray-700">{row.code}</td>
                    <td className="p-3 text-gray-600">{row.name}</td>
                    <td className="p-3 text-center">{row.credits}</td>
                    <td className="p-3 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded font-bold ${
                        ['O', 'A+', 'A'].includes(row.grade) ? 'text-green-600' : 'text-gray-700'
                      }`}>
                        {row.grade}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="text-green-500 font-semibold">{row.status}</span>
                    </td>
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
