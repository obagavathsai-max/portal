import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
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
                  <th className="border border-gray-200 p-3 text-left font-semibold text-gray-700">Fee Category</th>
                  <th className="border border-gray-200 p-3 text-right font-semibold text-gray-700">Amount Due</th>
                  <th className="border border-gray-200 p-3 text-right font-semibold text-gray-700">Paid Amount</th>
                  <th className="border border-gray-200 p-3 text-right font-semibold text-gray-700">Balance</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3 text-gray-700">Tuition Fee - Semester 6</td>
                  <td className="border border-gray-200 p-3 text-right text-gray-700">₹ 1,25,000</td>
                  <td className="border border-gray-200 p-3 text-right text-gray-700">₹ 1,25,000</td>
                  <td className="border border-gray-200 p-3 text-right text-gray-700">₹ 0</td>
                  <td className="border border-gray-200 p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">PAID</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3 text-gray-700">Hostel Fee - Academic Year 2024-25</td>
                  <td className="border border-gray-200 p-3 text-right text-gray-700">₹ 85,000</td>
                  <td className="border border-gray-200 p-3 text-right text-gray-700">₹ 85,000</td>
                  <td className="border border-gray-200 p-3 text-right text-gray-700">₹ 0</td>
                  <td className="border border-gray-200 p-3 text-center">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">PAID</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-sm">
            <h2 className="text-sm font-bold text-blue-800 mb-2">Pending Fee Information</h2>
            <p className="text-xs text-blue-700 leading-relaxed">
              Any pending fees will be updated here after reconciliation. For queries regarding fee payments, please contact the accounts department.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
