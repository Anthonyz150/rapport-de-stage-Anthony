import Link from "next/link";

export default function RemerciementsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* 1. L'image de fond fixe et floutée */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[url('/Logo%20Advans.jpg')] bg-contain bg-center opacity-90 blur-md"
        aria-hidden="true"
      />

      {/* 2. CORRECTIF DE CENTRAGE : On enlève le max-w du main et on utilise flex-1 */}
      <main className="relative z-10 flex min-h-screen w-full flex-col">
        
        {/* Espaceur pour la Navbar */}
        <div className="h-20 w-full flex-shrink-0" />

        {/* C'est cette div qui va tout centrer au milieu de l'écran */}
        <div className="flex flex-1 w-full items-center justify-center p-4 sm:p-8">
          
          {/* Ton bloc blanc bien centré */}
          <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white/95 p-8 sm:p-12 shadow-2xl backdrop-blur-md border border-[#0056A4]/20">

            <header className="mb-8 border-b border-[#0056A4]/10 pb-6 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-[#0056A4]">
                Remerciements
              </h1>
            </header>

            <div className="space-y-6 text-lg leading-relaxed text-[#0056A4]/90">
              <p>
                Je remercie toute l&apos;équipe d&apos;<strong>Avisto</strong> pour son accueil chaleureux, en
                particulier mon tuteur de stage, (<strong>Richard TOURNOIS</strong>), ainsi que l'ensemble des collaborateurs (<strong>Eric SALENC, Yvann PONCE, Arnaud DUMANOIS et Logan LAMOUAR</strong>) qui ont
                pris le temps de me présenter leur métier et de partager leur passion.
              </p>

              <p>
                Cette expérience m&apos;a permis de découvrir concrètement le monde de l&apos;ingénierie et du numérique,
                et a confirmé mon envie de poursuivre mes études dans ce domaine.
              </p>

              <p>
                Je tiens également à remercier mon établissement scolaire, le <strong>Collège André Malraux</strong>,
                ainsi que mes professeurs, pour l&apos;organisation de ce stage d&apos;observation.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="h-1 w-20 rounded-full bg-[#0056A4]/20" />
            </div>

            <div className="mt-10 flex justify-center border-t border-[#0056A4]/10 pt-6">
              <Link
                href="/"
                className="group relative flex items-center gap-2 rounded-full bg-[#0056A4] px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#004488] active:scale-95"
              >
                <span>Accueil</span>
                <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">→</span>
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}