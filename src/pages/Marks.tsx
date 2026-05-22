import React, { useState } from 'react';

interface Mark {
  component: string;
  maxMarks: number;
  obtainedMarks: number;
  weightage: string;
}

const marksData: Record<string, Mark[]> = {
  '1': [
    { component: 'Continuous Assessment', maxMarks: 50, obtainedMarks: 42, weightage: '50%' },
    { component: 'End Semester Exam', maxMarks: 100, obtainedMarks: 85, weightage: '50%' },
  ]
};

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState('Select');

  const marks = marksData[selectedSemester] || [];

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Internal Marks
          </h1>
        </div>

        <div className="p-5">
          <div className="max-w-xs mb-8">
            <div className="relative border border-gray-300 rounded-sm">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full px-3 py-2.5 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer"
              >
                <option value="Select">Select</option>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
              </select>
            </div>
          </div>

          {selectedSemester !== 'Select' && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left font-bold text-gray-700">Assessment Component</th>
                    <th className="border border-gray-300 p-3 text-center font-bold text-gray-700">Max Marks</th>
                    <th className="border border-gray-300 p-3 text-center font-bold text-gray-700">Obtained</th>
                    <th className="border border-gray-300 p-3 text-center font-bold text-gray-700">Weightage</th>
                  </tr>
                </thead>
                <tbody>
                  {marks.length > 0 ? marks.map((mark, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-300 p-3 font-medium text-gray-800">{mark.component}</td>
                      <td className="border border-gray-300 p-3 text-center text-gray-700">{mark.maxMarks}</td>
                      <td className="border border-gray-300 p-3 text-center font-bold text-aums-teal">{mark.obtainedMarks}</td>
                      <td className="border border-gray-300 p-3 text-center text-gray-600">{mark.weightage}</td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan={4} className="border border-gray-300 p-4 text-center text-gray-500 italic">
                        No internal marks released yet for this semester.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
