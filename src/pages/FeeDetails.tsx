import React from 'react';

export default function FeeDetails() {
  const pendingFees = [
    { type: 'Tuition Fee', amount: '₹ 1,50,000', deadline: 'August 10, 2024', status: 'Pending' },
    { type: 'Hostel Fee', amount: '₹ 60,000', deadline: 'August 15, 2024', status: 'Pending' },
  ];

  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Header */}
      <div className="bg-white px-4 py-3 rounded shadow-sm border-l-4 border-aums-teal">
        <h1 className="text-base font-bold uppercase text-aums-teal">
          Fee Details
        </h1>
      </div>

      <div className="bg-white rounded shadow-sm overflow-hidden border border-gray-200">
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <h2 className="text-[13px] font-bold text-gray-700 uppercase">Pending Fees</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead className="bg-aums-bg-main text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-bold">Fee Description</th>
                <th className="px-4 py-3 text-left font-bold">Amount</th>
                <th className="px-4 py-3 text-left font-bold">Due Date</th>
                <th className="px-4 py-3 text-center font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pendingFees.map((fee, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-4 font-medium text-gray-800">{fee.type}</td>
                  <td className="px-4 py-4 text-aums-teal font-bold">{fee.amount}</td>
                  <td className="px-4 py-4 text-gray-500">{fee.deadline}</td>
                  <td className="px-4 py-4 text-center">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {fee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
