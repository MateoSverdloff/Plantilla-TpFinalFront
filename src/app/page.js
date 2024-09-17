"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirige a la página de login al cargar la página principal
    router.push('./pages/login');
  }, [router]);

  return (
    <div className='w-page'>
      {/* Este contenido solo se muestra brevemente antes de la redirección */}
      <h1 className='w-page-title'>Redirecting to Login...</h1>
    </div>
  );
}
