import React, { useState } from 'react';

interface AttendanceRecord {
  slNo: number;
  className: string;
  courseCode: string;
  courseName: string;
  faculty: string;
  total: number;
  present: number;
  dutyLeave: number;
  absent: number;
  medical: number;
}

const attendanceData: Record<string, AttendanceRecord[]> = {
  '5': [
    { slNo: 1, className: 'B.Tech..2023.R.AIE.16.22AIE311', courseCode: '22AIE311', courseName: 'Software Engineering (Project-Based)', faculty: 'Parvathaneni Naga Srinivasu', total: 40, present: 16, dutyLeave: 0, absent: 24, medical: 0 },
    { slNo: 2, className: 'B.Tech..2023.R.AIE.16.22AIE312', courseCode: '22AIE312', courseName: 'Big Data Analytics', faculty: 'V Lakshmi Chetana', total: 45, present: 25, dutyLeave: 0, absent: 20, medical: 0 },
    { slNo: 3, className: 'B.Tech..2023.R.AIE.16.22AIE313', courseCode: '22AIE313', courseName: 'Computer Vision and Image Processing', faculty: 'RAVI SANKAR PUPPALA', total: 55, present: 40, dutyLeave: 0, absent: 15, medical: 0 },
    { slNo: 4, className: 'B.Tech..2023.R.AIE.16.22AIE314', courseCode: '22AIE314', courseName: 'Computer Security', faculty: 'Venkata Ramana Gupta Nallagattla', total: 56, present: 23, dutyLeave: 0, absent: 33, medical: 0 },
    { slNo: 5, className: 'B.Tech..2023.R.AIE.16.22AIE315', courseCode: '22AIE315', courseName: 'Natural Language Processing', faculty: 'korrapati sindhu', total: 68, present: 27, dutyLeave: 0, absent: 41, medical: 0 },
    { slNo: 6, className: 'B.Tech..2023.R.AIE.16.22AIE457', courseCode: '22AIE457', courseName: 'Full Stack Development', faculty: 'Budati Jaya Lakshmi Narayana', total: 51, present: 23, dutyLeave: 0, absent: 28, medical: 0 },
    { slNo: 7, className: 'B.Tech..2023.R.AIE.16.23LSE311', courseCode: '23LSE311', courseName: 'Life Skills for Engineers IV', faculty: 'Swati K, Karthikeyan S, Kanchustambam Satya Savithri', total: 15, present: 6, dutyLeave: 0, absent: 9, medical: 0 },
  ],
  '4': [
    { slNo: 1, className: 'B.Tech..2023.R.AIE.16.22AIE211', courseCode: '22AIE211', courseName: 'Design and Analysis of Algorithms', faculty: 'Dr. Anand Kumar', total: 42, present: 38, dutyLeave: 2, absent: 2, medical: 0 },
    { slNo: 2, className: 'B.Tech..2023.R.AIE.16.22AIE212', courseCode: '22AIE212', courseName: 'Operating Systems', faculty: 'Prof. Meena S', total: 40, present: 35, dutyLeave: 1, absent: 4, medical: 0 },
    { slNo: 3, className: 'B.Tech..2023.R.AIE.16.22AIE213', courseCode: '22AIE213', courseName: 'Machine Learning', faculty: 'Dr. Rajesh Khanna', total: 45, present: 42, dutyLeave: 0, absent: 3, medical: 0 },
    { slNo: 4, className: 'B.Tech..2023.R.AIE.16.22MAT211', courseCode: '22MAT211', courseName: 'Optimization Techniques', faculty: 'Dr. Suresh Babu', total: 38, present: 36, dutyLeave: 0, absent: 2, medical: 0 },
    { slNo: 5, className: 'B.Tech..2023.R.AIE.16.22AIE214', courseCode: '22AIE214', courseName: 'Computer Networks', faculty: 'Ms. Priya Darshini', total: 44, present: 40, dutyLeave: 2, absent: 2, medical: 0 },
    { slNo: 6, className: 'B.Tech..2023.R.AIE.16.23LSE211', courseCode: '23LSE211', courseName: 'Life Skills for Engineers II', faculty: 'Life Skills Team', total: 20, present: 18, dutyLeave: 0, absent: 2, medical: 0 },
  ],
  '3': [
    { slNo: 1, className: 'B.Tech..2023.R.AIE.16.22MAT220', courseCode: '22MAT220', courseName: 'Mathematics for Computing 3', faculty: 'Dr. V. Gupta', total: 40, present: 38, dutyLeave: 0, absent: 2, medical: 0 },
    { slNo: 2, className: 'B.Tech..2023.R.AIE.16.22AIE201', courseCode: '22AIE201', courseName: 'Fundamentals of AI', faculty: 'Dr. S. Ram', total: 45, present: 40, dutyLeave: 1, absent: 4, medical: 0 },
    { slNo: 3, className: 'B.Tech..2023.R.AIE.16.22AIE202', courseCode: '22AIE202', courseName: 'Operating Systems', faculty: 'Prof. K. Mani', total: 42, present: 39, dutyLeave: 0, absent: 3, medical: 0 },
    { slNo: 4, className: 'B.Tech..2023.R.AIE.16.22AIE203', courseCode: '22AIE203', courseName: 'Data Structures & Algorithms 2', faculty: 'Dr. Amit Shah', total: 48, present: 45, dutyLeave: 2, absent: 1, medical: 0 },
    { slNo: 5, className: 'B.Tech..2023.R.AIE.16.22AIE204', courseCode: '22AIE204', courseName: 'Introduction to Computer Networks', faculty: 'Ms. L. Verma', total: 40, present: 37, dutyLeave: 0, absent: 3, medical: 0 },
    { slNo: 6, className: 'B.Tech..2023.R.AIE.16.22AIE205', courseCode: '22AIE205', courseName: 'Introduction to Python', faculty: 'Dr. P. Nair', total: 45, present: 44, dutyLeave: 0, absent: 1, medical: 0 },
    { slNo: 7, className: 'B.Tech..2023.R.AIE.16.22BIO201', courseCode: '22BIO201', courseName: 'Intelligence of Biological Systems - 1', faculty: 'Dr. B. Reddy', total: 30, present: 28, dutyLeave: 0, absent: 2, medical: 0 },
  ],
  '2': [
    { slNo: 1, className: 'B.Tech..2023.R.AIE.16.22MAT111', courseCode: '22MAT111', courseName: 'Mathematics for Computing 2', faculty: 'Dr. Lakshmi', total: 40, present: 37, dutyLeave: 0, absent: 3, medical: 0 },
    { slNo: 2, className: 'B.Tech..2023.R.AIE.16.22AIE111', courseCode: '22AIE111', courseName: 'Data Structures & Algorithms 1', faculty: 'Dr. Vikram', total: 45, present: 43, dutyLeave: 1, absent: 1, medical: 0 },
    { slNo: 3, className: 'B.Tech..2023.R.AIE.16.22AIE112', courseCode: '22AIE112', courseName: 'Object Oriented Programming', faculty: 'Prof. Aruna', total: 42, present: 40, dutyLeave: 0, absent: 2, medical: 0 },
    { slNo: 4, className: 'B.Tech..2023.R.AIE.16.22PHY111', courseCode: '22PHY111', courseName: 'Physics for AI', faculty: 'Dr. Bharath', total: 38, present: 35, dutyLeave: 0, absent: 3, medical: 0 },
    { slNo: 5, className: 'B.Tech..2023.R.AIE.16.22AIE113', courseCode: '22AIE113', courseName: 'Digital Electronics', faculty: 'Dr. Karthik', total: 44, present: 42, dutyLeave: 1, absent: 1, medical: 0 },
    { slNo: 6, className: 'B.Tech..2023.R.AIE.16.23LSE111', courseCode: '23LSE111', courseName: 'Life Skills for Engineers I', faculty: 'Life Skills Team', total: 20, present: 19, dutyLeave: 0, absent: 1, medical: 0 },
  ],
  '1': [
    { slNo: 1, className: 'B.Tech..2023.R.AIE.16.22MAT101', courseCode: '22MAT101', courseName: 'Mathematics for Computing 1', faculty: 'Dr. Geetha', total: 40, present: 39, dutyLeave: 0, absent: 1, medical: 0 },
    { slNo: 2, className: 'B.Tech..2023.R.AIE.16.22AIE101', courseCode: '22AIE101', courseName: 'Problem Solving and Algorithmic Thinking', faculty: 'Dr. Shankar', total: 45, present: 44, dutyLeave: 0, absent: 1, medical: 0 },
    { slNo: 3, className: 'B.Tech..2023.R.AIE.16.22AIE102', courseCode: '22AIE102', courseName: 'Introduction to AI', faculty: 'Dr. Rekha', total: 40, present: 38, dutyLeave: 1, absent: 1, medical: 0 },
    { slNo: 4, className: 'B.Tech..2023.R.AIE.16.22CSE101', courseCode: '22CSE101', courseName: 'Computer Programming', faculty: 'Prof. Naveen', total: 50, present: 48, dutyLeave: 1, absent: 1, medical: 0 },
    { slNo: 5, className: 'B.Tech..2023.R.AIE.16.22ENG101', courseCode: '22ENG101', courseName: 'Communicative English', faculty: 'Ms. Anita', total: 30, present: 29, dutyLeave: 0, absent: 1, medical: 0 },
    { slNo: 6, className: 'B.Tech..2023.R.AIE.16.22AIE181', courseCode: '22AIE181', courseName: 'AI Lab', faculty: 'Dr. Joseph', total: 25, present: 24, dutyLeave: 1, absent: 0, medical: 0 },
  ],
};

