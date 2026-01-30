import Link from "next/link";

export default function RapportPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden font-sans">
            {/* 1. Image de fond */}
            <div
                className="pointer-events-none fixed inset-0 z-0 bg-[url('/Logo%20Advans.jpg')] bg-contain bg-center opacity-90 blur-md"
                aria-hidden="true"
            />

            {/* 2. Structure de centrage TOTAL */}
            <main className="relative z-10 flex min-h-screen w-full flex-col">
                
                {/* Espaceur pour la Navbar (Hauteur fixe) */}
                <div className="h-20 w-full flex-shrink-0" />

                {/* Conteneur de centrage horizontal et vertical */}
                <div className="flex flex-1 w-full items-center justify-center p-4 sm:p-8">
                    
                    {/* Le bloc blanc - mx-auto est crucial pour le centrage horizontal */}
                    <div className="mx-auto w-full max-w-4xl rounded-2xl bg-white/95 p-6 sm:p-10 shadow-2xl backdrop-blur-md border border-[#0056A4]/20">
                        
                        <h1 className="text-3xl font-bold text-[#0056A4] mb-6 text-center">
                            Consulter le Rapport
                        </h1>

                        {/* BOUTONS D'ACTION */}
                        <div className="mb-6 flex flex-wrap justify-center gap-4">
                            <a
                                href="/Rapport_de_stage.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-full border-2 border-[#0056A4] px-5 py-2 text-sm font-semibold text-[#0056A4] transition hover:bg-[#0056A4] hover:text-white"
                            >
                                <span>🔍</span> Voir le PDF
                            </a>

                            <a
                                href="/Rapport_de_stage.pdf"
                                download="Rapport_Stage_Anthony.pdf"
                                className="flex items-center gap-2 rounded-full bg-[#0056A4] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#004488] shadow-md active:scale-95"
                            >
                                <span>📥</span> Télécharger
                            </a>
                        </div>

                        {/* Visionneuse PDF */}
                        <div className="h-[400px] sm:h-[550px] w-full rounded-xl border border-[#0056A4]/10 overflow-hidden bg-white shadow-lg">
                            <iframe
                                src="/Rapport_de_stage.pdf#toolbar=0&view=FitH"
                                className="h-full w-full"
                                style={{ border: 'none' }}
                            />
                        </div>

                        {/* Bouton de navigation */}
                        <div className="mt-10 flex justify-center border-t border-[#0056A4]/10 pt-6">
                            <Link
                                href="/remerciements"
                                className="group relative flex items-center gap-2 rounded-full bg-[#0056A4] px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#004488] active:scale-95"
                            >
                                <span>Remerciements</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}