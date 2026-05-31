'use client'

import React from 'react'
import { motion } from 'framer-motion'

const images = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1616489953149-75577aaf97df?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1615873968403-89e068629275?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800"
]

export default function Gallery() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#d4af37] tracking-[0.3em] uppercase mb-4 text-sm">Portfolio</h2>
          <h3 className="text-white text-4xl md:text-5xl font-serif">Exquisite Projects in Abuja</h3>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-xl bg-zinc-900"
            >
              <img
                src={src}
                alt={`Interior project ${i + 1}`}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
