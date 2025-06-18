import germanio from '../assets/germanio.png'

export default function Germanio() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-teal-700 to-lime-400 relative overflow-hidden flex items-center justify-center">
      <img
        src={germanio}
        alt="Germanio"
        className="
          w-[230vw] max-w-none
          sm:w-[80vw] sm:h-auto sm:object-contain
          // Mobile: imagen muy ancha (230vw) para que desborde y se agrande más
          // Notebook: imagen más pequeña (80vw), centrada y sin ocupar todo el alto
        "
      />
    </div>
  )
}
