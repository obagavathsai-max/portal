import React from 'react';

export default function FeeDetails() {
  const fees = [
    { type: 'Tuition Fee', amount: '2,50,000', status: 'Paid', date: '15/07/2024' },
    { type: 'Hostel Fee', amount: '80,000', status: 'Paid', date: '16/07/2024' },
    { type: 'Caution Deposit', amount: '10,000', status: 'Paid', date: '15/07/2024' },
  ];

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Payment Details
          </h1>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-aums-bg-main text-xs font-bold text-gray-600 uppercase">
                  <th className="border border-gray-200 p-3 text-left">Fee Category</th>
                  <th className="border border-gray-200 p-3 text-right">Amount (₹)</th>
                  <th className="border border-gray-200 p-3 text-center">Status</th>
                  <th className="border border-gray-200 p-3 text-center">Payment Date</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {fees.map((fee, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border border-gray-200 p-3 text-gray-700 font-medium">{fee.type}</td>
                    <td className="border border-gray-200 p-3 text-right text-gray-600">{fee.amount}</td>
                    <td className="border border-gray-200 p-3 text-center">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                        {fee.status}
                      </span>
                    </td>
                    <td className="border border-gray-200 p-3 text-center text-gray-600">{fee.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-gray-50 border border-dashed border-gray-300 rounded text-center">
            <p className="text-sm text-gray-500">No pending dues found for Academic Year 2024-25</p>
          </div>
        </div>
      </div>
    </div>
  );
}
