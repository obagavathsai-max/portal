import React from 'react';
import { CreditCard, AlertCircle, FileText, Download } from 'lucide-react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      {/* Header */}
      <div className="bg-white p-4 rounded-sm shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-2">
          <div className="grid grid-cols-2 gap-[2px]">
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
            <div className="w-1.5 h-1.5 bg-aums-teal"></div>
          </div>
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Details
          </h1>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="p-5">
          <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 flex gap-3">
            <AlertCircle className="shrink-0 mt-0.5" size={20} />
            <div>
              <p className="font-bold text-sm mb-1">Fee Payment Notification</p>
              <p className="text-xs">The deadline for Semester 6 tuition fee payment is 15th July 2024. Please ensure all dues are cleared to avoid late fine.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-[13px] font-bold text-gray-700 border-b border-gray-100 pb-2 uppercase tracking-wider mb-4">Pending Dues</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[13px]">
                  <thead>
                    <tr className="bg-aums-bg-main text-gray-700">
                      <th className="px-4 py-2 font-bold border border-gray-200">Description</th>
                      <th className="px-4 py-2 font-bold border border-gray-200">Amount (₹)</th>
                      <th className="px-4 py-2 font-bold border border-gray-200">Due Date</th>
                      <th className="px-4 py-2 font-bold border border-gray-200">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 border border-gray-200">Tuition Fee - Sem 6</td>
                      <td className="px-4 py-3 border border-gray-200 font-bold">1,25,000.00</td>
                      <td className="px-4 py-3 border border-gray-200">15-07-2024</td>
                      <td className="px-4 py-3 border border-gray-200">
                        <button className="text-white px-4 py-1 rounded text-[11px] font-bold bg-aums-orange hover:opacity-90 transition-opacity">
                          PAY NOW
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-[13px] font-bold text-gray-700 border-b border-gray-100 pb-2 uppercase tracking-wider mb-4">Payment History</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[13px]">
                  <thead>
                    <tr className="bg-aums-bg-main text-gray-700">
                      <th className="px-4 py-2 font-bold border border-gray-200">Transaction ID</th>
                      <th className="px-4 py-2 font-bold border border-gray-200">Date</th>
                      <th className="px-4 py-2 font-bold border border-gray-200">Description</th>
                      <th className="px-4 py-2 font-bold border border-gray-200">Amount (₹)</th>
                      <th className="px-4 py-2 font-bold border border-gray-200">Status</th>
                      <th className="px-4 py-2 font-bold border border-gray-200">Receipt</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { id: 'TXN892341', date: '10-01-2024', desc: 'Tuition Fee - Sem 5', amt: '1,25,000.00', status: 'Success' },
                      { id: 'TXN771203', date: '05-01-2024', desc: 'Hostel Fee - Sem 5', amt: '45,000.00', status: 'Success' },
                      { id: 'TXN665129', date: '12-07-2023', desc: 'Tuition Fee - Sem 4', amt: '1,15,000.00', status: 'Success' },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="px-4 py-3 border border-gray-200 font-mono text-[12px]">{row.id}</td>
                        <td className="px-4 py-3 border border-gray-200">{row.date}</td>
                        <td className="px-4 py-3 border border-gray-200">{row.desc}</td>
                        <td className="px-4 py-3 border border-gray-200 font-medium">{row.amt}</td>
                        <td className="px-4 py-3 border border-gray-200">
                          <span className="text-green-600 font-bold uppercase text-[10px]">SUCCESS</span>
                        </td>
                        <td className="px-4 py-3 border border-gray-200">
                          <button className="text-aums-teal hover:underline flex items-center gap-1 font-bold text-[11px]">
                            <Download size={14} /> RECEIPT
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
      </div>
    </div>
  );
}
