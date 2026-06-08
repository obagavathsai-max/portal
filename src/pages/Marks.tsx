import React, { useState } from 'react';

interface MarkRecord {
  slNo: number;
  course: string;
  type: string;
  marks: number;
  maxMarks: number;
}

const semester6Marks: MarkRecord[] = [
  { slNo: 1, course: '22AIE311 Software Engineering', type: 'Continuous Assessment', marks: 42, maxMarks: 50 },
  { slNo: 2, course: '22AIE312 Big Data Analytics', type: 'Continuous Assessment', marks: 38, maxMarks: 50 },
  { slNo: 3, course: '22AIE313 Computer Vision', type: 'Continuous Assessment', marks: 45, maxMarks: 50 },
];

export default function Marks() {
  const [semester, setSemester] = useState('Select');

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Marks
          </h1>
        </div>

        <div className="p-6">
          <div className="max-w-xs mb-8">
            <div className="relative border border-gray-300 rounded-sm px-3 py-2">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="w-full text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer"
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

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-aums-teal text-white">
                  <th className="border border-gray-300 p-2 font-semibold">Sl No</th>
                  <th className="border border-gray-300 p-2 font-semibold text-left">Course</th>
                  <th className="border border-gray-300 p-2 font-semibold text-left">Assessment Type</th>
                  <th className="border border-gray-300 p-2 font-semibold">Marks Obtained</th>
                  <th className="border border-gray-300 p-2 font-semibold">Max Marks</th>
                </tr>
              </thead>
              <tbody>
                {semester === '6' ? (
                  semester6Marks.map((m) => (
                    <tr key={m.slNo} className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2 text-center">{m.slNo}</td>
                      <td className="border border-gray-300 p-2">{m.course}</td>
                      <td className="border border-gray-300 p-2">{m.type}</td>
                      <td className="border border-gray-300 p-2 text-center">{m.marks}</td>
                      <td className="border border-gray-300 p-2 text-center">{m.maxMarks}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="border border-gray-300 p-4 text-center text-gray-500 italic">
                      {semester === 'Select' ? 'Please select a semester' : 'No marks data available'}
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
