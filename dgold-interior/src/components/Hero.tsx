'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full bg-[#050505] overflow-hidden flex items-center">
      {/* High-end Static Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Interior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold-400 font-bold tracking-[0.4em] uppercase mb-6 text-xs md:text-sm">
              Luxury Interior Design • Wuse II, Abuja
            </span>
            <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tight">
              Spaces That <br />
              <span className="text-gold-300 italic">Inspire</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
              D'Gold Interior & Furniture specializes in creating sophisticated,
              bespoke environments for Abuja's most discerning homeowners.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#catalog"
                className="bg-gold-400 text-black px-10 py-4 font-bold text-xs uppercase tracking-widest transition-all hover:bg-white text-center rounded-sm"
              >
                Explore Collection
              </a>
              <a
                href="#contact"
                className="border border-white/30 text-white px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all text-center rounded-sm"
              >
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
