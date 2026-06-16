import React, { useState } from 'react';

const gradeData = [
  { course: '22AIE311 Software Engineering', credits: 4, grade: 'A', status: 'Passed' },
  { course: '22AIE312 Big Data Analytics', credits: 3, grade: 'B+', status: 'Passed' },
  { course: '22AIE313 Computer Vision', credits: 4, grade: 'A-', status: 'Passed' },
  { course: '22AIE314 Computer Security', credits: 3, grade: 'B', status: 'Passed' },
  { course: '22AIE315 NLP', credits: 3, grade: 'A', status: 'Passed' },
  { course: '22AIE457 Full Stack Dev', credits: 4, grade: 'O', status: 'Passed' },
];

export default function Grades() {
  const [selectedSemester, setSelectedSemester] = useState('6');

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Grade Report
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Roll No</label>
              <div className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-1">AV.SC.U4AIE23132</div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Name</label>
              <div className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-1 uppercase">ORUGANTI BAGAVATH SAI</div>
            </div>
            <div className="relative">
              <div className="border border-gray-300 rounded-sm p-3 relative mt-2">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
                <select
                  value={selectedSemester}
                  onChange={(e) => setSelectedSemester(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none cursor-pointer"
                >
                  {[1,2,3,4,5,6].map(s => <option key={s} value={s}>Semester {s}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-aums-bg-main text-gray-700">
                  <th className="border border-gray-200 p-3 text-left">Course</th>
                  <th className="border border-gray-200 p-3 text-center">Credits</th>
                  <th className="border border-gray-200 p-3 text-center">Grade</th>
                  <th className="border border-gray-200 p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {gradeData.map((row, i) => (
                  <tr key={i}>
                    <td className="border border-gray-200 p-3">{row.course}</td>
                    <td className="border border-gray-200 p-3 text-center">{row.credits}</td>
                    <td className="border border-gray-200 p-3 text-center font-bold text-aums-teal">{row.grade}</td>
                    <td className="border border-gray-200 p-3 text-center">
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-aums-bg-alt font-bold">
                  <td className="border border-gray-200 p-3 text-right">SGPA:</td>
                  <td colSpan={3} className="border border-gray-200 p-3 text-aums-teal">8.62</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
