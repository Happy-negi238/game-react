import { useState } from 'react'
import { Stopwatch } from './components/Stopwatch'
import { Timer } from './components/Timer';


function App() {

  const [showTimer, setshowTimer] = useState<Boolean>(false);

  return (
    <>
      <div
        className="min-h-screen text-white bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        <div className="flex items-center justify-center flex-col gap-10 min-h-screen px-4">
          {showTimer ? <Timer /> : <Stopwatch />}
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => setshowTimer(true)}
            className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform ${
              showTimer
                ? 'bg-linear-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50 scale-105'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
            } hover:scale-105 active:scale-95`}
          >
            Timer
          </button>
          <button
            onClick={() => setshowTimer(false)}
            className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform ${
              !showTimer
                ? 'bg-linear-to-br from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/50 scale-105'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
            } hover:scale-105 active:scale-95`}
          >
            Stopwatch
          </button>
        </div>
        </div>

      </div>
    </>
  )
}

export default App
