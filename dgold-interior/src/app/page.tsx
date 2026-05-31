import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Catalog />
      <Gallery />
      <Contact />
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} D'Gold Interior & Furniture. Wuse II, Abuja.</p>
      </footer>
    </main>
  );
}
