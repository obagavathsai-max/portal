import React, { useState } from 'react';
import { Search, Printer, Download, BookOpen } from 'lucide-react';

const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'];

const gradesData: Record<string, any[]> = {
  'Semester 6': [
    { code: '23AIE311', course: 'Computer Vision', credits: 4, grade: 'A+', result: 'Pass' },
    { code: '23AIE312', course: 'Deep Learning', credits: 4, grade: 'A', result: 'Pass' },
    { code: '23AIE313', course: 'Reinforcement Learning', credits: 3, grade: 'A+', result: 'Pass' },
    { code: '23AIE314', course: 'Natural Language Processing', credits: 3, grade: 'B+', result: 'Pass' },
    { code: '23MAT311', course: 'Optimization Techniques', credits: 3, grade: 'A', result: 'Pass' },
  ],
};

export default function Grades() {
  const [semester, setSemester] = useState('');
  const [data, setData] = useState<any[]>([]);

  const handleSearch = () => {
    if (semester) {
      setData(gradesData[semester] || []);
    }
  };

  return (
    <div className="space-y-4 bg-white min-h-[calc(100vh-120px)]">
      {/* Search Header */}
      <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <div className="grid grid-cols-2 gap-[2px]">
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          </div>
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Grades
          </h1>
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <div className="w-full max-w-xs relative pt-2">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full border border-gray-300 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-aums-teal"
            >
              <option value="">-- Select --</option>
              {semesters.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 text-white px-6 py-1.5 rounded-sm text-sm font-bold shadow-sm transition-opacity hover:opacity-90 bg-aums-teal"
          >
            <Search size={16} /> SEARCH
          </button>
          <div className="flex gap-2 ml-auto">
            <button className="p-2 border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-50 shadow-sm">
              <Printer size={18} />
            </button>
            <button className="p-2 border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-50 shadow-sm">
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Results Table */}
      {data.length > 0 && (
        <div className="space-y-4">
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[13px]">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 border-b border-gray-200">
                    <th className="px-4 py-3 font-bold">Course Code</th>
                    <th className="px-4 py-3 font-bold">Course Name</th>
                    <th className="px-4 py-3 font-bold">Credits</th>
                    <th className="px-4 py-3 font-bold">Grade</th>
                    <th className="px-4 py-3 font-bold">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.code}</td>
                      <td className="px-4 py-3">{row.course}</td>
                      <td className="px-4 py-3 text-gray-600">{row.credits}</td>
                      <td className="px-4 py-3 font-bold text-aums-teal">{row.grade}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[11px] font-bold">
                          {row.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* GPA Summary */}
          <div className="flex justify-end">
            <div className="bg-white border border-gray-200 p-4 rounded-sm shadow-sm min-w-[200px]">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-[12px] font-bold text-gray-500 uppercase">SGPA</span>
                <span className="text-lg font-bold text-aums-teal">9.15</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[12px] font-bold text-gray-500 uppercase">CGPA</span>
                <span className="text-lg font-bold text-aums-teal">8.92</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {data.length === 0 && semester && (
        <div className="bg-gray-50 p-10 text-center rounded-sm border border-dashed border-gray-300">
          <BookOpen className="mx-auto text-gray-300 mb-2" size={40} />
          <p className="text-gray-500 font-medium">No grades published for the selected semester yet.</p>
        </div>
      )}
    </div>
  );
}
