'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-24 bg-zinc-950 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[#d4af37] font-medium tracking-widest uppercase mb-4">Contact Us</h2>
            <h3 className="text-white text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Ready to transform your space?
            </h3>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Visit our showroom in Wuse II or send us a message for a private consultation.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="bg-[#d4af37]/10 p-4 rounded-full">
                  <MapPin className="text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Our Location</h4>
                  <p className="text-gray-400">Wuse II, Abuja, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-[#d4af37]/10 p-4 rounded-full">
                  <Phone className="text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Call Us</h4>
                  <p className="text-gray-400">+234 800 000 DGOLD</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-[#d4af37]/10 p-4 rounded-full">
                  <Mail className="text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email Us</h4>
                  <p className="text-gray-400">info@dgoldinterior.com</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="flex items-center gap-2 text-white/60 hover:text-[#d4af37] transition-all">
                Follow us on Instagram <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 p-10 rounded-3xl backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 px-1">Full Name</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 px-1">Email</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 px-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors appearance-none">
                  <option className="bg-black">Interior Design Consultation</option>
                  <option className="bg-black">Furniture Inquiry</option>
                  <option className="bg-black">Project Management</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 px-1">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="How can we help you?" />
              </div>
              <button type="button" className="w-full bg-[#d4af37] text-black font-bold py-4 rounded-xl hover:bg-[#f9d976] transition-colors uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
