import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CONFIG from './config';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const root = document.documentElement;
    const c = CONFIG.colores;
    root.style.setProperty('--primario', c.primario);
    root.style.setProperty('--primario-deep', c.primarioDeep);
    root.style.setProperty('--primario-medio', c.primarioMedio);
    root.style.setProperty('--primario-light', c.primarioLight);
    root.style.setProperty('--primario-pale', c.primarioPale);
    root.style.setProperty('--primario-subtle', c.primarioSubtle);
    root.style.setProperty('--oscuro', c.oscuro);
    root.style.setProperty('--hero-fondo', c.heroFondo);
    root.style.setProperty('--texto-primario', c.textoPrimario);
    root.style.setProperty('--texto-secundario', c.textoSecundario);
    root.style.setProperty('--texto-muted', c.textoMuted);
    root.style.setProperty('--fondo', c.fondo);
    root.style.setProperty('--fondo-alt', c.fondoAlt);
    root.style.setProperty('--font-titulos', CONFIG.tipografia.titulos);
    root.style.setProperty('--font-subtitulos', CONFIG.tipografia.subtitulos);
    root.style.setProperty('--font-cuerpo', CONFIG.tipografia.cuerpo);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
