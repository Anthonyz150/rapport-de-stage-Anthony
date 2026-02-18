import Link from "next/link";

export default function RemerciementsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* 1. Image de fond fixe */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[url('/Logo%20Advans.jpg')] bg-contain bg-center opacity-90 blur-md"
        aria-hidden="true"
      />

      <main className="relative z-10 flex min-h-screen w-full flex-col">
        {/* Espaceur pour la Navbar */}
        <div className="h-20 w-full flex-shrink-0" />

        {/* Zone de centrage parfaite */}
        <div className="flex flex-1 w-full items-center justify-center p-4 sm:p-8">
          
          <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white/95 p-8 sm:p-14 shadow-2xl backdrop-blur-md border border-[#0056A4]/20">

            <header className="mb-8 border-b border-[#0056A4]/10 pb-6 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-[#0056A4]">
                Remerciements
              </h1>
            </header>

            {/* Ajout de text-justify pour un rendu impeccable */}
            <div className="space-y-6 text-lg leading-relaxed text-[#0056A4]/90 text-justify">
              <p>
                Je souhaiterais remercier toute l&apos;équipe d&apos;<strong>Avisto</strong> pour son accueil chaleureux, en
                particulier mon tuteur de stage, <strong>Richard TOURNOIS</strong>, ainsi que l'ensemble des collaborateurs, <strong>Eric SALENC, Yvann PONCE, Arnaud DUMANOIS et Logan LAMOUAR</strong>, qui ont
                pris le temps de me présenter leur métier et de partager leur passion.
              </p>

              <p>
                Cette expérience m&apos;a permis de découvrir concrètement le monde de l&apos;ingénierie et du numérique,
                et a confirmé mon envie de poursuivre mes études dans ce domaine.
              </p>

              <p>
                Je tiens également à remercier mon établissement scolaire, le <strong>Collège André MALRAUX</strong>,
                ainsi que mes professeurs, pour l&apos;organisation de ce stage d&apos;observation.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="h-1 w-20 rounded-full bg-[#0056A4]/20" />
            </div>

            <div className="mt-10 flex justify-center border-t border-[#0056A4]/10 pt-6">
              <Link
                href="/"
                className="group relative flex items-center gap-2 rounded-full bg-[#0056A4] px-10 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#004488] hover:shadow-lg active:scale-95"
              >
                <span>Retour à l'accueil</span>
                <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">→</span>
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}