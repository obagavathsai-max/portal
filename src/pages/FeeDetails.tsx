import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4 bg-aums-bg-alt min-h-[calc(100vh-120px)] p-5 rounded-sm">
      <div className="bg-white border border-gray-300 rounded-sm shadow-sm">
        <div className="px-5 py-3 border-b border-gray-200">
          <h1 className="text-base font-bold uppercase text-aums-teal">
            FEE PAYMENT DETAILS
          </h1>
        </div>

        <div className="p-5 text-center py-10">
          <p className="text-gray-500 italic">No pending fee details available at the moment.</p>
        </div>
      </div>
    </div>
  );
}
