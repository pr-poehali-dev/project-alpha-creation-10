import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import Icon from "@/components/ui/icon"

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-[#07192e] text-white">
      {/* Hero Section — с шейдером */}
      <div className="relative">
        <ShaderBackground>
          <Header />
          <HeroContent />
          <PulsingCircle />
        </ShaderBackground>
      </div>

      {/* Возможности */}
      <section id="features" className="py-24 px-8 bg-gradient-to-b from-[#07192e] to-[#0a2a4a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-300 text-sm uppercase tracking-widest font-medium">Возможности</span>
            <h2 className="text-4xl font-bold text-white mt-3">Что даёт платформа</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ShieldCheck",
                title: "Анонимная обратная связь",
                desc: "Делитесь мнением без страха. Ваша личность полностью защищена — мы не храним данные об авторе отзыва.",
              },
              {
                icon: "Lightbulb",
                title: "Идеи и предложения",
                desc: "Предлагайте улучшения рабочих процессов, новые инициативы или идеи для развития команды и компании.",
              },
              {
                icon: "BarChart2",
                title: "Оценка атмосферы",
                desc: "Голосуйте за общий климат в коллективе. Помогите руководству видеть реальную картину и действовать вовремя.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-400/20 flex items-center justify-center mb-6 group-hover:bg-orange-400/30 transition-colors">
                  <Icon name={item.icon} size={22} className="text-orange-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section id="how" className="py-24 px-8 bg-[#0a2a4a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-orange-300 text-sm uppercase tracking-widest font-medium">Процесс</span>
            <h2 className="text-4xl font-bold text-white mt-3">Как это работает</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: "ListChecks", title: "Выберите тему", desc: "Определите категорию вашего обращения — от рабочих процессов до атмосферы в команде." },
              { step: "02", icon: "PenLine", title: "Напишите сообщение", desc: "Изложите мысли свободно и подробно. Нет ограничений по формату." },
              { step: "03", icon: "Send", title: "Отправьте анонимно", desc: "Нажмите кнопку — и готово. Никто не узнает, что это написали вы." },
              { step: "04", icon: "MessageCircle", title: "Получите ответ", desc: "HR-команда рассмотрит обращение и при необходимости даст обратную связь." },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full">
                  <div className="text-orange-300/40 text-5xl font-bold mb-4 leading-none">{item.step}</div>
                  <div className="w-10 h-10 rounded-lg bg-blue-400/20 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={18} className="text-blue-300" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* О платформе */}
      <section id="about" className="py-24 px-8 bg-gradient-to-b from-[#0a2a4a] to-[#07192e]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-300 text-sm uppercase tracking-widest font-medium">О платформе</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6">Безопасное<br />пространство для диалога</h2>
              <p className="text-white/65 leading-relaxed mb-8">
                Платформа создана для открытого диалога между сотрудниками и руководством.
                Мы верим, что честная обратная связь — основа здоровой корпоративной культуры.
                Каждое обращение рассматривается с уважением и вниманием.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-7 py-3 rounded-full bg-orange-400 hover:bg-orange-300 text-white font-medium text-sm transition-all duration-200 cursor-pointer"
                >
                  Оставить отзыв
                </button>
                <button
                  onClick={() => scrollTo("how")}
                  className="px-7 py-3 rounded-full border border-white/25 text-white/80 hover:text-white hover:border-white/50 font-light text-sm transition-all duration-200 cursor-pointer"
                >
                  Узнать больше
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "Lock", value: "100%", label: "Анонимно" },
                { icon: "Clock", value: "24/7", label: "Доступно" },
                { icon: "Infinity", value: "∞", label: "Идей" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center backdrop-blur-sm"
                >
                  <Icon name={stat.icon} size={20} className="text-orange-300 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/55 text-xs uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Обратная связь */}
      <section id="contact" className="py-24 px-8 bg-[#07192e]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="pt-4">
              <span className="text-orange-300 text-sm uppercase tracking-widest font-medium">Обратная связь</span>
              <h2 className="text-4xl font-bold text-white mt-3 mb-6 uppercase leading-tight">
                Ваш голос<br />услышан
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                Любое обращение важно. Мы читаем каждое сообщение и работаем над улучшениями.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-400/15 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={16} className="text-orange-300" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5">HR-команда</div>
                    <div className="text-white text-sm">hr@raitech.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-400/15 flex items-center justify-center flex-shrink-0">
                    <Icon name="Building2" size={16} className="text-orange-300" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs mb-0.5">Компания</div>
                    <div className="text-white text-sm">Райтек Россия</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wide mb-2">Имя (необязательно)</label>
                  <input
                    type="text"
                    placeholder="Можно оставить пустым"
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-orange-400/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wide mb-2">Тема</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white text-sm focus:outline-none focus:border-orange-400/50 transition-colors appearance-none cursor-pointer"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <option value="" className="bg-[#0a2a4a]">Выберите тему...</option>
                    <option value="atmosphere" className="bg-[#0a2a4a]">Атмосфера в команде</option>
                    <option value="idea" className="bg-[#0a2a4a]">Идея или предложение</option>
                    <option value="process" className="bg-[#0a2a4a]">Рабочий процесс</option>
                    <option value="other" className="bg-[#0a2a4a]">Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/60 text-xs uppercase tracking-wide mb-2">Сообщение</label>
                  <textarea
                    rows={5}
                    placeholder="Напишите всё, что считаете важным..."
                    className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-orange-400/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-orange-400 hover:bg-orange-300 text-white font-medium text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={16} />
                  Отправить отзыв
                </button>
                <p className="text-center text-white/35 text-xs">Ваше сообщение полностью анонимно</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10 bg-[#07192e]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">
            © 2026 <span className="text-orange-300/70">Райтек Россия</span> · Платформа обратной связи
          </div>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <Icon name="ShieldCheck" size={13} className="text-orange-300/50" />
            Все данные анонимны и защищены
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
