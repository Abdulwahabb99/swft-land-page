"use client";

import { useState } from "react";
import { assets } from "../data/assets";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative z-10 px-8 md:px-12 lg:px-16 py-8 md:py-12 lg:py-1">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          {/* Glassmorphism Card */}
          <div className="glass-card rounded-[70px] p-10 md:p-14 lg:p-16">
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 md:mb-12 leading-[1.1]">
              Your Cashflow,
              <br />
              Optimized
            </h1>

            {/* Email Input and CTA */}
            <form onSubmit={handleSubmit} className="mb-10 md:mb-12">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-[264px] h-[56px] rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-sm text-base px-4"
                  style={{ opacity: 1 }}
                  required
                />
                <button
                  type="submit"
                  className="gradient-button px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-white font-semibold text-base transition-all duration-200 whitespace-nowrap"
                >
                  Join waitlist
                </button>
              </div>
            </form>

            {/* Powered by Section */}
            <div className="mt-8 pt-8">
              <p className="text-white text-sm font-medium mb-4">Powered by</p>
              <div className="flex items-center gap-4 md:gap-6 flex-nowrap">
                {/* Banque Misr Logo */}
                <div className="flex items-center">
                  <img
                    src={assets.banqueMisr}
                    alt="Banque Misr"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>

                {/* Central Bank of Egypt Logo */}
                <div className="flex items-center">
                  <img
                    src={assets.centralBank}
                    alt="Central Bank of Egypt"
                    width={140}
                    height={50}
                    className="object-contain"
                  />
                </div>

                {/* banknbox Logo */}
                <div className="flex items-center">
                  <img
                    src={assets.banknbox}
                    alt="banknbox"
                    width={110}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
