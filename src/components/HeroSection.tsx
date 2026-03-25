import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/3f731d95-c1df-4769-9eb1-3d51a9d9d75d/files/9a038e40-26f2-4a24-b7a1-b161888672f3.jpg',
  'https://cdn.poehali.dev/projects/3f731d95-c1df-4769-9eb1-3d51a9d9d75d/files/9deb3aa3-d26c-4eb6-9eff-296fd1467393.jpg',
  'https://cdn.poehali.dev/projects/3f731d95-c1df-4769-9eb1-3d51a9d9d75d/files/34cc654f-ef12-46d2-89ae-8b1a84fa63da.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-2xl md:h-64 md:w-64">
                <img
                  src="https://cdn.poehali.dev/projects/3f731d95-c1df-4769-9eb1-3d51a9d9d75d/bucket/09d43a0c-ecab-4b9e-9e8f-73874e3c78b6.jpeg"
                  alt="Зимина Валерия Олеговна"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-5">
                <div>
                  <span className="mb-3 inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs tracking-widest text-white/70 uppercase backdrop-blur-sm">
                    Молодой специалист
                  </span>
                  <p className="text-3xl font-light text-white md:text-4xl lg:text-5xl">
                    Зимина Валерия Олеговна
                  </p>
                  <p className="mt-2 text-xl font-light text-white/80 md:text-2xl">
                    Учитель начальных классов
                  </p>
                </div>

                {/* Цитата */}
                <div
                  className={cn(
                    'transform transition-all duration-1000 delay-500 ease-out',
                    isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  )}
                >
                  <blockquote className="border-l-2 border-white/50 pl-4">
                    <p className="text-base italic leading-relaxed text-white/75 md:text-lg">
                      «Если педагогика хочет воспитывать человека во всех отношениях,
                      то она должна прежде всего узнать его тоже во всех отношениях»
                    </p>
                    <footer className="mt-2 text-sm text-white/50">
                      — Константин Ушинский
                    </footer>
                  </blockquote>
                </div>

                {/* О профессии */}
                <div
                  className={cn(
                    'transform transition-all duration-1000 delay-700 ease-out',
                    isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                  )}
                >
                  <p className="max-w-lg text-sm leading-relaxed text-white/65 md:text-base">
                    Учитель начальных классов — это первый наставник, который открывает
                    ребёнку мир знаний. Именно здесь закладываются любовь к учёбе,
                    уверенность в себе и первые важные победы.
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}