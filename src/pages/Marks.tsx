import React, { useState } from 'react';

const semesters = ['1', '2', '3', '4', '5'];

const marksData: Record<string, { subject: string; internal: number; endSem: number; total: number }[]> = {
  '5': [
    { subject: 'Optimization Techniques', internal: 48, endSem: 45, total: 93 },
    { subject: 'Deep Learning', internal: 45, endSem: 47, total: 92 },
    { subject: 'Cloud Computing', internal: 42, endSem: 43, total: 85 },
    { subject: 'Big Data', internal: 47, endSem: 48, total: 95 },
  ],
  '4': [
    { subject: 'Probability & Stats', internal: 46, endSem: 46, total: 92 },
    { subject: 'Operating Systems', internal: 40, endSem: 42, total: 82 },
    { subject: 'Neural Networks', internal: 48, endSem: 48, total: 96 },
    { subject: 'Computer Networks', internal: 44, endSem: 46, total: 90 },
  ]
};

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState('5');

  const data = marksData[selectedSemester] || [];

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Internal & External Marks
          </h1>
          <div className="relative w-32">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal appearance-none"
            >
              {semesters.map(s => (
                <option key={s} value={s}>Semester {s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3 border-b">Subject</th>
                  <th className="px-6 py-3 border-b text-center">Internal (50)</th>
                  <th className="px-6 py-3 border-b text-center">End Sem (50)</th>
                  <th className="px-6 py-3 border-b text-center text-aums-teal">Total (100)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-800">{item.subject}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{item.internal}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{item.endSem}</td>
                    <td className="px-6 py-4 text-center font-bold text-aums-teal">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.length === 0 && (
              <div className="text-center py-10 text-gray-400">No data available for Semester {selectedSemester}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
