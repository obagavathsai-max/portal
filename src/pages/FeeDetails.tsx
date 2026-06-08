import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            FEE STATUS
          </h1>
        </div>

        <div className="p-5">
          <div className="bg-white border border-gray-200 rounded-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-aums-bg-main">
                  <th className="p-3 text-left border-b font-semibold">Description</th>
                  <th className="p-3 text-right border-b font-semibold">Amount (₹)</th>
                  <th className="p-3 text-center border-b font-semibold">Due Date</th>
                  <th className="p-3 text-center border-b font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b">Semester 6 Tuition Fee</td>
                  <td className="p-4 border-b text-right">1,25,000.00</td>
                  <td className="p-4 border-b text-center">15-Jan-2024</td>
                  <td className="p-4 border-b text-center">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b">Hostel Fee - Even Sem</td>
                  <td className="p-4 border-b text-right">45,000.00</td>
                  <td className="p-4 border-b text-center">20-Jan-2024</td>
                  <td className="p-4 border-b text-center">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Paid</span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-bold">
                  <td className="p-4 text-right" colSpan={3}>Total Outstanding:</td>
                  <td className="p-4 text-center">₹ 0.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
