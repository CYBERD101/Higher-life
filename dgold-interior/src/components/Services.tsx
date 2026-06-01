'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Home, Briefcase, Sofa, Palette } from 'lucide-react'

const services = [
  {
    title: "Residential Design",
    description: "Personalized luxury interiors for homes that reflect your story and lifestyle.",
    icon: Home,
  },
  {
    title: "Commercial Spaces",
    description: "Sophisticated office and retail environments designed to inspire and perform.",
    icon: Briefcase,
  },
  {
    title: "Bespoke Furniture",
    description: "Custom-crafted pieces using premium materials, made specifically for your space.",
    icon: Sofa,
  },
  {
    title: "Art Consultation",
    description: "Curating the perfect art and decor to complement your interior's aesthetic.",
    icon: Palette,
  }
]

export default function Services() {
  return (
    <section className="py-32 bg-[#050505] px-6 scroll-mt-navbar" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-gold-400 font-medium tracking-[0.3em] uppercase mb-6 text-sm">Our Expertise</h2>
            <h3 className="text-white text-4xl md:text-6xl font-serif leading-tight mb-8">
              Excellence in <br />
              <span className="italic text-gold-200">Every Detail</span>
            </h3>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-md">
              At D'Gold, we blend traditional craftsmanship with modern innovation to create spaces that are as functional as they are beautiful.
            </p>
            <div className="h-[1px] w-24 bg-gold-400/50" />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0a0a0a] p-12 group hover:bg-[#0f0f0f] transition-colors"
              >
                <div className="mb-8 text-gold-400 group-hover:scale-110 transition-transform origin-left">
                  <service.icon size={40} strokeWidth={1} />
                </div>
                <h4 className="text-white text-2xl font-serif mb-4">{service.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed group-hover:text-gray-400 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
