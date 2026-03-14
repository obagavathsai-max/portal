import React from 'react';

export default function FeeDetails() {
  const fees = [
    { semester: 1, type: 'Tuition Fee', amount: 150000, status: 'Paid', date: '2023-07-15' },
    { semester: 1, type: 'Hostel Fee', amount: 45000, status: 'Paid', date: '2023-07-15' },
    { semester: 2, type: 'Tuition Fee', amount: 150000, status: 'Paid', date: '2024-01-10' },
    { semester: 2, type: 'Hostel Fee', amount: 45000, status: 'Paid', date: '2024-01-10' },
    { semester: 3, type: 'Tuition Fee', amount: 165000, status: 'Paid', date: '2024-07-20' },
    { semester: 3, type: 'Hostel Fee', amount: 50000, status: 'Paid', date: '2024-07-20' },
    { semester: 4, type: 'Tuition Fee', amount: 165000, status: 'Paid', date: '2025-01-12' },
    { semester: 4, type: 'Hostel Fee', amount: 50000, status: 'Paid', date: '2025-01-12' },
    { semester: 5, type: 'Tuition Fee', amount: 180000, status: 'Paid', date: '2025-07-18' },
    { semester: 5, type: 'Hostel Fee', amount: 55000, status: 'Paid', date: '2025-07-18' },
  ];

  return (
    <div className="space-y-4" style={{ backgroundColor: 'var(--color-aums-bg-main)', minHeight: 'calc(100vh - 120px)' }}>
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase" style={{ color: 'var(--color-aums-teal)' }}>
            FEE PAYMENT DETAILS
          </h1>
        </div>

        <div className="p-5 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr style={{ backgroundColor: 'var(--color-aums-teal)', color: 'white' }}>
                <th className="border border-gray-200 p-3 text-left">Semester</th>
                <th className="border border-gray-200 p-3 text-left">Fee Type</th>
                <th className="border border-gray-200 p-3 text-right">Amount (₹)</th>
                <th className="border border-gray-200 p-3 text-center">Status</th>
                <th className="border border-gray-200 p-3 text-left">Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[var(--color-aums-bg-main)]'}>
                  <td className="border border-gray-200 p-3">{fee.semester}</td>
                  <td className="border border-gray-200 p-3">{fee.type}</td>
                  <td className="border border-gray-200 p-3 text-right">{fee.amount.toLocaleString()}</td>
                  <td className="border border-gray-200 p-3 text-center">
                    <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                      {fee.status}
                    </span>
                  </td>
                  <td className="border border-gray-200 p-3">{fee.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
