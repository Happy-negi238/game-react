import { useEffect, useState } from "react";

export const Stopwatch = () => {
    const [timer, setTimer] = useState(0);
    const [currentStat, setCurrentStat] = useState(false);

    useEffect(() => {
        const interval: number | false = currentStat ? setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000) : false;

        return () => {
            if (interval) clearInterval(interval)
        }

    }, [currentStat]);

    const formatTime = (seconds: number) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className="w-full max-w-md">
            <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700/50 backdrop-blur-xl">
                <h1 className="text-center text-3xl font-bold mb-8 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Stopwatch
                </h1>

                <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-8 border border-blue-500/30 shadow-lg">
                    <div className="text-center">
                        <p className="text-slate-400 text-sm font-medium mb-3 tracking-widest uppercase">Time Elapsed</p>
                        <p className="text-6xl font-bold font-mono text-white tracking-tight drop-shadow-lg">
                            {formatTime(timer)}
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => setCurrentStat(true)}
                        disabled={currentStat}
                        className="flex-1 bg-linear-to-br from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 disabled:from-emerald-700 disabled:to-emerald-800 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg disabled:cursor-not-allowed"
                    >
                        Start
                    </button>

                    <button
                        onClick={() => setCurrentStat(false)}
                        disabled={!currentStat}
                        className="flex-1 bg-linear-to-br from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:from-amber-700 disabled:to-amber-800 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg disabled:cursor-not-allowed"
                    >
                        Pause
                    </button>

                    <button
                        onClick={() => {
                            setTimer(0);
                            setCurrentStat(false);
                        }}
                        className="flex-1 bg-linear-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
