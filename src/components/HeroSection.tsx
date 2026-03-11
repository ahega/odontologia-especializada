import CONFIG from '../config';
import useScrollAnimation from '../hooks/useScrollAnimation';

const HeroSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="inicio" className="bg-hero-fondo min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-32 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div ref={ref} className="animate-scroll-in">
          <span className="inline-block bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs font-subtitulos mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
            {CONFIG.ciudad} · Especialistas Certificados
          </span>

          <h1 className="font-titulos text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ color: 'white' }}>
            {CONFIG.sloganHero}
          </h1>

          <div className="w-16 h-[3px] bg-primario mb-6" />

          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-lg font-cuerpo" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {CONFIG.subtituloHero}
          </p>

          {/* Specialist pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CONFIG.especialistas.map(e => (
              <span
                key={e.id}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-[11px] font-subtitulos"
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                {e.icono} {e.especialidad}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primario rounded-full px-7 py-3 font-subtitulos font-bold text-sm hover:bg-primario-deep transition-colors"
              style={{ color: 'white' }}
            >
              Agendar Mi Cita
            </a>
            <button
              onClick={() => document.querySelector('#especialistas')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full px-7 py-3 font-subtitulos font-bold text-sm border border-white/20 hover:bg-white/10 transition-colors"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              Ver Especialistas →
            </button>
          </div>

          <p className="text-[11px] font-subtitulos" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {CONFIG.especialistas.length} Especialistas · {CONFIG.servicios.length} Especialidades · {CONFIG.ciudad}
          </p>
        </div>

        {/* Right - placeholder */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="w-full max-w-md h-[500px] rounded-2xl flex flex-col items-center justify-center" style={{ backgroundColor: 'color-mix(in srgb, var(--primario) 15%, transparent)' }}>
            <svg width="160" height="160" viewBox="0 0 200 200" fill="none" className="mb-4">
              <circle cx="60" cy="70" r="22" fill="var(--primario)" opacity="0.6" />
              <circle cx="140" cy="70" r="22" fill="var(--primario)" opacity="0.6" />
              <circle cx="60" cy="130" r="22" fill="var(--primario)" opacity="0.6" />
              <circle cx="140" cy="130" r="22" fill="var(--primario)" opacity="0.6" />
              <rect x="45" y="85" width="30" height="10" rx="5" fill="var(--primario)" opacity="0.3" />
              <rect x="125" y="85" width="30" height="10" rx="5" fill="var(--primario)" opacity="0.3" />
              <rect x="45" y="145" width="30" height="10" rx="5" fill="var(--primario)" opacity="0.3" />
              <rect x="125" y="145" width="30" height="10" rx="5" fill="var(--primario)" opacity="0.3" />
            </svg>
            <p className="font-subtitulos text-[11px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Nuestro equipo de especialistas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
