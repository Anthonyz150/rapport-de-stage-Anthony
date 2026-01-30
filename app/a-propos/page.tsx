import Link from 'next/link';

export default function AproposPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* 1. L'image de fond fixe et floutée */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[url('/Logo%20Advans.jpg')] bg-contain bg-center opacity-90 blur-md"
        aria-hidden="true"
      />

      {/* 2. Contenu principal : pt-24 ajouté pour ne pas être caché par la Navbar */}
      <main className="relative z-10 flex flex-col items-center mt-24 pb-12 px-4 sm:px-8">
        <div className="w-full max-w-3xl rounded-2xl bg-white/95 p-8 sm:p-12 shadow-2xl backdrop-blur-md border border-[#0056A4]/20 mt-10">
          <header className="mb-8 border-b border-[#0056A4]/10 pb-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-[#0056A4]">
              À propos de mon stage
            </h1>
          </header>

          <div className="space-y-6 text-lg leading-relaxed text-[#0056A4]/90">
            {/* Section 1 : L'expérience */}
            <section>
              <h2 className="text-xl font-semibold text-[#0056A4] mb-2">Découverte du métier</h2>
              <p>
                Ce stage d&apos;observation m&apos;a permis de découvrir concrètement le
                monde de l&apos;ingénierie et du développement au sein d&apos;<strong>Avisto</strong>.
                J&apos;y ai observé le travail en équipe, la gestion de projets techniques
                et l&apos;importance de la rigueur dans les métiers du numérique.
              </p>
            </section>

            {/* Section 2 : Le bilan personnel */}
            <section>
              <h2 className="text-xl font-semibold text-[#0056A4] mb-2">Mon projet futur</h2>
              <p>
                Cette expérience a confirmé mon intérêt pour les métiers liés à
                l&apos;informatique et à la cybersécurité, et m&apos;encourage à poursuivre
                dans cette voie pour mes études futures. J'ai particulièrement apprécié l'environnement de travail chez <strong>Avisto</strong>.
              </p>
            </section>
          </div>

          {/* Bouton de navigation discret */}
          <div className="mt-10 flex justify-center border-t border-[#0056A4]/10 pt-6">
            <Link
              href="/rapport"
              className="group relative flex items-center gap-2 rounded-full bg-[#0056A4] px-8 py-3 text-sm font-bold text-white 
               transition-all duration-300 ease-out 
               hover:bg-[#004488] hover:shadow-[0_10px_20px_rgba(0,86,164,0.3)] 
               hover:-translate-y-1 active:scale-95"
            >
              <span>Consulter le rapport</span>
              <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                →
              </span>
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}