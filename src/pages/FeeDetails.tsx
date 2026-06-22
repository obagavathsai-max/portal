import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 p-5 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Student Fee Details
          </h1>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-aums-bg-main">
                  <th className="border border-gray-300 p-3 text-left">Academic Year</th>
                  <th className="border border-gray-300 p-3 text-left">Semester</th>
                  <th className="border border-gray-300 p-3 text-left">Fee Category</th>
                  <th className="border border-gray-300 p-3 text-right">Total Amount</th>
                  <th className="border border-gray-300 p-3 text-right">Paid Amount</th>
                  <th className="border border-gray-300 p-3 text-right">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">2024-2025</td>
                  <td className="border border-gray-300 p-3">5</td>
                  <td className="border border-gray-300 p-3">Tuition Fee</td>
                  <td className="border border-gray-300 p-3 text-right">₹ 1,50,000</td>
                  <td className="border border-gray-300 p-3 text-right">₹ 1,50,000</td>
                  <td className="border border-gray-300 p-3 text-right font-bold text-green-600">0</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">2024-2025</td>
                  <td className="border border-gray-300 p-3">5</td>
                  <td className="border border-gray-300 p-3">Hostel Fee</td>
                  <td className="border border-gray-300 p-3 text-right">₹ 65,000</td>
                  <td className="border border-gray-300 p-3 text-right">₹ 65,000</td>
                  <td className="border border-gray-300 p-3 text-right font-bold text-green-600">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
