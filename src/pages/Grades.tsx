import React, { useState } from 'react';
import { Award, GraduationCap, ChevronRight, BookOpen } from 'lucide-react';

const gradeData = [
  { courseCode: '19AIE302', courseTitle: 'Design and Analysis of Algorithms', credit: 4, grade: 'A', status: 'Pass' },
  { courseCode: '19AIE304', courseTitle: 'Deep Learning', credit: 3, grade: 'A+', status: 'Pass' },
  { courseCode: '19AIE311', courseTitle: 'Computer Vision', credit: 3, grade: 'B+', status: 'Pass' },
  { courseCode: '19MAT302', courseTitle: 'Optimization Techniques', credit: 4, grade: 'A', status: 'Pass' },
  { courseCode: '19HUM301', courseTitle: 'Ethics in AI', credit: 2, grade: 'O', status: 'Pass' },
];

export default function Grades() {
  const [semester, setSemester] = useState('5');

  return (
    <div className="space-y-4 bg-white min-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GraduationCap className="text-aums-teal" size={20} />
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Grades
          </h1>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Semester Selection */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
          <div className="relative group">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium z-10">Semester</label>
            <div className="relative">
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded px-3 py-2.5 pr-10 text-[13px] font-semibold text-gray-700 min-w-[160px] focus:ring-2 focus:ring-aums-teal/20 focus:border-aums-teal outline-none transition-all shadow-sm"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
              <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 rotate-90" size={14} />
            </div>
          </div>

          <div className="flex gap-4 w-full sm:w-auto">
            <div className="bg-aums-teal-light rounded px-4 py-2 border border-aums-teal/20 flex-1 sm:flex-none">
              <p className="text-[9px] font-bold text-aums-teal uppercase tracking-wider">Semester SGPA</p>
              <p className="text-lg font-black text-aums-teal">8.92</p>
            </div>
            <div className="bg-gray-50 rounded px-4 py-2 border border-gray-200 flex-1 sm:flex-none">
              <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">CGPA</p>
              <p className="text-lg font-black text-gray-700">9.15</p>
            </div>
          </div>
        </div>

        {/* Grades Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Course Code</th>
                  <th className="px-6 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Course Title</th>
                  <th className="px-6 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Credit</th>
                  <th className="px-6 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Grade</th>
                  <th className="px-6 py-3.5 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {gradeData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-6 py-4">
                      <span className="text-[13px] font-bold text-aums-teal bg-aums-teal/5 px-2 py-1 rounded">
                        {row.courseCode}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <BookOpen size={16} className="text-gray-400 group-hover:text-aums-teal transition-colors" />
                        <span className="text-[13px] font-medium text-gray-700">{row.courseTitle}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-[13px] font-semibold text-gray-600">{row.credit}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-aums-teal flex items-center justify-center text-white text-[13px] font-bold shadow-sm">
                          {row.grade}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-[11px] font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Info Legend */}
        <div className="flex items-start gap-3 bg-blue-50/50 border border-blue-100 rounded-lg p-4">
          <Award size={18} className="text-blue-500 mt-0.5" />
          <div>
            <p className="text-[12px] font-semibold text-blue-800">Grade Points Legend</p>
            <p className="text-[11px] text-blue-600/80 mt-1">
              O: 10.0, A+: 9.5, A: 9.0, B+: 8.0, B: 7.0, C: 6.0, P: 5.0, F: 0.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
