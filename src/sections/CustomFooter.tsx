import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";

export function CustomFooter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
      setMessage("");
    }, 3000);
  };

  return (
    <footer id="contact" className="w-full bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Давайте работать
                <span className="block text-blue-400">вместе</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Открыт к новым профессиональным возможностям в сфере бизнес- и
                системной аналитики, управления проектами и внедрения
                data-driven решений.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="mailto:m.8elugin@yandex.ru"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center
                                group-hover:bg-blue-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-lg group-hover:text-blue-400 transition-colors">
                    m.8elugin@yandex.ru
                  </div>
                </div>
              </a>

              <a
                href="https://t.me/Belugin_ma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center
                                group-hover:bg-blue-600 transition-colors duration-300"
                >
                  <Send className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Telegram</div>
                  <div className="text-lg group-hover:text-blue-400 transition-colors">
                    @Belugin_ma
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Локация</div>
                  <div className="text-lg">Москва, Россия</div>
                </div>
              </div>
            </div>

            {/* Secondary: Telegram Channel */}
            <div className="pt-5 border-t border-gray-800">
              <div className="text-xs font-medium text-gray-600 uppercase tracking-widest mb-3">
                Telegram-канал
              </div>
              <a
                href="https://t.me/data_fish"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-col"
              >
                <span className="text-gray-400 font-medium group-hover:text-blue-400 transition-colors duration-200">
                  @data_fish
                </span>
                <span className="text-xs text-gray-600 mt-0.5 group-hover:text-gray-500 transition-colors duration-200">
                  Ключевые ИИ-тренды
                </span>
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Сообщение отправлено!
                </h4>
                <p className="text-gray-400">
                  Я свяжусь с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Ваш email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-700 rounded-xl border border-gray-600
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                             text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 rounded-xl border border-gray-600
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                             text-white placeholder-gray-500 transition-all duration-300 resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600
                           rounded-xl font-semibold hover:bg-blue-700 hover:scale-[1.02]
                           transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              © 2025 Максим Белугин. Все права защищены.
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>Sber 500 × INSEAD</span>
              <span>•</span>
              <span>Аналитик данных — Карпов курсы</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                English: B2 Upper-Intermediate
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
