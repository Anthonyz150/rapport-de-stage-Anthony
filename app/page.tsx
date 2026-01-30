import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* 1. Fond fixe (Identité visuelle identique) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[url('/Logo%20Advans.jpg')] bg-contain bg-center opacity-90 blur-md"
        aria-hidden="true"
      />

      {/* 2. Structure de centrage identique aux autres pages */}
      <main className="relative z-10 flex min-h-screen w-full flex-col">
        
        {/* Espaceur pour la Navbar */}
        <div className="h-20 w-full flex-shrink-0" />

        {/* Zone de centrage du contenu d'accueil */}
        <div className="flex flex-1 w-full items-center justify-center p-4 sm:p-8">
          
          <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white/95 p-8 sm:p-12 shadow-2xl backdrop-blur-md border border-[#0056A4]/20 text-center">
            
            <header className="mb-8">
              <p className="text-sm font-bold uppercase tracking-widest text-[#0056A4]/60 mb-2">
                Stage d'observation en entreprise - 3ème
              </p>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0056A4]">
                Mon rapport de stage
              </h1>
            </header>

            <div className="space-y-6 text-lg leading-relaxed text-[#0056A4]/90 mb-10">
              <p>
                Ce site présente mon rapport de stage en entreprise réalisé au sein de la société 
                <strong> Avisto</strong>. Vous pouvez y consulter mon bilan et découvrir mon expérience.
              </p>
              
              {/* Petit bloc d'infos rapides */}
              <div className="bg-[#0056A4]/5 rounded-xl p-6 text-left border border-[#0056A4]/10">
                <ul className="space-y-2 text-sm sm:text-base">
                  <li><strong>Élève :</strong> Anthony DIDIER</li>
                  <li><strong>Établissement :</strong> Collège André Malraux</li>
                  <li><strong>Entreprise :</strong> Avisto (Valbonne)</li>
                </ul>
              </div>
            </div>

            {/* Bouton d'entrée principal */}
            <div className="flex justify-center">
              <Link
                href="/a-propos"
                className="group relative flex items-center gap-2 rounded-full bg-[#0056A4] px-10 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#004488] hover:shadow-xl active:scale-95"
              >
                <span>Découvrir le projet</span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}