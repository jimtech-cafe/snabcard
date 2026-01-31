"use client";
import { useState } from "react";

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-blue-600">
            JimTech
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
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          The Future of <span className="text-blue-600">JimTech</span> is Here.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
          The ultimate solution for your needs. Stop wasting time and start
          scaling your productivity with our lightning-fast platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Get Started for Free
          </button>
          <button className="px-8 py-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-300">
            View Demo
          </button>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Simple Pricing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
              <h3 className="text-xl font-bold mb-4">Starter</h3>
              <p className="text-4xl font-bold mb-6">
                $0<span className="text-lg text-gray-500 font-normal">/mo</span>
              </p>
              <ul className="mb-8 space-y-4 text-gray-600 flex-1">
                <li>✅ Basic Features</li>
                <li>✅ Community Support</li>
                <li>✅ 1 Project</li>
              </ul>
              <button className="w-full py-3 px-6 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
                Join Free
              </button>
            </div>

            {/* Pro Tier */}
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 shadow-xl flex flex-col relative">
              <span className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Most Popular
              </span>
              <h3 className="text-xl font-bold mb-4">Pro</h3>
              <p className="text-4xl font-bold mb-6">
                $19
                <span className="text-lg text-gray-500 font-normal">/mo</span>
              </p>
              <ul className="mb-8 space-y-4 text-gray-600 flex-1">
                <li>✅ Advanced Analytics</li>
                <li>✅ Priority Email Support</li>
                <li>✅ Unlimited Projects</li>
                <li>✅ Custom Branding</li>
              </ul>
              <button className="w-full py-3 px-6 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                Go Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section Preview */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Fast Deployment</h3>
            <p className="text-gray-500">
              Go live in seconds with Vercel integration.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Secure by Default</h3>
            <p className="text-gray-500">
              Enterprise-grade security for your data.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-500">
              Our team is always here to help you grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
