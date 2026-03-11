import CONFIG from '../config';

const FooterSection = () => (
  <footer className="py-16 border-t border-white/5" style={{ background: '#2C1F0A' }}>
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
      {/* Col 1 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8 2 6 5 6 8c0 4 2 8 6 14 4-6 6-10 6-14 0-3-2-6-6-6z" fill="var(--primario)" />
          </svg>
          <span className="font-titulos text-lg font-bold text-primario">{CONFIG.nombreCorto}</span>
        </div>
        <p className="font-cuerpo text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {CONFIG.slogan}
        </p>
        <div className="w-12 h-[2px] bg-primario" />
      </div>

      {/* Col 2 - Specialists */}
      <div>
        <p className="font-subtitulos text-xs font-bold mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>ESPECIALISTAS</p>
        {CONFIG.especialistas.map(e => (
          <p key={e.id} className="font-cuerpo text-sm mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {e.nombre} · {e.especialidad}
          </p>
        ))}
      </div>

      {/* Col 3 - Contact */}
      <div>
        <p className="font-subtitulos text-xs font-bold mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>CONTACTO</p>
        <p className="font-cuerpo text-sm mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>📍 {CONFIG.direccion}</p>
        <p className="font-cuerpo text-sm mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>📞 {CONFIG.telefono}</p>
        <p className="font-cuerpo text-sm mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>{CONFIG.horarioSemana}</p>
        {CONFIG.horarioSabado && <p className="font-cuerpo text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{CONFIG.horarioSabado}</p>}
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/5 text-center">
      <p className="font-cuerpo text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
        © {new Date().getFullYear()} {CONFIG.nombreNegocio}. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default FooterSection;
