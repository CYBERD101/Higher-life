'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, ArrowUpRight } from 'lucide-react'

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
    <section className="py-24 bg-[#0a0a0a] px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#d4af37] font-medium tracking-widest uppercase mb-4">Curated Collection</h2>
            <h3 className="text-white text-4xl md:text-5xl font-serif">Sophisticated Pieces for Elegant Living</h3>
          </div>
          <button className="text-white flex items-center gap-2 hover:text-[#d4af37] transition-colors border-b border-white/20 pb-2">
            View All Collection <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-zinc-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => openWhatsApp(product.name)}
                    className="bg-white text-black p-4 rounded-full shadow-xl"
                  >
                    <ShoppingBag size={24} />
                  </motion.button>
                </div>
                <div className="absolute top-4 left-4 bg-[#d4af37] text-black text-xs font-bold px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <h4 className="text-white text-xl font-medium mb-1">{product.name}</h4>
              <p className="text-[#d4af37] font-semibold">{product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
