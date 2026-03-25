export default function Contacts() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center">
      <section className="w-full px-8 py-32 md:px-16">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-light text-white md:text-5xl">
            Контакты
          </h1>
          <p className="mb-16 text-base text-white/50">
            Если у вас есть вопросы — я всегда на связи.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Email */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20">
              <div className="mb-4 text-3xl">✉️</div>
              <p className="mb-1 text-xs tracking-widest text-white/40 uppercase">Электронная почта</p>
              <a
                href="mailto:lerazimina10@gmail.com"
                className="text-lg text-white transition-colors hover:text-white/70"
              >
                lerazimina10@gmail.com
              </a>
            </div>

            {/* City */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20">
              <div className="mb-4 text-3xl">📍</div>
              <p className="mb-1 text-xs tracking-widest text-white/40 uppercase">Город</p>
              <p className="text-lg text-white">Сретенск</p>
              <p className="mt-1 text-sm text-white/40">Забайкальский край</p>
            </div>

            {/* Role */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-white/20 sm:col-span-2">
              <div className="mb-4 text-3xl">🏫</div>
              <p className="mb-1 text-xs tracking-widest text-white/40 uppercase">Должность</p>
              <p className="text-lg text-white">Учитель начальных классов</p>
              <p className="mt-1 text-sm text-white/40">Молодой специалист</p>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-8">
            <p className="text-center text-sm leading-relaxed text-white/40">
              Готова к сотрудничеству и открыта для общения с родителями учеников.
              <br />Напишите мне — отвечу в ближайшее время.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="mailto:lerazimina10@gmail.com"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm text-white transition-colors hover:bg-white/20"
              >
                Написать письмо
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
