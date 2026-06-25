import React from 'react';
import { CreditCard, FileText, Calendar, Receipt, ChevronRight, Clock, AlertCircle } from 'lucide-react';

const feeHistory = [
  { id: '1', year: '2023-24', semester: '5', amount: '₹1,25,000', status: 'Paid', date: '15-08-2023', ref: 'AMRT782910' },
  { id: '2', year: '2023-24', semester: '6', amount: '₹1,25,000', status: 'Pending', date: '-', ref: '-' },
  { id: '3', year: '2022-23', semester: '4', amount: '₹1,20,000', status: 'Paid', date: '20-01-2023', ref: 'AMRT661520' },
  { id: '4', year: '2022-23', semester: '3', amount: '₹1,20,000', status: 'Paid', date: '10-07-2022', ref: 'AMRT554432' },
];

export default function FeeDetails() {
  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="bg-white p-4 shadow-sm rounded-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-aums-teal"></div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Outstanding Fee Card */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 shadow-sm rounded-sm border-t-4 border-aums-orange">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-orange-50">
                <AlertCircle size={20} className="text-aums-orange" />
              </div>
              <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Payment Due</h2>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Outstanding</p>
                <p className="text-3xl font-black text-gray-800">₹1,25,000</p>
              </div>

              <div className="pt-4 border-t border-gray-50 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Academic Fee (Sem 6)</span>
                  <span className="text-gray-700 font-bold">₹1,25,000</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Hostel Fee</span>
                  <span className="text-green-600 font-bold">PAID</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-aums-teal text-white py-3 rounded font-bold uppercase tracking-widest hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-2">
                <CreditCard size={18} />
                Pay Online
              </button>
            </div>
          </div>
        </div>

        {/* Fee History Table */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-sm rounded-sm overflow-hidden border-t-2 border-aums-teal">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <div className="flex items-center gap-2 text-aums-teal">
                <Receipt size={18} />
                <h3 className="text-sm font-bold uppercase tracking-wider">Transaction History</h3>
              </div>
              <button className="text-[11px] font-bold text-aums-teal hover:underline flex items-center gap-1 uppercase tracking-wider">
                Download All Receipts <ChevronRight size={14} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-aums-bg-main">
                    <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Academic Year</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Semester</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Amount</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {feeHistory.map((fee) => (
                    <tr key={fee.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold text-gray-700">{fee.year}</td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">Sem {fee.semester}</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-black text-gray-800">{fee.amount}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${
                          fee.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {fee.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {fee.status === 'Paid' ? (
                          <button className="text-aums-teal hover:text-aums-teal-dark p-2 rounded hover:bg-aums-teal-light transition-colors">
                            <FileText size={18} />
                          </button>
                        ) : (
                          <button className="text-aums-orange hover:brightness-110 font-bold text-[11px] uppercase tracking-wider">
                            Pay Now
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
    </div>
  );
}
