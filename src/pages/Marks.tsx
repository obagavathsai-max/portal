import React, { useState } from 'react';
import { ClipboardList, ChevronRight, Search, FileText } from 'lucide-react';

const marksData = [
  { courseCode: '19AIE302', courseTitle: 'Design and Analysis of Algorithms', component: 'Continuous Assessment', weightage: '50%', marks: '45/50' },
  { courseCode: '19AIE302', courseTitle: 'Design and Analysis of Algorithms', component: 'End Semester', weightage: '50%', marks: '42/50' },
  { courseCode: '19AIE304', courseTitle: 'Deep Learning', component: 'Continuous Assessment', weightage: '50%', marks: '48/50' },
  { courseCode: '19AIE304', courseTitle: 'Deep Learning', component: 'End Semester', weightage: '50%', marks: '44/50' },
];

export default function Marks() {
  const [semester, setSemester] = useState('5');

  return (
    <div className="space-y-4 bg-white min-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ClipboardList className="text-aums-teal" size={20} />
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Internal Marks
          </h1>
        </div>
      </div>

      <div className="px-4 space-y-6">
        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row items-end gap-4 pt-2">
          <div className="relative group flex-1 max-w-[200px]">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium z-10 uppercase tracking-wider">Semester</label>
            <div className="relative">
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded px-3 py-2.5 pr-10 text-[13px] font-semibold text-gray-700 focus:ring-2 focus:ring-aums-teal/20 focus:border-aums-teal outline-none transition-all shadow-sm"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
              <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 rotate-90" size={14} />
            </div>
          </div>

          <button className="flex items-center gap-2 bg-aums-teal text-white px-6 py-2.5 rounded text-[13px] font-bold uppercase tracking-wider hover:brightness-110 shadow-md transition-all h-[42px]">
            <Search size={16} />
            Filter
          </button>
        </div>

        {/* Marks Display */}
        <div className="grid grid-cols-1 gap-6">
          {['19AIE302', '19AIE304'].map((course) => (
            <div key={course} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-gray-50/80 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-aums-teal flex items-center justify-center text-white">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-gray-800">
                      {course} - {marksData.find(m => m.courseCode === course)?.courseTitle}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white border-b border-gray-100">
                      <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Assessment Component</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Weightage</th>
                      <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Marks Obtained</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {marksData.filter(m => m.courseCode === course).map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 text-[13px] font-medium text-gray-700">{row.component}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-[12px] font-bold text-aums-teal bg-aums-teal/5 px-2 py-0.5 rounded-full">
                            {row.weightage}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-[14px] font-black text-gray-800">{row.marks}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
