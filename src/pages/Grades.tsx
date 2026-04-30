import React, { useState } from 'react';

const semesters = ['1', '2', '3', '4', '5'];
const gradesData = {
  '1': { sgpa: '9.4', cgpa: '9.4' },
  '2': { sgpa: '9.35', cgpa: '9.38' },
  '3': { sgpa: '9.5', cgpa: '9.42' },
  '4': { sgpa: '9.45', cgpa: '9.43' },
  '5': { sgpa: '9.54', cgpa: '9.41' },
};

const subjects = {
  '5': [
    { code: '21AIE301', name: 'Formal Languages and Automata Theory', credits: '3', grade: 'A' },
    { code: '21AIE302', name: 'Database Management Systems', credits: '4', grade: 'O' },
    { code: '21AIE303', name: 'Introduction to Operating Systems', credits: '3', grade: 'A' },
    { code: '21AIE304', name: 'Machine Learning', credits: '4', grade: 'O' },
    { code: '21AIE305', name: 'Data Structures and Algorithms', credits: '4', grade: 'A' },
    { code: '21AIE381', name: 'Machine Learning Lab', credits: '1', grade: 'O' },
    { code: '21AIE382', name: 'Database Management Systems Lab', credits: '1', grade: 'O' },
  ]
};

export default function Grades() {
  const [semester, setSemester] = useState('5');

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Grades
          </h1>
        </div>

        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
            <div className="relative w-full sm:w-64">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:border-aums-teal appearance-none"
              >
                {semesters.map(s => (
                  <option key={s} value={s}>Semester {s}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <span className="text-gray-400">▼</span>
              </div>
            </div>
            <button className="px-6 py-2 bg-aums-teal text-white text-sm font-bold rounded shadow-sm hover:bg-aums-teal-dark transition-colors">
              VIEW GRADES
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 border border-gray-200 rounded bg-gray-50 flex justify-between items-center">
              <span className="text-sm font-bold text-gray-600 uppercase">Semester SGPA</span>
              <span className="text-2xl font-black text-aums-teal">{gradesData[semester as keyof typeof gradesData]?.sgpa || '0.00'}</span>
            </div>
            <div className="p-4 border border-gray-200 rounded bg-gray-50 flex justify-between items-center">
              <span className="text-sm font-bold text-gray-600 uppercase">Cumulative CGPA</span>
              <span className="text-2xl font-black text-aums-orange">{gradesData[semester as keyof typeof gradesData]?.cgpa || '0.00'}</span>
            </div>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 font-bold text-gray-700">Course Code</th>
                  <th className="px-4 py-3 font-bold text-gray-700">Course Name</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-center">Credits</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {subjects[semester as keyof typeof subjects] ? (
                  subjects[semester as keyof typeof subjects].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.code}</td>
                      <td className="px-4 py-3 text-gray-700">{row.name}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.credits}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block w-8 h-8 leading-8 rounded-full text-xs font-bold text-white ${row.grade === 'O' ? 'bg-aums-teal' : 'bg-aums-pink'}`}>
                          {row.grade}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-10 text-center text-gray-500">
                      No grade data found for the selected semester.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
