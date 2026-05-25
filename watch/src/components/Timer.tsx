import { useEffect, useState } from "react"

export const Timer = () => {
    const [milliseconds, setMilliseconds] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (milliseconds <= 0) return;
        const interval = show && setInterval(() => {
            setMilliseconds(prev => prev - 10);
        }, 10);

        return () => {
            if (interval) clearInterval(interval);
        }
    }, [show, milliseconds]);

    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        const msRemaining = Math.floor(ms % 1000 / 10);
        return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(msRemaining).padStart(2, '0')}`;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setMilliseconds(value * 1000);
        setShow(false);
    };

    return (
        <div className="w-full max-w-md">
            <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700/50 backdrop-blur-xl">
                <h1 className="text-center text-3xl font-bold mb-8 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Timer
                </h1>

                <div className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 mb-8 border border-blue-500/30 shadow-lg">
                    <div className="text-center">
                        <p className="text-slate-400 text-sm font-medium mb-3 tracking-widest uppercase">Time Remaining</p>
                        <p className="text-6xl font-bold font-mono text-white tracking-tight drop-shadow-lg">
                            {formatTime(milliseconds)}
                        </p>
                    </div>
                </div>

                <div className="mb-6">
                    <label className="text-slate-300 text-sm font-medium mb-2 block">Set Time (seconds)</label>
                    <input
                        type="number"
                        onChange={handleInputChange}
                        placeholder="Enter seconds"
                        className="w-full bg-slate-700 border
                         border-slate-600 rounded-xl px-4 py-3
                          text-white text-lg font-mono placeholder-slate-500 
                          focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-transparent
                           [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                            [&::-webkit-inner-spin-button]:appearance-none"
                    />
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => setShow(true)}
                        disabled={show || milliseconds <= 0}
                        className="flex-1 bg-linear-to-br from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 disabled:from-emerald-700 disabled:to-emerald-800 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg disabled:cursor-not-allowed"
                    >
                        ▶ Start
                    </button>

                    <button
                        onClick={() => setShow(false)}
                        disabled={!show}
                        className="flex-1 bg-linear-to-br from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:from-amber-700 disabled:to-amber-800 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg disabled:cursor-not-allowed"
                    >
                        ⏸ Pause
                    </button>

                    <button
                        onClick={() => {
                            setMilliseconds(0);
                            setShow(false);
                        }}
                        className="flex-1 bg-linear-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
                    >
                        ↻ Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
