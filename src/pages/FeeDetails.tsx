import React from 'react';
import { HelpCircle, Link as LinkIcon, Maximize2, CreditCard, Download, ExternalLink } from 'lucide-react';

const feeHistory = [
  { id: 'PAY-2024-001', date: '2024-01-15', description: 'Semester 6 Tuition Fee', amount: '1,25,000', status: 'Paid', method: 'Net Banking' },
  { id: 'PAY-2023-082', date: '2023-07-10', description: 'Semester 5 Tuition Fee', amount: '1,25,000', status: 'Paid', method: 'UPI' },
  { id: 'PAY-2023-015', date: '2023-01-20', description: 'Semester 4 Tuition Fee', amount: '1,15,000', status: 'Paid', method: 'Debit Card' },
];

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-full bg-aums-bg-alt">
      {/* Pending Fees Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Pending Fee Details
          </h1>
          <div className="flex gap-1.5">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <LinkIcon size={12} strokeWidth={2.5} /> Link
            </button>
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
            <button className="p-1 border border-gray-300 bg-white rounded-sm text-gray-700 hover:bg-gray-50">
              <Maximize2 size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-aums-bg-alt p-6 rounded-sm border border-gray-200 flex flex-col items-center justify-center">
              <CreditCard size={40} className="text-aums-teal mb-4" />
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Outstanding Balance</p>
              <p className="text-4xl font-bold text-gray-800">₹ 0.00</p>
              <p className="text-xs text-green-600 font-bold mt-2">All dues are cleared!</p>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-center p-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">Next Payment Due:</span>
                <span className="text-sm font-bold text-gray-800">N/A</span>
              </div>
              <div className="flex justify-between items-center p-3 border-b border-gray-100">
                <span className="text-sm text-gray-600">Last Payment Date:</span>
                <span className="text-sm font-bold text-gray-800">Jan 15, 2024</span>
              </div>
              <button className="w-full mt-4 py-3 text-white text-sm font-bold rounded-sm shadow-sm hover:brightness-110 transition-all bg-aums-teal opacity-50 cursor-not-allowed">
                Make Online Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <h2 className="text-sm font-bold uppercase text-aums-teal">Payment History</h2>
          <button className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-300 rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
            <Download size={14} /> Download Ledger
          </button>
        </div>
        <div className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-aums-bg-main border-b border-gray-200">
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Transaction ID</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Amount</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Status</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {feeHistory.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-700">{row.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-medium">{row.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 font-bold text-right">₹ {row.amount}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-green-100 text-green-700 uppercase">
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-aums-teal hover:text-aums-teal-dark transition-colors">
                        <ExternalLink size={16} />
                      </button>
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
