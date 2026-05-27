import React, { useState } from 'react';
import { HelpCircle, Link as LinkIcon, Maximize2, Download } from 'lucide-react';

const marksData = [
  { component: 'Continuous Assessment 1', max: 50, weightage: '25%', marks: 42, percentage: '84.00%' },
  { component: 'Continuous Assessment 2', max: 50, weightage: '25%', marks: 45, percentage: '90.00%' },
  { component: 'Assignments / Quizzes', max: 20, weightage: '10%', marks: 18, percentage: '90.00%' },
  { component: 'End Semester Examination', max: 100, weightage: '40%', marks: 88, percentage: '88.00%' },
  { component: 'Total', max: 100, weightage: '100%', marks: 87.5, percentage: '87.50%' },
];

export default function Marks() {
  const [semester, setSemester] = useState('6');
  const [course, setCourse] = useState('21AIE311 Software Engineering');

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Marks
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
                {[1, 2, 3, 4, 5, 6].map(s => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
            </div>
            <div className="relative flex-1 max-w-md">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Course</label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-aums-teal"
              >
                <option value="21AIE311 Software Engineering">21AIE311 Software Engineering</option>
                <option value="21AIE312 Big Data Analytics">21AIE312 Big Data Analytics</option>
                <option value="21AIE313 Computer Vision">21AIE313 Computer Vision</option>
              </select>
            </div>
            <button className="px-6 py-2 text-white text-sm font-bold rounded-sm shadow-sm hover:brightness-110 transition-all bg-aums-teal">
              View Marks
            </button>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Assessment Component</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Max Marks</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Weightage</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Marks Obtained</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {marksData.map((row, i) => (
                  <tr key={i} className={`hover:bg-gray-50 transition-colors ${row.component === 'Total' ? 'bg-gray-50 font-bold' : ''}`}>
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{row.component}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center">{row.max}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center">{row.weightage}</td>
                    <td className="px-6 py-4 text-sm text-aums-teal font-bold text-center">{row.marks}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 text-center">{row.percentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-100 rounded-sm">
            <p className="text-[11px] text-yellow-800 flex items-start gap-2">
              <span className="font-bold uppercase shrink-0">Note:</span>
              <span>The marks displayed here are indicative and subject to change upon moderation and finalization by the examination office. Please contact your faculty for any discrepancies.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
