import CONFIG from '../config';
import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-fondo">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-primario font-subtitulos text-xs font-bold tracking-widest uppercase mb-3 block">
            ✦ Preguntas Frecuentes
          </span>
          <h2 className="font-titulos text-3xl md:text-4xl font-bold" style={{ color: '#1C1208' }}>
            Resolvemos Tus Dudas
          </h2>
        </div>

        <div className="space-y-3">
          {CONFIG.faqs.map((faq, i) => (
            <div key={i} className="bg-fondo rounded-xl border border-primario-pale overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-subtitulos text-sm font-bold pr-4" style={{ color: '#1C1208' }}>{faq.pregunta}</span>
                <span className={`text-primario text-xl transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? '200px' : '0px' }}
              >
                <p className="px-5 pb-5 font-cuerpo text-sm leading-relaxed" style={{ color: 'var(--texto-muted)' }}>
                  {faq.respuesta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
