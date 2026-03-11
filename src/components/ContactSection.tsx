import CONFIG from '../config';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '', telefono: '', especialista: '', servicio: '', fecha: '', turno: '', mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola! Quiero agendar una cita.
Nombre: ${formData.nombre}
Teléfono: ${formData.telefono}
Especialista: ${formData.especialista}
Servicio: ${formData.servicio}
Fecha: ${formData.fecha}
Turno: ${formData.turno}
Mensaje: ${formData.mensaje}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [field]: e.target.value }));

  const inputClass = "w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 font-cuerpo text-sm focus:outline-none focus:border-primario transition-colors";

  return (
    <section id="contacto" className="py-20 bg-oscuro">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-titulos text-3xl md:text-4xl font-bold mb-3" style={{ color: 'white' }}>
            Agenda Tu Cita con el Especialista
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primario text-lg">📍</span>
                <div>
                  <p className="font-subtitulos text-sm font-bold" style={{ color: 'white' }}>{CONFIG.direccion}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primario text-lg">📞</span>
                <a href={`tel:${CONFIG.telefono}`} className="font-subtitulos text-sm font-bold" style={{ color: 'white' }}>{CONFIG.telefono}</a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primario text-lg">🕐</span>
                <div>
                  <p className="font-cuerpo text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{CONFIG.horarioSemana}</p>
                  {CONFIG.horarioSabado && <p className="font-cuerpo text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{CONFIG.horarioSabado}</p>}
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primario rounded-full px-6 py-3 font-subtitulos font-bold text-sm hover:bg-primario-deep transition-colors"
              style={{ color: 'white' }}
            >
              💬 Escribir por WhatsApp
            </a>

            <div className="mt-6">
              <p className="font-subtitulos text-xs font-bold mb-3" style={{ color: 'rgba(255,255,255,0.5)' }}>NUESTROS ESPECIALISTAS</p>
              {CONFIG.especialistas.map(e => (
                <p key={e.id} className="font-cuerpo text-sm mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {e.icono} {e.nombre} — {e.especialidad}
                </p>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
            <input type="text" required placeholder="Nombre *" value={formData.nombre} onChange={update('nombre')} className={inputClass} />
            <input type="tel" required placeholder="Teléfono *" value={formData.telefono} onChange={update('telefono')} className={inputClass} />
            <select required value={formData.especialista} onChange={update('especialista')} className={inputClass}>
              <option value="">Seleccionar Especialista *</option>
              {CONFIG.especialistas.map(e => (
                <option key={e.id} value={e.nombre}>{e.nombre} — {e.especialidad}</option>
              ))}
              <option value="orientacion">No sé / Necesito orientación</option>
            </select>
            <select value={formData.servicio} onChange={update('servicio')} className={inputClass}>
              <option value="">Seleccionar Servicio</option>
              {CONFIG.servicios.map(s => (
                <option key={s.id} value={s.nombre}>{s.nombre}</option>
              ))}
            </select>
            <input type="date" value={formData.fecha} onChange={update('fecha')} className={inputClass} />
            <select value={formData.turno} onChange={update('turno')} className={inputClass}>
              <option value="">Turno preferido</option>
              <option value="Mañana">Mañana</option>
              <option value="Tarde">Tarde</option>
            </select>
            <textarea placeholder="Mensaje" value={formData.mensaje} onChange={update('mensaje')} rows={3} className={inputClass} />
            <button type="submit" className="w-full bg-primario rounded-full py-3 font-subtitulos font-bold text-sm hover:bg-primario-deep transition-colors" style={{ color: 'white' }}>
              Agendar Mi Cita
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
