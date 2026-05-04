import React, { useState } from 'react';

export default function Marks() {
  const [semester, setSemester] = useState('5');

  const marksData = [
    { code: '19AIE301', title: 'Formal Languages and Automata Theory', internal: 48, external: 45, total: 93 },
    { code: '19AIE302', title: 'Design and Analysis of Algorithms', internal: 49, external: 48, total: 97 },
    { code: '19AIE303', title: 'Machine Learning', internal: 50, external: 46, total: 96 },
    { code: '19AIE304', title: 'Database Management Systems', internal: 45, external: 42, total: 87 },
    { code: '19AIE305', title: 'Computer Networks', internal: 46, external: 44, total: 90 },
    { code: '19MAT205', title: 'Probability and Statistics', internal: 49, external: 49, total: 98 },
  ];

  return (
    <div className="space-y-4 p-5 bg-white min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Marks
          </h1>

          <div className="flex gap-4">
            <div className="relative min-w-[120px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full border border-gray-300 rounded px-2 py-1.5 text-xs outline-none"
              >
                {[1, 2, 3, 4, 5].map(s => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
            </div>
            <button className="bg-aums-teal text-white px-4 py-1.5 rounded text-xs font-bold hover:brightness-105">View</button>
          </div>
        </div>

        <div className="p-4 overflow-x-auto">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-2 text-left">Course Code</th>
                <th className="border border-gray-200 p-2 text-left">Course Title</th>
                <th className="border border-gray-200 p-2 text-center">Internal (50)</th>
                <th className="border border-gray-200 p-2 text-center">External (50)</th>
                <th className="border border-gray-200 p-2 text-center">Total (100)</th>
              </tr>
            </thead>
            <tbody>
              {marksData.map((m, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-200 p-2">{m.code}</td>
                  <td className="border border-gray-200 p-2">{m.title}</td>
                  <td className="border border-gray-200 p-2 text-center">{m.internal}</td>
                  <td className="border border-gray-200 p-2 text-center">{m.external}</td>
                  <td className="border border-gray-200 p-2 text-center font-bold text-aums-teal">{m.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
