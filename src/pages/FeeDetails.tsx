import React, { useState } from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)] p-5">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            FEE PAYMENT DETAILS
          </h1>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-sm">
            <div className="space-y-1">
              <span className="text-gray-500 block">Roll No</span>
              <span className="font-semibold text-gray-900">AV.SC.U4AIE23132</span>
            </div>
            <div className="space-y-1">
              <span className="text-gray-500 block">Name</span>
              <span className="font-semibold text-gray-900 uppercase">ORUGANTI BAGAVATH SAI</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-aums-bg-main">
                  <th className="border border-gray-300 p-3 text-left font-bold">Category</th>
                  <th className="border border-gray-300 p-3 text-right font-bold">Total Amount</th>
                  <th className="border border-gray-300 p-3 text-right font-bold">Paid Amount</th>
                  <th className="border border-gray-300 p-3 text-right font-bold">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Tuition Fee 2024-25</td>
                  <td className="border border-gray-300 p-3 text-right">₹2,50,000.00</td>
                  <td className="border border-gray-300 p-3 text-right text-green-600 font-semibold">₹2,50,000.00</td>
                  <td className="border border-gray-300 p-3 text-right font-bold">₹0.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Hostel & Mess Fee</td>
                  <td className="border border-gray-300 p-3 text-right">₹1,15,000.00</td>
                  <td className="border border-gray-300 p-3 text-right text-green-600 font-semibold">₹1,15,000.00</td>
                  <td className="border border-gray-300 p-3 text-right font-bold">₹0.00</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="border border-gray-300 p-3 text-right">GRAND TOTAL</td>
                  <td className="border border-gray-300 p-3 text-right">₹3,65,000.00</td>
                  <td className="border border-gray-300 p-3 text-right">₹3,65,000.00</td>
                  <td className="border border-gray-300 p-3 text-right text-aums-teal">₹0.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded text-[13px] text-blue-800">
            <p className="font-bold mb-2 italic">Note:</p>
            <p>Fee details shown above are for the current academic year. For older records, please contact the accounts department.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
