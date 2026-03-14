import React, { useState } from 'react';

interface MarkRecord {
  course: string;
  component: string;
  maxMarks: number;
  marksObtained: number;
}

const marksData: Record<string, MarkRecord[]> = {
  '1': [
    { course: 'Foundations of Mathematics', component: 'Periodic Test 1', maxMarks: 20, marksObtained: 18.5 },
    { course: 'Foundations of Mathematics', component: 'Periodic Test 2', maxMarks: 20, marksObtained: 19 },
    { course: 'Introduction to AI', component: 'Assignment', maxMarks: 10, marksObtained: 10 },
  ],
  '5': [
    { course: 'Deep Learning', component: 'Periodic Test 1', maxMarks: 20, marksObtained: 19.5 },
    { course: 'Deep Learning', component: 'Periodic Test 2', maxMarks: 20, marksObtained: 20 },
    { course: 'Natural Language Processing', component: 'Project', maxMarks: 50, marksObtained: 48 },
  ]
};

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState<string>('Select');
  const [showMarks, setShowMarks] = useState(false);

  const handleShowMarks = () => {
    if (selectedSemester !== 'Select') {
      setShowMarks(true);
    }
  };

  const currentMarks = selectedSemester !== 'Select' ? marksData[selectedSemester] || [] : [];

  return (
    <div className="space-y-4" style={{ backgroundColor: 'transparent', minHeight: 'calc(100vh - 120px)' }}>
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase" style={{ color: 'var(--color-aums-teal)' }}>
            VIEW INTERNAL MARKS
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
                    setShowMarks(false);
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
              onClick={handleShowMarks}
              className="px-6 py-2.5 bg-gray-800 text-white text-xs font-bold rounded shadow-sm hover:bg-gray-700 transition-colors uppercase"
            >
              Search
            </button>
          </div>

          {showMarks && (
            <div className="overflow-x-auto animate-in fade-in duration-500">
              <table className="w-full border-collapse border border-gray-200 text-xs">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-aums-teal)', color: 'white' }}>
                    <th className="border border-gray-300 p-2 text-left">Course</th>
                    <th className="border border-gray-300 p-2 text-left">Component</th>
                    <th className="border border-gray-300 p-2 text-center">Max Marks</th>
                    <th className="border border-gray-300 p-2 text-center">Obtained</th>
                  </tr>
                </thead>
                <tbody>
                  {currentMarks.length > 0 ? (
                    currentMarks.map((mark, idx) => (
                      <tr key={idx} className="bg-white">
                        <td className="border border-gray-300 p-2">{mark.course}</td>
                        <td className="border border-gray-300 p-2">{mark.component}</td>
                        <td className="border border-gray-300 p-2 text-center">{mark.maxMarks}</td>
                        <td className="border border-gray-300 p-2 text-center font-bold">{mark.marksObtained}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="border border-gray-300 p-4 text-center text-gray-500 italic">
                        No internal marks data available for Semester {selectedSemester}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
