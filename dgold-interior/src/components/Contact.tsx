'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-32 bg-[#0a0a0a] px-6 scroll-mt-navbar" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-gold-400 font-medium tracking-[0.4em] uppercase mb-6 text-sm">Consultation</h2>
            <h3 className="text-white text-5xl md:text-7xl font-serif mb-10 leading-tight">
              Start Your <br />
              <span className="italic text-gold-200">Transformation</span>
            </h3>
            <p className="text-gray-400 text-lg mb-12 max-w-md font-light leading-relaxed">
              Whether it's a single room or a full-scale renovation, our team in Wuse II is ready to bring your vision to life.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-8 group">
                <div className="bg-white/5 p-4 rounded-sm group-hover:bg-gold-400 group-hover:text-black transition-colors">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest mb-1 font-bold">Showroom</h4>
                  <p className="text-gray-500 font-light">No. 1234 Wuse II, Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="bg-white/5 p-4 rounded-sm group-hover:bg-gold-400 group-hover:text-black transition-colors">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest mb-1 font-bold">Phone</h4>
                  <p className="text-gray-500 font-light">+234 800 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="bg-white/5 p-4 rounded-sm group-hover:bg-gold-400 group-hover:text-black transition-colors">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white text-sm uppercase tracking-widest mb-1 font-bold">Email</h4>
                  <p className="text-gray-500 font-light">hello@dgoldinterior.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-16">
              <a href="#" className="flex items-center gap-2 text-white/50 hover:text-gold-400 transition-all uppercase tracking-widest text-[10px] font-bold">
                Follow our Instagram <ExternalLink size={14} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 p-12 md:p-16 rounded-sm backdrop-blur-md relative"
          >
            <div className="absolute -top-6 -left-6 w-20 h-20 border-t border-l border-gold-400/30" />
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Full Name</label>
                <input className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors font-light" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Email Address</label>
                <input className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors font-light" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-gold-400 transition-colors font-light resize-none" placeholder="Tell us about your project" />
              </div>
              <button type="button" className="group flex items-center gap-4 bg-gold-400 text-black px-12 py-5 font-bold uppercase text-xs tracking-widest hover:bg-white transition-all">
                Send Inquiry
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
