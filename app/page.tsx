import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* 1. Fond fixe avec logo Advans */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[url('/Logo%20Advans.jpg')] bg-contain bg-center opacity-90 blur-md"
        aria-hidden="true"
      />

      <main className="relative z-10 flex min-h-screen w-full flex-col">
        {/* Espaceur pour laisser respirer la Navbar */}
        <div className="h-20 w-full flex-shrink-0" />

        {/* Zone de centrage dynamique */}
        <div className="flex flex-1 w-full items-center justify-center p-4 sm:p-8">
          
          <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white/95 p-8 sm:p-14 shadow-2xl backdrop-blur-md border border-[#0056A4]/20 text-center">
            
            <header className="mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#0056A4]/10 text-[#0056A4] text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Stage d'observation - 2026
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0056A4] leading-tight">
                Rapport de <br className="hidden sm:block" /> Stage de 5ème
              </h1>
              <p className="mt-4 text-xl text-[#0056A4]/70 font-medium italic">Entreprise Avisto Telecom</p>
            </header>

            <div className="space-y-8 text-lg leading-relaxed text-[#0056A4]/90 mb-12">
              {/* Texte justifié pour un rendu "édition" */}
              <p className="text-justify sm:text-center text-balance">
                Bienvenue sur ce portail numérique dédié à mon stage en entreprise. 
                J'ai eu le privilège de découvrir les coulisses de l'ingénierie logicielle chez 
                <strong className="text-[#0056A4]"> Avisto</strong>, une expérience qui a consolidé ma passion pour les nouvelles technologies.
              </p>
              
              {/* Carte d'identité du stage mieux présentée */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 bg-[#0056A4]/5 rounded-2xl p-8 text-left border border-[#0056A4]/10 shadow-inner">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase text-[#0056A4]/50 tracking-wider">Stagiaire</span>
                  <p className="font-semibold">Anthony DIDIER</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase text-[#0056A4]/50 tracking-wider">Tuteur de stage</span>
                  <p className="font-semibold">Richard TOURNOIS</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase text-[#0056A4]/50 tracking-wider">Établissement</span>
                  <p className="font-semibold">Collège André Malraux</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase text-[#0056A4]/50 tracking-wider">Période</span>
                  <p className="font-semibold">Du 26/01/2026 au 30/01/2026</p>
                </div>
              </div>
            </div>

            {/* Bouton d'action avec micro-animation */}
            <div className="flex justify-center">
              <Link
                href="/a-propos"
                className="group relative flex items-center gap-3 rounded-full bg-[#0056A4] px-12 py-5 text-lg font-bold text-white transition-all duration-300 hover:bg-[#004488] hover:shadow-[0_15px_30px_rgba(0,86,164,0.3)] hover:-translate-y-1 active:scale-95"
              >
                <span>Découvrir mon expérience</span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}