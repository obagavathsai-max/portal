import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // For demo purposes, just navigate to login
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans bg-aums-bg-login">
      {/* Logo and Title Section */}
      <div className="mb-4 flex flex-col items-center text-center">
        <img
          src="/exact-logo.png"
          alt="Amrita University Management System"
          className="w-full max-w-[400px] object-contain"
        />
      </div>

      {/* Signup Card */}
      <div className="rounded-[10px] w-full max-w-[450px] overflow-hidden p-10 pt-8 shadow-lg bg-aums-card-login">
        <h2 className="text-[48px] font-normal text-center mb-10 text-aums-orange">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-6">
          {error && <p className="text-aums-red-error text-[14px] text-center font-bold">{error}</p>}

          <div className="relative">
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[20px] placeholder-gray-500 focus:outline-none transition-all bg-aums-input-login"
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
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[20px] placeholder-gray-500 focus:outline-none transition-all bg-aums-input-login"
            />
          </div>

          <div className="relative">
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[20px] placeholder-gray-500 focus:outline-none transition-all bg-aums-input-login"
            />
          </div>

          <div className="flex flex-col pt-2">
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-10 py-3 text-white text-[18px] font-bold rounded-[6px] uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all bg-aums-orange"
              >
                SIGN UP
              </button>

              <Link to="/login" className="text-[16px] hover:underline text-aums-link-login">
                Back to Login
              </Link>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-14 text-center">
        <p className="text-[20px] font-normal text-aums-footer-login">
          Copyright © 2021 Amrita Technologies.
        </p>
      </div>
    </div>
  );
}
