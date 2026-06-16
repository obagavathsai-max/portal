import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Roll No</label>
              <div className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-1">AV.SC.U4AIE23132</div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-500 uppercase">Name</label>
              <div className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-1 uppercase">ORUGANTI BAGAVATH SAI</div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-aums-bg-main">
                  <th className="border border-gray-200 p-3 text-left">Academic Year</th>
                  <th className="border border-gray-200 p-3 text-left">Fee Category</th>
                  <th className="border border-gray-200 p-3 text-right">Amount (₹)</th>
                  <th className="border border-gray-200 p-3 text-right">Paid (₹)</th>
                  <th className="border border-gray-200 p-3 text-right">Balance (₹)</th>
                  <th className="border border-gray-200 p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3">2024-25</td>
                  <td className="border border-gray-200 p-3">Tuition Fee</td>
                  <td className="border border-gray-200 p-3 text-right">2,50,000</td>
                  <td className="border border-gray-200 p-3 text-right">2,50,000</td>
                  <td className="border border-gray-200 p-3 text-right">0</td>
                  <td className="border border-gray-200 p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">PAID</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">2024-25</td>
                  <td className="border border-gray-200 p-3">Hostel Fee</td>
                  <td className="border border-gray-200 p-3 text-right">1,20,000</td>
                  <td className="border border-gray-200 p-3 text-right">1,20,000</td>
                  <td className="border border-gray-200 p-3 text-right">0</td>
                  <td className="border border-gray-200 p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">PAID</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
