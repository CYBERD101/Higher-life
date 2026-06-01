'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Room } from './Room'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full bg-[#050505] overflow-hidden flex items-center">
      {/* 3D Background - Subtler and focused */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas shadows dpr={[1, 2]}>
          <Room />
        </Canvas>
      </div>

      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,5,5,0.8)_80%)] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-gold-400 font-medium tracking-[0.4em] uppercase mb-6 text-xs md:text-sm border-b border-gold-400/30 pb-2">
              EST. 2015 • Abuja's Finest
            </span>
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-serif mb-8 leading-[0.9] tracking-tighter">
              Bespoke <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-200 to-gold-400 italic font-light">
                Elegance
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
              We transform spaces into curated experiences. Discover Abuja's most exclusive
              collection of bespoke furniture and luxury interior solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href="#catalog"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gold-400 text-black px-12 py-5 rounded-sm font-bold text-sm uppercase tracking-[0.2em] transition-all hover:bg-white text-center"
              >
                View Collection
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-4 border border-white/20 text-white px-12 py-5 rounded-sm font-bold text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
              >
                Our Portfolio
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-12 hidden md:flex flex-col items-center gap-4"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.5em] [writing-mode:vertical-lr] mb-2">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent" />
      </motion.div>
    </section>
  )
}
