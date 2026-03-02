import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Link as LinkIcon, HelpCircle, Maximize2, Star, Home, Menu } from 'lucide-react';

const courseTabs = [
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..Re.AIE.1...',
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..2023.R.AIE.16...',
  'B.Tech..2023.R.AIE.16...',
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function MiniCalendar() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthName = viewDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const isToday = (d: number | null) =>
    d !== null &&
    d === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const rows: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));

  return (
    <div className="text-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-sm" style={{ color: '#26a69a' }}>{monthName}</span>
        <div className="flex gap-1">
          <button
            onClick={() => setViewDate(new Date(year, month - 1, 1))}
            className="px-2 py-0.5 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
          >&lt;</button>
          <button
            onClick={() => setViewDate(new Date())}
            className="px-2 py-0.5 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 text-xs"
          >Today</button>
          <button
            onClick={() => setViewDate(new Date(year, month + 1, 1))}
            className="px-2 py-0.5 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
          >&gt;</button>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {DAYS.map(d => (
              <th key={d} className="text-center py-1 text-gray-500 font-semibold">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => {
                const isFri = (ri * 7 + ci) % 7 === 5;
                const isSat = (ri * 7 + ci) % 7 === 6;
                return (
                  <td key={ci} className="text-center py-1">
                    {cell !== null ? (
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-sm text-xs cursor-pointer
                          ${isToday(cell) ? 'font-bold' : ''}
                          ${isFri || isSat ? '' : ''}
                        `}
                        style={
                          isToday(cell)
                            ? { backgroundColor: '#ffe082', border: '1px solid #ffd54f' }
                            : isFri || isSat
                              ? { color: '#26a69a' }
                              : { color: '#333' }
                        }
                      >
                        {cell}
                      </span>
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="space-y-4">
      {/* Course Tabs */}
      <div className="flex flex-wrap gap-2 pt-2">
        {/* Home tab */}
        <button
          className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-bold text-white shadow-sm transition-opacity hover:opacity-90 active:scale-95"
          style={{ backgroundColor: '#26a69a' }}
        >
          <Home size={13} className="text-white" /> Home <ChevronDown size={14} className="text-white/70" />
        </button>

        {/* Course tabs */}
        {courseTabs.map((tab, i) => (
          <button
            key={i}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[12px] font-semibold shadow-sm text-gray-700 transition-colors hover:bg-[#b2dfdb] group active:scale-95"
            style={{ backgroundColor: '#e0f2f1' }}
          >
            <Star size={13} className="shrink-0 text-[#26a69a] fill-[#26a69a]" />
            <span className="truncate max-w-[200px]">{tab}</span>
            <ChevronDown size={14} className="shrink-0 text-[#26a69a]/60 group-hover:text-[#26a69a]" />
          </button>
        ))}
      </div>

      {/* OVERVIEW heading */}
      <div className="flex items-center gap-2 mt-6 mb-3">
        <div className="grid grid-cols-2 gap-[2px]">
          <div className="w-1.5 h-1.5 bg-[#26a69a]"></div>
          <div className="w-1.5 h-1.5 bg-[#26a69a]"></div>
          <div className="w-1.5 h-1.5 bg-[#26a69a]"></div>
          <div className="w-1.5 h-1.5 bg-[#26a69a]"></div>
        </div>
        <h2 className="text-[14px] font-bold text-[#26a69a] uppercase tracking-wide">Overview</h2>
      </div>

      {/* Grid: Message + Calendar */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
        {/* Message of the Day */}
        <div className="xl:col-span-8 bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200" style={{ backgroundColor: '#e0f2f1' }}>
            <span className="text-[13px] font-semibold text-[#26a69a]">Message Of The Day</span>
            <div className="flex gap-1.5">
              <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
                <LinkIcon size={12} strokeWidth={2.5} /> Link
              </button>
              <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
                <HelpCircle size={12} strokeWidth={2.5} /> Help
              </button>
              <button className="p-1 border border-gray-300 bg-white rounded-sm text-gray-700 hover:bg-gray-50">
                <Maximize2 size={13} strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div className="p-5">
            <div className="mb-4">
              <button className="px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">Options</button>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-[18px] text-[#A4123F]">Om Amriteswaryai Namah</p>

              <p className="text-[15px] font-bold text-gray-800 leading-relaxed max-w-2xl">
                Everything happens spontaneously when you distance yourself from your mind.
              </p>

              <div className="pt-2">
                <p className="text-[14px] font-bold text-[#A4123F]">Chancellor,</p>
                <p className="text-[14px] font-bold text-[#A4123F]">Sri Mata Amritanandamayi Devi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="xl:col-span-4 bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200" style={{ backgroundColor: '#e0f2f1' }}>
            <span className="text-[13px] font-semibold text-[#26a69a]">Calendar</span>
            <div className="flex gap-1.5">
              <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
                <LinkIcon size={12} strokeWidth={2.5} /> Link
              </button>
              <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
                <HelpCircle size={12} strokeWidth={2.5} /> Help
              </button>
            </div>
          </div>
          <div className="p-4">
            <MiniCalendar />
          </div>
        </div>
      </div>

      {/* Home Information Display */}
      <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden mt-2">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200" style={{ backgroundColor: '#e0f2f1' }}>
          <span className="text-[13px] font-semibold text-[#26a69a]">Home Information Display</span>
          <div className="flex gap-1.5">
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              ✏️ Edit
            </button>
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <LinkIcon size={12} strokeWidth={2.5} /> Link
            </button>
            <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 bg-white rounded-sm text-[11px] font-bold text-gray-700 hover:bg-gray-50">
              <HelpCircle size={12} strokeWidth={2.5} /> Help
            </button>
            <button className="p-1 border border-gray-300 bg-white rounded-sm text-gray-700 hover:bg-gray-50">
              <Maximize2 size={13} strokeWidth={2.5} />
            </button>
          </div>
        </div>
        <div className="p-5 text-sm text-gray-700 leading-relaxed font-medium">
          <p>Welcome to Amrita University Management System. Use the left menu to navigate to your courses, attendance, grades, and more.</p>
        </div>
      </div>
    </div>
  );
}
