import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Payment Details
          </h1>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
              <span className="w-2 h-4 bg-aums-teal rounded-full"></span>
              PENDING DUES
            </h2>

            <div className="overflow-x-auto border border-gray-200 rounded">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-aums-bg-main border-b border-gray-200">
                    <th className="px-4 py-3 font-bold text-gray-700">Particulars</th>
                    <th className="px-4 py-3 font-bold text-gray-700">Academic Year</th>
                    <th className="px-4 py-3 font-bold text-gray-700 text-right">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 text-gray-600">Tuition Fee - Semester 6</td>
                    <td className="px-4 py-4 text-gray-600">2023-2024</td>
                    <td className="px-4 py-4 text-gray-800 font-bold text-right">1,25,000.00</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-gray-600">Bus Fee - Year 3</td>
                    <td className="px-4 py-4 text-gray-600">2023-2024</td>
                    <td className="px-4 py-4 text-gray-800 font-bold text-right">32,000.00</td>
                  </tr>
                  <tr className="bg-gray-50 font-bold">
                    <td colSpan={2} className="px-4 py-4 text-gray-800 uppercase text-right">Total Payable</td>
                    <td className="px-4 py-4 text-aums-teal text-right text-lg">₹ 1,57,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="px-8 py-2.5 text-white text-sm font-bold rounded uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all bg-aums-teal shadow-md"
            >
              Pay Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
