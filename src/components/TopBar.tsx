import CONFIG from '../config';

const TopBar = () => (
  <div className="bg-primario hidden md:block">
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-1.5">
      <span className="text-[10px] font-subtitulos tracking-wide" style={{ color: 'white' }}>
        📍 {CONFIG.direccion}
      </span>
      <a href={`tel:${CONFIG.telefono}`} className="text-[10px] font-subtitulos tracking-wide" style={{ color: 'white' }}>
        📞 {CONFIG.telefono}
      </a>
    </div>
  </div>
);

export default TopBar;
