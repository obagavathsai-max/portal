import React, { useState } from 'react';

const semesters = [
  { id: 5, name: '5' },
  { id: 4, name: '4' },
  { id: 3, name: '3' },
  { id: 2, name: '2' },
  { id: 1, name: '1' },
];

const mockMarks = [
  { code: '22AIE301', name: 'Probabilistic Reasoning', internal: 48, external: 45, total: 93 },
  { code: '22AIE302', name: 'Formal language and Automata', internal: 45, external: 42, total: 87 },
  { code: '22AIE303', name: 'Database Management Systems', internal: 49, external: 47, total: 96 },
  { code: '22AIE304', name: 'Deep Learning', internal: 47, external: 48, total: 95 },
  { code: '22AIE305', name: 'Introduction to Cloud Computing', internal: 44, external: 43, total: 87 },
  { code: '22AIE458', name: 'Mobile Application Development', internal: 46, external: 44, total: 90 },
  { code: '23LSE301', name: 'Life Skills for Engineers III', internal: 50, external: 48, total: 98 },
];

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState<string>('Select');
  const [showTable, setShowTable] = useState(false);

  const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedSemester(val);
    setShowTable(val !== 'Select');
  };

  return (
    <div className="space-y-4" style={{ backgroundColor: '#fff', minHeight: 'calc(100vh - 120px)' }}>
      <div className="bg-white border border-gray-200 rounded-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            STUDENT MARK REPORT
          </h1>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 mb-6 text-[13px]">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Roll No</span>
              <span className="font-semibold text-gray-800">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Name</span>
              <span className="font-semibold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Academic Program & Branch</span>
              <span className="font-semibold text-gray-800 uppercase">B.Tech 2023 AIE</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="relative inline-block border border-gray-300 rounded px-3 py-1.5 min-w-[300px]">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={selectedSemester}
                onChange={handleSemesterChange}
                className="w-full text-[13px] text-gray-700 bg-transparent border-none outline-none cursor-pointer appearance-none"
              >
                <option value="Select">Select</option>
                {semesters.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                ▼
              </div>
            </div>
          </div>

          {showTable ? (
            <div className="mt-6 overflow-x-auto border border-gray-300 rounded-sm">
              <table className="min-w-full text-[12px] border-collapse">
                <thead>
                  <tr className="bg-white border-b border-gray-300">
                    <th className="px-3 py-2 text-left font-bold border-r border-gray-300">Course Code</th>
                    <th className="px-3 py-2 text-left font-bold border-r border-gray-300">Course Name</th>
                    <th className="px-3 py-2 text-center font-bold border-r border-gray-300">Internal</th>
                    <th className="px-3 py-2 text-center font-bold border-r border-gray-300">External</th>
                    <th className="px-3 py-2 text-center font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {mockMarks.map((mark, i) => (
                    <tr key={mark.code} className="border-b border-gray-300">
                      <td className="px-3 py-2 border-r border-gray-300 font-medium">{mark.code}</td>
                      <td className="px-3 py-2 border-r border-gray-300">{mark.name}</td>
                      <td className="px-3 py-2 border-r border-gray-300 text-center">{mark.internal}</td>
                      <td className="px-3 py-2 border-r border-gray-300 text-center">{mark.external}</td>
                      <td className="px-3 py-2 text-center font-semibold">{mark.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-3 bg-gray-50 border-t border-gray-300">
                <p className="text-[11px] text-gray-600 font-semibold italic">NP: Not Published</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-sm text-gray-600 font-semibold">NP: Not Published</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
