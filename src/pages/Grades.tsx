import React, { useState } from 'react';

const semesters = [
  {
    id: 4,
    name: 'Semester 4',
    sgpa: 8.8,
    credits: 22,
    subjects: [
      { code: 'CSE211', name: 'Design and Analysis of Algorithms', credits: 4, grade: 'A' },
      { code: 'CSE212', name: 'Operating Systems', credits: 4, grade: 'A+' },
      { code: 'CSE213', name: 'Database Management Systems', credits: 4, grade: 'B+' },
      { code: 'MAT211', name: 'Linear Algebra', credits: 3, grade: 'A' },
      { code: 'ENG211', name: 'Technical Writing', credits: 2, grade: 'O' },
      { code: 'CSE281', name: 'Algorithms Lab', credits: 1, grade: 'O' },
      { code: 'CSE282', name: 'OS Lab', credits: 1, grade: 'A+' },
      { code: 'CSE283', name: 'DBMS Lab', credits: 1, grade: 'A' },
    ]
  },
  {
    id: 3,
    name: 'Semester 3',
    sgpa: 8.1,
    credits: 21,
    subjects: [
      { code: 'CSE201', name: 'Data Structures', credits: 4, grade: 'B+' },
      { code: 'CSE202', name: 'Computer Organization', credits: 4, grade: 'A' },
      { code: 'CSE203', name: 'Object Oriented Programming', credits: 4, grade: 'B' },
      { code: 'MAT201', name: 'Discrete Mathematics', credits: 4, grade: 'A' },
      { code: 'CSE284', name: 'Data Structures Lab', credits: 1, grade: 'A+' },
      { code: 'CSE285', name: 'OOP Lab', credits: 1, grade: 'A' },
      { code: 'AVP201', name: 'Amrita Values Program', credits: 1, grade: 'O' },
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
    <div className="space-y-4">
      {/* Page Title */}
      <div className="bg-white border border-gray-200 rounded shadow-sm p-6">
        <h1 className="text-base font-bold mb-6" style={{ color: '#26a69a' }}>
          STUDENTS PERFORMANCE REPORTS
        </h1>

        {/* Student Info Grid */}
        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">Roll No</span>
          </div>
          <div>
            <span className="font-medium text-gray-800">AV.SC.U4AIE23132</span>
          </div>
          <div>
            <span className="text-gray-500">Name</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          <div>
            <span className="font-medium text-gray-800">ORUGANTI BAGAVATH SAI</span>
          </div>
          <div>
            <span className="text-gray-500">Academic Program &amp; Branch</span>
          </div>
          <div>
            <span className="font-medium text-gray-800">B.Tech 2023 AIE</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">Current CGPA</span>
          </div>
          <div>
            <span className="font-medium text-gray-800">8.42</span>
          </div>
          <div></div>
        </div>

        {/* NOTE */}
        <p className="text-xs text-gray-600 mb-6">
          <span className="font-semibold">NOTE:</span> CGPA value will be shown ONLY AFTER all the courses that the student has registered in the term has been Published from Registrar's office
        </p>

        {/* Semester Selector */}
        <div className="border border-gray-300 rounded inline-block" style={{ minWidth: '260px' }}>
          <div className="px-2 pt-1">
            <label className="text-xs text-gray-500">Semester</label>
          </div>
          <select
            value={selectedSemester}
            onChange={handleSemesterChange}
            className="w-full px-2 pb-2 pr-8 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer"
          >
            <option value="Select">Select</option>
            {semesters.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Table */}
      {showTable && (
        <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between" style={{ backgroundColor: '#e0f2f1' }}>
            <h2 className="font-bold text-sm text-gray-700">
              {currentSem.name} — SGPA: <span style={{ color: '#f57c00' }}>{currentSem.sgpa}</span> | Credits: {currentSem.credits}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead>
                <tr style={{ backgroundColor: '#f5f5f5' }}>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Course Code</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Course Name</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Credits</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {currentSem.subjects.map((subject, i) => (
                  <tr key={subject.code} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{subject.code}</td>
                    <td className="px-4 py-3 text-gray-700">{subject.name}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{subject.credits}</td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className="inline-block px-2 py-0.5 rounded text-xs font-bold"
                        style={{
                          backgroundColor: subject.grade === 'O' ? '#e8f5e9' : subject.grade.startsWith('A') ? '#e3f2fd' : '#fff3e0',
                          color: subject.grade === 'O' ? '#2e7d32' : subject.grade.startsWith('A') ? '#1565c0' : '#e65100'
                        }}
                      >
                        {subject.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
