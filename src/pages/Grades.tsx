import React, { useState } from 'react';

const semesters = [
  { id: 4, gpa: '9.58', cgpa: '9.41' },
  { id: 3, gpa: '9.32', cgpa: '9.35' },
  { id: 2, gpa: '9.15', cgpa: '9.37' },
  { id: 1, gpa: '9.62', cgpa: '9.62' },
];

export default function Grades() {
  const [selectedSemester, setSelectedSemester] = useState<string>('Select');

  const activeGrade = semesters.find(s => s.id.toString() === selectedSemester);

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-200 rounded-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Semester Grades
          </h1>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 mb-6 text-[13px]">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Roll No</span>
              <span className="font-semibold text-gray-800">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Name</span>
              <span className="font-semibold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="relative inline-block border border-gray-300 rounded px-3 py-1.5 min-w-[300px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full text-[13px] text-gray-700 bg-transparent border-none outline-none cursor-pointer appearance-none"
              >
                <option value="Select">Select</option>
                {semesters.map(s => (
                  <option key={s.id} value={s.id}>{s.id}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                ▼
              </div>
            </div>
          </div>

          {activeGrade ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              <div className="p-6 border border-gray-200 rounded bg-gray-50 text-center">
                <p className="text-3xl font-bold text-aums-teal">{activeGrade.gpa}</p>
                <p className="text-sm text-gray-500 mt-2 font-semibold uppercase tracking-wider">Semester GPA</p>
              </div>
              <div className="p-6 border border-gray-200 rounded bg-gray-50 text-center">
                <p className="text-3xl font-bold text-aums-teal">{activeGrade.cgpa}</p>
                <p className="text-sm text-gray-500 mt-2 font-semibold uppercase tracking-wider">Cumulative GPA</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded">
              <p className="text-gray-400 text-sm italic">Please select a semester to view your grade report</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
