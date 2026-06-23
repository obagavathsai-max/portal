import React, { useState } from 'react';
import { ChevronDown, GraduationCap, Download, FileText, Star, Trophy, BookOpen } from 'lucide-react';

const semesterGrades: Record<string, any[]> = {
  '1': [
    { code: '21MAT101', name: 'Calculus', credits: 4, grade: 'A' },
    { code: '21PHY101', name: 'Engineering Physics', credits: 3, grade: 'A-' },
    { code: '21CSE101', name: 'Computer Programming', credits: 4, grade: 'B+' },
    { code: '21MEE101', name: 'Engineering Graphics', credits: 2, grade: 'A' },
    { code: '21ENV111', name: 'Environmental Science', credits: 2, grade: 'A' },
  ],
  '2': [
    { code: '21MAT102', name: 'Applied Mathematics', credits: 4, grade: 'A-' },
    { code: '21CSE102', name: 'Data Structures', credits: 4, grade: 'B' },
    { code: '21ECE101', name: 'Basic Electronics', credits: 3, grade: 'A' },
  ],
  '3': [
    { code: '21MAT201', name: 'Linear Algebra', credits: 4, grade: 'A' },
    { code: '21CSE201', name: 'Object Oriented Programming', credits: 4, grade: 'A-' },
  ],
  '4': [
    { code: '21MAT202', name: 'Probability and Statistics', credits: 4, grade: 'B+' },
  ],
  '5': []
};

export default function Grades() {
  const [semester, setSemester] = useState('1');

  const currentGrades = semesterGrades[semester] || [];
  const gpa = semester === '1' ? '8.75' : (semester === '2' ? '8.42' : '8.60');

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-white">
      {/* Header Card */}
      <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            Semester Wise Grades
          </h1>
        </div>

        <div className="p-5 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="relative w-full md:w-64">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-300 rounded px-3 py-2 text-[13px] focus:outline-none focus:border-aums-teal"
            >
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 text-gray-400" size={16} />
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-aums-teal text-white px-5 py-2 rounded text-[13px] font-bold hover:bg-aums-teal-dark shadow-sm transition-colors">
              <Download size={14} /> DOWNLOAD GRADE SHEET
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Stats */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
            <h3 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">Semester Performance</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg text-aums-teal shadow-sm border border-gray-100">
                    <Trophy size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">SGPA</p>
                    <p className="text-xl font-black text-gray-800">{gpa}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg text-aums-orange shadow-sm border border-gray-100">
                    <Star size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">CGPA</p>
                    <p className="text-xl font-black text-gray-800">8.92</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="font-bold text-gray-500">Academic Standing</span>
                  <span className="font-black text-aums-teal">EXCELLENT</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-aums-teal h-2 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
            <FileText className="text-blue-600 shrink-0" size={18} />
            <p className="text-[11px] text-blue-700 leading-relaxed">
              Grade sheets downloaded from the portal are for reference only. For official purposes, please apply for original transcripts.
            </p>
          </div>
        </div>

        {/* Grades Table */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-aums-teal-light">
                  <th className="px-4 py-3 text-[11px] font-bold text-aums-teal uppercase tracking-wider">Course Code</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-aums-teal uppercase tracking-wider">Course Name</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-aums-teal uppercase tracking-wider text-center">Credits</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-aums-teal uppercase tracking-wider text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {currentGrades.length > 0 ? (
                  currentGrades.map((grade, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-[13px] font-bold text-gray-400">{grade.code}</td>
                      <td className="px-4 py-3 text-[13px] font-semibold text-gray-700">{grade.name}</td>
                      <td className="px-4 py-3 text-[13px] text-center font-bold text-gray-500">{grade.credits}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block w-8 py-1 rounded font-black text-xs ${['A', 'A-'].includes(grade.grade) ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                          }`}>
                          {grade.grade}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-10 text-center text-gray-400 italic text-sm">
                      Results for this semester have not been published yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
