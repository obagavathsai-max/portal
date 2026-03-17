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
    <div className="min-h-screen flex flex-col items-center justify-center p-4 font-['Open_Sans']" style={{ backgroundColor: '#81ccc4' }}>
      {/* Logo */}
      <div className="mb-8 flex flex-col items-center text-center">
        <img
          src="/exact-logo.png"
          alt="Amrita University Management System"
          className="w-full max-w-[320px] object-contain"
        />
      </div>

      {/* Card */}
      <div className="rounded-[12px] w-full max-w-[480px] overflow-hidden p-10 pt-8 shadow-sm" style={{ backgroundColor: '#e9edf2' }}>
        <h2 className="text-[44px] font-normal text-center mb-8" style={{ color: '#ffa100' }}>
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[19px] placeholder-gray-500 focus:outline-none transition-all"
              style={{ backgroundColor: '#dee3e9' }}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="Roll Number"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[19px] placeholder-gray-500 focus:outline-none transition-all"
              style={{ backgroundColor: '#dee3e9' }}
            />
          </div>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="University Email"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[19px] placeholder-gray-500 focus:outline-none transition-all"
              style={{ backgroundColor: '#dee3e9' }}
            />
          </div>
          <div className="relative">
            <input
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
                SIGN UP
              </button>
              <Link to="/login" className="text-[15px] hover:underline" style={{ color: '#2c7ba0' }}>
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-14 text-center">
        <p className="text-[19px] font-normal" style={{ color: '#7a9ea1' }}>
          Copyright © 2021 Amrita Technologies.
        </p>
      </div>
    </div>
  );
}
