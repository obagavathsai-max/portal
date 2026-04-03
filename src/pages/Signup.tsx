import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-aums-bg-login">
      {/* Logo */}
      <div className="mb-6 flex flex-col items-center">
        <div className="bg-white p-2 rounded-lg shadow-lg">
          <img
            src="/exact-logo.png"
            alt="Logo"
            className="h-20 object-contain"
          />
        </div>
      </div>

      {/* Card */}
      <div className="rounded shadow-lg w-full max-w-sm mx-4 bg-aums-card-login">
        <div className="px-8 py-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-aums-orange">
            Create Account
          </h2>

          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-teal-400"
            />
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="Roll Number (e.g. AV.SC.U4AIE23132)"
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-teal-400"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="University Email"
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-teal-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-3 py-2.5 border border-gray-300 rounded text-sm text-gray-700 bg-gray-50 focus:outline-none focus:border-teal-400"
            />

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="px-6 py-2 text-white text-sm font-bold rounded uppercase tracking-wide bg-aums-orange"
              >
                Sign Up
              </button>
              <Link to="/login" className="text-xs text-aums-teal">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>

      <p className="mt-8 text-aums-footer-login text-xs">
        Copyright © 2021 Amrita Technologies.
      </p>
    </div>
  );
}
