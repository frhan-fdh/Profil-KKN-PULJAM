
function NotFound() {
  return (
    <div className="min-h-screen bg-caution-tape flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-8xl md:text-9xl font-black text-white/20 uppercase tracking-widest transform -rotate-12 whitespace-nowrap">
          DO NOT CROSS
        </h2>
      </div>
      <div className="relative z-10 text-center p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl max-w-md w-full border-4 border-black">
        <h1 className="text-4xl font-bold text-red-600">
          Profil Tidak Ditemukan
        </h1>
        <p className="text-gray-800 mt-4 text-lg">
          Maaf, data untuk NIM{" "}
          <span className="font-bold text-black">00000</span> tidak dapat
          ditemukan.
        </p>
        <p className="text-gray-600 mt-2">Silakan periksa kembali URL Anda.</p>
      </div>
    </div>
  );
}

export default NotFound;
