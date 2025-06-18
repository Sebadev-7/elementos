import zinc from '../assets/zinc.png'

export default function Zinc() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-800 to-cyan-400 relative overflow-hidden flex items-center justify-center">
      <img
        src={zinc}
        alt="Zinc"
        className="
          w-[230vw] max-w-none
          sm:w-[80vw] sm:h-auto sm:object-contain
          // Mobile: imagen desbordada para ampliar visualmente
          // Notebook: imagen centrada y más chica
        "
      />
    </div>
  )
}
