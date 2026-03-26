import React, { useState } from 'react';
import { ChevronDown, Printer, FileDown } from 'lucide-react';

const semesterGrades = {
  '5': [
    { code: '19AIE301', course: 'Formal Languages and Automata Theory', credits: 4, grade: 'A+' },
    { code: '19AIE302', course: 'Machine Learning', credits: 4, grade: 'O' },
    { code: '19AIE303', course: 'Computer Networks', credits: 3, grade: 'A' },
    { code: '19AIE304', course: 'Operating Systems', credits: 3, grade: 'A+' },
    { code: '19AIE305', course: 'Artificial Intelligence', credits: 4, grade: 'O' },
    { code: '19AVP211', course: 'Life Skills III', credits: 2, grade: 'A' },
  ],
  '4': [
    { code: '19AIE211', course: 'Introduction to Deep Learning', credits: 4, grade: 'A' },
    { code: '19AIE212', course: 'Design and Analysis of Algorithms', credits: 4, grade: 'A+' },
    { code: '19AIE213', course: 'Database Management Systems', credits: 3, grade: 'O' },
    { code: '19AIE214', course: 'Embedded Systems', credits: 3, grade: 'A' },
    { code: '19AIE215', course: 'Optimization Techniques', credits: 4, grade: 'A+' },
    { code: '19AVP201', course: 'Life Skills II', credits: 2, grade: 'O' },
  ],
  '3': [
    { code: '19AIE201', course: 'Introduction to Probability and Statistics', credits: 4, grade: 'O' },
    { code: '19AIE202', course: 'Data Structures and Algorithms', credits: 4, grade: 'A+' },
    { code: '19AIE203', course: 'Object Oriented Programming', credits: 3, grade: 'A' },
    { code: '19AIE204', course: 'Digital Electronics', credits: 3, grade: 'A+' },
    { code: '19AIE205', course: 'Python for Machine Learning', credits: 4, grade: 'O' },
    { code: '19AVP111', course: 'Life Skills I', credits: 2, grade: 'A' },
  ],
  '2': [
    { code: '19MAT112', course: 'Linear Algebra', credits: 4, grade: 'A+' },
    { code: '19AIE111', course: 'Introduction to Computer Science', credits: 4, grade: 'O' },
    { code: '19AIE112', course: 'Problem Solving and Algorithmic Thinking', credits: 4, grade: 'A' },
    { code: '19AIE113', course: 'Computer Organization and Architecture', credits: 3, grade: 'A+' },
    { code: '19AIE114', course: 'Digital Signal Processing', credits: 3, grade: 'O' },
    { code: '19ENG111', course: 'Technical Communication', credits: 2, grade: 'A' },
  ],
  '1': [
    { code: '19MAT101', course: 'Single Variable Calculus', credits: 4, grade: 'O' },
    { code: '19AIE101', course: 'Introduction to AI and Data Science', credits: 2, grade: 'A+' },
    { code: '19AIE102', course: 'Computational Problem Solving', credits: 4, grade: 'A' },
    { code: '19AIE103', course: 'Discrete Mathematics', credits: 4, grade: 'O' },
    { code: '19AIE104', course: 'Introduction to Electrical Engineering', credits: 3, grade: 'A' },
    { code: '19CUL101', course: 'Cultural Education I', credits: 2, grade: 'O' },
  ]
};

const gpaData = {
  '5': '9.54',
  '4': '9.38',
  '3': '9.45',
  '2': '9.28',
  '1': '9.40'
};

export default function Grades() {
  const [semester, setSemester] = useState('5');
  const grades = semesterGrades[semester as keyof typeof semesterGrades] || [];

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-main">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-teal-50">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Semester Grades
          </h1>
        </div>

        <div className="p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="relative pt-2">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded px-4 py-1.5 pr-10 text-sm focus:outline-none focus:border-aums-teal"
              >
                <option value="5">Semester 5</option>
                <option value="4">Semester 4</option>
                <option value="3">Semester 3</option>
                <option value="2">Semester 2</option>
                <option value="1">Semester 1</option>
              </select>
              <ChevronDown size={14} className="absolute right-3 top-[calc(50%+4px)] -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 font-bold uppercase">Semester GPA</span>
              <span className="text-lg font-bold text-aums-teal">{gpaData[semester as keyof typeof gpaData]}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded text-xs font-bold text-gray-700 hover:bg-gray-50">
              <Printer size={14} /> Print
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded text-xs font-bold text-gray-700 hover:bg-gray-50">
              <FileDown size={14} /> Download
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Course Code</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Course Name</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Credits</th>
                <th className="px-6 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {grades.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-xs font-bold text-gray-700">{row.code}</td>
                  <td className="px-6 py-4 text-xs text-gray-700">{row.course}</td>
                  <td className="px-6 py-4 text-xs text-gray-700 text-center font-medium">{row.credits}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${
                      row.grade === 'O' ? 'bg-green-100 text-green-700' :
                      row.grade === 'A+' ? 'bg-blue-100 text-blue-700' :
                      'bg-teal-100 text-aums-teal'
                    }`}>
                      {row.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
