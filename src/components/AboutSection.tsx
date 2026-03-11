import CONFIG from '../config';
import useScrollAnimation from '../hooks/useScrollAnimation';

const getInitials = (name: string) => {
  const parts = name.replace(/Dr[a]?\.\s*/i, '').split(' ');
  return (parts[0]?.[0] || '') + (parts[1]?.[0] || '');
};

const values = [
  { icon: '✓', text: 'Profesionales Habilitados' },
  { icon: '✓', text: '4 Especialidades en un solo lugar' },
  { icon: '✓', text: 'Atención Personalizada' },
  { icon: '✓', text: 'Tecnología Moderna' },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="nosotros" className="py-20 bg-fondo">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center" ref={ref}>
        {/* Left - placeholder */}
        <div className="bg-primario-pale rounded-2xl h-[440px] flex items-center justify-center relative">
          <div className="grid grid-cols-2 gap-6">
            {CONFIG.especialistas.map(e => (
              <div key={e.id} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-fondo flex items-center justify-center shadow-primario mb-2">
                  <span className="font-titulos text-lg font-bold text-primario">{getInitials(e.nombre)}</span>
                </div>
                <span className="font-subtitulos text-[10px] text-center" style={{ color: 'var(--texto-muted)' }}>{e.especialidad}</span>
              </div>
            ))}
          </div>
          <p className="absolute bottom-4 font-subtitulos text-xs" style={{ color: 'var(--texto-muted)' }}>
            {CONFIG.especialistas.length} Especialistas Independientes
          </p>
        </div>

        {/* Right */}
        <div>
          <span className="text-primario font-subtitulos text-xs font-bold tracking-widest uppercase mb-3 block">
            ✦ Sobre Nosotros
          </span>
          <h2 className="font-titulos text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1C1208' }}>
            Especialistas Independientes Comprometidos con Tu Salud
          </h2>
          <div className="w-16 h-[3px] bg-primario mb-6" />
          <p className="font-cuerpo text-sm leading-relaxed mb-8" style={{ color: 'var(--texto-muted)' }}>{CONFIG.descripcionSobre}</p>
          <div className="grid grid-cols-2 gap-4">
            {values.map(v => (
              <div key={v.text} className="bg-primario-pale rounded-xl p-4">
                <span className="text-primario font-bold mr-2">{v.icon}</span>
                <span className="font-subtitulos text-sm" style={{ color: '#1C1208' }}>{v.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
