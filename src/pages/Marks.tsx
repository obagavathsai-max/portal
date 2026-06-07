import React from 'react';
import { Download } from 'lucide-react';

const marksData = [
  { courseCode: '23AIE114', courseTitle: 'Data Structures & Algorithms', assessment: 'Periodical 1', maxMarks: 50, marksObtained: 42, weightage: '15%' },
  { courseCode: '23AIE114', courseTitle: 'Data Structures & Algorithms', assessment: 'Periodical 2', maxMarks: 50, marksObtained: 45, weightage: '15%' },
  { courseCode: '23MAT115', courseTitle: 'Discrete Mathematics', assessment: 'Periodical 1', maxMarks: 50, marksObtained: 48, weightage: '15%' },
  { courseCode: '23MAT115', courseTitle: 'Discrete Mathematics', assessment: 'Periodical 2', maxMarks: 50, marksObtained: 46, weightage: '15%' },
  { courseCode: '23AIE111', courseTitle: 'Introduction to AI', assessment: 'Continuous Assessment', maxMarks: 100, marksObtained: 88, weightage: '30%' },
];

export default function Marks() {
  return (
    <div className="space-y-4 bg-white min-h-[calc(100vh-120px)]">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-100 p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-aums-teal"></div>
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Internal Marks
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-1.5 bg-aums-teal text-white text-[11px] font-bold rounded-sm shadow-sm hover:opacity-90 transition-all">
            <Download size={13} /> DOWNLOAD REPORT
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6 max-w-5xl mx-auto space-y-6">
        {/* Selection Area */}
        <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-gray-100">
          <div className="relative min-w-[200px]">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2.5 text-xs font-bold text-gray-700 outline-none appearance-none bg-white">
              <option>Semester 1</option>
              <option>Semester 2</option>
            </select>
          </div>
        </div>

        {/* Marks Table */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                <th className="px-6 py-3 border-b border-gray-100">Course</th>
                <th className="px-6 py-3 border-b border-gray-100">Assessment</th>
                <th className="px-6 py-3 border-b border-gray-100 text-center">Max Marks</th>
                <th className="px-6 py-3 border-b border-gray-100 text-center">Obtained</th>
                <th className="px-6 py-3 border-b border-gray-100 text-center">Weightage</th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {marksData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-100">
                    <p className="font-bold text-gray-700">{row.courseCode}</p>
                    <p className="text-[11px] text-gray-500">{row.courseTitle}</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-600 border-b border-gray-100">{row.assessment}</td>
                  <td className="px-6 py-4 text-center font-bold text-gray-800 border-b border-gray-100">{row.maxMarks}</td>
                  <td className="px-6 py-4 text-center border-b border-gray-100">
                    <span className="inline-flex items-center justify-center font-black text-aums-teal text-[15px]">
                      {row.marksObtained}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-medium text-gray-500 border-b border-gray-100">
                    {row.weightage}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
