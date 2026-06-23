import React, { useState } from 'react';
import { ChevronDown, BarChart3, Download, Search, LayoutList, CheckCircle2 } from 'lucide-react';

const semesterMarks = {
  '1': [
    { code: '21MAT101', name: 'Calculus', internal: '42/50', external: '45/50', total: '87/100', status: 'PASS' },
    { code: '21PHY101', name: 'Engineering Physics', internal: '38/50', external: '44/50', total: '82/100', status: 'PASS' },
    { code: '21CSE101', name: 'Computer Programming', internal: '45/50', external: '39/50', total: '84/100', status: 'PASS' },
    { code: '21MEE101', name: 'Engineering Graphics', internal: '48/50', external: '42/50', total: '90/100', status: 'PASS' },
  ],
  '2': [
    { code: '21MAT102', name: 'Applied Mathematics', internal: '40/50', external: '42/50', total: '82/100', status: 'PASS' },
    { code: '21CSE102', name: 'Data Structures', internal: '35/50', external: '38/50', total: '73/100', status: 'PASS' },
  ]
};

export default function Marks() {
  const [semester, setSemester] = useState('1');
  const currentMarks = semesterMarks[semester as keyof typeof semesterMarks] || [];

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      {/* Header Section */}
      <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Component Wise Marks
          </h1>
        </div>

        <div className="p-5 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="relative w-full md:w-64">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-300 rounded px-3 py-2 text-[13px] focus:outline-none focus:border-aums-teal"
            >
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 text-gray-400" size={16} />
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded text-[12px] font-bold hover:bg-gray-200 transition-colors">
              <LayoutList size={14} /> VIEW SUMMARY
            </button>
            <button className="flex items-center gap-2 bg-aums-teal text-white px-4 py-2 rounded text-[12px] font-bold hover:bg-aums-teal-dark transition-colors">
              <Download size={14} /> EXPORT PDF
            </button>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Highest Mark', value: '90/100', sub: 'Eng. Graphics', color: 'text-aums-teal' },
          { label: 'Average Mark', value: '85.2', sub: 'This Semester', color: 'text-blue-600' },
          { label: 'Pass Status', value: 'CLEAR', sub: 'No Backlogs', color: 'text-green-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-gray-50 border border-gray-100 rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="text-[11px] text-gray-500 font-medium">{stat.sub}</p>
            </div>
            <div className={`p-2 rounded-full bg-white shadow-sm ${stat.color}`}>
              <BarChart3 size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* Marks Table */}
      <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-aums-teal-light">
                <th className="px-4 py-3 text-[11px] font-bold text-aums-teal uppercase tracking-wider">Course</th>
                <th className="px-4 py-3 text-[11px] font-bold text-aums-teal uppercase tracking-wider text-center">Internal (50)</th>
                <th className="px-4 py-3 text-[11px] font-bold text-aums-teal uppercase tracking-wider text-center">External (50)</th>
                <th className="px-4 py-3 text-[11px] font-bold text-aums-teal uppercase tracking-wider text-center">Total (100)</th>
                <th className="px-4 py-3 text-[11px] font-bold text-aums-teal uppercase tracking-wider text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentMarks.length > 0 ? (
                currentMarks.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="text-[13px] font-bold text-gray-700">{row.name}</p>
                      <p className="text-[11px] text-gray-400 font-medium">{row.code}</p>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-center font-semibold text-gray-600">{row.internal}</td>
                    <td className="px-4 py-3 text-[13px] text-center font-semibold text-gray-600">{row.external}</td>
                    <td className="px-4 py-3 text-[13px] text-center font-black text-gray-800">{row.total}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 size={12} /> {row.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-gray-400 italic text-sm">
                    No data available for the selected semester.
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
