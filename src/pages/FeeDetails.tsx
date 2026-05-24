import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mb-8 text-sm">
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
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-xs">
              <thead>
                <tr className="bg-aums-bg-main">
                  <th className="border border-gray-300 p-2 font-semibold text-left">Academic Year</th>
                  <th className="border border-gray-300 p-2 font-semibold text-left">Term</th>
                  <th className="border border-gray-300 p-2 font-semibold text-left">Fee Category</th>
                  <th className="border border-gray-300 p-2 font-semibold text-right">Amount Due</th>
                  <th className="border border-gray-300 p-2 font-semibold text-right">Amount Paid</th>
                  <th className="border border-gray-300 p-2 font-semibold text-right">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-2">2024-25</td>
                  <td className="border border-gray-300 p-2">Semester 3</td>
                  <td className="border border-gray-300 p-2">Tuition Fee</td>
                  <td className="border border-gray-300 p-2 text-right">150,000</td>
                  <td className="border border-gray-300 p-2 text-right">150,000</td>
                  <td className="border border-gray-300 p-2 text-right">0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-2">2024-25</td>
                  <td className="border border-gray-300 p-2">Semester 3</td>
                  <td className="border border-gray-300 p-2">Hostel Fee</td>
                  <td className="border border-gray-300 p-2 text-right">60,000</td>
                  <td className="border border-gray-300 p-2 text-right">60,000</td>
                  <td className="border border-gray-300 p-2 text-right">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-aums-bg-alt rounded border border-gray-200">
            <h2 className="font-bold text-aums-teal mb-2 uppercase text-sm">Pending Fees</h2>
            <p className="text-sm text-gray-600 italic">No pending fees found for the current academic year.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
