import React from 'react';

const feeData = [
  { description: 'Tuition Fee - Sem 5', amount: '1,50,000', dueDate: '15-Aug-2024', status: 'Paid' },
  { description: 'Hostel Fee - Sem 5', amount: '60,000', dueDate: '15-Aug-2024', status: 'Paid' },
  { description: 'Caution Deposit', amount: '10,000', dueDate: '01-July-2023', status: 'Paid' },
];

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            FEE PAYMENT DETAILS
          </h1>
        </div>

        <div className="p-5">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-aums-bg-main text-gray-700">
                  <th className="border border-gray-300 p-3 text-left">Description</th>
                  <th className="border border-gray-300 p-3 text-right">Amount (₹)</th>
                  <th className="border border-gray-300 p-3 text-center">Due Date</th>
                  <th className="border border-gray-300 p-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((fee, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 p-3">{fee.description}</td>
                    <td className="border border-gray-300 p-3 text-right font-medium">{fee.amount}</td>
                    <td className="border border-gray-300 p-3 text-center">{fee.dueDate}</td>
                    <td className="border border-gray-300 p-3 text-center">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
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
    </div>
  );
}
