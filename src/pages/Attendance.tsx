import React, { useState } from 'react';

export default function Attendance() {
  const [selectedSemester, setSelectedSemester] = useState<string>('Select');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [attendanceType, setAttendanceType] = useState<string>('Regular');

  return (
    <div className="space-y-4" style={{ backgroundColor: '#f0f0f0', minHeight: 'calc(100vh - 120px)' }}>
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase" style={{ color: '#26a69a' }}>
            COMPREHENSIVE ATTENDANCE REPORT
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <div className="border border-gray-300 rounded-sm">
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

            <div>
              <div className="border border-gray-300 rounded-sm">
                <div className="px-3 pt-1">
                  <label className="text-xs text-gray-500">Course</label>
                </div>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer"
                >
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div>
              <div className="border border-gray-300 rounded-sm">
                <div className="px-3 pt-1">
                  <label className="text-xs text-gray-500">Attendance Type</label>
                </div>
                <select
                  value={attendanceType}
                  onChange={(e) => setAttendanceType(e.target.value)}
                  className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer"
                >
                  <option value="Regular">Regular</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <button
              className="px-5 py-2 text-white text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#26a69a' }}
            >
              Attendance Summary
            </button>
            <button
              className="px-5 py-2 text-white text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#26a69a' }}
            >
              Show Course Wise Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
