import React from 'react';
import { HelpCircle, CreditCard, Download, Receipt } from 'lucide-react';

interface FeeRecord {
  semester: string;
  category: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending';
}

const feeData: FeeRecord[] = [
  { semester: 'Semester 4', category: 'Tuition Fee', amount: 150000, dueDate: 'July 15, 2024', status: 'Pending' },
  { semester: 'Semester 4', category: 'Bus Fee', amount: 12000, dueDate: 'July 15, 2024', status: 'Pending' },
  { semester: 'Semester 3', category: 'Tuition Fee', amount: 150000, dueDate: 'January 10, 2024', status: 'Paid' },
  { semester: 'Semester 3', category: 'Exam Fee', amount: 2500, dueDate: 'January 10, 2024', status: 'Paid' },
];

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-sm shadow-sm border-l-4 border-aums-teal">
        <div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
          <p className="text-xs text-gray-500 mt-1">View your payment history and outstanding dues</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-bold rounded shadow-sm hover:brightness-110 transition-all bg-aums-teal">
            <CreditCard size={16} /> Pay Online
          </button>
        </div>
      </div>

      {/* Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-sm border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Total Outstanding</p>
            <p className="text-2xl font-bold text-aums-red-error mt-1">₹ 1,62,000</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
            <Receipt className="text-aums-red-error" size={24} />
          </div>
        </div>
        <div className="bg-white p-5 rounded-sm border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Next Due Date</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">15 July 2024</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
            <Download className="text-blue-500" size={24} />
          </div>
        </div>
      </div>

      {/* Fee Table */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-aums-teal-light">
          <span className="text-[13px] font-semibold text-aums-teal">Payment Transactions</span>
          <div className="flex gap-1.5">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-aums-bg-main border-b border-gray-200">
                <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase">Semester</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase">Category</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase">Due Date</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase text-right">Amount</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase text-center">Status</th>
                <th className="px-4 py-3 text-[11px] font-bold text-gray-600 uppercase text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {feeData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-3 text-sm font-semibold text-gray-800">{row.semester}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{row.category}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{row.dueDate}</td>
                  <td className="px-4 py-3 text-sm font-bold text-gray-800 text-right">₹ {row.amount.toLocaleString()}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase
                      ${row.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-aums-red-error'}
                    `}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {row.status === 'Paid' ? (
                      <button className="text-aums-teal hover:underline text-xs font-bold">Receipt</button>
                    ) : (
                      <button className="text-aums-orange hover:underline text-xs font-bold">Pay Now</button>
                    )}
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
