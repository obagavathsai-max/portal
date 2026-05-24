import React, { useState } from 'react';

interface Mark {
  component: string;
  maxMarks: number;
  obtainedMarks: number;
  weightage: string;
}

const marksData: Record<string, Record<string, Mark[]>> = {
  '1': {
    'Foundations of Data Analysis': [
      { component: 'Internal Assessment 1', maxMarks: 50, obtainedMarks: 42, weightage: '15%' },
      { component: 'Internal Assessment 2', maxMarks: 50, obtainedMarks: 45, weightage: '15%' },
      { component: 'End Semester', maxMarks: 100, obtainedMarks: 82, weightage: '50%' },
    ],
    'Engineering Physics': [
      { component: 'Internal Assessment 1', maxMarks: 50, obtainedMarks: 38, weightage: '20%' },
      { component: 'End Semester', maxMarks: 100, obtainedMarks: 75, weightage: '50%' },
    ]
  }
};

export default function Marks() {
  const [semester, setSemester] = useState('1');
  const courses = marksData[semester] || {};

  return (
    <div className="space-y-4 min-h-full bg-white">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Marks - Semester {semester}
          </h1>

          <div className="relative">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1.5 text-xs focus:outline-none focus:border-aums-teal min-w-[120px] bg-white"
            >
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
            </select>
          </div>
        </div>

        <div className="p-5">
          {Object.keys(courses).length > 0 ? (
            <div className="space-y-8">
              {Object.entries(courses).map(([courseName, marks], idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="font-bold text-gray-800 border-l-4 border-aums-teal pl-3">{courseName}</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-xs">
                      <thead>
                        <tr className="bg-gray-50 text-gray-600 uppercase">
                          <th className="p-2 border border-gray-200 text-left">Component</th>
                          <th className="p-2 border border-gray-200 text-center">Max Marks</th>
                          <th className="p-2 border border-gray-200 text-center">Obtained</th>
                          <th className="p-2 border border-gray-200 text-center">Weightage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {marks.map((m, mi) => (
                          <tr key={mi}>
                            <td className="p-2 border border-gray-200">{m.component}</td>
                            <td className="p-2 border border-gray-200 text-center">{m.maxMarks}</td>
                            <td className="p-2 border border-gray-200 text-center font-bold text-aums-teal">{m.obtainedMarks}</td>
                            <td className="p-2 border border-gray-200 text-center">{m.weightage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 italic">No marks data available for the selected semester.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
