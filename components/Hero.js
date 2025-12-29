'use client'

import { useState } from 'react'
import { assets } from '../data/assets'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Email submitted:', email)
  }

  return (
    <section className="relative z-10 px-8 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          {/* Glassmorphism Card */}
          <div className="glass-card rounded-[2rem] p-10 md:p-14 lg:p-16">
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
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 md:gap-6">
              <p className="text-white/70 text-sm font-medium whitespace-nowrap">
                Powered by
              </p>
              <div className="flex items-center gap-5 sm:gap-6 md:gap-8 flex-wrap">
                {/* Banque Misr Logo */}
                <div className="flex items-center">
                  <img
                    src={assets.banqueMisr}
                    alt="Banque Misr"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                
                {/* Central Bank of Egypt Logo */}
                <div className="flex items-center">
                  <img
                    src={assets.centralBank}
                    alt="Central Bank of Egypt"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
                
                {/* banknbox Logo */}
                <div className="flex items-center">
                  <img
                    src={assets.banknbox}
                    alt="banknbox"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

