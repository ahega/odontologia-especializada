import CONFIG from '../config';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ServicesSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="servicios" className="py-20 bg-fondo-alt">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <div className="text-center mb-14">
          <span className="text-primario font-subtitulos text-xs font-bold tracking-widest uppercase mb-3 block">
            ✦ Especialidades
          </span>
          <h2 className="font-titulos text-3xl md:text-4xl font-bold text-oscuro mb-3">
            Cobertura Odontológica Especializada Completa
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.servicios.map(s => (
            <div key={s.id} className="bg-fondo rounded-2xl border-t-4 border-primario shadow-primario p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-primario-hover">
              <div className="text-[28px] mb-3">{s.icono}</div>
              <h3 className="font-titulos text-xl font-bold text-oscuro mb-2">{s.nombre}</h3>
              <span className="inline-flex items-center gap-1 bg-primario-pale text-primario rounded-full px-3 py-1 text-[11px] font-subtitulos font-bold mb-3">
                👤 {s.especialista}
              </span>
              <p className="font-cuerpo text-sm text-texto-muted leading-relaxed mb-4">{s.descripcion}</p>
              <div className="space-y-1">
                {s.features.map(f => (
                  <span key={f} className="block font-subtitulos text-xs text-primario">✓ {f}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
