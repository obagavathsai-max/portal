import React from 'react';

export default function FeeDetails() {
  const fees = [
    { type: 'Tuition Fee', amount: '1,50,000', status: 'Paid', date: '15-Aug-2024' },
    { type: 'Hostel Fee', amount: '60,000', status: 'Paid', date: '15-Aug-2024' },
    { type: 'Bus Fee', amount: '25,000', status: 'Pending', date: '-' }
  ];

  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Payment Details
          </h1>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-bold text-gray-700">Fee Type</th>
                  <th className="border border-gray-300 p-3 text-left font-bold text-gray-700">Amount (₹)</th>
                  <th className="border border-gray-300 p-3 text-left font-bold text-gray-700">Status</th>
                  <th className="border border-gray-300 p-3 text-left font-bold text-gray-700">Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-3 font-medium text-gray-800">{fee.type}</td>
                    <td className="border border-gray-300 p-3 text-gray-700">{fee.amount}</td>
                    <td className="border border-gray-300 p-3">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        fee.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-aums-red-error'
                      }`}>
                        {fee.status}
                      </span>
                    </td>
                    <td className="border border-gray-300 p-3 text-gray-600">{fee.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-aums-bg-alt rounded-sm border border-gray-200">
            <h2 className="text-sm font-bold text-gray-800 mb-2">Important Note:</h2>
            <ul className="text-xs text-gray-600 space-y-2 list-disc pl-5">
              <li>Fees once paid will not be refunded under any circumstances.</li>
              <li>Please keep the transaction ID for future reference in case of any payment failures.</li>
              <li>Late payment may attract additional fine as per University norms.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
