import React, { useState } from 'react';
import { Search, Printer, Download } from 'lucide-react';

const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'];

const marksData: Record<string, any[]> = {
  'Semester 6': [
    { code: '23AIE311', course: 'Computer Vision', type: 'Continuous Assessment', marks: '45/50', weightage: '50%', status: 'Published' },
    { code: '23AIE312', course: 'Deep Learning', type: 'Continuous Assessment', marks: '42/50', weightage: '50%', status: 'Published' },
    { code: '23AIE313', course: 'Reinforcement Learning', type: 'Continuous Assessment', marks: '48/50', weightage: '50%', status: 'Published' },
    { code: '23AIE314', course: 'Natural Language Processing', type: 'Continuous Assessment', marks: '38/50', weightage: '50%', status: 'Published' },
    { code: '23MAT311', course: 'Optimization Techniques', type: 'Continuous Assessment', marks: '44/50', weightage: '50%', status: 'Published' },
  ],
};

export default function Marks() {
  const [semester, setSemester] = useState('');
  const [data, setData] = useState<any[]>([]);

  const handleSearch = () => {
    if (semester) {
      setData(marksData[semester] || []);
    }
  };

  return (
    <div className="space-y-4 bg-white min-h-[calc(100vh-120px)]">
      {/* Search Header */}
      <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <div className="grid grid-cols-2 gap-[2px]">
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          </div>
          <h1 className="text-[15px] font-bold uppercase text-aums-teal">
            View Marks
          </h1>
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <div className="w-full max-w-xs relative pt-2">
            <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full border border-gray-300 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:border-aums-teal"
            >
              <option value="">-- Select --</option>
              {semesters.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 text-white px-6 py-1.5 rounded-sm text-sm font-bold shadow-sm transition-opacity hover:opacity-90 bg-aums-teal"
          >
            <Search size={16} /> SEARCH
          </button>
          <div className="flex gap-2 ml-auto">
            <button className="p-2 border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-50 shadow-sm">
              <Printer size={18} />
            </button>
            <button className="p-2 border border-gray-300 rounded-sm text-gray-600 hover:bg-gray-50 shadow-sm">
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Results Table */}
      {data.length > 0 && (
        <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[13px]">
              <thead>
                <tr className="bg-gray-100 text-gray-700 border-b border-gray-200">
                  <th className="px-4 py-3 font-bold">Course Code</th>
                  <th className="px-4 py-3 font-bold">Course Name</th>
                  <th className="px-4 py-3 font-bold">Assessment Type</th>
                  <th className="px-4 py-3 font-bold">Marks</th>
                  <th className="px-4 py-3 font-bold">Weightage</th>
                  <th className="px-4 py-3 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {data.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900">{row.code}</td>
                    <td className="px-4 py-3">{row.course}</td>
                    <td className="px-4 py-3 text-gray-600">{row.type}</td>
                    <td className="px-4 py-3 font-bold text-aums-teal">{row.marks}</td>
                    <td className="px-4 py-3 text-gray-600">{row.weightage}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[11px] font-bold">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {data.length === 0 && semester && (
        <div className="bg-gray-50 p-10 text-center rounded-sm border border-dashed border-gray-300">
          <p className="text-gray-500 font-medium">No marks published for the selected semester yet.</p>
        </div>
      )}
    </div>
  );
}
