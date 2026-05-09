import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Pending Fee Details
          </h1>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-aums-bg-main">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">Description</th>
                  <th className="border border-gray-300 p-3 text-right font-semibold text-gray-700">Amount (₹)</th>
                  <th className="border border-gray-300 p-3 text-center font-semibold text-gray-700">Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 text-gray-800 font-medium">Tuition Fee - Sem 6</td>
                  <td className="border border-gray-300 p-3 text-right text-gray-800">1,50,000.00</td>
                  <td className="border border-gray-300 p-3 text-center text-gray-800">Jan 15, 2025</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-gray-800 font-medium">Hostel & Mess Fee - Sem 6</td>
                  <td className="border border-gray-300 p-3 text-right text-gray-800">55,000.00</td>
                  <td className="border border-gray-300 p-3 text-center text-gray-800">Jan 15, 2025</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-bold">
                  <td className="border border-gray-300 p-3 text-right">Total Pending</td>
                  <td className="border border-gray-300 p-3 text-right text-aums-red-error">2,05,000.00</td>
                  <td className="border border-gray-300 p-3"></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 bg-aums-teal text-white font-bold rounded shadow-sm hover:opacity-90 transition-opacity">
              Pay Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
