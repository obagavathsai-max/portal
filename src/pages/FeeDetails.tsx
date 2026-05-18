import React, { useState } from 'react';

export default function FeeDetails() {
  const [selectedFeeTerm, setSelectedFeeTerm] = useState<string>('Select');

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            STUDENTS FEE DETAILS
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

          <div className="mb-6">
            <div className="inline-flex items-baseline border border-gray-300 rounded-sm min-w-[260px]">
              <div className="px-3 pt-1">
                <label className="text-xs text-gray-500">Fee Term</label>
              </div>
              <select
                value={selectedFeeTerm}
                onChange={(e) => setSelectedFeeTerm(e.target.value)}
                className="w-full px-3 pb-2 text-sm text-gray-700 bg-transparent border-none outline-none cursor-pointer"
              >
                <option value="Select">Select</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto border border-gray-300 rounded-sm">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-aums-bg-main">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 border-r border-gray-300">Select</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 border-r border-gray-300">Fee Section</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 border-r border-gray-300">currency</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-300">Assigned Amount</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-300">Paid Amount</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700">Amount To Pay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-gray-500 text-sm">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-3 text-xs text-gray-600">
            Total rows: 0
          </div>
        </div>
      </div>
    </div>
  );
}
