import React from 'react';

export default function FeeDetails() {
  return (
    <div className="space-y-4">
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 bg-aums-teal-light">
          <h1 className="text-[14px] font-bold text-aums-teal uppercase tracking-wide">
            Fee Details
          </h1>
        </div>
        <div className="p-8 text-center">
          <div className="inline-block p-12 bg-gray-50 rounded-full mb-4">
            <span className="text-4xl text-gray-300">💰</span>
          </div>
          <p className="text-gray-500 italic">No pending fee details available for the current academic year.</p>
        </div>
      </div>
    </div>
  );
}
