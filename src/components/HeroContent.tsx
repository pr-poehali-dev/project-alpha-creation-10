export default function HeroContent() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main id="hero" className="min-h-screen flex items-center justify-start px-8 pt-20 relative z-10">
      <div className="max-w-6xl mx-auto w-full flex items-center">
        <div className="max-w-xl">
          <div
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20"
          >
            <div className="w-2 h-2 rounded-full bg-orange-300 mr-2 animate-pulse" />
            <span className="text-white/90 text-xs font-light">Внутренняя платформа · Райтек Россия</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight uppercase">
            Ваш голос<br />
            <span className="text-orange-300">важен</span>
          </h1>

          <p className="text-base font-light text-white/75 mb-8 leading-relaxed">
            Анонимная платформа обратной связи, где каждое мнение учитывается.
            Делитесь идеями, предложениями и наблюдениями — помогайте компании становиться лучше.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3 rounded-full bg-orange-400 hover:bg-orange-300 text-white font-medium text-sm transition-all duration-200 cursor-pointer shadow-lg shadow-orange-500/20"
            >
              Оставить отзыв
            </button>
            <button
              onClick={() => scrollTo("how")}
              className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-light text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
            >
              Как это работает
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}