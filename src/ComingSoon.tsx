import { useEffect, useState } from "react";
import type { JSX } from 'react';
interface TimeLeft {
  Hari?: number;
  Jam?: number;
  Menit?: number;
  Detik?: number;
}
function CommingSoon() {
  const CountdownTimer: React.FC = () => {
    // Tentukan tanggal peluncuran di sini
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date("2026-12-01T00:00:00") - +new Date();
        let timeLeft: TimeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Menit: Math.floor((difference / 1000 / 60) % 60),
                Detik: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents: JSX.Element[] = [];

    (Object.keys(timeLeft) as Array<keyof TimeLeft>).forEach((interval) => {
        if (timeLeft[interval] === undefined) {
            return;
        }

        timerComponents.push(
            <div key={interval} className="flex flex-col items-center mx-2 md:mx-4">
                <div className="text-4xl md:text-6xl font-bold font-mono tracking-widest">
                    {String(timeLeft[interval]).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase mt-1">{interval}</div>
            </div>
        );
    });

    return (
        <div className="flex justify-center my-8">
            {timerComponents.length ? timerComponents : <span className="text-2xl text-white">Waktunya Tiba!</span>}
        </div>
    );
};
  return (
    <div className="min-h-screen bg-caution-tape flex items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-8xl md:text-9xl font-black text-white/20 uppercase tracking-widest transform -rotate-12 whitespace-nowrap">
          ComingSoon
        </h2>
      </div>
      <div className="relative z-10 text-center p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl max-w-md w-full border-4 border-black">
        <h1 className="text-4xl font-bold text-blue-900">
          ComingSoon
        </h1>
        <CountdownTimer />
        <p className="text-gray-600 mt-2">Silakan Datang Kembali 🚀.</p>
      </div>
    </div>
  );
}

export default CommingSoon;
