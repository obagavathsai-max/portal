import React from 'react';
import { ChevronRight, CreditCard, Download, ExternalLink } from 'lucide-react';

const feeItems = [
  { description: 'Tuition Fee - Sem 4', amount: '₹ 1,25,000', dueDate: 'Jan 15, 2024', status: 'Paid' },
  { description: 'Hostel Fee - Sem 4', amount: '₹ 45,000', dueDate: 'Jan 15, 2024', status: 'Paid' },
  { description: 'Examination Fee', amount: '₹ 2,500', dueDate: 'Mar 10, 2024', status: 'Pending' },
];

export default function FeeDetails() {
  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded shadow-sm border border-gray-200">
        <div className="flex items-center gap-2">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
          <ChevronRight size={18} className="text-gray-400" />
          <span className="text-sm font-medium text-gray-600">Academic Year 2023-24</span>
        </div>

        <button className="flex items-center gap-2 px-4 py-1.5 bg-aums-teal text-white rounded text-xs font-bold hover:brightness-105 transition-all">
          <ExternalLink size={14} />
          Payment History
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
              <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Current Semester Fees</h2>
            </div>
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-aums-bg-main border-b border-gray-200">
                  <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-500">Description</th>
                  <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-500 text-right">Amount</th>
                  <th className="px-4 py-3 font-bold uppercase text-[11px] text-gray-500 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {feeItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <p className="font-bold text-gray-800">{item.description}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">Due Date: {item.dueDate}</p>
                    </td>
                    <td className="px-4 py-4 text-right font-bold text-gray-700">{item.amount}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`inline-block px-2 py-1 rounded text-[10px] font-bold uppercase border ${
                        item.status === 'Paid' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-200 bg-aums-teal">
              <h2 className="text-sm font-bold text-white uppercase tracking-wide">Fee Summary</h2>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Total Fee</span>
                <span className="font-bold text-gray-800">₹ 1,72,500</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Total Paid</span>
                <span className="font-bold text-green-600">₹ 1,70,000</span>
              </div>
              <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                <span className="text-sm font-bold text-gray-800 uppercase">Outstanding</span>
                <span className="text-lg font-bold text-red-600">₹ 2,500</span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-aums-orange text-white rounded font-bold text-sm shadow-sm hover:brightness-105 active:scale-[0.98] transition-all">
                <CreditCard size={18} />
                Pay Outstanding
              </button>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border border-gray-200 flex items-center gap-4 hover:bg-gray-50 cursor-pointer transition-colors group">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-100">
              <Download size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Fee Receipt</p>
              <p className="text-[11px] text-gray-500">Download Sem 4 receipt</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
