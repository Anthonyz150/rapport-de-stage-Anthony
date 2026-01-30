import Link from "next/link";

export default function RapportPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden font-sans">
            {/* 1. L'image de fond fixe et floutée */}
            <div
                className="pointer-events-none fixed inset-0 z-0 bg-[url('/Logo%20Advans.jpg')] bg-contain bg-center opacity-90 blur-md"
                aria-hidden="true"
            />

            {/* 2. Le contenu de la page : pt-24 assure l'espace sous la Navbar */}
            <main className="relative z-10 flex flex-col items-center p-4 sm:p-8 pt-28">
                <div className="w-full max-w-3xl rounded-2xl bg-white/95 p-8 sm:p-12 shadow-2xl backdrop-blur-md border border-[#0056A4]/20 mt-10">
                    <h1 className="text-3xl font-bold text-[#0056A4] mb-6 text-center">
                        Consulter le Rapport
                    </h1>

                    {/* --- BOUTONS D'ACTION --- */}
                    <div className="mb-6 flex flex-wrap justify-center gap-4">
                        <a
                            href="/Rapport_de_stage.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-full border-2 border-[#0056A4] px-5 py-2 text-sm font-semibold text-[#0056A4] transition hover:bg-[#0056A4] hover:text-white"
                        >
                            <span>🔍</span> Pleine page
                        </a>

                        <a
                            href="/Rapport_de_stage.pdf"
                            download="Rapport_Stage_Anthony.pdf"
                            className="flex items-center gap-2 rounded-full bg-[#0056A4] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#004488] shadow-md"
                        >
                            <span>📥</span> Télécharger
                        </a>
                    </div>

                    {/* Visionneuse PDF - Adaptée pour mobile et desktop */}
                    <div className="h-[400px] sm:h-[600px] w-full rounded-xl border border-[#0056A4]/10 overflow-hidden bg-white shadow-lg">
                        <iframe
                            src="/Rapport_de_stage.pdf#toolbar=0&view=FitH"
                            className="h-full w-full"
                            style={{ border: 'none' }}
                        />
                    </div>

                    {/* Bouton de navigation vers Remerciements */}
                    <div className="mt-10 flex justify-center border-t border-[#0056A4]/10 pt-6">
                        <Link
                            href="/remerciements"
                            className="group relative flex items-center gap-2 rounded-full bg-[#0056A4] px-8 py-3 text-sm font-bold text-white 
                               transition-all duration-300 ease-out 
                               hover:bg-[#004488] hover:shadow-[0_10px_20px_rgba(0,86,164,0.3)] 
                               hover:-translate-y-1 active:scale-95"
                        >
                            <span>Remerciements</span>
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