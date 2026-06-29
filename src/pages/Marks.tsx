import React, { useState } from 'react';
import { ChevronRight, Search, FileText } from 'lucide-react';

const marksData = [
  { course: '19AIE201: Artificial Intelligence', internal: '42/50', external: '45/50', total: '87/100', status: 'Pass' },
  { course: '19AIE202: Machine Learning', internal: '45/50', external: '48/50', total: '93/100', status: 'Pass' },
  { course: '19AIE203: Data Structures', internal: '38/50', external: '42/50', total: '80/100', status: 'Pass' },
  { course: '19AIE204: Computer Networks', internal: '44/50', external: '43/50', total: '87/100', status: 'Pass' },
  { course: '19AIE205: Discrete Math', internal: '35/50', external: '40/50', total: '75/100', status: 'Pass' },
];

export default function Marks() {
  const [semester, setSemester] = useState('4');

  return (
    <div className="space-y-4 bg-white min-h-[calc(100vh-120px)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded shadow-sm border border-gray-200">
        <div className="flex items-center gap-2">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Marks
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
              <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-600 border-r border-gray-200">Course</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-600 border-r border-gray-200 text-center">Internal</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-600 border-r border-gray-200 text-center">External</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-600 border-r border-gray-200 text-center">Total</th>
              <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-600 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {marksData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 border-r border-gray-100 font-medium">{row.course}</td>
                <td className="px-4 py-3 border-r border-gray-100 text-center">{row.internal}</td>
                <td className="px-4 py-3 border-r border-gray-100 text-center">{row.external}</td>
                <td className="px-4 py-3 border-r border-gray-100 text-center font-bold text-aums-teal">{row.total}</td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-100 text-green-700 border border-green-200">
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-aums-teal text-white rounded text-xs font-bold shadow-sm hover:brightness-105 transition-all">
          <FileText size={14} />
          Export to PDF
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
