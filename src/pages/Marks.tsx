import React, { useState } from 'react';

const marksData = [
  { code: '19CSE301', name: 'Computer Networks', component: 'Periodical 1', max: 50, scored: 42, weightage: '15%' },
  { code: '19CSE301', name: 'Computer Networks', component: 'Periodical 2', max: 50, scored: 45, weightage: '15%' },
  { code: '19CSE301', name: 'Computer Networks', component: 'Continuous Assessment', max: 100, scored: 92, weightage: '20%' },
  { code: '19CSE302', name: 'Design and Analysis of Algorithms', component: 'Periodical 1', max: 50, scored: 38, weightage: '15%' },
  { code: '19CSE302', name: 'Design and Analysis of Algorithms', component: 'Periodical 2', max: 50, scored: 40, weightage: '15%' },
];

export default function Marks() {
  const [semester, setSemester] = useState('6');

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      <div className="bg-white rounded shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Internal Marks
          </h1>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative min-w-[200px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-aums-teal"
              >
                {[1, 2, 3, 4, 5, 6].map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="bg-gray-50 text-gray-500 uppercase tracking-wider">
                  <th className="border-y border-gray-200 p-3 text-left font-bold">Course</th>
                  <th className="border-y border-gray-200 p-3 text-left font-bold">Evaluation Component</th>
                  <th className="border-y border-gray-200 p-3 text-center font-bold">Max Marks</th>
                  <th className="border-y border-gray-200 p-3 text-center font-bold">Scored</th>
                  <th className="border-y border-gray-200 p-3 text-center font-bold">Weightage</th>
                </tr>
              </thead>
              <tbody>
                {marksData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-3">
                      <p className="font-bold text-gray-700">{row.code}</p>
                      <p className="text-[11px] text-gray-500">{row.name}</p>
                    </td>
                    <td className="p-3 text-gray-600 font-medium">{row.component}</td>
                    <td className="p-3 text-center">{row.max}</td>
                    <td className="p-3 text-center font-bold text-aums-teal">{row.scored}</td>
                    <td className="p-3 text-center font-semibold text-gray-500">{row.weightage}</td>
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
