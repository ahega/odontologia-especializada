import CONFIG from '../config';
import useScrollAnimation from '../hooks/useScrollAnimation';
import equipoFoto from '../assets/especialistas/equipo.png';

const HeroSection = () => {
  const ref = useScrollAnimation();

  // Extract RGB from primario hex for rgba usage
  const hex = CONFIG.colores.primario;
  const pr = parseInt(hex.slice(1, 3), 16);
  const pg = parseInt(hex.slice(3, 5), 16);
  const pb = parseInt(hex.slice(5, 7), 16);

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

        {/* Right - Group Photo */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-[480px]">
            <div className="relative rounded-2xl overflow-hidden"
              style={{
                height: '560px',
                boxShadow: `0 25px 60px rgba(${pr},${pg},${pb},0.25)`,
                border: `1px solid rgba(${pr},${pg},${pb},0.20)`,
              }}>
              <img
                src={equipoFoto}
                alt="Equipo Odontología Especializada"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, rgba(${pr},${pg},${pb},0.45) 0%, transparent 55%)`
                }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-subtitulos font-bold text-white"
                  style={{ fontSize: '14px', letterSpacing: '0.05em' }}>
                  Nuestro Equipo de Especialistas
                </p>
                <p className="font-cuerpo text-white/70 mt-1"
                  style={{ fontSize: '11px' }}>
                  {CONFIG.especialistas.length} profesionales independientes · {CONFIG.ciudad}
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-xl px-5 py-3"
              style={{
                background: 'var(--primario)',
                boxShadow: `0 8px 24px rgba(${pr},${pg},${pb},0.40)`,
              }}>
              <p className="font-titulos font-bold text-white text-center"
                style={{ fontSize: '22px' }}>
                {CONFIG.stats[0].numero}
              </p>
              <p className="font-cuerpo text-white/80 text-center"
                style={{ fontSize: '10px' }}>
                {CONFIG.stats[0].sublabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
