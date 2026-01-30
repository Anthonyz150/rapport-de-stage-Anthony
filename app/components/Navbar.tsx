'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-[100] w-full border-b border-[#0056A4]/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
          <div className="font-bold text-[#0056A4]">Mon stage en entreprise - 3ème</div>
          
          {/* Liens Desktop */}
          <div className="hidden md:flex gap-6 text-sm font-bold text-[#0056A4]">
            <Link href="/" className="hover:opacity-70 transition-opacity">Accueil</Link>
            <Link href="/rapport" className="hover:opacity-70 transition-opacity">Rapport</Link>
            <Link href="/remerciements" className="hover:opacity-70 transition-opacity">Remerciements</Link>
            <Link href="/a-propos" className="hover:opacity-70 transition-opacity">À propos</Link>
          </div>

          {/* Bouton Burger (Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[120] flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span className={`h-0.5 w-6 bg-[#0056A4] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-[#0056A4] transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-[#0056A4] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Sidebar Mobile */}
      <div className={`fixed inset-0 z-[110] transition-visibility ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        
        {/* Menu blanc */}
        <div className={`absolute right-0 top-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-20 px-8 pb-8">
            <div className="flex flex-col gap-6 text-xl mt-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="font-bold text-[#0056A4]">Accueil</Link>
              <Link href="/rapport" onClick={() => setIsOpen(false)} className="font-bold text-[#0056A4]">Rapport</Link>
              <Link href="/remerciements" onClick={() => setIsOpen(false)} className="font-bold text-[#0056A4]">Remerciements</Link>
              <Link href="/a-propos" onClick={() => setIsOpen(false)} className="font-bold text-[#0056A4]">À propos</Link>
            </div>
            
            {/* TON COPYRIGHT ICI */}
            <div className="mt-auto text-[10px] text-[#0056A4]/40 text-center uppercase tracking-widest">
              © 2026 Anthony DIDIER
            </div>
          </div>
        </div>
      </div>
    </>
  );
}