import React from 'react';

const feeData = [
  { id: 1, type: 'Tuition Fee', period: '2023-24 Even', dueDate: '20-Jan-2024', amount: 150000, status: 'Paid', ref: 'AMR/2024/00123' },
  { id: 2, type: 'Hostel Fee', period: '2023-24 Even', dueDate: '20-Jan-2024', amount: 45000, status: 'Paid', ref: 'AMR/2024/H0045' },
  { id: 3, type: 'Mess Fee', period: '2023-24 Even', dueDate: '20-Jan-2024', amount: 35000, status: 'Paid', ref: 'AMR/2024/M0089' },
  { id: 4, type: 'Tuition Fee', period: '2023-24 Odd', dueDate: '20-Jul-2023', amount: 150000, status: 'Paid', ref: 'AMR/2023/00987' },
];

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white rounded shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Payment History
          </h1>
        </div>

        <div className="p-4 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="bg-aums-bg-main">
                  <th className="border border-gray-200 p-2.5 text-left font-bold text-gray-600">Sl No</th>
                  <th className="border border-gray-200 p-2.5 text-left font-bold text-gray-600">Fee Component</th>
                  <th className="border border-gray-200 p-2.5 text-left font-bold text-gray-600">Period</th>
                  <th className="border border-gray-200 p-2.5 text-center font-bold text-gray-600">Due Date</th>
                  <th className="border border-gray-200 p-2.5 text-right font-bold text-gray-600">Amount (₹)</th>
                  <th className="border border-gray-200 p-2.5 text-center font-bold text-gray-600">Status</th>
                  <th className="border border-gray-200 p-2.5 text-left font-bold text-gray-600">Reference No</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((row, idx) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-100 p-2.5">{idx + 1}</td>
                    <td className="border border-gray-100 p-2.5 font-medium">{row.type}</td>
                    <td className="border border-gray-100 p-2.5 text-gray-500">{row.period}</td>
                    <td className="border border-gray-100 p-2.5 text-center">{row.dueDate}</td>
                    <td className="border border-gray-100 p-2.5 text-right font-semibold">
                      {row.amount.toLocaleString('en-IN')}
                    </td>
                    <td className="border border-gray-100 p-2.5 text-center">
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase">
                        {row.status}
                      </span>
                    </td>
                    <td className="border border-gray-100 p-2.5 text-gray-400 font-mono text-[11px]">{row.ref}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-bold">
                  <td colSpan={4} className="border border-gray-200 p-2.5 text-right uppercase text-[10px] text-gray-500 tracking-wider">Total Paid</td>
                  <td className="border border-gray-200 p-2.5 text-right text-aums-teal text-sm">
                    ₹3,80,000
                  </td>
                  <td colSpan={2} className="border border-gray-200 p-2.5"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
