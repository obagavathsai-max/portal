import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Calendar,
  GraduationCap,
  FileText,
  User,
  LogOut,
  Bell,
  Settings,
  HelpCircle,
  CreditCard,
  Key,
  Database
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { id: string; label: string; path: string }[];
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
  { id: 'attendance', label: 'Attendance', icon: <Calendar size={18} />, path: '/attendance' },
  {
    id: 'exam-scores',
    label: 'Exam Scores',
    icon: <FileText size={18} />,
    subItems: [
      { id: 'grades', label: 'Grades', path: '/grades' },
      { id: 'marks', label: 'Marks', path: '/marks' },
    ]
  },
  { id: 'fees', label: 'Fee Details', icon: <CreditCard size={18} />, path: '/fee-details' },
  { id: 'abc-id', label: 'ABC ID Master', icon: <Database size={18} />, path: '/abc-id-master' },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings size={18} />,
    subItems: [
      { id: 'update-account', label: 'Update Account', path: '/update-account' },
      { id: 'change-password', label: 'Change Password', path: '/change-password' },
    ]
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>(['exam-scores', 'settings']);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleExpand = (id: string) => {
    setExpandedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-aums-bg-main">
      {/* Top Header */}
      <header className="h-14 flex items-center justify-between px-3 z-50 shadow-md shrink-0 bg-aums-teal">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 hover:bg-white/10 rounded-md transition-colors text-white"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <img src="/exact-logo.png" alt="Amrita" className="h-8 brightness-0 invert" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex flex-col items-end mr-2">
            <span className="text-white text-[13px] font-bold leading-tight">AV.SC.U4AIE23132</span>
            <span className="text-white/80 text-[11px] leading-tight">NIYATHI S RAJESH</span>
          </div>
          <button className="p-2 text-white/90 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          <Link to="/profile" className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
          </Link>
          <button
            onClick={handleLogout}
            className="p-2 text-white/90 hover:text-white transition-colors"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`shrink-0 transition-all duration-300 ease-in-out z-40 flex flex-col bg-aums-orange ${sidebarOpen ? 'w-64' : 'w-0 overflow-hidden'
            }`}
        >
          {/* Sidebar Top Controls */}
          <div className="p-2 flex justify-end">
            <button className="bg-aums-orange-dark p-1 rounded-sm shadow-inner text-white" onClick={() => setSidebarOpen(false)}>
              <ChevronDown size={14} className="rotate-90" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto custom-scrollbar pt-2">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 text-[13px] font-medium transition-colors text-white ${expandedItems.includes(item.id) ? 'bg-aums-pink' : 'hover:bg-aums-orange-dark'}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="opacity-80">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      {expandedItems.includes(item.id) ? (
                        <ChevronDown size={14} className="opacity-60" />
                      ) : (
                        <ChevronRight size={14} className="opacity-60" />
                      )}
                    </button>
                    {expandedItems.includes(item.id) && (
                      <div className="bg-aums-pink py-0.5">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.id}
                            to={sub.path}
                            className={`flex items-center gap-3 pl-11 pr-3 py-2 text-[12.5px] transition-colors ${isActive(sub.path)
                                ? 'bg-white/20 text-white font-bold'
                                : 'text-white/90 hover:bg-white/10'
                              }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path || '#'}
                    className={`flex items-center gap-3 px-3 py-2.5 text-[13px] font-medium transition-colors ${isActive(item.path || '')
                        ? 'bg-white/20 text-white font-bold'
                        : 'text-white hover:bg-aums-orange-dark'
                      }`}
                  >
                    <span className="opacity-80">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Support Sidebar Footer */}
          <div className="p-4 bg-aums-orange mt-auto">
            <h3 className="text-white text-[11px] font-bold uppercase tracking-wider mb-3 opacity-80">Quick Support</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white text-[11px]">
                <HelpCircle size={14} className="opacity-70" />
                <span>Help Desk</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-aums-bg-main">
          <div className="p-4 md:p-6 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
