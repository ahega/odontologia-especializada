import CONFIG from '../config';
import useScrollAnimation from '../hooks/useScrollAnimation';

const getInitials = (name: string) => {
  const parts = name.replace(/Dr[a]?\.\s*/i, '').split(' ');
  return (parts[0]?.[0] || '') + (parts[1]?.[0] || '');
};

const SpecialistsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="especialistas" className="py-20 bg-fondo">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <div className="text-center mb-14">
          <span className="text-primario font-subtitulos text-xs font-bold tracking-widest uppercase mb-3 block">
            ✦ Nuestro Equipo
          </span>
          <h2 className="font-titulos text-3xl md:text-4xl font-bold text-oscuro mb-3">
            Especialistas Independientes Certificados
          </h2>
          <p className="font-cuerpo text-sm text-texto-muted">
            Cada profesional habilitado ante la Secretaría de Salud · {CONFIG.ciudad}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CONFIG.especialistas.map(e => (
            <div
              key={e.id}
              className="bg-fondo rounded-2xl border-t-4 border-primario shadow-primario p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-primario-hover"
            >
              {/* Top */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-full bg-primario-pale flex items-center justify-center flex-shrink-0">
                  <span className="font-titulos text-2xl font-bold text-primario">{getInitials(e.nombre)}</span>
                </div>
                <div>
                  <h3 className="font-subtitulos text-base font-bold text-oscuro">{e.nombre}</h3>
                  <p className="font-cuerpo text-[13px] italic text-primario mb-2">{e.titulo}</p>
                  <span className="inline-block bg-primario-pale text-primario rounded-full px-3 py-0.5 text-[10px] font-subtitulos font-bold">
                    Profesional Independiente
                  </span>
                </div>
              </div>

              <div className="w-full h-px bg-primario-pale mb-4" />

              <p className="font-cuerpo text-sm text-texto-muted leading-relaxed mb-4">{e.descripcion}</p>

              <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-6">
                {e.servicios.map(s => (
                  <span key={s} className="font-subtitulos text-xs text-primario">✓ {s}</span>
                ))}
              </div>

              <a
                href={`https://wa.me/${e.whatsapp}?text=${encodeURIComponent(`Hola! Quiero agendar una cita con ${e.nombre.split(' ').slice(0, 3).join(' ')}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-primario rounded-full py-3 font-subtitulos font-bold text-sm hover:bg-primario-deep transition-colors"
                style={{ color: 'white' }}
              >
                Agendar con {e.nombre.split(' ')[1]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
