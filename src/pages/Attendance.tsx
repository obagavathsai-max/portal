import React, { useState } from 'react';

interface AttendanceRecord {
  slNo: number;
  className: string;
  course: string;
  faculty: string;
  total: number;
  present: number;
  dutyLeave: number;
  absent: number;
  percentage: string;
  medical: number;
}

const semester6Data: AttendanceRecord[] = [
  {
    slNo: 1,
    className: 'B.Tech..2023.R.AIE.16.22AIE311',
    course: '22AIE311 Software Engineering (Project-Based)',
    faculty: 'Parvathaneni Naga Srinivasu',
    total: 40,
    present: 16,
    dutyLeave: 0,
    absent: 24,
    percentage: '40',
    medical: 0
  },
  {
    slNo: 2,
    className: 'B.Tech..2023.R.AIE.16.22AIE312',
    course: '22AIE312 Big Data Analytics',
    faculty: 'V Lakshmi Chetana',
    total: 45,
    present: 25,
    dutyLeave: 0,
    absent: 20,
    percentage: '55.56',
    medical: 0
  },
  {
    slNo: 3,
    className: 'B.Tech..2023.R.AIE.16.22AIE313',
    course: '22AIE313 Computer Vision and Image Processing',
    faculty: 'RAVI SANKAR PUPPALA',
    total: 55,
    present: 40,
    dutyLeave: 0,
    absent: 15,
    percentage: '72.73',
    medical: 0
  },
  {
    slNo: 4,
    className: 'B.Tech..2023.R.AIE.16.22AIE314',
    course: '22AIE314 Computer Security',
    faculty: 'Venkata Ramana Gupta Nallagattla',
    total: 56,
    present: 23,
    dutyLeave: 0,
    absent: 33,
    percentage: '41.07',
    medical: 0
  },
  {
    slNo: 5,
    className: 'B.Tech..2023.R.AIE.16.22AIE315',
    course: '22AIE315 Natural Language Processing',
    faculty: 'korrapati sindhu',
    total: 68,
    present: 27,
    dutyLeave: 0,
    absent: 41,
    percentage: '39.71',
    medical: 0
  },
  {
    slNo: 6,
    className: 'B.Tech..2023.R.AIE.16.22AIE457',
    course: '22AIE457 Full Stack Development',
    faculty: 'Budati Jaya Lakshmi Narayana',
    total: 51,
    present: 23,
    dutyLeave: 0,
    absent: 28,
    percentage: '45.1',
    medical: 0
  },
  {
    slNo: 7,
    className: 'B.Tech..2023.R.AIE.16.23LSE311',
    course: '23LSE311 Life Skills for Engineers IV',
    faculty: 'Swati K Karthikeyan S Kanchustambam Satya Savithri',
    total: 15,
    present: 6,
    dutyLeave: 0,
    absent: 9,
    percentage: '40',
    medical: 0
  }
];

export default function Attendance() {
  const [selectedSemester, setSelectedSemester] = useState<string>('Select');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [attendanceType, setAttendanceType] = useState<string>('Regular');
  const [showReport, setShowReport] = useState<boolean>(false);

  const handleShowReport = () => {
    if (selectedSemester !== 'Select') {
      setShowReport(true);
    }
  };

  const getAttendanceData = () => {
    if (selectedSemester === '6') {
      return semester6Data;
    }
    return [];
  };

  const data = getAttendanceData();

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] p-5 bg-aums-bg-main">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
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
                  onChange={(e) => {
                    setSelectedSemester(e.target.value);
                    setShowReport(false);
                  }}
                  className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer"
                >
                  <option value="Select">Select</option>
                  <option value="1">Semester 1</option>
                  <option value="2">Semester 2</option>
                  <option value="3">Semester 3</option>
                  <option value="4">Semester 4</option>
                  <option value="5">Semester 5</option>
                  <option value="6">Semester 6</option>
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
                  <option value="">All Courses</option>
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
              onClick={handleShowReport}
              className="px-5 py-2 text-white text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity bg-aums-teal"
            >
              Attendance Summary
            </button>
            <button
              onClick={handleShowReport}
              className="px-5 py-2 text-white text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity bg-aums-teal"
            >
              Show Course Wise Report
            </button>
          </div>

          {showReport && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-xs">
                <thead>
                  <tr className="bg-aums-teal text-white">
                    <th className="border border-gray-300 p-2 font-semibold">Sl No</th>
                    <th className="border border-gray-300 p-2 font-semibold text-left">Class Name</th>
                    <th className="border border-gray-300 p-2 font-semibold text-left">Course</th>
                    <th className="border border-gray-300 p-2 font-semibold text-left">Faculty</th>
                    <th className="border border-gray-300 p-2 font-semibold">Total</th>
                    <th className="border border-gray-300 p-2 font-semibold">Present</th>
                    <th className="border border-gray-300 p-2 font-semibold">Duty Leave</th>
                    <th className="border border-gray-300 p-2 font-semibold">Absent</th>
                    <th className="border border-gray-300 p-2 font-semibold">Percentage</th>
                    <th className="border border-gray-300 p-2 font-semibold">Medical</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((row) => (
                      <tr key={row.slNo} className="bg-white">
                        <td className="border border-gray-300 p-2 text-center">{row.slNo}</td>
                        <td className="border border-gray-300 p-2">{row.className}</td>
                        <td className="border border-gray-300 p-2">{row.course}</td>
                        <td className="border border-gray-300 p-2">{row.faculty}</td>
                        <td className="border border-gray-300 p-2 text-center">{row.total}</td>
                        <td className="border border-gray-300 p-2 text-center">{row.present}</td>
                        <td className="border border-gray-300 p-2 text-center">{row.dutyLeave}</td>
                        <td className="border border-gray-300 p-2 text-center">{row.absent}</td>
                        <td
                          className="border border-gray-300 p-2 text-center font-semibold text-white bg-aums-red-error"
                        >
                          {row.percentage}
                        </td>
                        <td className="border border-gray-300 p-2 text-center">{row.medical}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={10} className="border border-gray-300 p-4 text-center text-gray-500 italic">
                        No attendance data available for Semester {selectedSemester}
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
