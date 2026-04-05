import React, { useState } from 'react';

const semesters = [
  {
    id: 5,
    name: '5',
    sgpa: 9.54,
    term: '2025-2026Odd Semester',
    subjects: [
      { code: '23LSE211', name: 'Life Skills for Engineers II', credits: 2, type: 'Regular', grade: 'O' },
      { code: '22AIE301', name: 'Probabilistic Reasoning', credits: 4, type: 'Regular', grade: 'O' },
      { code: '22AIE302', name: 'Formal language and Automata', credits: 3, type: 'Regular', grade: 'A' },
      { code: '22AIE303', name: 'Database Management Systems', credits: 4, type: 'Regular', grade: 'A' },
      { code: '22AIE304', name: 'Deep Learning', credits: 4, type: 'Regular', grade: 'A+' },
      { code: '22AIE305', name: 'Introduction to Cloud Computing', credits: 3, type: 'Regular', grade: 'A+' },
      { code: '22AIE458', name: 'Mobile Application Development', credits: 3, type: 'Regular', grade: 'A+' },
      { code: '23LSE301', name: 'Life Skills for Engineers III', credits: 1, type: 'Regular', grade: 'O' },
    ]
  },
  {
    id: 4,
    name: '4',
    sgpa: 9.42,
    term: '2024-2025Even Semester',
    subjects: [
      { code: '22AIE211', name: 'Design and Analysis of Algorithms', credits: 4, type: 'Regular', grade: 'A' },
      { code: '22AIE212', name: 'Operating Systems', credits: 4, type: 'Regular', grade: 'A' },
      { code: '22AIE213', name: 'Machine Learning', credits: 4, type: 'Regular', grade: 'O' },
      { code: '22MAT211', name: 'Optimization Techniques', credits: 3, type: 'Regular', grade: 'A+' },
      { code: '22AIE214', name: 'Computer Networks', credits: 3, type: 'Regular', grade: 'O' },
      { code: '23LSE211', name: 'Life Skills for Engineers II', credits: 2, type: 'Regular', grade: 'O' },
    ]
  },
  {
    id: 3,
    name: '3',
    sgpa: 9.34,
    term: '2024-2025Odd Semester',
    subjects: [
      { code: '22MAT220', name: 'Mathematics for Computing 3', credits: 4, type: 'Regular', grade: 'O' },
      { code: '22AIE201', name: 'Fundamentals of AI', credits: 3, type: 'Regular', grade: 'A' },
      { code: '22AIE202', name: 'Operating Sytems', credits: 3, type: 'Regular', grade: 'A' },
      { code: '22AIE203', name: 'Data Structures & Algorithms 2', credits: 4, type: 'Regular', grade: 'O' },
      { code: '22AIE204', name: 'Introduction to Computer Networks', credits: 3, type: 'Regular', grade: 'O' },
      { code: '22AIE205', name: 'Introduction to Python', credits: 3, type: 'Regular', grade: 'O' },
      { code: '22BIO201', name: 'Intelligence of Biological Systems - 1', credits: 2, type: 'Regular', grade: 'A+' },
      { code: '19HUM230', name: 'Emotional Intelligence', credits: 2, type: 'Regular', grade: 'O' },
      { code: '22ADM201', name: 'Strategic Lessons from Mahabharata', credits: 2, type: 'Regular', grade: 'O' },
      { code: '23LSE201', name: 'Life Skills for Engineers I', credits: 2, type: 'Regular', grade: 'A+' },
    ]
  },
  {
    id: 2,
    name: '2',
    sgpa: 9.34,
    term: '2023-2024Even Semester',
    subjects: [
      { code: '22MAT111', name: 'Mathematics for Computing 2', credits: 4, type: 'Regular', grade: 'O' },
      { code: '22AIE111', name: 'Data Structures & Algorithms 1', credits: 4, type: 'Regular', grade: 'A' },
      { code: '22AIE112', name: 'Object Oriented Programming', credits: 3, type: 'Regular', grade: 'A' },
      { code: '22PHY111', name: 'Physics for AI', credits: 3, type: 'Regular', grade: 'A+' },
      { code: '22AIE113', name: 'Digital Electronics', credits: 4, type: 'Regular', grade: 'O' },
      { code: '23LSE111', name: 'Life Skills for Engineers I', credits: 2, type: 'Regular', grade: 'O' },
    ]
  },
  {
    id: 1,
    name: '1',
    sgpa: 9.4,
    term: '2023-2024Odd Semester',
    subjects: [
      { code: '22MAT110', name: 'Mathematics for Computing 1', credits: 4, type: 'Regular', grade: 'O' },
      { code: '22PHY106', name: 'Computational Physics', credits: 4, type: 'Regular', grade: 'A' },
      { code: '22AIE101', name: 'Problem Solving & C Programming', credits: 4, type: 'Regular', grade: 'A' },
      { code: '22AIE102', name: 'Elements of Computing Systems 1', credits: 3, type: 'Regular', grade: 'O' },
      { code: '22MAT121', name: 'Discrete Mathematics', credits: 4, type: 'Regular', grade: 'A+' },
      { code: '22ADM101', name: 'Foundations of Indian Heritage', credits: 2, type: 'Regular', grade: 'O' },
      { code: '19ENG111', name: 'Technical Communication', credits: 2, type: 'Regular', grade: 'O' },
      { code: '22AVP103', name: 'Mastery Over Mind', credits: 2, type: 'Regular', grade: 'A+' },
    ]
  }
];

export default function Grades() {
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
    <div className="space-y-4 bg-white min-h-full">
      <div className="bg-white border border-gray-200 rounded-sm">
        <div className="px-4 py-3 border-b border-gray-100">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            STUDENTS PERFORMANCE REPORTS
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
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Current CGPA</span>
              <span className="font-semibold text-gray-800">9.41</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-600 mb-6 italic">
            <span className="font-bold not-italic">NOTE:</span> CGPA value will be shown ONLY AFTER all the courses that the student has registered in the term has been Published from Registrar's office
          </p>

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
                    <th className="px-3 py-2 text-left font-bold border-r border-gray-300">Sem</th>
                    <th className="px-3 py-2 text-left font-bold border-r border-gray-300">Course Code</th>
                    <th className="px-3 py-2 text-left font-bold border-r border-gray-300">Course Name</th>
                    <th className="px-3 py-2 text-left font-bold border-r border-gray-300">Academic Term Period</th>
                    <th className="px-3 py-2 text-left font-bold border-r border-gray-300">Type</th>
                    <th className="px-3 py-2 text-left font-bold">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSem.subjects.map((subject, i) => (
                    <tr key={subject.code} className="border-b border-gray-300">
                      <td className="px-3 py-2 border-r border-gray-300">{currentSem.name}</td>
                      <td className="px-3 py-2 border-r border-gray-300 font-medium">{subject.code}</td>
                      <td className="px-3 py-2 border-r border-gray-300">{subject.name}</td>
                      <td className="px-3 py-2 border-r border-gray-300">{currentSem.term}</td>
                      <td className="px-3 py-2 border-r border-gray-300">{subject.type}</td>
                      <td className="px-3 py-2">{subject.grade}</td>
                    </tr>
                  ))}
                  <tr className="bg-aums-bg-main font-bold">
                    <td colSpan={5} className="px-3 py-2 text-right border-r border-gray-300 uppercase">SGPA</td>
                    <td className="px-3 py-2">{currentSem.sgpa}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
