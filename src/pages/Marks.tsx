import React, { useState } from 'react';

const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

const marksData: Record<string, any[]> = {
  '6': [
    { code: '22AIE311', title: 'Software Engineering', component: 'Continuous Assessment', marks: '85', max: '100' },
    { code: '22AIE312', title: 'Big Data Analytics', component: 'Continuous Assessment', marks: '78', max: '100' },
    { code: '22AIE313', title: 'Computer Vision', component: 'Continuous Assessment', marks: '92', max: '100' },
    { code: '22AIE314', title: 'Computer Security', component: 'Continuous Assessment', marks: '81', max: '100' },
    { code: '22AIE315', title: 'NLP', component: 'Continuous Assessment', marks: '88', max: '100' },
    { code: '22AIE457', title: 'Full Stack Development', component: 'Continuous Assessment', marks: '90', max: '100' },
  ]
};

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState('6');

  const data = marksData[selectedSemester] || [];

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            VIEW MARKS
          </h1>
        </div>

        <div className="p-5">
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="relative min-w-[200px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal appearance-none bg-transparent"
              >
                {semesters.map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-xs">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 font-bold text-left">Course Code</th>
                  <th className="border border-gray-300 p-2 font-bold text-left">Course Title</th>
                  <th className="border border-gray-300 p-2 font-bold text-left">Component</th>
                  <th className="border border-gray-300 p-2 font-bold text-center">Marks</th>
                  <th className="border border-gray-300 p-2 font-bold text-center">Max Marks</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((row, idx) => (
                    <tr key={idx} className="bg-white">
                      <td className="border border-gray-300 p-2">{row.code}</td>
                      <td className="border border-gray-300 p-2">{row.title}</td>
                      <td className="border border-gray-300 p-2">{row.component}</td>
                      <td className="border border-gray-300 p-2 text-center font-bold text-aums-teal">{row.marks}</td>
                      <td className="border border-gray-300 p-2 text-center">{row.max}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="border border-gray-300 p-4 text-center text-gray-500 italic">
                      No data available for Semester {selectedSemester}
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
