import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-white/80 backdrop-blur-md py-8 relative z-10 mt-auto border-t border-[#0056A4]/10">
      <div className="mx-auto max-w-5xl px-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          
          {/* Section Gauche : Infos Personnelles */}
          <div className="text-center md:text-left">
            <p className="font-extrabold text-[#0056A4] tracking-tight text-lg">Anthony DIDIER</p>
            <p className="text-xs font-medium text-[#0056A4]/50 uppercase tracking-widest">Stage d'observation • 3ème</p>
          </div>

          {/* Section Droite : Copyright & Entreprise */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#0056A4]/20 hidden md:block"></span>
              <p className="text-sm font-semibold text-[#0056A4]">Entreprise - Avisto</p>
            </div>
            <p className="text-[11px] text-[#0056A4]/40 font-medium uppercase tracking-tighter">
              © {currentYear} — Tous droits réservés
            </p>
          </div>
        </div>
        
        {/* Lien discret vers le haut de page ou accueil */}
        <div className="mt-6 flex justify-center md:justify-start">
           <Link href="/" className="text-[10px] text-[#0056A4]/30 hover:text-[#0056A4] transition-colors uppercase font-bold tracking-tighter">
             Retour à l'accueil
           </Link>
        </div>
      </div>
    </footer>
  );
}