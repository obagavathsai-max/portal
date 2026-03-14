import React, { useState } from 'react';

interface GradeRecord {
  courseCode: string;
  courseTitle: string;
  credits: number;
  grade: string;
}

const semesterData: Record<string, GradeRecord[]> = {
  '1': [
    { courseCode: '22ADM101', courseTitle: 'Foundations of Mathematics', credits: 4, grade: 'A' },
    { courseCode: '22AIE101', courseTitle: 'Introduction to AI', credits: 3, grade: 'O' },
    { courseCode: '22AIE102', courseTitle: 'Computational Thinking', credits: 4, grade: 'A' },
    { courseCode: '22ENG101', courseTitle: 'Communicative English', credits: 2, grade: 'O' },
    { courseCode: '22PHY101', courseTitle: 'Engineering Physics', credits: 3, grade: 'A' },
  ],
  '2': [
    { courseCode: '22ADM111', courseTitle: 'Linear Algebra', credits: 4, grade: 'O' },
    { courseCode: '22AIE111', courseTitle: 'Data Structures', credits: 4, grade: 'A' },
    { courseCode: '22AIE112', courseTitle: 'Object Oriented Programming', credits: 3, grade: 'A' },
    { courseCode: '22MAT111', courseTitle: 'Calculus', credits: 4, grade: 'O' },
  ],
  '3': [
    { courseCode: '22ADM201', courseTitle: 'Probability and Statistics', credits: 4, grade: 'A' },
    { courseCode: '22AIE201', courseTitle: 'Design and Analysis of Algorithms', credits: 4, grade: 'O' },
    { courseCode: '22AIE202', courseTitle: 'Operating Systems', credits: 3, grade: 'A' },
    { courseCode: '22AIE203', courseTitle: 'Database Management Systems', credits: 3, grade: 'O' },
  ],
  '4': [
    { courseCode: '22ADM211', courseTitle: 'Optimization Techniques', credits: 4, grade: 'O' },
    { courseCode: '22AIE211', courseTitle: 'Machine Learning', credits: 4, grade: 'A' },
    { courseCode: '22AIE212', courseTitle: 'Computer Networks', credits: 3, grade: 'A' },
    { courseCode: '22AIE213', courseTitle: 'Software Engineering', credits: 3, grade: 'O' },
  ],
  '5': [
    { courseCode: '22AIE301', courseTitle: 'Deep Learning', credits: 4, grade: 'O' },
    { courseCode: '22AIE302', courseTitle: 'Natural Language Processing', credits: 3, grade: 'A' },
    { courseCode: '22AIE303', courseTitle: 'Computer Vision', credits: 3, grade: 'A' },
    { courseCode: '22AIE304', courseTitle: 'Big Data Analytics', credits: 3, grade: 'O' },
  ],
};

const gpaData: Record<string, string> = {
  '1': '9.40',
  '2': '9.35',
  '3': '9.42',
  '4': '9.38',
  '5': '9.54',
};

export default function Grades() {
  const [selectedSemester, setSelectedSemester] = useState<string>('Select');
  const [showGrades, setShowGrades] = useState(false);

  const handleShowGrades = () => {
    if (selectedSemester !== 'Select') {
      setShowGrades(true);
    }
  };

  const currentGrades = selectedSemester !== 'Select' ? semesterData[selectedSemester] || [] : [];
  const currentGPA = selectedSemester !== 'Select' ? gpaData[selectedSemester] || '0.00' : '0.00';

  return (
    <div className="space-y-4" style={{ backgroundColor: 'transparent', minHeight: 'calc(100vh - 120px)' }}>
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase" style={{ color: 'var(--color-aums-teal)' }}>
            VIEW GRADES
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-6 text-sm">
            <div className="flex">
              <span className="text-gray-700 w-32">Roll No</span>
              <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
            </div>
            <div></div>
            <div className="flex">
              <span className="text-gray-700 w-32">Name</span>
            </div>

            <div className="flex">
              <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
            <div className="flex">
              <span className="text-gray-700 w-48">Academic Program & Branch</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-gray-900 uppercase">B.Tech 2023 AIE</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-end gap-4 mb-8">
            <div className="w-full md:w-64 relative">
              <div className="border border-gray-300 rounded px-3 pt-3 pb-1">
                <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-[var(--color-aums-teal)] font-medium">Semester</label>
                <select
                  value={selectedSemester}
                  onChange={(e) => {
                    setSelectedSemester(e.target.value);
                    setShowGrades(false);
                  }}
                  className="w-full bg-transparent border-none outline-none text-sm text-gray-700 cursor-pointer"
                >
                  <option value="Select">Select</option>
                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleShowGrades}
              className="px-6 py-2.5 bg-gray-800 text-white text-xs font-bold rounded shadow-sm hover:bg-gray-700 transition-colors uppercase"
            >
              Search
            </button>
          </div>

          {showGrades && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-xs">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--color-aums-teal)', color: 'white' }}>
                      <th className="border border-gray-300 p-2 text-left">Course Code</th>
                      <th className="border border-gray-300 p-2 text-left">Course Title</th>
                      <th className="border border-gray-300 p-2 text-center">Credits</th>
                      <th className="border border-gray-300 p-2 text-center">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentGrades.map((grade, idx) => (
                      <tr key={idx} className="bg-white">
                        <td className="border border-gray-300 p-2">{grade.courseCode}</td>
                        <td className="border border-gray-300 p-2">{grade.courseTitle}</td>
                        <td className="border border-gray-300 p-2 text-center">{grade.credits}</td>
                        <td className="border border-gray-300 p-2 text-center font-bold">{grade.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end">
                <div className="bg-gray-50 border border-gray-200 rounded p-4 flex gap-8">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Semester GPA</p>
                    <p className="text-2xl font-black text-gray-800">{currentGPA}</p>
                  </div>
                  <div className="border-l border-gray-200"></div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Cumulative GPA</p>
                    <p className="text-2xl font-black" style={{ color: 'var(--color-aums-teal)' }}>9.41</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
