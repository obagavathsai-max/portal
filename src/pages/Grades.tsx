import React from 'react';

const academicData = [
  { sem: '1st Semester', sgpa: '9.4', cgpa: '9.4' },
  { sem: '2nd Semester', sgpa: '9.28', cgpa: '9.34' },
  { sem: '3rd Semester', sgpa: '9.3', cgpa: '9.32' },
  { sem: '4th Semester', sgpa: '9.5', cgpa: '9.37' },
  { sem: '5th Semester', sgpa: '9.54', cgpa: '9.41' },
];

export default function Grades() {
  return (
    <div className="space-y-4 bg-white min-h-full">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Semester Wise GPA
          </h1>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border border-gray-200 p-3 text-left font-bold">Semester</th>
                  <th className="border border-gray-200 p-3 text-center font-bold">SGPA</th>
                  <th className="border border-gray-200 p-3 text-center font-bold">CGPA</th>
                  <th className="border border-gray-200 p-3 text-center font-bold">Result</th>
                </tr>
              </thead>
              <tbody>
                {academicData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-200 p-3 font-semibold text-gray-800">{row.sem}</td>
                    <td className="border border-gray-200 p-3 text-center font-bold text-aums-teal">{row.sgpa}</td>
                    <td className="border border-gray-200 p-3 text-center font-bold text-aums-orange">{row.cgpa}</td>
                    <td className="border border-gray-200 p-3 text-center">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-sm">
                        Passed
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
