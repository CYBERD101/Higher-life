'use client'

import React from 'react'
import { motion } from 'framer-motion'

const images = [
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200", size: "lg" },
  { src: "https://images.unsplash.com/photo-1616489953149-75577aaf97df?auto=format&fit=crop&q=80&w=800", size: "sm" },
  { src: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=800", size: "sm" },
  { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800", size: "md" },
  { src: "https://images.unsplash.com/photo-1615873968403-89e068629275?auto=format&fit=crop&q=80&w=1200", size: "lg" },
  { src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800", size: "md" }
]

export default function Gallery() {
  return (
    <section className="py-32 bg-[#050505] px-6 scroll-mt-navbar" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-gold-400 tracking-[0.4em] uppercase mb-6 text-sm font-medium">Portfolio</h2>
          <h3 className="text-white text-5xl md:text-7xl font-serif">Living Artistry</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden bg-zinc-900 ${img.size === 'lg' ? 'md:row-span-2' : ''}`}
            >
              <img
                src={img.src}
                alt={`Interior project ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-gold-400 text-xs tracking-widest uppercase mb-2">Abuja Residence</p>
                <h4 className="text-white text-2xl font-serif">Modern Minimalist</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
