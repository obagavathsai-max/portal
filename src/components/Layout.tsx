import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  ChevronDown,
  Menu,
  X,
  Mail,
  Home as HomeIcon,
  Bell,
  Globe,
  User,
  LogOut,
  Search,
  Heart,
  Calendar,
  Library as LibraryIcon
} from 'lucide-react';

interface MenuItem {
  name: string;
  path?: string;
  children?: { name: string; path: string }[];
}

const menuItems: MenuItem[] = [
  {
    name: 'Registration',
    children: [
      { name: 'Registered Courses', path: '/dashboard' },
    ]
  },
  {
    name: 'Exam Scores',
    children: [
      { name: 'View Attendance', path: '/attendance' },
      { name: 'View Marks', path: '/marks' },
      { name: 'View Grades', path: '/grades' },
    ]
  },
  {
    name: 'Fee',
    children: [
      { name: 'View Fee Details', path: '/fee-details' },
    ]
  },
  {
    name: 'Dues',
    children: [
      { name: 'Dues Details', path: '/dashboard' },
    ]
  },
  {
    name: 'Personal',
    children: [
      { name: 'Update Account', path: '/update-account' },
      { name: 'Student Profile', path: '/profile' },
      { name: 'ABCID Master', path: '/dashboard' },
    ]
  },
  {
    name: 'Library',
    children: [
      { name: 'Library Search', path: '/dashboard' },
    ]
  },
  {
    name: 'OPAC',
    children: [
      { name: 'OPAC Search', path: '/dashboard' },
    ]
  },
];

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['Exam Scores']);
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = (name: string) => {
    setExpandedMenus(prev =>
      prev.includes(name) ? prev.filter(m => m !== name) : [...prev, name]
    );
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  const isChildActive = (item: MenuItem) => {
    return item.children?.some(child => location.pathname === child.path);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: '#f5f5f5' }}>
      {/* TOP HEADER BAR */}
      <header style={{ backgroundColor: '#17a2b8' }} className="h-14 flex items-center justify-between px-3 z-50 shadow-md shrink-0">
        {/* Left: hamburger + logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center overflow-hidden bg-white">
              <img src="/amrita-icon.png" alt="Amrita" className="w-9 h-9 object-contain" />
            </div>
            <div className="hidden sm:block leading-[1.1]">
              <div className="text-white font-semibold text-[13px] tracking-tight">Amrita University</div>
              <div className="text-white font-semibold text-[12px] tracking-tight">Management System</div>
            </div>
          </div>
        </div>

        {/* Center/Right: welcome + datetime + icons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end text-white pr-3 border-r border-white/30">
            <span className="text-[11px] font-semibold">Welcome ORUGANTI BAGAVATH SAI</span>
            <span className="text-[10px] font-normal text-white/95">{formatDate(currentTime)} {formatTime(currentTime)}</span>
          </div>

          {/* Right: action icons */}
          <div className="flex items-center gap-0">
            {[Mail, HomeIcon, LibraryIcon, Calendar, Bell, Globe].map((Icon, i) => (
              <button key={i} className="w-8 h-8 rounded flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Icon size={16} strokeWidth={2} />
              </button>
            ))}
            <div className="relative group ml-1 flex items-center gap-1 text-white hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
              <User size={18} strokeWidth={2} />
              <ChevronDown size={14} className="text-white" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* MOBILE OVERLAY */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <aside
          className={`
            fixed top-14 bottom-0 left-0 z-40 w-[180px] shadow-lg flex flex-col
            transform transition-transform duration-200
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 lg:static lg:top-0 lg:h-auto
          `}
          style={{ backgroundColor: '#f57c00' }}
        >
          <div className="flex items-center justify-end p-2 px-3">
            <button className="bg-[#cca300] p-1 rounded-sm shadow-inner" onClick={() => setSidebarOpen(false)}>
              <Menu size={16} className="text-white" />
            </button>
          </div>

          {/* Main / LMS tabs */}
          <div className="flex px-1 gap-1 shrink-0 mb-3">
            <button className="flex-1 py-2 text-[11px] font-bold text-gray-800 flex items-center justify-center gap-2 bg-white rounded-sm shadow-sm">
              <div className="grid grid-cols-2 gap-[2px]">
                <div className="w-1 h-1 bg-gray-600"></div>
                <div className="w-1 h-1 bg-gray-600"></div>
                <div className="w-1 h-1 bg-gray-600"></div>
                <div className="w-1 h-1 bg-gray-600"></div>
              </div>
              Main
            </button>
            <button className="flex-1 py-2 text-[11px] font-bold text-white flex items-center justify-center gap-2 hover:bg-white/10 rounded-sm">
              <div className="grid grid-cols-2 gap-[2px]">
                <div className="w-1 h-1 bg-white"></div>
                <div className="w-1 h-1 bg-white"></div>
                <div className="w-1 h-1 bg-white"></div>
                <div className="w-1 h-1 bg-white"></div>
              </div>
              LMS
            </button>
          </div>

          {/* MAIN MENU label */}
          <div className="px-3 pb-1">
            <p className="text-[10px] font-bold text-white uppercase tracking-wider opacity-90">MAIN MENU</p>
          </div>

          {/* Nav items */}
          <nav className="flex-1 overflow-y-auto mt-2">
            {menuItems.map((item) => {
              const isExpanded = expandedMenus.includes(item.name);
              const childActive = isChildActive(item);

              return (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 text-[13px] font-medium transition-colors text-white hover:bg-[#d06900]`}
                  >
                    <span className="flex items-center gap-3">
                      <Heart size={15} className="text-white" fill="white" strokeWidth={0} />
                      {item.name}
                    </span>
                    <span className={`text-[11px] transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
                      &lt;
                    </span>
                  </button>

                  {isExpanded && item.children && (
                    <div className="bg-[#d06900] py-0.5">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.name}
                          to={child.path}
                          className={({ isActive }) =>
                            `flex items-center gap-3 pl-10 pr-3 py-2 text-[12px] font-normal transition-colors ${isActive ? 'bg-[#A4123F] text-white' : 'text-white hover:bg-[#b85a00]'
                            }`
                          }
                          onClick={() => setSidebarOpen(false)}
                        >
                          <Heart size={11} className="text-white shrink-0" fill="white" strokeWidth={0} />
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* FAVOURITES */}
            <div className="px-3 pt-6 pb-1">
              <p className="text-[10px] font-bold text-white uppercase tracking-wider opacity-90">FAVOURITES</p>
            </div>
          </nav>

          {/* Search bar at bottom */}
          <div className="p-4 bg-[#f57c00] mt-auto">
            <div className="flex items-center gap-2 border-b border-white/50 pb-1">
              <input
                type="text"
                placeholder="Ctrl + i to search..."
                className="bg-transparent text-[12px] text-white placeholder-white/70 outline-none w-full"
              />
              <Search size={18} className="text-white shrink-0" strokeWidth={1.5} />
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto bg-white">
          <div className="p-4 sm:p-5 lg:p-6 min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
