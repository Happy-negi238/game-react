import { Tictaktoe } from './components/Tictaktoe'

function App() {
  return (
    <>
      <div
        className="min-h-screen text-zinc-800 bg-[#f8f8f6]
        bg-[linear-gradient(to_bottom,#bec4d1_1px,transparent_1px)]
        bg-size-[100%_30px] relative overflow-hidden"
      >
        <div className="absolute left-20 top-0 w-0.5 h-full bg-red-300"></div>

        <div className="max-w-3xl mx-auto">
          <Tictaktoe />
        </div>
      </div>
    </>
  )
}
export default App
