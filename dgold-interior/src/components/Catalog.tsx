'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "Royal Velvet Sofa",
    price: "₦850,000",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Golden Oak Dining",
    price: "₦1,200,000",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1577145900255-0c4b61d7d143?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Marble Top Console",
    price: "₦450,000",
    category: "Decor",
    image: "https://images.unsplash.com/photo-1513519247388-19346eaa95d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Serene Master Bed",
    price: "₦980,000",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693419148-412828363075?auto=format&fit=crop&q=80&w=800"
  }
]

export default function Catalog() {
  const openWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hello D'Gold Interior, I'm interested in the ${productName}. Can I get more details?`);
    window.open(`https://wa.me/2348000000000?text=${message}`, '_blank');
  }

  return (
    <section className="py-32 bg-[#050505] px-6 scroll-mt-navbar" id="catalog">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-gold-400 font-medium tracking-[0.3em] uppercase mb-4 text-sm">Signature Collection</h2>
            <h3 className="text-white text-4xl md:text-6xl font-serif">Curated Masterpieces</h3>
          </div>
          <button className="text-white flex items-center gap-4 hover:text-gold-400 transition-colors group uppercase tracking-widest text-xs font-bold border border-white/10 px-8 py-4">
            View All Pieces <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-12">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-zinc-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => openWhatsApp(product.name)}
                    className="bg-gold-400 text-black px-8 py-3 rounded-sm font-bold uppercase text-[10px] tracking-widest flex items-center gap-2"
                  >
                    <ShoppingBag size={14} />
                    Inquire Now
                  </motion.button>
                </div>
                <div className="absolute top-6 left-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">
                  {product.category}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white text-lg font-serif mb-1 group-hover:text-gold-400 transition-colors">{product.name}</h4>
                  <p className="text-gray-500 text-sm font-light uppercase tracking-widest">Available in Store</p>
                </div>
                <p className="text-gold-400 font-medium font-serif">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
