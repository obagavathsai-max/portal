import React, { useState } from 'react';
import { HelpCircle, Link as LinkIcon, Maximize2, FileText, Download } from 'lucide-react';

const gradeData = [
  { code: '21AIE311', title: 'Software Engineering', type: 'Core', credits: 3, grade: 'A', status: 'Pass' },
  { code: '21AIE312', title: 'Big Data Analytics', type: 'Core', credits: 4, grade: 'A+', status: 'Pass' },
  { code: '21AIE313', title: 'Computer Vision', type: 'Core', credits: 3, grade: 'B+', status: 'Pass' },
  { code: '21AIE314', title: 'Computer Security', type: 'Core', credits: 3, grade: 'A', status: 'Pass' },
  { code: '21AIE315', title: 'Natural Language Processing', type: 'Core', credits: 3, grade: 'A', status: 'Pass' },
  { code: '21CSS301', title: 'Full Stack Development', type: 'Lab', credits: 2, grade: 'O', status: 'Pass' },
  { code: '21SSK301', title: 'Life Skills III', type: 'Soft Skill', credits: 1, grade: 'A+', status: 'Pass' },
  { code: '21HUM302', title: 'Principles of Economics', type: 'Elective', credits: 3, grade: 'B', status: 'Pass' },
];

export default function Grades() {
  const [semester, setSemester] = useState('5');

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Grades
          </h1>
          <div className="flex gap-1.5">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <LinkIcon size={12} strokeWidth={2.5} /> Link
            </button>
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
            <button className="p-1 border border-gray-300 bg-white rounded-sm text-gray-700 hover:bg-gray-50">
              <Maximize2 size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-6 items-center mb-8">
            <div className="relative w-48">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-aums-teal"
              >
                {[1, 2, 3, 4, 5].map(s => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
            </div>
            <button className="px-6 py-2 text-white text-sm font-bold rounded-sm shadow-sm hover:brightness-110 transition-all bg-aums-teal">
              View Grades
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-bold rounded-sm shadow-sm hover:brightness-110 transition-all bg-aums-teal ml-auto">
              <Download size={16} /> Download Grade Sheet
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'SGPA', value: '8.82', color: 'bg-blue-50 text-blue-700 border-blue-100' },
              { label: 'Credits Registered', value: '22', color: 'bg-green-50 text-green-700 border-green-100' },
              { label: 'Credits Earned', value: '22', color: 'bg-purple-50 text-purple-700 border-purple-100' },
            ].map((stat, i) => (
              <div key={i} className={`p-4 rounded-sm border ${stat.color} flex flex-col items-center justify-center`}>
                <span className="text-[11px] font-bold uppercase tracking-wider mb-1">{stat.label}</span>
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Course Code</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Course Title</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Credits</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Grade</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {gradeData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">{row.code}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 font-medium">{row.title}</td>
                    <td className="px-4 py-3 text-xs">
                      <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">{row.type}</span>
                    </td>
                    <td className="px-4 py-3 text-sm text-center font-medium text-gray-700">{row.credits}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-block w-8 py-1 rounded text-xs font-bold text-white ${row.grade.startsWith('A') || row.grade === 'O' ? 'bg-green-500' : 'bg-blue-500'}`}>
                        {row.grade}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-xs font-bold text-green-600">{row.status}</span>
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
