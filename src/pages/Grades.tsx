import React, { useState } from 'react';

const semesterData: Record<string, { gpa: string; subjects: { code: string; name: string; credit: number; grade: string }[] }> = {
  '1': {
    gpa: '9.4',
    subjects: [
      { code: '22AIE101', name: 'Problem Solving and Algorithmic Thinking', credit: 4, grade: 'O' },
      { code: '22AIE102', name: 'Object Oriented Programming', credit: 4, grade: 'A+' },
      { code: '22MAT101', name: 'Single Variable Calculus', credit: 3, grade: 'A' },
      { code: '22PHY101', name: 'Engineering Physics', credit: 3, grade: 'A+' },
    ]
  },
  '2': {
    gpa: '9.25',
    subjects: [
      { code: '22AIE111', name: 'Data Structures and Algorithms', credit: 4, grade: 'A+' },
      { code: '22AIE112', name: 'Introduction to AI', credit: 3, grade: 'O' },
      { code: '22MAT111', name: 'Multivariable Calculus', credit: 3, grade: 'A' },
      { code: '22ENG111', name: 'Communicative English', credit: 2, grade: 'A+' },
    ]
  },
  '3': {
    gpa: '9.38',
    subjects: [
      { code: '22AIE201', name: 'Machine Learning', credit: 4, grade: 'A+' },
      { code: '22AIE202', name: 'Operating Systems', credit: 3, grade: 'A' },
      { code: '22MAT201', name: 'Linear Algebra', credit: 3, grade: 'O' },
      { code: '22AIE203', name: 'Database Management Systems', credit: 3, grade: 'A+' },
    ]
  },
  '4': {
    gpa: '9.45',
    subjects: [
      { code: '22AIE211', name: 'Deep Learning', credit: 4, grade: 'O' },
      { code: '22AIE212', name: 'Design and Analysis of Algorithms', credit: 3, grade: 'A+' },
      { code: '22MAT211', name: 'Probability and Statistics', credit: 3, grade: 'A' },
      { code: '22AIE213', name: 'Computer Networks', credit: 3, grade: 'A+' },
    ]
  },
  '5': {
    gpa: '9.54',
    subjects: [
      { code: '22AIE301', name: 'Natural Language Processing', credit: 4, grade: 'O' },
      { code: '22AIE302', name: 'Big Data Analytics', credit: 3, grade: 'A+' },
      { code: '22MAT301', name: 'Optimization Techniques', credit: 3, grade: 'O' },
      { code: '22AIE303', name: 'Distributed Systems', credit: 3, grade: 'A' },
    ]
  }
};

export default function Grades() {
  const [selectedSemester, setSelectedSemester] = useState('5');
  const currentData = semesterData[selectedSemester];

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Semester Wise Grade Report
          </h1>
        </div>

        <div className="p-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative w-48">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-aums-teal appearance-none"
              >
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
              </select>
              <div className="absolute right-3 top-3 pointer-events-none">
                <div className="border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400"></div>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-[10px] text-gray-500 uppercase font-bold">SGPA</p>
                <p className="text-xl font-black text-gray-800">{currentData.gpa}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-gray-500 uppercase font-bold">CGPA</p>
                <p className="text-xl font-black text-gray-800">9.41</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 text-[11px] text-gray-500 uppercase font-bold tracking-wider">
                  <th className="border-b border-gray-200 px-4 py-3 text-left">Course Code</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-left">Course Title</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-center">Credits</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {currentData.subjects.map((sub, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">{sub.code}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-gray-600">{sub.name}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-center text-gray-600">{sub.credit}</td>
                    <td className="border-b border-gray-100 px-4 py-3 text-center font-bold">
                      <span className={`px-2 py-1 rounded text-xs ${sub.grade === 'O' ? 'text-green-600 bg-green-50' : 'text-blue-600 bg-blue-50'}`}>
                        {sub.grade}
                      </span>
                    </td>
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
