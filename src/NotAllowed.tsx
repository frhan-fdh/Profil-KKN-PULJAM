export default function NotAllowed() {
  return (
    <div
      className="flex items-center justify-center h-screen p-4"
      style={{ backgroundColor: "#FFB575" }}
    >
      {/* Kartu dengan efek glassmorphism disesuaikan untuk latar belakang terang */}
      <div className="w-full max-w-md rounded-2xl bg-white/50 backdrop-blur-xl border border-white/30 p-8 text-center shadow-2xl">
        {/* Ikon Peringatan */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#C92626]/10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-[#C92626]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Judul Utama dengan warna gelap agar kontras */}
        <h1 className="mt-6 text-3xl font-extrabold text-slate-800">
          Akses Terbatas
        </h1>

        {/* Pesan Utama dengan warna amber-600 */}
        <p className="mt-4 text-lg font-semibold text-amber-700">
          Aplikasi ini hanya tersedia di Mobile.
        </p>

        {/* Deskripsi Tambahan dengan warna lebih gelap */}
        <p className="mt-2 text-sm text-slate-600 text-justify">
          Untuk fungsionalitas dan tampilan terbaik, silakan akses situs ini
          melalui perangkat <span className="italic underline">smartphone</span>{" "}
          Anda.
        </p>
      </div>
    </div>
  );
}
