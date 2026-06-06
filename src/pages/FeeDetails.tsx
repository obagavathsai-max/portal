import React from 'react';
import { CreditCard, History } from 'lucide-react';

export default function FeeDetails() {
  const fees = [
    { type: 'Tuition Fee', amount: '1,50,000', dueDate: '15-Aug-2024', status: 'Paid' },
    { type: 'Hostel Fee', amount: '45,000', dueDate: '15-Aug-2024', status: 'Paid' },
    { type: 'Mess Fee', amount: '35,000', dueDate: '15-Aug-2024', status: 'Paid' },
    { type: 'Exam Fee', amount: '2,500', dueDate: '20-Oct-2024', status: 'Paid' }
  ];

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Payment Details
          </h1>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-aums-bg-main">
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase border-b border-gray-200">Sl No</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase border-b border-gray-200">Fee Type</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase border-b border-gray-200 text-right">Amount (₹)</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase border-b border-gray-200">Due Date</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase border-b border-gray-200 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {fees.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-sm text-gray-600">{idx + 1}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">{fee.type}</td>
                    <td className="px-4 py-3 text-sm text-gray-800 text-right font-mono">{fee.amount}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{fee.dueDate}</td>
                    <td className="px-4 py-3 text-sm text-center">
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase">
                        {fee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded p-4">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard size={18} className="text-aums-teal" />
                <h3 className="text-sm font-bold text-gray-800 uppercase">Pending Payments</h3>
              </div>
              <p className="text-sm text-gray-500 italic">No pending payments found for the current semester.</p>
            </div>

            <div className="flex-1 bg-gray-50 border border-gray-200 rounded p-4">
              <div className="flex items-center gap-2 mb-3">
                <History size={18} className="text-aums-teal" />
                <h3 className="text-sm font-bold text-gray-800 uppercase">Payment History</h3>
              </div>
              <button className="text-xs font-bold text-aums-teal hover:underline uppercase">View Full Transaction History</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
