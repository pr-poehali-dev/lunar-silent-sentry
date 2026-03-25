const qualities = [
  {
    icon: '📋',
    title: 'Ответственность',
    text: 'Каждый ребёнок — это доверие семьи. Я подхожу к работе серьёзно: готовлюсь к каждому уроку, слежу за успехами учеников и всегда на связи с родителями.',
  },
  {
    icon: '⚡',
    title: 'Многозадачность',
    text: 'Урок, проверка работ, общение с родителями, подготовка мероприятий — всё это одновременно. Умею расставлять приоритеты и сохранять спокойствие в любой ситуации.',
  },
  {
    icon: '❤️',
    title: 'Любовь к детям',
    text: 'Дети чувствуют искреннее отношение. Я создаю тёплую атмосферу в классе, где каждый ребёнок чувствует себя важным и услышанным.',
  },
  {
    icon: '🌱',
    title: 'Стремление к развитию',
    text: 'Как молодой специалист я открыта новым методикам, современным подходам в обучении и постоянно совершенствую свои педагогические навыки.',
  },
  {
    icon: '🤝',
    title: 'Коммуникабельность',
    text: 'Нахожу общий язык с детьми, родителями и коллегами. Выстраиваю доверительные отношения, которые помогают добиваться лучших результатов.',
  },
  {
    icon: '🎯',
    title: 'Целеустремлённость',
    text: 'Ставлю конкретные цели для каждого ученика и планомерно иду к их достижению. Маленькие победы детей — моя главная награда.',
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Hero */}
      <section className="relative flex items-center bg-zinc-900 px-8 py-32 md:px-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-widest text-white/50 uppercase">
                Молодой специалист
              </span>
              <h1 className="mb-4 text-4xl font-light text-white md:text-5xl">
                О себе
              </h1>
              <p className="text-lg leading-relaxed text-white/60">
                Меня зовут <span className="text-white">Валерия Олеговна Зимина</span>.
                Я учитель начальных классов из города Сретенск.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/50">
                Начальная школа — это фундамент всего дальнейшего пути ребёнка.
                Именно здесь формируются характер, любознательность и отношение к знаниям.
                Я искренне верю, что каждый ребёнок талантлив по-своему, и моя задача —
                помочь ему раскрыться.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/50">
                Как молодой специалист я привношу свежий взгляд, энергию и современные
                подходы к обучению, сочетая их с уважением к классической педагогике.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/3f731d95-c1df-4769-9eb1-3d51a9d9d75d/bucket/09d43a0c-ecab-4b9e-9e8f-73874e3c78b6.jpeg"
                  alt="Зимина Валерия Олеговна"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-8 py-16 md:px-16 bg-zinc-900">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-10 text-3xl font-light text-white">Образование</h2>
          <div className="relative border-l border-white/20 pl-8">
            <div className="absolute -left-2 top-1 h-4 w-4 rounded-full border-2 border-white/50 bg-zinc-900" />
            <p className="text-xs tracking-widest text-white/40 uppercase mb-1">Среднее профессиональное образование</p>
            <h3 className="text-xl font-medium text-white mb-1">
              ГПОУ «Педагогический колледж г. Сретенска»
            </h3>
            <p className="text-sm text-white/50">Специальность: Преподавание в начальных классах</p>
            <p className="mt-1 text-sm text-white/40">г. Сретенск, Забайкальский край · Выпуск 2026</p>
          </div>
        </div>
      </section>

      {/* Qualities */}
      <section className="px-8 py-20 md:px-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-light text-white">
            Профессиональные качества
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualities.map(({ icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-white/20 hover:bg-white/8"
              >
                <div className="mb-3 text-3xl">{icon}</div>
                <h3 className="mb-2 text-lg font-medium text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}