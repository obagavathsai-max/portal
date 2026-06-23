import React, { useState } from 'react';
import { CreditCard, Calendar, Download, ChevronRight, AlertCircle } from 'lucide-react';

const feeHistory = [
  { id: 1, type: 'Tuition Fee', semester: 'Semester 5', amount: '62,500', status: 'Paid', date: '15-Aug-2023', ref: 'AMR2023081501' },
  { id: 2, type: 'Hostel Fee', semester: 'Semester 5', amount: '45,000', status: 'Paid', date: '15-Aug-2023', ref: 'AMR2023081502' },
  { id: 3, type: 'Examination Fee', semester: 'Semester 5', amount: '2,500', status: 'Pending', date: '-', ref: '-' },
];

export default function FeeDetails() {
  return (
    <div className="space-y-4 min-h-[calc(100vh-120px)] bg-aums-bg-alt">
      {/* Header Card */}
      <div className="bg-white rounded shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Total Balance Card */}
            <div className="bg-gradient-to-br from-aums-teal to-aums-teal-dark p-6 rounded-xl text-white shadow-lg relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                <CreditCard size={120} />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Outstanding Balance</p>
              <h2 className="text-3xl font-bold mt-2">₹ 2,500</h2>
              <div className="mt-8 flex items-center justify-between">
                <button className="bg-white text-aums-teal px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">
                  PAY NOW
                </button>
                <div className="flex items-center gap-1 text-[10px] opacity-80">
                  <Calendar size={12} />
                  Due: 30-Nov-2023
                </div>
              </div>
            </div>

            {/* Account Info */}
            <div className="lg:col-span-2 border border-gray-100 rounded-xl p-6 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Account Holder</p>
                  <p className="text-sm font-bold text-gray-700">ORUGANTI BAGAVATH SAI</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Student ID</p>
                  <p className="text-sm font-bold text-gray-700">AV.SC.U4AIE23132</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Bank Name</p>
                  <p className="text-sm font-bold text-gray-700">State Bank of India (Amritapuri)</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Virtual Account No</p>
                  <p className="text-sm font-bold text-gray-700">AMRUV000123132</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Transaction History</h3>
              <button className="text-xs font-bold text-aums-teal hover:underline flex items-center gap-1">
                <Download size={14} /> Download Ledger
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-aums-bg-main">
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Fee Type</th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Period</th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Amount (₹)</th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Reference</th>
                    <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {feeHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-gray-700">{item.type}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.semester}</td>
                      <td className="px-4 py-3 text-sm font-bold text-gray-800">{item.amount}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${item.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                          }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">{item.date}</td>
                      <td className="px-4 py-3 text-xs font-mono text-gray-400">{item.ref}</td>
                      <td className="px-4 py-3 text-right">
                        {item.status === 'Paid' ? (
                          <button className="p-1.5 text-gray-400 hover:text-aums-teal hover:bg-gray-100 rounded-full transition-all">
                            <Download size={16} />
                          </button>
                        ) : (
                          <button className="flex items-center gap-1 text-[11px] font-bold text-aums-orange hover:underline">
                            PAY NOW <ChevronRight size={14} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex gap-3">
        <AlertCircle className="text-aums-orange shrink-0" size={20} />
        <p className="text-xs text-orange-800 leading-relaxed">
          <strong>Note:</strong> All online payments are subject to a processing fee charged by the payment gateway.
          Please allow 24-48 hours for the transaction status to reflect in your student portal.
          In case of payment failures where amount is debited, please contact the accounts department.
        </p>
      </div>
    </div>
  );
}
