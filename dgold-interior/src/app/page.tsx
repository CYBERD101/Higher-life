import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Catalog from '@/components/Catalog';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Hero />
      <div className="relative z-10 space-y-12 pb-24">
        <Services />
        <Gallery />
        <Catalog />
        <Contact />
      </div>
      <footer className="py-16 border-t border-white/5 text-center bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-white text-2xl font-serif mb-8 tracking-widest">D'GOLD<span className="text-gold-400">.</span></h2>
          <div className="flex justify-center gap-8 mb-8 text-gray-500 text-xs uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-gold-400">Privacy</a>
            <a href="#" className="hover:text-gold-400">Terms</a>
            <a href="#" className="hover:text-gold-400">Cookies</a>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} D'Gold Interior & Furniture.
            <span className="block mt-2">No. 1234 Wuse II, Abuja, Nigeria.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
