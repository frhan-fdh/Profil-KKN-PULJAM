// import FarhanPhoto from "./assets/Farhan Fadhila.jpg";
import { Instagram } from "lucide-react";
import WhatsApp from "./assets/whatsapp-brands.svg";
import { useParams } from "react-router";
import Anggota from "./Anggota.json";
import NotFound from "./NotFound";
import LogoPuljam from "./assets/LogoPuljam";
const ProfilAnggota = () => {
  const { nim } = useParams();

  const profil = Anggota.Anggota.find((item) => item.nim === nim);
  return (
    <>
      {!profil ? (
        <NotFound />
      ) : (
        <>
          <div className="min-h-screen bg-gray-100 relative overflow-hidden">
            {/* Newspaper Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 gap-2 h-full p-4 transform rotate-12 scale-150">
                {Array.from({ length: 200 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-gray-800 h-4 opacity-30 rounded-sm"
                  ></div>
                ))}
              </div>
            </div>

            {/* More newspaper lines */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-16 gap-1 h-full p-2 transform -rotate-6 scale-125">
                {Array.from({ length: 400 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-gray-700 h-2 opacity-40 rounded-sm"
                  ></div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen">
              {/* Header with Bold Typography */}
              <header className="text-center pt-2 px-4 relative">
                <h1 className="text-6xl md:text-8xl font-black text-gray-800 mb-4 transform -rotate-2 shadow-text">
                  KKN
                </h1>
                <h2 className="text-3xl md:text-7xl font-black text-gray-700 mb-8 transform rotate-1 shadow-text">
                  PULAU JAMBU
                </h2>
                <div className="absolute top-0 right-0 animate-pulse">
                  <LogoPuljam />
                </div>
              </header>

              {/* Main Achievement Section */}
              <main className="px-4 pb-12">
                <div className="max-w-6xl mx-auto">
                  {/* Main Photo Section */}
                  <div className="bg-white bg-opacity-95 rounded-2xl p-8 shadow-2xl transform rotate-1 mb-12">
                    <div className="text-center">
                      {/* Main Photo */}
                      <div className="flex justify-center mb-8">
                        <div className="relative">
                          {/* Decorative frame */}
                          <div className="absolute -inset-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl transform rotate-3"></div>
                          <div className="absolute -inset-2 bg-white rounded-2xl transform -rotate-1"></div>

                          {/* Photo container - siap untuk foto asli */}
                          <div className="relative w-80 h-96 bg-gradient-to-b from-amber-100 to-orange-200 rounded-xl overflow-hidden shadow-xl">
                            {/* Ganti bagian ini dengan foto asli */}
                            <img
                              src={profil!.url_foto}
                              alt={profil!.nama}
                              className="w-full h-full object-cover object-center"
                              style={{
                                objectFit: "cover",
                                objectPosition: "center",
                                backgroundColor: "#fbbf24",
                                imageRendering: "auto",
                                filter:
                                  "blur(0.4px) contrast(0.8) brightness(1.0) ",
                              }}
                            />

                            {/* Overlay untuk efek yang bagus */}
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-amber-900/10"></div>

                            {/* Border dalam yang halus */}
                            <div className="absolute inset-0 border-2 border-amber-300/30 rounded-xl"></div>

                            {/* Celebration elements */}
                            <a href={profil?.instagram || ""} target="_blank">
                              <div className="absolute top-4 right-4 text-3xl animate-bounce drop-shadow-lg">
                                <Instagram
                                  className="stroke-gray-700"
                                  size={40}
                                />
                              </div>
                            </a>

                            <a href="">
                              <div className="absolute top-8 left-4 text-2xl animate-bounce drop-shadow-lg">
                                <img
                                  src={WhatsApp}
                                  alt="WhatsApp"
                                  className="w-10 h-10"
                                />
                              </div>
                            </a>
                            <div className="absolute bottom-4 right-4 text-2xl drop-shadow-lg z-20">
                              💫
                            </div>

                            {/* Name tag yang stylish */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                                <p className="text-amber-800 font-bold text-lg">
                                  {profil!.nama}
                                </p>
                                <p className="text-amber-600 text-sm">
                                  {profil!.jabatan}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Supporting Team Section */}
                  <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-2xl transform -rotate-1 mb-12">
                    <h5 className="text-3xl font-black text-center text-gray-800 mb-8 transform rotate-1">
                      Informasi Pribadi
                    </h5>
                    <div className="space-y-6 text-gray-700">
                      <div className="grid md:grid-cols-2 gap-6 items-center">
                        <div className="bg-amber-50 p-4 rounded-lg shadow-inner transform transition-transform duration-300 rotate-3">
                          <p className="font-bold text-amber-800 text-lg">
                            Jurusan
                          </p>
                          <span className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
                            {profil!.jurusan}
                          </span>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg shadow-inner transform transition-transform duration-300 rotate-[-2deg]">
                          <p className="font-bold text-amber-800 text-lg">
                            Fakultas
                          </p>
                          <span className="bg-fuchsia-200 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
                            {profil!.fakultas}
                          </span>
                        </div>
                      </div>
                     
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-amber-50 p-4 rounded-lg shadow-inner rotate-5">
                          <p className="font-bold text-amber-800 text-lg mb-2">
                            Zodiak
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-green-200 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
                              {profil!.zodiak}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-center shadow-2xl transform rotate-1">
                    <h6 className="text-3xl font-black text-white mb-4 transform -rotate-1">
                      ✨Bersatu dalam Sinergi, Berkarya Tanpa Henti🚀
                    </h6>
                    <p className="text-xl text-gray-300 mb-6">
                      Satu tujuan, Satu Kordes, Dua Korlap, Tiga PDD, Dua Humas
                      , Satu Bendahara, Dua Konsumsi dan Dua Sekretaris
                    </p>
                  </div>
                </div>
              </main>

              {/* Footer */}
              <footer className="bg-gray-900 text-white p-6 mt-12">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center text-sm text-gray-400">
                    <p>
                      © 2025 KKN di Desa Pulau Jambu | Mengabdi, Berkarya, dan
                      Mencari Rezeki.
                    </p>
                  </div>
                </div>
              </footer>
            </div>

            <style>{`
        .shadow-text {
          text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
        }
      `}</style>
          </div>
        </>
      )}
    </>
  );
};

export default ProfilAnggota;
