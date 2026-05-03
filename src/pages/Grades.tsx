import React from 'react';

const gradeData = [
  { semester: '1', sgpa: '9.4', result: 'Pass' },
  { semester: '2', sgpa: '9.25', result: 'Pass' },
  { semester: '3', sgpa: '9.38', result: 'Pass' },
  { semester: '4', sgpa: '9.48', result: 'Pass' },
  { semester: '5', sgpa: '9.54', result: 'Pass' },
];

export default function Grades() {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 bg-aums-teal-light">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            Semester Wise Grades
          </h1>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600">
                  <th className="py-3 px-4 text-left font-semibold">Semester</th>
                  <th className="py-3 px-4 text-left font-semibold">SGPA</th>
                  <th className="py-3 px-4 text-left font-semibold">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {gradeData.map((row) => (
                  <tr key={row.semester} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 text-gray-700">Semester {row.semester}</td>
                    <td className="py-3 px-4 font-bold text-aums-teal">{row.sgpa}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">
                        {row.result}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-aums-teal-light font-bold">
                  <td className="py-3 px-4 text-aums-teal">Current CGPA</td>
                  <td className="py-3 px-4 text-aums-teal">9.41</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
