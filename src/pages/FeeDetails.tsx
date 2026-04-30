import React from 'react';

const feeData = [
  { description: 'Tuition Fee', amount: '3,00,000', paid: '3,00,000', balance: '0', dueDate: '15-Aug-2023', status: 'Paid' },
  { description: 'Hostel Fee', amount: '1,20,000', paid: '1,20,000', balance: '0', dueDate: '15-Aug-2023', status: 'Paid' },
  { description: 'Mess Fee', amount: '65,000', paid: '65,000', balance: '0', dueDate: '15-Aug-2023', status: 'Paid' },
  { description: 'Caution Deposit', amount: '10,000', paid: '10,000', balance: '0', dueDate: '15-Aug-2023', status: 'Paid' },
];

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-aums-bg-main border-b border-gray-200">
                  <th className="px-4 py-3 font-bold text-gray-700">Description</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-right">Amount (₹)</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-right">Paid (₹)</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-right">Balance (₹)</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-center">Due Date</th>
                  <th className="px-4 py-3 font-bold text-gray-700 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {feeData.map((fee, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-800 font-medium">{fee.description}</td>
                    <td className="px-4 py-3 text-right text-gray-600">{fee.amount}</td>
                    <td className="px-4 py-3 text-right text-green-600 font-semibold">{fee.paid}</td>
                    <td className="px-4 py-3 text-right text-gray-600">{fee.balance}</td>
                    <td className="px-4 py-3 text-center text-gray-500">{fee.dueDate}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-green-100 text-green-700 uppercase">
                        {fee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-bold border-t-2 border-gray-200">
                  <td className="px-4 py-4 text-gray-800">Total</td>
                  <td className="px-4 py-4 text-right text-gray-800">4,95,000</td>
                  <td className="px-4 py-4 text-right text-green-700">4,95,000</td>
                  <td className="px-4 py-4 text-right text-gray-800">0</td>
                  <td colSpan={2}></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded text-sm text-blue-800">
            <p className="font-bold mb-1">Note:</p>
            <p>Fee receipts can be downloaded from the 'Receipts' tab. For any discrepancies, please contact the accounts department.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
