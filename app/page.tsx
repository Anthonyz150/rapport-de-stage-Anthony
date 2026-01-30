import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center font-sans overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[url('/Logo%20Advans.jpg')] bg-cover md:bg-contain bg-center blur-sm opacity-90" />
      {/* 2. Structure de centrage TOTAL */}
      <main className="relative z-10 flex min-h-screen w-full flex-col">

        {/* Espaceur pour la Navbar (Hauteur fixe) */}
        <div className="h-20 w-full flex-shrink-0" />

        {/* Conteneur de centrage horizontal et vertical */}
        <div className="flex flex-1 w-full items-center justify-center p-4 sm:p-8">        <div className="w-full rounded-2xl bg-white/90 p-5 sm:p-10 shadow-xl backdrop-blur-sm border border-[#0056A4]/20">

          {/* En-tête / contexte */}
          <header className="flex w-full flex-col items-center gap-3 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0056A4]/80">
              Stage d&apos;observation en entreprise - 3ème
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-[#0056A4]">
              Mon rapport de stage en entreprise
            </h1>
            <p className="max-w-2xl text-sm sm:text-lg leading-relaxed text-[#0056A4]">
              Ce site présente mon rapport de stage en entreprise réalisé au sein
              de la société de services Avisto. Vous pouvez y consulter le rapport complet et découvrir
              le contexte du stage, l&apos;entreprise d&apos;accueil, les missions observées
              et mon bilan de cette expérience.
            </p>
          </header>

          {/* Résumé rapide */}
          <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 rounded-xl bg-[#0056A4]/5 p-6 text-left text-sm sm:text-base text-[#0056A4]">
            <div>
              <h2 className="text-base font-semibold text-[#0056A4]">
                Informations sur mon stage
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Élève : Anthony DIDIER</li>
                <li>Niveau : Classe de 3ème</li>
                <li>Établissement : Collège André Malraux, Cagnes-sur-Mer</li>
                <li>Entreprise : Avisto (Valbonne)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-semibold text-[#0056A4]">
                Contenu du rapport
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Présentation de l&apos;entreprise et de ses activités</li>
                <li>Découverte des métiers de l&apos;ingénierie et du numérique</li>
                <li>Observations du quotidien en entreprise</li>
                <li>Bilan personnel et projet d&apos;orientation</li>
              </ul>
            </div>
          </section>
          <div className="flex h-30 items-center justify-center">
            <Link
              href="/a-propos"
              className="group relative flex items-center gap-2 rounded-full bg-[#0056A4] px-8 py-3 text-sm font-bold text-white 
               transition-all duration-300 ease-out 
               hover:bg-[#004488] hover:shadow-[0_10px_20px_rgba(0,86,164,0.3)] 
               hover:-translate-y-1 active:scale-95"
            >
              <span>À propos</span>

              {/* Optionnel : Un petit reflet brillant qui passe au survol */}
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}