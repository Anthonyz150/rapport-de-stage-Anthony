'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. BARRE DE NAVIGATION PRINCIPALE (Fixe) */}
      <nav className="fixed top-0 z-[100] w-full border-b border-[#0056A4]/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
          {/* Titre du site */}
          <div className="font-bold text-[#0056A4]">
            Mon stage en entreprise - 3ème
          </div>

          {/* LIENS VERSION ORDINATEUR (Cachés sur mobile) */}
          <div className="hidden md:flex gap-8 text-sm font-bold text-[#0056A4]">
            <Link href="/" className="hover:opacity-70 transition-opacity">Accueil</Link>
            <Link href="/rapport" className="hover:opacity-70 transition-opacity">Rapport</Link>
            <Link href="/remerciements" className="hover:opacity-70 transition-opacity">Remerciements</Link>
            <Link href="/a-propos" className="hover:opacity-70 transition-opacity">À propos</Link>
          </div>

          {/* BOUTON BURGER (Visible UNIQUEMENT sur mobile) */}
          <button 
            onClick={() => setIsOpen(true)}
            className="md:hidden flex h-8 w-8 flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Ouvrir le menu"
          >
            <span className="h-0.5 w-6 bg-[#0056A4]"></span>
            <span className="h-0.5 w-6 bg-[#0056A4]"></span>
            <span className="h-0.5 w-6 bg-[#0056A4]"></span>
          </button>
        </div>
      </nav>

      {/* 2. OVERLAY (Fond sombre quand le menu est ouvert) */}
      <div 
        className={`fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* 3. MENU LATÉRAL (SIDEBAR) */}
      <div className={`fixed top-0 right-0 z-[120] h-full w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-6">
          
          {/* Bouton Fermer (Croix) - Placé à droite dans le menu */}
          <button 
            onClick={() => setIsOpen(false)}
            className="self-end p-2 text-[#0056A4] text-2xl font-light hover:rotate-90 transition-transform duration-200"
            aria-label="Fermer le menu"
          >
            ✕
          </button>

          {/* Liens de navigation Mobile */}
          <div className="mt-8 flex flex-col gap-8 text-xl px-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="font-bold text-[#0056A4] border-b border-[#0056A4]/5 pb-2">
              Accueil
            </Link>
            <Link href="/rapport" onClick={() => setIsOpen(false)} className="font-bold text-[#0056A4] border-b border-[#0056A4]/5 pb-2">
              Rapport
            </Link>
            <Link href="/remerciements" onClick={() => setIsOpen(false)} className="font-bold text-[#0056A4] border-b border-[#0056A4]/5 pb-2">
              Remerciements
            </Link>
            <Link href="/a-propos" onClick={() => setIsOpen(false)} className="font-bold text-[#0056A4] border-b border-[#0056A4]/5 pb-2">
              À propos
            </Link>
          </div>

          {/* Copyright tout en bas */}
          <div className="mt-auto pb-4 text-[10px] text-[#0056A4]/40 text-center uppercase tracking-widest italic">
            © 2026 Anthony DIDIER
          </div>
        </div>
      </div>
    </>
  );
}