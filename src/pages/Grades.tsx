import React, { useState } from 'react';

interface Grade {
  courseCode: string;
  courseTitle: string;
  credits: number;
  grade: string;
}

const semesterData: Record<string, Grade[]> = {
  '1': [
    { courseCode: '22ADM101', courseTitle: 'Foundations of Mathematics - I', credits: 4, grade: 'A' },
    { courseCode: '22AIE101', courseTitle: 'Introduction to AI', credits: 3, grade: 'A' },
    { courseCode: '22AIE102', courseTitle: 'Problem Solving and Algorithmic Thinking', credits: 4, grade: 'B+' },
    { courseCode: '22AIE103', courseTitle: 'Introduction to Engineering - AI', credits: 2, grade: 'A' },
  ],
  '2': [
    { courseCode: '22ADM111', courseTitle: 'Foundations of Mathematics - II', credits: 4, grade: 'B+' },
    { courseCode: '22AIE111', courseTitle: 'Data Structures and Algorithms', credits: 4, grade: 'A' },
    { courseCode: '22AIE112', courseTitle: 'Object Oriented Programming', credits: 3, grade: 'A' },
  ]
};

export default function Grades() {
  const [selectedSemester, setSelectedSemester] = useState('Select');

  const grades = semesterData[selectedSemester] || [];

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Grades
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
                    <th className="border border-gray-300 p-3 text-left font-bold text-gray-700">Course Code</th>
                    <th className="border border-gray-300 p-3 text-left font-bold text-gray-700">Course Title</th>
                    <th className="border border-gray-300 p-3 text-center font-bold text-gray-700">Credits</th>
                    <th className="border border-gray-300 p-3 text-center font-bold text-gray-700">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {grades.map((grade, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="border border-gray-300 p-3 font-medium text-gray-800">{grade.courseCode}</td>
                      <td className="border border-gray-300 p-3 text-gray-700">{grade.courseTitle}</td>
                      <td className="border border-gray-300 p-3 text-center text-gray-700">{grade.credits}</td>
                      <td className="border border-gray-300 p-3 text-center font-bold text-aums-teal">{grade.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 flex justify-end">
                <div className="bg-aums-teal-light p-3 rounded-sm border border-aums-teal/20">
                  <p className="text-sm font-bold text-aums-teal">SGPA: 8.42</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
