import CONFIG from '../config';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % CONFIG.testimonios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonios" className="py-20 bg-fondo-alt">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primario font-subtitulos text-xs font-bold tracking-widest uppercase mb-3 block">
            ✦ Testimonios
          </span>
          <h2 className="font-titulos text-3xl md:text-4xl font-bold text-oscuro">
            Lo Que Dicen Nuestros Pacientes
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {CONFIG.testimonios.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <div className="bg-fondo rounded-2xl border-t-2 border-primario p-8 shadow-primario text-center">
                  <div className="text-primario text-xl mb-4">
                    {'★'.repeat(t.estrellas)}
                  </div>
                  <p className="font-cuerpo text-sm text-texto-secundario leading-relaxed mb-6 italic">
                    "{t.texto}"
                  </p>
                  <p className="font-subtitulos text-sm font-bold text-oscuro">{t.nombre}</p>
                  <p className="font-cuerpo text-xs text-texto-muted">{t.servicio} · {t.ciudad}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {CONFIG.testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? 'bg-primario w-6' : 'bg-primario-light'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
