// src/hooks/useWindowSize.js

import { useState, useEffect } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: null as number | null,
    height: null as number | null,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Tambahkan event listener saat komponen di-mount
    window.addEventListener('resize', handleResize);
    
    // Panggil handler sekali saat inisialisasi untuk mendapatkan ukuran awal
    handleResize();

    // Hapus event listener saat komponen di-unmount (cleanup)
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Array kosong memastikan efek ini hanya berjalan saat mount dan unmount

  return windowSize;
}