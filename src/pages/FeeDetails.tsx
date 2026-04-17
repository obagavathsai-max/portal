import React from 'react';

export default function FeeDetails() {
  const fees = [
    { type: 'Tuition Fee', amount: '350,000', status: 'Paid', date: '15-Aug-2023' },
    { type: 'Hostel Fee', amount: '120,000', status: 'Paid', date: '15-Aug-2023' },
    { type: 'Caution Deposit', amount: '10,000', status: 'Paid', date: '15-Aug-2023' },
    { type: 'Mess Fee', amount: '45,000', status: 'Paid', date: '15-Aug-2023' },
  ];

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-main">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Payment Details
          </h1>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 p-3 text-left font-semibold text-gray-700">Fee Type</th>
                  <th className="border border-gray-200 p-3 text-right font-semibold text-gray-700">Amount (₹)</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold text-gray-700">Status</th>
                  <th className="border border-gray-200 p-3 text-center font-semibold text-gray-700">Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-200 p-3">{fee.type}</td>
                    <td className="border border-gray-200 p-3 text-right font-medium">{fee.amount}</td>
                    <td className="border border-gray-200 p-3 text-center">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                        {fee.status}
                      </span>
                    </td>
                    <td className="border border-gray-200 p-3 text-center text-gray-600">{fee.date}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-aums-bg-main font-bold">
                  <td className="border border-gray-200 p-3">Total Paid</td>
                  <td className="border border-gray-200 p-3 text-right">525,000</td>
                  <td colSpan={2} className="border border-gray-200"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
