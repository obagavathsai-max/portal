import React from 'react';

const feeData = [
  { term: '2025-2026Odd Semester', amount: 125000, status: 'Paid', date: '2024-06-15' },
  { term: '2024-2025Even Semester', amount: 125000, status: 'Paid', date: '2024-01-10' },
  { term: '2024-2025Odd Semester', amount: 125000, status: 'Paid', date: '2023-06-20' },
  { term: '2023-2024Even Semester', amount: 110000, status: 'Paid', date: '2023-01-05' },
  { term: '2023-2024Odd Semester', amount: 110000, status: 'Paid', date: '2022-06-12' },
];

export default function FeeDetails() {
  return (
    <div className="space-y-4 bg-aums-bg-main min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details & Payments
          </h1>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Academic Term</th>
                  <th className="px-4 py-3 text-right font-bold text-gray-700">Amount (₹)</th>
                  <th className="px-4 py-3 text-center font-bold text-gray-700">Status</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((fee, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-gray-600 font-medium">{fee.term}</td>
                    <td className="px-4 py-4 text-right text-gray-800 font-bold">{fee.amount.toLocaleString()}</td>
                    <td className="px-4 py-4 text-center">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-full">
                        {fee.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-500">{fee.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-5 bg-aums-teal-light rounded border border-teal-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h2 className="text-lg font-bold text-aums-teal">Current Balance: ₹ 0</h2>
                <p className="text-xs text-teal-600 font-medium">All fees for the current semester have been cleared.</p>
              </div>
              <button className="px-6 py-2 bg-gray-400 text-white font-bold rounded cursor-not-allowed text-sm uppercase tracking-wide">
                No Pending Payments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
