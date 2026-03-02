import React, { useState } from 'react';

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState<string>('Select');

  return (
    <div className="space-y-4" style={{ backgroundColor: '#f0f0f0', minHeight: 'calc(100vh - 120px)' }}>
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase" style={{ color: '#17a2b8' }}>
            STUDENT MARK REPORT
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
              <span className="font-semibold text-gray-900">ORUGANTI BAGAVATH SAI</span>
            </div>
            <div className="flex">
              <span className="text-gray-700 w-48">Academic Program & Branch</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-gray-900">B.Tech2023 AIE</span>
            </div>
          </div>

          <div className="mb-4">
            <div className="inline-flex items-baseline border border-gray-300 rounded-sm" style={{ minWidth: '260px' }}>
              <div className="px-3 pt-1">
                <label className="text-xs text-gray-500">Semester</label>
              </div>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer"
              >
                <option value="Select">Select</option>
              </select>
            </div>
          </div>

          {selectedSemester === 'Select' && (
            <div className="text-center py-8">
              <p className="text-sm text-gray-600 font-semibold">NP: Not Published</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
