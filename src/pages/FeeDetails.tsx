import React from 'react';
import { CreditCard, DollarSign, Download, Printer, ChevronDown, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const feeData = [
  { id: 1, description: 'Tuition Fee - Semester 1', amount: 150000, dueDate: '15 Jul 2023', status: 'Paid', date: '10 Jul 2023', reference: 'PAY-928374' },
  { id: 2, description: 'Hostel & Mess Fee - Semester 1', amount: 65000, dueDate: '15 Jul 2023', status: 'Paid', date: '12 Jul 2023', reference: 'PAY-928401' },
  { id: 3, description: 'Caution Deposit', amount: 10000, dueDate: '15 Jul 2023', status: 'Paid', date: '10 Jul 2023', reference: 'PAY-928375' },
  { id: 4, description: 'Tuition Fee - Semester 2', amount: 150000, dueDate: '15 Dec 2023', status: 'Pending', date: '-', reference: '-' },
];

export default function FeeDetails() {
  const totalPaid = feeData.filter(f => f.status === 'Paid').reduce((acc, curr) => acc + curr.amount, 0);
  const totalPending = feeData.filter(f => f.status === 'Pending').reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)] p-5">
      {/* Page Header */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-8 bg-aums-teal"></div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Payment Details
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-aums-teal text-white text-xs font-bold rounded-sm shadow-sm hover:opacity-90 active:scale-95 transition-all">
            <Download size={14} /> Fee Receipt
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 border border-gray-200 rounded-sm shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-aums-teal">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Total Amount</p>
            <p className="text-xl font-black text-gray-800">₹ {(totalPaid + totalPending).toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-white p-5 border border-gray-200 rounded-sm shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
            <CheckCircle size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Paid Amount</p>
            <p className="text-xl font-black text-green-600">₹ {totalPaid.toLocaleString()}</p>
          </div>
        </div>
        <div className="bg-white p-5 border border-gray-200 rounded-sm shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-aums-red-error">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Pending Amount</p>
            <p className="text-xl font-black text-aums-red-error">₹ {totalPending.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-aums-bg-main text-gray-500 text-[11px] font-bold uppercase tracking-wider">
                <th className="px-6 py-4 border-b border-gray-100">Fee Description</th>
                <th className="px-6 py-4 border-b border-gray-100 text-right">Amount</th>
                <th className="px-6 py-4 border-b border-gray-100 text-center">Due Date</th>
                <th className="px-6 py-4 border-b border-gray-100 text-center">Status</th>
                <th className="px-6 py-4 border-b border-gray-100">Payment Ref</th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              {feeData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-100">
                    <p className="font-bold text-gray-700">{row.description}</p>
                    {row.date !== '-' && <p className="text-[11px] text-gray-400">Paid on {row.date}</p>}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100 text-right font-black text-gray-800">
                    ₹ {row.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100 text-center text-gray-600 font-medium">
                    {row.dueDate}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100 text-center">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${row.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-aums-red-error'
                      }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100 font-mono text-[11px] text-gray-500">
                    {row.reference}
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
