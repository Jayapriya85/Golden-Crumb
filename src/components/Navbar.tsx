import { useEffect, useState } from 'react';
import { Menu, X, Wheat } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Visit Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2" onClick={handleClick}>
          <Wheat
            className={`h-8 w-8 transition-colors ${
              scrolled ? 'text-golden-600' : 'text-golden-400'
            }`}
          />
          <span
            className={`font-display text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? 'text-crust-800' : 'text-cream'
            }`}
          >
            Golden Crumb
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-golden-500 ${
                  scrolled ? 'text-crust-700' : 'text-cream/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#specialties"
              className="rounded-full bg-cherry-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cherry-500/30 transition-all hover:bg-cherry-600 hover:shadow-xl hover:shadow-cherry-500/40"
            >
              Order Now
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className={`h-7 w-7 ${scrolled ? 'text-crust-800' : 'text-cream'}`} />
          ) : (
            <Menu className={`h-7 w-7 ${scrolled ? 'text-crust-800' : 'text-cream'}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-6 mt-3 flex flex-col gap-1 rounded-2xl bg-cream/95 p-4 shadow-xl backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleClick}
                className="block rounded-lg px-4 py-3 text-base font-medium text-crust-700 transition-colors hover:bg-golden-50 hover:text-golden-600"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#specialties"
              onClick={handleClick}
              className="mt-2 block rounded-full bg-cherry-500 px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-cherry-600"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
