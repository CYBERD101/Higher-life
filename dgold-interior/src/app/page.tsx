import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Catalog from '@/components/Catalog';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-gold-400 selection:text-black">
      <Hero />
      <div className="relative z-10">
        <Services />
        <Gallery />
        <Catalog />
        <Contact />
      </div>
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-white text-3xl font-serif mb-10 tracking-widest">
            D'GOLD<span className="text-gold-400">.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mb-16 max-w-4xl mx-auto">
            <div>
              <h4 className="text-white text-sm uppercase tracking-widest mb-6 font-bold">Visit Us</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                No. 1234 Wuse II,<br />
                Abuja, Nigeria.
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm uppercase tracking-widest mb-6 font-bold">Contact</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                +234 800 000 0000<br />
                hello@dgoldinterior.com
              </p>
            </div>
            <div>
              <h4 className="text-white text-sm uppercase tracking-widest mb-6 font-bold">Follow</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                Instagram / Facebook / Pinterest
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 text-gray-600 text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} D'Gold Interior & Furniture. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
