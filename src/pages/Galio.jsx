import galio from '../assets/galio.png'

export default function Galio() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-rose-700 to-amber-300 relative overflow-hidden flex items-center justify-center">
      <img
        src={galio}
        alt="Galio"
        className="
          w-[230vw] max-w-none
          sm:w-[80vw] sm:h-auto sm:object-contain
          // Mobile: más grande y desbordada
          // Notebook: contenida, clara y centrada
        "
      />
    </div>
  )
}
