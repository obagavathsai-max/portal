import React, { useState } from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            FEE DETAILS
          </h1>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-sm">
            <div className="flex">
              <span className="text-gray-500 w-32 font-medium">Roll No</span>
              <span className="font-bold text-gray-800">AV.SC.U4AIE23132</span>
            </div>
            <div className="flex">
              <span className="text-gray-500 w-32 font-medium">Name</span>
              <span className="font-bold text-gray-800 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-[13px]">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 font-bold text-left">Academic Year</th>
                  <th className="border border-gray-300 p-2 font-bold text-left">Fee Head</th>
                  <th className="border border-gray-300 p-2 font-bold text-right">Amount (₹)</th>
                  <th className="border border-gray-300 p-2 font-bold text-right">Paid (₹)</th>
                  <th className="border border-gray-300 p-2 font-bold text-right">Balance (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-2">2023-2024</td>
                  <td className="border border-gray-300 p-2">Tuition Fee</td>
                  <td className="border border-gray-300 p-2 text-right">3,50,000.00</td>
                  <td className="border border-gray-300 p-2 text-right">3,50,000.00</td>
                  <td className="border border-gray-300 p-2 text-right font-bold">0.00</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-2">2023-2024</td>
                  <td className="border border-gray-300 p-2">Caution Deposit</td>
                  <td className="border border-gray-300 p-2 text-right">10,000.00</td>
                  <td className="border border-gray-300 p-2 text-right">10,000.00</td>
                  <td className="border border-gray-300 p-2 text-right font-bold">0.00</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-2">2024-2025</td>
                  <td className="border border-gray-300 p-2">Tuition Fee</td>
                  <td className="border border-gray-300 p-2 text-right">3,75,000.00</td>
                  <td className="border border-gray-300 p-2 text-right">3,75,000.00</td>
                  <td className="border border-gray-300 p-2 text-right font-bold">0.00</td>
                </tr>
                <tr className="bg-aums-bg-main font-bold">
                  <td colSpan={4} className="border border-gray-300 p-2 text-right">Total Outstanding Balance</td>
                  <td className="border border-gray-300 p-2 text-right">₹ 0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
