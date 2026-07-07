import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-aums-bg-main">
                  <th className="border border-gray-200 p-3 text-left font-semibold text-gray-700">Description</th>
                  <th className="border border-gray-200 p-3 text-left font-semibold text-gray-700">Amount (₹)</th>
                  <th className="border border-gray-200 p-3 text-left font-semibold text-gray-700">Due Date</th>
                  <th className="border border-gray-200 p-3 text-left font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3">Tuition Fee - Semester 6</td>
                  <td className="border border-gray-200 p-3">1,25,000</td>
                  <td className="border border-gray-200 p-3">15-Jan-2024</td>
                  <td className="border border-gray-200 p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Hostel Fee - Semester 6</td>
                  <td className="border border-gray-200 p-3">45,000</td>
                  <td className="border border-gray-200 p-3">15-Jan-2024</td>
                  <td className="border border-gray-200 p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Mess Fee - March 2024</td>
                  <td className="border border-gray-200 p-3">4,500</td>
                  <td className="border border-gray-200 p-3">05-Mar-2024</td>
                  <td className="border border-gray-200 p-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase">Pending</span>
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
