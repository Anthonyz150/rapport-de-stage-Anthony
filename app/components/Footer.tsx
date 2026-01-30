import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-white py-6 relative z-10">
      <div className="mx-auto max-w-5xl px-4 border-t border-[#0056A4]/10">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          
          {/* Gauche */}
          <div className="text-center md:text-left">
            <p className="font-bold text-[#0056A4]">Anthony DIDIER</p>
            <p className="text-sm text-[#0056A4]/60">Stage d'observation - 3ème</p>
          </div>

          {/* Droite */}
          <div className="text-center md:text-right text-sm text-[#0056A4]/60">
            <p>© {currentYear} — Anthony DIDIER</p>
            <p className="text-[#0056A4]"> <strong> Rapport de stage </strong> </p>
          </div>
        </div>
      </div>
    </footer>
  );
}