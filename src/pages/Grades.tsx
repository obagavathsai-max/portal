import React, { useState } from 'react';

const semesters = ['1', '2', '3', '4', '5'];

const gradesData: Record<string, { subject: string; grade: string; credits: number }[]> = {
  '1': [
    { subject: 'Mathematics I', grade: 'A+', credits: 4 },
    { subject: 'Physics', grade: 'O', credits: 3 },
    { subject: 'Introduction to AI', grade: 'A', credits: 3 },
    { subject: 'Programming in C', grade: 'O', credits: 4 },
  ],
  '2': [
    { subject: 'Mathematics II', grade: 'A', credits: 4 },
    { subject: 'Chemistry', grade: 'O', credits: 3 },
    { subject: 'Data Structures', grade: 'A+', credits: 4 },
    { subject: 'Python Programming', grade: 'O', credits: 3 },
  ],
  '3': [
    { subject: 'Discrete Mathematics', grade: 'O', credits: 4 },
    { subject: 'Algorithms', grade: 'A', credits: 4 },
    { subject: 'Database Systems', grade: 'A+', credits: 3 },
    { subject: 'Machine Learning', grade: 'O', credits: 4 },
  ],
  '4': [
    { subject: 'Probability & Stats', grade: 'A+', credits: 4 },
    { subject: 'Operating Systems', grade: 'A', credits: 3 },
    { subject: 'Neural Networks', grade: 'O', credits: 4 },
    { subject: 'Computer Networks', grade: 'A+', credits: 3 },
  ],
  '5': [
    { subject: 'Optimization Techniques', grade: 'O', credits: 3 },
    { subject: 'Deep Learning', grade: 'A+', credits: 4 },
    { subject: 'Cloud Computing', grade: 'A', credits: 3 },
    { subject: 'Big Data', grade: 'O', credits: 4 },
  ],
};

const sgpaData: Record<string, string> = {
  '1': '9.4',
  '2': '9.28',
  '3': '9.5',
  '4': '9.33',
  '5': '9.54',
};

export default function Grades() {
  const [selectedSemester, setSelectedSemester] = useState('5');

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Semester Grades
          </h1>
          <div className="relative w-32">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-aums-teal appearance-none"
            >
              {semesters.map(s => (
                <option key={s} value={s}>Semester {s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3 border-b">Subject</th>
                  <th className="px-6 py-3 border-b text-center">Credits</th>
                  <th className="px-6 py-3 border-b text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {gradesData[selectedSemester].map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-800">{item.subject}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{item.credits}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`inline-block px-2 py-1 rounded font-bold text-xs ${item.grade === 'O' ? 'bg-aums-teal/10 text-aums-teal' : 'bg-aums-orange/10 text-aums-orange'}`}>
                        {item.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-500">Semester SGPA</p>
              <p className="text-3xl font-bold text-aums-teal">{sgpaData[selectedSemester]}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Overall CGPA</p>
              <p className="text-xl font-bold text-aums-orange">9.41</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
