import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Grades() {
  const [semester, setSemester] = useState('S3');

  const grades = [
    { code: '21AIE201', name: 'Artificial Intelligence I', credit: '4', grade: 'A' },
    { code: '21AIE202', name: 'Data Structures & Algorithms', credit: '4', grade: 'A+' },
    { code: '21AIE203', name: 'Computer Systems Organization', credit: '3', grade: 'B+' },
    { code: '21AIE204', name: 'Mathematics for AI III', credit: '4', grade: 'A' },
    { code: '21MAT205', name: 'Optimization Techniques', credit: '3', grade: 'A' },
    { code: '21ENV201', name: 'Environmental Science', credit: '2', grade: 'O' }
  ];

  return (
    <div className="space-y-4 bg-white min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Grades
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
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Credit</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {grades.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-3 text-[13px] font-mono text-gray-700">{item.code}</td>
                    <td className="px-4 py-3 text-[13px] font-medium text-gray-800">{item.name}</td>
                    <td className="px-4 py-3 text-[13px] text-gray-600 text-center">{item.credit}</td>
                    <td className="px-4 py-3 text-[13px] font-bold text-gray-900 text-center">
                      <span className={`inline-block min-w-[24px] px-1.5 py-0.5 rounded text-[11px] ${
                        item.grade.includes('A') || item.grade === 'O'
                        ? 'bg-green-50 text-green-700 border border-green-100'
                        : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }`}>
                        {item.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-aums-teal-light/30 font-bold border-t border-gray-200">
                  <td colSpan={2} className="px-4 py-3 text-[13px] text-aums-teal uppercase text-right">SGPA:</td>
                  <td colSpan={2} className="px-4 py-3 text-[13px] text-aums-teal text-center">9.10</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
