import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.toLowerCase() === 'av.sc.u4aie23132' && password === 'niyathi@0125') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-['Open_Sans']" style={{ backgroundColor: '#81ccc4' }}>
      {/* Logo and Title Section */}
      <div className="mb-8 flex flex-col items-center text-center">
        <img
          src="/exact-logo.png"
          alt="Amrita University Management System"
          className="w-full max-w-[320px] object-contain"
        />
      </div>

      {/* Login Card */}
      <div className="rounded-[12px] w-full max-w-[480px] overflow-hidden p-10 pt-8 shadow-sm" style={{ backgroundColor: '#e9edf2' }}>
        <h2 className="text-[44px] font-normal text-center mb-8" style={{ color: '#ffa100' }}>
          Sign In
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && <p className="text-red-600 text-[14px] text-center font-bold">{error}</p>}

          <div className="relative">
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[19px] placeholder-gray-500 focus:outline-none transition-all"
              style={{ backgroundColor: '#dee3e9' }}
            />
          </div>

          <div className="relative">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[19px] placeholder-gray-500 focus:outline-none transition-all"
              style={{ backgroundColor: '#dee3e9' }}
            />
          </div>

          <div className="flex flex-col pt-2">
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-8 py-2.5 text-white text-[17px] font-bold rounded-[4px] uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all"
                style={{ backgroundColor: '#ffa100' }}
              >
                LOGIN
              </button>

              <a href="#" className="text-[15px] hover:underline" style={{ color: '#2c7ba0' }}>
                OPAC Search
              </a>
            </div>

            <div className="flex justify-end pt-3">
              <a href="#" className="text-[15px] hover:underline" style={{ color: '#2c7ba0' }}>
                Can't access your account?
              </a>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-14 text-center">
        <p className="text-[19px] font-normal" style={{ color: '#7a9ea1' }}>
          Copyright © 2021 Amrita Technologies.
        </p>
      </div>

      {/* Hidden Sign Up Link for maintenance */}
      <div className="mt-4 opacity-0 pointer-events-none">
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}
