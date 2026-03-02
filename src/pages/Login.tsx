import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'av.sc.u4aie23132' && password === 'niyathi@0125') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#26a69a' }}>
      {/* Logo */}
      <div className="mb-6 flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 shadow-inner">
          <img
            src="/amrita-icon.png"
            alt="Amrita Vishwa Vidyapeetham"
            className="h-16 object-contain"
          />
        </div>
        <p className="mt-3 text-white text-[15px] font-bold tracking-wide text-center drop-shadow-sm uppercase">Amrita University Management System</p>
      </div>

      {/* Login Card */}
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        <div className="px-8 py-10">
          <h2 className="text-3xl font-extrabold text-center mb-8 uppercase tracking-tighter" style={{ color: '#ffa100' }}>
            Sign In
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && <p className="text-red-600 text-xs text-center font-bold">{error}</p>}
            <div>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-[13px] text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#26a69a]/50 focus:bg-white transition-all"
              />
            </div>

            <div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-md text-[13px] text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#26a69a]/50 focus:bg-white transition-all"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-[13px] font-extrabold rounded-full uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all"
                style={{ backgroundColor: '#ffa100' }}
              >
                Login
              </button>
              <div className="flex flex-col items-end gap-1.5">
                <a href="#" className="text-[11px] font-bold hover:underline" style={{ color: '#26a69a' }}>OPAC Search</a>
                <a href="#" className="text-[11px] font-bold hover:underline" style={{ color: '#26a69a' }}>Forgot Password?</a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-10 text-white/80 text-[10px] font-medium tracking-widest uppercase">
        Copyright © 2021 Amrita Technologies.
      </p>

      {/* Sign Up Link */}
      <p className="mt-3 text-white/80 text-[11px] font-medium">
        New student?{' '}
        <Link to="/signup" className="text-white font-bold underline hover:text-white/90">Create account</Link>
      </p>
    </div>
  );
}
