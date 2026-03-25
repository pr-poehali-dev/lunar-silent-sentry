import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/about', label: 'О себе' },
  { href: '/contacts', label: 'Контакты' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-8 py-5 md:px-16">
        <Link to="/" className="text-sm tracking-widest text-white/80 uppercase hover:text-white transition-colors">
          В. О. Зимина
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              className={cn(
                'text-sm tracking-wide transition-colors',
                pathname === href ? 'text-white' : 'text-white/60 hover:text-white'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <span className={cn('block h-0.5 w-6 bg-white transition-all', open && 'rotate-45 translate-y-2')} />
          <span className={cn('block h-0.5 w-6 bg-white transition-all', open && 'opacity-0')} />
          <span className={cn('block h-0.5 w-6 bg-white transition-all', open && '-rotate-45 -translate-y-2')} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden flex flex-col gap-4 bg-black/90 px-8 py-6 backdrop-blur-sm">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              onClick={() => setOpen(false)}
              className={cn(
                'text-base transition-colors',
                pathname === href ? 'text-white' : 'text-white/60 hover:text-white'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
