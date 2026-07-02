import React, { useState } from 'react';
import { ChevronDown, Award, BookOpen, Download } from 'lucide-react';

interface GradeRecord {
  courseCode: string;
  courseTitle: string;
  type: string;
  credits: number;
  grade: string;
}

const gradesData: GradeRecord[] = [
  { courseCode: '23AIE211', courseTitle: 'Operating Systems', type: 'Core', credits: 4, grade: 'A' },
  { courseCode: '23AIE212', courseTitle: 'Database Management', type: 'Core', credits: 4, grade: 'A+' },
  { courseCode: '23AIE213', courseTitle: 'Machine Learning', type: 'Core', credits: 4, grade: 'B+' },
  { courseCode: '23AIE214', courseTitle: 'Computer Networks', type: 'Core', credits: 3, grade: 'A' },
  { courseCode: '23MAT211', courseTitle: 'Linear Algebra', type: 'Math', credits: 4, grade: 'O' },
  { courseCode: '23AIE281', courseTitle: 'OS & DBMS Lab', type: 'Lab', credits: 1, grade: 'A+' },
];

export default function Grades() {
  const [semester, setSemester] = useState('Semester 3');

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4">
        <div>
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Grade Sheet
          </h1>
          <p className="text-[11px] text-gray-500 font-medium">View and download your academic grades</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative group">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] font-medium text-aums-teal">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="appearance-none pl-3 pr-9 py-2 border border-gray-200 rounded text-[13px] font-bold focus:outline-none focus:border-aums-teal bg-white min-w-[140px]"
            >
              <option>Semester 1</option>
              <option>Semester 2</option>
              <option>Semester 3</option>
              <option>Semester 4</option>
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 text-white text-[12px] font-bold rounded shadow-sm hover:brightness-110 transition-all bg-aums-teal">
            <Download size={14} /> PDF
          </button>
        </div>
      </div>

      {/* GPA Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-sm border border-gray-100 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-aums-teal-light flex items-center justify-center">
            <Award className="text-aums-teal" size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Semester GPA</p>
            <p className="text-xl font-bold text-gray-800">8.95</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-sm border border-gray-100 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-aums-orange/10 flex items-center justify-center">
            <BookOpen className="text-aums-orange" size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Cumulative GPA</p>
            <p className="text-xl font-bold text-gray-800">9.12</p>
          </div>
        </div>
      </div>

      {/* Grades Table */}
      <div className="border border-gray-200 rounded-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase">Course Code</th>
              <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase">Course Title</th>
              <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase text-center">Credits</th>
              <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase text-center">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {gradesData.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50/50">
                <td className="px-4 py-3 text-sm font-medium text-aums-teal">{row.courseCode}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{row.courseTitle}</td>
                <td className="px-4 py-3 text-sm text-gray-600 text-center">{row.credits}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-block min-w-[30px] px-2 py-0.5 rounded text-[11px] font-bold text-white
                    ${row.grade.startsWith('A') || row.grade === 'O' ? 'bg-green-500' : 'bg-aums-orange'}
                  `}>
                    {row.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
