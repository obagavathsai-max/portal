import React, { useState } from 'react';

const semesters = [
  {
    id: 5,
    name: '5',
    subjects: [
      { code: '23LSE211', name: 'Life Skills for Engineers II', type: 'Continuous Assessment', marks: '85/100' },
      { code: '22AIE301', name: 'Probabilistic Reasoning', type: 'End Semester', marks: '92/100' },
      { code: '22AIE302', name: 'Formal language and Automata', type: 'End Semester', marks: '78/100' },
      { code: '22AIE303', name: 'Database Management Systems', type: 'End Semester', marks: '88/100' },
    ]
  },
  {
    id: 4,
    name: '4',
    subjects: [
      { code: '22AIE211', name: 'Design and Analysis of Algorithms', type: 'End Semester', marks: '90/100' },
      { code: '22AIE212', name: 'Operating Systems', type: 'End Semester', marks: '85/100' },
      { code: '22AIE213', name: 'Machine Learning', type: 'End Semester', marks: '95/100' },
    ]
  }
];

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState<string>('Select');
  const [showTable, setShowTable] = useState(false);
  const [currentSem, setCurrentSem] = useState(semesters[0]);

  const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedSemester(val);
    if (val !== 'Select') {
      const semId = parseInt(val);
      const sem = semesters.find(s => s.id === semId);
      if (sem) {
        setCurrentSem(sem);
        setShowTable(true);
      }
    } else {
      setShowTable(false);
    }
  };

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      <div className="bg-white border border-gray-200 rounded-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            VIEW MARKS
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

          {showTable && (
            <div className="mt-6 overflow-x-auto border border-gray-300 rounded-sm">
              <table className="min-w-full text-[12px] border-collapse">
                <thead>
                  <tr className="bg-white border-b border-gray-300">
                    <th className="px-3 py-2 text-left font-bold border-r border-gray-300">Course Code</th>
                    <th className="px-3 py-2 text-left font-bold border-r border-gray-300">Course Name</th>
                    <th className="px-3 py-2 text-left font-bold border-r border-gray-300">Exam Type</th>
                    <th className="px-3 py-2 text-left font-bold">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSem.subjects.map((subject, i) => (
                    <tr key={subject.code} className="border-b border-gray-300">
                      <td className="px-3 py-2 border-r border-gray-300 font-medium">{subject.code}</td>
                      <td className="px-3 py-2 border-r border-gray-300">{subject.name}</td>
                      <td className="px-3 py-2 border-r border-gray-300">{subject.type}</td>
                      <td className="px-3 py-2">{subject.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
