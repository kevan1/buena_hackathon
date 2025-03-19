"use client";

import { useState, useEffect } from 'react';

export default function MobileDetector() {
  const [isMobile, setIsMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Detectar si el dispositivo es móvil
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      
      // También verificar el tamaño de pantalla
      const width = window.innerWidth;
      const isMobileDevice = mobileRegex.test(userAgent) || width < 768;
      
      setIsMobile(isMobileDevice);
    };

    // Ejecutar al cargar y cuando cambia el tamaño de la ventana
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Limpiar event listener al desmontar
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cerrar la advertencia
  const handleDismiss = () => {
    setDismissed(true);
    // Opcional: Guardar preferencia en localStorage
    localStorage.setItem('mobile-warning-dismissed', 'true');
  };

  if (!isMobile || dismissed) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md m-4">
        <h2 className="text-xl font-bold mb-4">Esta página está diseñada para desktop</h2>
        <p className="mb-4">
          Hemos detectado que estás utilizando un dispositivo móvil. Esta página está optimizada para su visualización en pantallas más grandes.
        </p>
        <p className="mb-6">
          Para una mejor experiencia, te recomendamos acceder desde un ordenador o tablet.
        </p>
        <div className="flex justify-end">
          <button
            onClick={handleDismiss}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Entendido, continuar de todos modos
          </button>
        </div>
      </div>
    </div>
  );
}