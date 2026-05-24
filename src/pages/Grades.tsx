import React, { useState } from 'react';

interface Grade {
  courseCode: string;
  courseTitle: string;
  grade: string;
  credits: number;
}

const semesterData: Record<string, Grade[]> = {
  '1': [
    { courseCode: '22ADM101', courseTitle: 'Foundations of Data Science', grade: 'A', credits: 4 },
    { courseCode: '22AIE101', courseTitle: 'Problem Solving and Algorithmic Thinking', grade: 'A', credits: 4 },
    { courseCode: '22MAT101', courseTitle: 'Single Variable Calculus', grade: 'B+', credits: 3 },
    { courseCode: '22PHY101', courseTitle: 'Engineering Physics', grade: 'A', credits: 3 },
  ],
  '2': [
    { courseCode: '22AIE111', courseTitle: 'Data Structures and Algorithms', grade: 'A', credits: 4 },
    { courseCode: '22MAT111', courseTitle: 'Linear Algebra', grade: 'A', credits: 3 },
    { courseCode: '22AIE112', courseTitle: 'Object Oriented Programming', grade: 'B', credits: 3 },
  ]
};

export default function Grades() {
  const [semester, setSemester] = useState('1');

  const grades = semesterData[semester] || [];

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Grades - Semester {semester}
          </h1>

          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-aums-teal min-w-[120px] bg-white"
            >
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
            </select>
          </div>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-3 text-left font-bold text-gray-700">Course Code</th>
                  <th className="p-3 text-left font-bold text-gray-700">Course Title</th>
                  <th className="p-3 text-center font-bold text-gray-700">Credits</th>
                  <th className="p-3 text-center font-bold text-gray-700">Grade</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((g, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-3 font-medium text-aums-teal">{g.courseCode}</td>
                    <td className="p-3 text-gray-800">{g.courseTitle}</td>
                    <td className="p-3 text-center text-gray-600">{g.credits}</td>
                    <td className="p-3 text-center">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-[11px]
                        ${g.grade.startsWith('A') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                        {g.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-end">
            <div className="bg-aums-teal-light p-4 rounded-lg border border-aums-teal/20">
              <p className="text-sm font-bold text-aums-teal uppercase tracking-wider">Semester SGPA</p>
              <p className="text-3xl font-black text-aums-teal-dark">8.75</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
