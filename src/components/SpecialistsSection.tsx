import CONFIG from '../config';
import useScrollAnimation from '../hooks/useScrollAnimation';
import williamFoto from '../assets/especialistas/william-fuentes.png';
import andreaFoto from '../assets/especialistas/andrea-rios.png';
import estefaniaFoto from '../assets/especialistas/estefania-delgado.png';
import dianaFoto from '../assets/especialistas/diana-garzon.png';

const FOTOS: Record<string, string> = {
  'william-fuentes': williamFoto,
  'andrea-rios': andreaFoto,
  'estefania-delgado': estefaniaFoto,
  'diana-garzon': dianaFoto,
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
          <h2 className="font-titulos text-3xl md:text-4xl font-bold mb-3" style={{ color: '#1C1208' }}>
            Especialistas Independientes Certificados
          </h2>
          <p className="font-cuerpo text-sm" style={{ color: 'var(--texto-muted)' }}>
            Cada profesional habilitado ante la Secretaría de Salud · {CONFIG.ciudad}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CONFIG.especialistas.map(e => (
            <div
              key={e.id}
              className="bg-fondo rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              style={{
                boxShadow: '0 4px 20px rgba(139,111,71,0.10)',
                border: '1px solid var(--primario-pale)',
              }}
            >
              {/* LARGE PHOTO */}
              <div className="relative w-full overflow-hidden" style={{ height: '280px' }}>
                <img
                  src={FOTOS[e.id]}
                  alt={e.nombre}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(44,31,10,0.7) 0%, transparent 50%)'
                  }} />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-titulos font-bold text-white" style={{ fontSize: '20px' }}>
                    {e.nombre}
                  </h3>
                  <p className="font-cuerpo italic text-white/80" style={{ fontSize: '13px' }}>
                    {e.titulo}
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="font-subtitulos font-bold rounded-full px-3 py-1"
                    style={{
                      fontSize: '10px',
                      background: 'var(--primario)',
                      color: 'white',
                    }}>
                    {e.icono} {e.especialidad}
                  </span>
                </div>
              </div>

              {/* CARD BODY */}
              <div className="p-6">
                <span className="inline-block font-subtitulos font-bold rounded-full px-3 py-1 mb-4"
                  style={{
                    fontSize: '10px',
                    background: 'var(--primario-pale)',
                    color: 'var(--primario)',
                  }}>
                  Profesional Independiente
                </span>

                <p className="font-cuerpo leading-relaxed mb-5"
                  style={{ fontSize: '14px', color: 'var(--texto-muted)' }}>
                  {e.descripcion}
                </p>

                <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-6">
                  {e.servicios.map(s => (
                    <span key={s} className="font-subtitulos"
                      style={{ fontSize: '12px', color: 'var(--primario)' }}>
                      ✓ {s}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${e.whatsapp}?text=${encodeURIComponent(
                    `Hola! Quiero agendar una cita con ${e.nombre.split(' ').slice(0, 3).join(' ')}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-full py-3 font-subtitulos font-bold transition-colors duration-300"
                  style={{
                    fontSize: '14px',
                    background: 'var(--primario)',
                    color: 'white',
                    textDecoration: 'none',
                  }}>
                  Agendar con {e.nombre.split(' ')[1]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
