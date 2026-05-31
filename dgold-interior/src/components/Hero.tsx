'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Room } from './Room'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows dpr={[1, 2]}>
          <Room />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="text-[#d4af37] font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base">
            Luxury Interior Design • Abuja
          </h2>
          <h1 className="text-white text-5xl md:text-8xl font-serif mb-8 leading-tight">
            D'Gold <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f9d976]">Interior</span> & Furniture
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Crafting sophisticated spaces that reflect your unique lifestyle.
            Bespoke furniture and interior solutions in the heart of Wuse II.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#d4af37] text-black px-10 py-4 rounded-full font-semibold text-lg transition-colors hover:bg-[#f9d976]"
            >
              Explore Collection
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#d4af37' }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/5"
            >
              Book a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#d4af37] to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
