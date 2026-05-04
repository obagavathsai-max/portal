import React, { useState } from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 p-5 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
        </div>

        <div className="p-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-aums-bg-main">
                <th className="border border-gray-200 p-2 text-left">Academic Year</th>
                <th className="border border-gray-200 p-2 text-left">Fee Type</th>
                <th className="border border-gray-200 p-2 text-right">Total Amount</th>
                <th className="border border-gray-200 p-2 text-right">Paid Amount</th>
                <th className="border border-gray-200 p-2 text-right">Balance</th>
                <th className="border border-gray-200 p-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2">2023-2024</td>
                <td className="border border-gray-200 p-2">Tuition Fee</td>
                <td className="border border-gray-200 p-2 text-right">₹ 2,50,000</td>
                <td className="border border-gray-200 p-2 text-right">₹ 2,50,000</td>
                <td className="border border-gray-200 p-2 text-right">₹ 0</td>
                <td className="border border-gray-200 p-2 text-center">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Paid</span>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-2">2023-2024</td>
                <td className="border border-gray-200 p-2">Hostel Fee</td>
                <td className="border border-gray-200 p-2 text-right">₹ 1,10,000</td>
                <td className="border border-gray-200 p-2 text-right">₹ 1,10,000</td>
                <td className="border border-gray-200 p-2 text-right">₹ 0</td>
                <td className="border border-gray-200 p-2 text-center">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">Paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
