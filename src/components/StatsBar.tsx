import CONFIG from '../config';
import { useEffect, useState, useRef } from 'react';

const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-primario py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {CONFIG.stats.map((stat, i) => (
          <div key={i} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="font-titulos text-3xl md:text-4xl font-bold mb-1" style={{ color: 'white' }}>{stat.numero}</div>
            <div className="font-subtitulos text-sm font-bold mb-0.5" style={{ color: 'rgba(255,255,255,0.9)' }}>{stat.label}</div>
            <div className="font-cuerpo text-[11px]" style={{ color: 'rgba(255,255,255,0.6)' }}>{stat.sublabel}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
