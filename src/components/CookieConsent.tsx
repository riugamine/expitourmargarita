'use client';
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 font-lora">
          Utilizamos cookies esenciales para mejorar su experiencia. Al continuar navegando, acepta nuestra política de cookies.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-expitour-teal text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-expitour-blue transition-colors duration-300"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}