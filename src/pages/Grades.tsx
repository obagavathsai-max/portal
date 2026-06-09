import React, { useState } from 'react';

const semesters = ['1', '2', '3', '4', '5', '6', '7', '8'];

const gradesData: Record<string, any[]> = {
  '6': [
    { code: '22AIE311', title: 'Software Engineering (Project-Based)', credits: 3, grade: 'A' },
    { code: '22AIE312', title: 'Big Data Analytics', credits: 4, grade: 'A+' },
    { code: '22AIE313', title: 'Computer Vision and Image Processing', credits: 3, grade: 'B+' },
    { code: '22AIE314', title: 'Computer Security', credits: 3, grade: 'A' },
    { code: '22AIE315', title: 'Natural Language Processing', credits: 3, grade: 'O' },
    { code: '22AIE457', title: 'Full Stack Development', credits: 3, grade: 'A' },
    { code: '23LSE311', title: 'Life Skills for Engineers IV', credits: 2, grade: 'A+' },
  ]
};

export default function Grades() {
  const [selectedSemester, setSelectedSemester] = useState('6');

  const data = gradesData[selectedSemester] || [];

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            GRADES / SGPA / CGPA
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
                  <th className="border border-gray-300 p-2 font-bold text-center">Credits</th>
                  <th className="border border-gray-300 p-2 font-bold text-center">Grade</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((row, idx) => (
                    <tr key={idx} className="bg-white">
                      <td className="border border-gray-300 p-2">{row.code}</td>
                      <td className="border border-gray-300 p-2">{row.title}</td>
                      <td className="border border-gray-300 p-2 text-center">{row.credits}</td>
                      <td className="border border-gray-300 p-2 text-center font-bold text-aums-teal">{row.grade}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="border border-gray-300 p-4 text-center text-gray-500 italic">
                      No data available for Semester {selectedSemester}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {data.length > 0 && (
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase">SGPA</p>
                  <p className="text-xl font-bold text-aums-teal">8.92</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase">CGPA</p>
                  <p className="text-xl font-bold text-aums-teal">8.75</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase">Result</p>
                  <p className="text-xl font-bold text-green-600">PASS</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
