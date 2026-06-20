import React, { useState } from 'react';

const courseMarks = {
  '1': [
    { component: 'Continuous Assessment 1', max: 20, scored: 18 },
    { component: 'Continuous Assessment 2', max: 20, scored: 17 },
    { component: 'End Semester', max: 50, scored: 42 },
  ],
  '2': [
    { component: 'Continuous Assessment 1', max: 20, scored: 15 },
    { component: 'Continuous Assessment 2', max: 20, scored: 16 },
    { component: 'End Semester', max: 50, scored: 38 },
  ]
};

export default function Marks() {
  const [semester, setSemester] = useState('1');

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            VIEW MARKS
          </h1>
        </div>

        <div className="p-5">
          <div className="max-w-xs mb-6">
            <div className="relative border border-gray-300 rounded-sm p-1.5">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full bg-transparent outline-none text-sm text-gray-700"
              >
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-aums-teal text-white">
                  <th className="border border-gray-300 p-3 text-left">Assessment Component</th>
                  <th className="border border-gray-300 p-3 text-center">Max Marks</th>
                  <th className="border border-gray-300 p-3 text-center">Scored Marks</th>
                </tr>
              </thead>
              <tbody>
                {(courseMarks[semester as keyof typeof courseMarks] || []).map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">{row.component}</td>
                    <td className="border border-gray-300 p-3 text-center">{row.max}</td>
                    <td className="border border-gray-300 p-3 text-center font-bold text-aums-teal">{row.scored}</td>
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
