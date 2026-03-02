import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#26a69a' }}>
      {/* Logo */}
      <div className="mb-6 flex flex-col items-center">
        <img
          src="/amrita-icon.png"
          alt="Amrita Vishwa Vidyapeetham"
          className="h-20 object-contain"
        />
        <p className="mt-2 text-white text-sm font-semibold tracking-wide">Amrita University Management System</p>
      </div>

      {/* Login Card */}
      <div className="bg-white rounded shadow-lg w-full max-w-sm mx-4">
        <div className="px-8 py-8">
          <h2 className="text-2xl font-semibold text-center mb-6" style={{ color: '#f57c00' }}>
            Sign In
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-teal-400 focus:bg-white"
              />
            </div>

            <div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-teal-400 focus:bg-white"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="px-6 py-2 text-white text-sm font-bold rounded uppercase tracking-wide"
                style={{ backgroundColor: '#f57c00' }}
              >
                Login
              </button>
              <div className="flex flex-col items-end gap-1">
                <a href="#" className="text-xs" style={{ color: '#26a69a' }}>OPAC Search</a>
                <a href="#" className="text-xs" style={{ color: '#26a69a' }}>Can't access your account?</a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-white/70 text-xs">
        Copyright © 2021 Amrita Technologies.
      </p>

      {/* Sign Up Link */}
      <p className="mt-2 text-white/70 text-xs">
        New student?{' '}
        <Link to="/signup" className="text-white underline">Create account</Link>
      </p>
    </div>
  );
}
