'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Catalog', href: '#catalog' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/5'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white text-xl md:text-2xl font-serif tracking-widest flex items-center gap-2 group"
        >
          <span className="font-bold">D'GOLD</span>
          <span className="text-gold-400 group-hover:scale-150 transition-transform">.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/70 hover:text-white text-[13px] uppercase tracking-[0.2em] transition-colors font-medium relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold-400 text-black px-8 py-2.5 rounded-sm text-[12px] font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-0.5"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <a href="tel:+2348000000000" className="text-white/70">
            <Phone size={20} />
          </a>
          <button
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden bg-zinc-950 flex flex-col justify-center items-center gap-8 p-6"
          >
            <button
              className="absolute top-8 right-8 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-3xl font-serif tracking-wide hover:text-gold-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 bg-gold-400 text-black px-12 py-4 rounded-sm text-lg font-bold uppercase tracking-widest"
            >
              Consult Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
