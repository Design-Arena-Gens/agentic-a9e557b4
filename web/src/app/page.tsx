const FIGHTS = [
  { enemy: "Vegeta", arc: "Saiyan Saga" },
  { enemy: "Freeza", arc: "Namek Saga" },
  { enemy: "Cell", arc: "Cell Games" },
  { enemy: "Majin Buu", arc: "Buu Saga" },
  { enemy: "Beerus", arc: "Battle of Gods" },
  { enemy: "Jiren", arc: "Tournament of Power" },
  { enemy: "Broly", arc: "Dragon Ball Super: Broly" },
  { enemy: "Raditz", arc: "Saiyan Saga" },
  { enemy: "Nappa", arc: "Saiyan Saga" },
  { enemy: "Zarbon", arc: "Namek Saga" },
  { enemy: "Dodoria", arc: "Namek Saga" },
  { enemy: "Recoome", arc: "Ginyu Force" },
  { enemy: "Burter", arc: "Ginyu Force" },
  { enemy: "Jeice", arc: "Ginyu Force" },
  { enemy: "Ginyu", arc: "Ginyu Force" },
  { enemy: "Dr. Gero", arc: "Android Saga" },
  { enemy: "Android 18", arc: "Android Saga" },
  { enemy: "Android 17", arc: "Android Saga" },
  { enemy: "Android 16", arc: "Android Saga" },
  { enemy: "Android 13", arc: "Movie 7" },
  { enemy: "Babidi", arc: "Majin Buu Saga" },
  { enemy: "Dabura", arc: "Majin Buu Saga" },
  { enemy: "Hit", arc: "Universe 6 Tournament" },
  { enemy: "Topo", arc: "Tournament of Power" },
  { enemy: "Kefla", arc: "Tournament of Power" },
  { enemy: "Zamasu", arc: "Future Trunks Saga" },
  { enemy: "Goku Black", arc: "Future Trunks Saga" },
  { enemy: "Omega Shenron", arc: "Shadow Dragon Saga" },
  { enemy: "Baby Vegeta", arc: "Baby Saga" },
  { enemy: "Turles", arc: "Tree of Might" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 md:px-10">
        <section>
          <span className="text-xs uppercase tracking-[0.4em] text-amber-400">
            Saga dos Guerreiros Z
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            30 batalhas lendárias de Goku em um único super vídeo
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">
            Relembre confrontos épicos contra inimigos que desafiaram os limites
            do Saiyajin mais poderoso. Cada segmento dura 5 segundos e o vídeo
            final reúne todas as batalhas em sequência contínua.
          </p>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <video
              className="h-full w-full"
              controls
              preload="metadata"
              poster="/poster.png"
            >
              <source src="/goku_super_video.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-300">
              Duração total: 2min30s • Resolução 1280×720 • Codec H.264
            </p>
            <a
              href="/goku_super_video.mp4"
              download
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
            >
              Baixar vídeo completo
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">
            Segmentos de batalha
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Cada trecho foi criado digitalmente com cores exclusivas e títulos
            em português para facilitar a identificação das lutas.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {FIGHTS.map((fight, index) => (
              <article
                key={fight.enemy}
                className="rounded-2xl border border-white/5 bg-white/5 p-5 shadow-lg shadow-black/30"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-amber-400">
                    #{index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Goku vs {fight.enemy}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Arco: {fight.arc}
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  Cena estilizada com fundo animado e título em destaque
                  representando o confronto.
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-white/5 bg-black/30 py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>Projeto audiovisual experimental — uso não comercial.</p>
          <p>Construído com Next.js e Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
