export default function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-base tracking-wide">
          <span className="text-orange-300">Райтек</span> Голос
        </div>
        <nav className="hidden md:flex gap-8">
          {[
            { label: "Главная", id: "hero" },
            { label: "Возможности", id: "features" },
            { label: "Как это работает", id: "how" },
            { label: "О платформе", id: "about" },
            { label: "Обратная связь", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/80 hover:text-white transition-colors duration-300 text-sm cursor-pointer bg-transparent border-none"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}