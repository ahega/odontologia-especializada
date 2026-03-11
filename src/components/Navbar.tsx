import { useState, useEffect } from 'react';
import CONFIG from '../config';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Especialistas', href: '#especialistas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-fondo shadow-md py-2' : 'bg-transparent py-4'
      }`}
      style={{ top: scrolled ? 0 : undefined }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick('#inicio')} className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8 2 6 5 6 8c0 4 2 8 6 14 4-6 6-10 6-14 0-3-2-6-6-6z" fill="var(--primario)" />
            <path d="M12 5c-1.5 0-3 1.5-3 3.5S10 13 12 17c2-4 3-5 3-8.5S13.5 5 12 5z" fill="var(--fondo)" />
          </svg>
          <span className="font-titulos text-lg font-bold text-primario">{CONFIG.nombreCorto}</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-subtitulos transition-colors hover:text-primario ${
                scrolled ? 'text-texto-secundario' : 'text-texto-secundario'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex bg-primario rounded-full px-5 py-2.5 text-sm font-subtitulos font-bold transition-all hover:bg-primario-deep"
          style={{ color: 'white' }}
        >
          Agendar Cita
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-primario transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primario transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primario transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-fondo z-50 flex flex-col items-center justify-center gap-6">
          <button className="absolute top-5 right-5 text-3xl text-primario" onClick={() => setMobileOpen(false)}>✕</button>
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-titulos text-2xl text-texto-primario hover:text-primario transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMensaje)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primario rounded-full px-8 py-3 font-subtitulos font-bold"
            style={{ color: 'white' }}
          >
            Agendar Cita
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
