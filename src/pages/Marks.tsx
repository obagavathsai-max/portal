import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Marks() {
  const [semester, setSemester] = useState('S3');

  const marks = [
    { code: '21AIE201', name: 'Artificial Intelligence I', internal: '45/50', external: '42/50', total: '87/100' },
    { code: '21AIE202', name: 'Data Structures & Algorithms', internal: '48/50', external: '45/50', total: '93/100' },
    { code: '21AIE203', name: 'Computer Systems Organization', internal: '42/50', external: '38/50', total: '80/100' },
    { code: '21AIE204', name: 'Mathematics for AI III', internal: '46/50', external: '41/50', total: '87/100' },
    { code: '21MAT205', name: 'Optimization Techniques', internal: '44/50', external: '43/50', total: '87/100' },
    { code: '21ENV201', name: 'Environmental Science', internal: '49/50', external: '47/50', total: '96/100' }
  ];

  return (
    <div className="space-y-4 bg-white min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Marks
          </h1>

          <div className="flex items-center gap-3">
            <div className="relative min-w-[120px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full h-9 pl-3 pr-8 text-xs border border-gray-300 rounded focus:outline-none focus:border-aums-teal appearance-none"
              >
                <option value="S1">Semester 1</option>
                <option value="S2">Semester 2</option>
                <option value="S3">Semester 3</option>
                <option value="S4">Semester 4</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                <Search size={14} className="text-gray-400" />
              </div>
            </div>

            <button className="h-9 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded transition-colors uppercase">
              Download PDF
            </button>
          </div>
        </div>

        <div className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Course Code</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase">Course Name</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Internal</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">External</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {marks.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3 text-[13px] font-mono text-gray-700">{item.code}</td>
                    <td className="px-4 py-3 text-[13px] font-medium text-gray-800">{item.name}</td>
                    <td className="px-4 py-3 text-[13px] text-gray-600 text-center">{item.internal}</td>
                    <td className="px-4 py-3 text-[13px] text-gray-600 text-center">{item.external}</td>
                    <td className="px-4 py-3 text-[13px] font-bold text-gray-900 text-center">{item.total}</td>
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