export default function Attendance() {
  const [selectedSemester, setSelectedSemester] = useState<string>('Select');
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [attendanceType, setAttendanceType] = useState<string>('Regular');
  const [showReport, setShowReport] = useState(false);

  const handleSemesterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSemester(e.target.value);
    setShowReport(false);
  };

  const handleShowReport = () => {
    if (selectedSemester !== 'Select') {
      setShowReport(true);
    }
  };

  const currentData = selectedSemester !== 'Select' ? attendanceData[selectedSemester] || [] : [];

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
                  onChange={handleSemesterChange}
                  className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer"
                >
                  <option value="Select">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
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
              onClick={handleShowReport}
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

          {showReport && (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full border-collapse text-[13px] text-gray-800">
                <thead>
                  <tr className="bg-white border-b border-gray-300">
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-200">Sl No</th>
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-200">Class Name</th>
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-200">Course</th>
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-200">Faculty</th>
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-200">Total</th>
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-200">Present</th>
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-200">Duty Leave</th>
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-200">Absent</th>
                    <th className="px-4 py-3 text-left font-bold border-r border-gray-200">Percentage</th>
                    <th className="px-4 py-3 text-left font-bold">Medical</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((record) => {
                    // Based on the image, some have 2 decimals, some 1, some 0.
                    // 1: 16/40 = 40 (0)
                    // 2: 25/45 = 55.56 (2)
                    // 3: 40/55 = 72.73 (2)
                    // 4: 23/56 = 41.07 (2)
                    // 5: 27/68 = 39.71 (2)
                    // 6: 23/51 = 45.1 (1)
                    // 7: 6/15 = 40 (0)

                    let displayPercentage = (((record.present + record.dutyLeave) / record.total) * 100).toFixed(2);
                    if (displayPercentage.endsWith('.00')) {
                        displayPercentage = displayPercentage.slice(0, -3);
                    } else if (displayPercentage.endsWith('0')) {
                        displayPercentage = displayPercentage.slice(0, -1);
                    }

                    return (
                      <tr key={record.slNo} className="border-b border-gray-200 bg-white">
                        <td className="px-4 py-4 border-r border-gray-200">{record.slNo}</td>
                        <td className="px-4 py-4 border-r border-gray-200">{record.className}</td>
                        <td className="px-4 py-4 border-r border-gray-200">
                          <div className="font-semibold">{record.courseCode}</div>
                          <div>{record.courseName}</div>
                        </td>
                        <td className="px-4 py-4 border-r border-gray-200 whitespace-pre-line">{record.faculty}</td>
                        <td className="px-4 py-4 border-r border-gray-200">{record.total}</td>
                        <td className="px-4 py-4 border-r border-gray-200">{record.present}</td>
                        <td className="px-4 py-4 border-r border-gray-200">{record.dutyLeave}</td>
                        <td className="px-4 py-4 border-r border-gray-200">{record.absent}</td>
                        <td className="px-4 py-4 border-r border-gray-200 bg-[#ef5350] text-white font-semibold">
                          {displayPercentage}
                        </td>
                        <td className="px-4 py-4">{record.medical}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
