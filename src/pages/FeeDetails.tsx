import React from 'react';
import { CreditCard, DollarSign, Download, ExternalLink } from 'lucide-react';

export default function FeeDetails() {
  const fees = [
    { type: 'Tuition Fee', amount: '1,50,000', status: 'Paid', date: '12-08-2023', ref: 'AMR/2023/10293' },
    { type: 'Hostel Fee', amount: '65,000', status: 'Paid', date: '15-08-2023', ref: 'AMR/2023/10542' },
    { type: 'Development Fee', amount: '15,000', status: 'Paid', date: '12-08-2023', ref: 'AMR/2023/10294' },
    { type: 'Examination Fee', amount: '2,500', status: 'Pending', date: '-', ref: '-' },
  ];

  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)]">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            Fee Payment Details
          </h1>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-aums-bg-alt rounded-sm border-l-4 border-aums-teal">
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Total Fees Paid</p>
            <p className="text-2xl font-bold text-aums-teal">₹ 2,30,000</p>
          </div>
          <div className="p-4 bg-aums-bg-alt rounded-sm border-l-4 border-aums-red-error">
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Pending Dues</p>
            <p className="text-2xl font-bold text-aums-red-error">₹ 2,500</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-aums-bg-main">
                <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider border-b border-gray-200">Fee Type</th>
                <th className="px-4 py-3 text-right text-[11px] font-bold uppercase tracking-wider border-b border-gray-200">Amount (₹)</th>
                <th className="px-4 py-3 text-center text-[11px] font-bold uppercase tracking-wider border-b border-gray-200">Status</th>
                <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider border-b border-gray-200">Payment Date</th>
                <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-wider border-b border-gray-200">Reference No</th>
                <th className="px-4 py-3 text-center text-[11px] font-bold uppercase tracking-wider border-b border-gray-200">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {fees.map((fee, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-3 text-[13px] font-medium text-gray-700">{fee.type}</td>
                  <td className="px-4 py-3 text-right text-[13px] font-bold text-gray-800">{fee.amount}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${fee.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                      {fee.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-[13px] text-gray-600">{fee.date}</td>
                  <td className="px-4 py-3 text-[13px] text-gray-500 font-mono">{fee.ref}</td>
                  <td className="px-4 py-3 text-center">
                    {fee.status === 'Paid' ? (
                      <button className="text-aums-teal hover:text-aums-teal-dark p-1" title="Download Receipt">
                        <Download size={16} />
                      </button>
                    ) : (
                      <button className="text-aums-orange hover:text-aums-orange-dark p-1" title="Pay Online">
                        <ExternalLink size={16} />
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
  );
}
