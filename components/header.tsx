"use client";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-2xl font-black tracking-tighter text-blue-600">
          JIMTech
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {/* Features Tag with Popup */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-600 transition py-4">
              Features
              <svg
                className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {/* Popup Menu */}
            {isOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-xl p-2 animate-in fade-in zoom-in duration-200">
                <a
                  href="#speed"
                  className="block p-3 hover:bg-blue-50 rounded-lg transition"
                >
                  <p className="font-bold text-gray-900">Lightning Speed</p>
                  <p className="text-xs text-gray-500">
                    Deploy in under 30 seconds.
                  </p>
                </a>
                <a
                  href="#security"
                  className="block p-3 hover:bg-blue-50 rounded-lg transition"
                >
                  <p className="font-bold text-gray-900">Top Security</p>
                  <p className="text-xs text-gray-500">
                    Bank-grade encryption standard.
                  </p>
                </a>
                <a
                  href="#analytics"
                  className="block p-3 hover:bg-blue-50 rounded-lg transition"
                >
                  <p className="font-bold text-gray-900">Analytics</p>
                  <p className="text-xs text-gray-500">
                    Track your product growth live.
                  </p>
                </a>
              </div>
            )}
          </div>

          <a href="#pricing" className="hover:text-blue-600 transition">
            Pricing
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
