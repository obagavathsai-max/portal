import React, { useState } from 'react';

const marksData: Record<string, { code: string; name: string; internal: number; external: number; total: number }[]> = {
  '5': [
    { code: '22AIE301', name: 'Natural Language Processing', internal: 48, external: 45, total: 93 },
    { code: '22AIE302', name: 'Big Data Analytics', internal: 45, external: 42, total: 87 },
    { code: '22MAT301', name: 'Optimization Techniques', internal: 49, external: 48, total: 97 },
    { code: '22AIE303', name: 'Distributed Systems', internal: 42, external: 38, total: 80 },
  ],
  '4': [
    { code: '22AIE211', name: 'Deep Learning', internal: 47, external: 48, total: 95 },
    { code: '22AIE212', name: 'Design and Analysis of Algorithms', internal: 44, external: 40, total: 84 },
  ]
};

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState('5');
  const currentMarks = marksData[selectedSemester] || [];

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Internal & External Marks
          </h1>
        </div>

        <div className="p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative w-48">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-aums-teal appearance-none"
              >
                <option value="5">Semester 5</option>
                <option value="4">Semester 4</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                  <th className="border-b border-gray-200 px-4 py-3 text-left">Course Code</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">Course Title</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-center">Internal (50)</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-center">External (50)</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-center">Total (100)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {currentMarks.map((mark, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">{mark.code}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-600">{mark.name}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-center text-gray-600">{mark.internal}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-center text-gray-600">{mark.external}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-center font-bold text-gray-800">{mark.total}</td>
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
