import React, { useState } from 'react';

const semesters = ['1', '2', '3', '4', '5', '6'];

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState('6');

  return (
    <div className="space-y-4 bg-white min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Internal Marks
          </h1>
        </div>

        <div className="p-5">
          <div className="mb-6 max-w-xs">
            <div className="relative">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-aums-teal"
              >
                {semesters.map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 p-3 text-left font-semibold text-gray-700">Course Code</th>
                  <th className="border border-gray-200 p-3 text-left font-semibold text-gray-700">Course Name</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold text-gray-700">Component</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold text-gray-700">Marks</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold text-gray-700">Max Marks</th>
                </tr>
              </thead>
              <tbody>
                {selectedSemester === '6' ? (
                  <tr>
                    <td colSpan={5} className="border border-gray-200 p-8 text-center text-gray-500 italic">
                      Internal marks for Semester 6 are being updated by the faculty.
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td className="border border-gray-200 p-3">22AIE211</td>
                    <td className="border border-gray-200 p-3">Data Structures and Algorithms</td>
                    <td className="border border-gray-200 p-3 text-center">Periodical 1</td>
                    <td className="border border-gray-200 p-3 text-center">14.5</td>
                    <td className="border border-gray-200 p-3 text-center">15</td>
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
