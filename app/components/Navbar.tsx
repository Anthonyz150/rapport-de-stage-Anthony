'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Pour savoir sur quelle page on est

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Récupère l'URL actuelle

  // Fonction pour vérifier si le lien est actif
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* 1. BARRE DE NAVIGATION PRINCIPALE */}
      <nav className="fixed top-0 z-[100] w-full border-b border-[#0056A4]/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
          
          <div className="font-bold text-[#0056A4] hover:opacity-80 transition-opacity">
             Anthony DIDIER <span className="hidden sm:inline text-[#0056A4]/50 font-normal ml-2">| Stage 3ème</span>
          </div>
          {/* LIENS VERSION ORDINATEUR */}
          <div className="hidden md:flex gap-8 text-sm font-bold">
            {[
              { name: 'Accueil', path: '/' },
              { name: 'À propos', path: '/a-propos' },
              { name: 'Rapport', path: '/rapport' },
              { name: 'Remerciements', path: '/remerciements' },
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-all duration-200 hover:text-[#0056A4]/70 ${
                  isActive(link.path) 
                    ? 'text-[#0056A4] border-b-2 border-[#0056A4]' 
                    : 'text-[#0056A4]/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* BOUTON BURGER */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden flex h-8 w-8 flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <span className="h-0.5 w-6 bg-[#0056A4] rounded-full"></span>
            <span className="h-0.5 w-6 bg-[#0056A4] rounded-full"></span>
            <span className="h-0.5 w-6 bg-[#0056A4] rounded-full"></span>
          </button>
        </div>
      </nav>

      {/* 2. OVERLAY */}
      <div 
        className={`fixed inset-0 z-[110] bg-[#0056A4]/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 3. MENU LATÉRAL */}
      <div className={`fixed top-0 right-0 z-[120] h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          
          <button 
            onClick={() => setIsOpen(false)}
            className="self-end p-2 text-[#0056A4] text-2xl hover:rotate-90 transition-transform duration-200"
          >
            ✕
          </button>

          <div className="mt-8 flex flex-col gap-6 px-4">
            {[
              { name: 'Accueil', path: '/' },
              { name: 'À propos', path: '/a-propos' },
              { name: 'Rapport', path: '/rapport' },
              { name: 'Remerciements', path: '/remerciements' },
            ].map((link) => (
              <Link 
                key={link.path}
                href={link.path} 
                onClick={() => setIsOpen(false)} 
                className={`text-xl font-bold transition-colors ${
                  isActive(link.path) ? 'text-[#0056A4]' : 'text-[#0056A4]/40'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pb-4 text-[10px] text-[#0056A4]/40 text-center uppercase tracking-widest italic">
            © 2026 Anthony DIDIER
          </div>
        </div>
      </div>
    </>
  );
}