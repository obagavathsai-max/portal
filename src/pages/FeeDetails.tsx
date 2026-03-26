import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-main">
      <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-teal-50">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-xs font-bold uppercase border border-gray-200">Year</th>
                  <th className="px-4 py-2 text-xs font-bold uppercase border border-gray-200">Fee Type</th>
                  <th className="px-4 py-2 text-xs font-bold uppercase border border-gray-200">Amount</th>
                  <th className="px-4 py-2 text-xs font-bold uppercase border border-gray-200">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-2 text-xs border border-gray-200">2023-24</td>
                  <td className="px-4 py-2 text-xs border border-gray-200">Tuition Fee</td>
                  <td className="px-4 py-2 text-xs border border-gray-200">₹ 3,50,000</td>
                  <td className="px-4 py-2 text-xs border border-gray-200 text-green-600 font-bold">Paid</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 text-xs border border-gray-200">2023-24</td>
                  <td className="px-4 py-2 text-xs border border-gray-200">Hostel Fee</td>
                  <td className="px-4 py-2 text-xs border border-gray-200">₹ 1,20,000</td>
                  <td className="px-4 py-2 text-xs border border-gray-200 text-green-600 font-bold">Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
