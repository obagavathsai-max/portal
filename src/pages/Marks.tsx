import React, { useState } from 'react';
import { Search, HelpCircle, Link as LinkIcon } from 'lucide-react';

export default function Marks() {
  const [selectedSemester, setSelectedSemester] = useState('5');

  const subjects = [
    { code: '22AIE301', name: 'Machine Learning', internal: '48/50', external: '45/50', total: '93' },
    { code: '22AIE302', name: 'Deep Learning', internal: '47/50', external: '46/50', total: '93' },
    { code: '22AIE303', name: 'Cloud Computing', internal: '49/50', external: '44/50', total: '93' },
    { code: '22MAT301', name: 'Optimization Techniques', internal: '45/50', external: '42/50', total: '87' },
    { code: '22ADM301', name: 'Management Studies', internal: '46/50', external: '45/50', total: '91' },
  ];

  return (
    <div className="space-y-5">
      {/* Header section with squares icon */}
      <div className="flex items-center gap-2 mb-1">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          <div className="w-1.5 h-1.5 bg-aums-teal"></div>
        </div>
        <h1 className="text-[15px] font-bold uppercase text-aums-teal">
          View Internal Marks
        </h1>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        {/* Gray Header */}
        <div className="bg-aums-bg-main px-4 py-2 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-gray-700">Internal Marks Details</span>
          </div>
          <div className="flex gap-1">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">
              <LinkIcon size={12} strokeWidth={2.5} /> Link
            </button>
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50 transition-colors">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex flex-wrap items-end gap-4 mb-8">
            <div className="relative border border-gray-300 rounded-md px-3 py-1 min-w-[200px] bg-white">
              <label className="absolute -top-2 left-2 bg-white px-1 text-[10px] text-aums-teal font-medium">Semester</label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full bg-transparent outline-none text-[14px] py-1 cursor-pointer"
              >
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
              </select>
            </div>

            <button className="bg-aums-teal hover:bg-aums-teal-dark text-white px-6 py-2 rounded text-[13px] font-bold shadow-sm transition-colors mb-0.5">
              View Marks
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-[13px]">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th className="border border-gray-200 p-3 text-left font-bold">Course Code</th>
                  <th className="border border-gray-200 p-3 text-left font-bold">Course Name</th>
                  <th className="border border-gray-200 p-3 text-center font-bold">Internal</th>
                  <th className="border border-gray-200 p-3 text-center font-bold">External</th>
                  <th className="border border-gray-200 p-3 text-center font-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((sub, i) => (
                  <tr key={sub.code} className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-200 p-3 font-medium">{sub.code}</td>
                    <td className="border border-gray-200 p-3">{sub.name}</td>
                    <td className="border border-gray-200 p-3 text-center text-aums-teal font-medium">{sub.internal}</td>
                    <td className="border border-gray-200 p-3 text-center font-medium">{sub.external}</td>
                    <td className="border border-gray-200 p-3 text-center font-bold">{sub.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
