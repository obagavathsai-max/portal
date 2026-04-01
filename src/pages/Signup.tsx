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
        <img
          src="/exact-logo.png"
          alt="Amrita University Management System"
          className="w-full max-w-[400px] object-contain"
        />
      </div>

      {/* Card */}
      <div className="rounded-[10px] w-full max-w-[450px] overflow-hidden p-10 pt-8 shadow-lg bg-aums-card-login mx-4">
        <div className="">
          <h2 className="text-[48px] font-normal text-center mb-10 text-aums-orange">
            Create Account
          </h2>

          <form onSubmit={handleSignup} className="space-y-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[20px] placeholder-gray-500 focus:outline-none transition-all bg-aums-input-login"
            />
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="Roll Number (e.g. AV.SC.U4AIE23132)"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[20px] placeholder-gray-500 focus:outline-none transition-all bg-aums-input-login"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="University Email"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[20px] placeholder-gray-500 focus:outline-none transition-all bg-aums-input-login"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-[18px] border-none rounded-[4px] text-[20px] placeholder-gray-500 focus:outline-none transition-all bg-aums-input-login"
            />

            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="px-10 py-3 text-white text-[18px] font-bold rounded-[6px] uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all bg-aums-orange"
              >
                Sign Up
              </button>
              <Link to="/login" className="text-[16px] hover:underline text-aums-link-login">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      </div>

      <p className="mt-14 text-center text-[20px] font-normal text-aums-footer-login">
        Copyright © 2021 Amrita Technologies.
      </p>
    </div>
  );
}
