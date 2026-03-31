import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DecodeText } from "../components/DecodeText";
import { Mail, Send, MapPin, Download } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
const baseUrl = import.meta.env.BASE_URL;
const heroBgUrl = `${baseUrl}images/hero-bg.jpg`;
const profilePhotoUrl = `${baseUrl}images/photo.png`;
const resumePdfUrl = `${baseUrl}Maxim_Belugin_Head_of_Product.pdf`;

const skillGroups = [
  {
    title: "Банковское дело",
    tagClass: "bg-green-50 text-green-700",
    titleClass: "text-green-600",
    skills: [
      "ALM / управление активами и пассивами",
      "Процентный риск",
      "Риск ликвидности",
      "Cash Flow Management",
      "Forecasting",
      "План-факт анализ",
    ],
  },
  {
    title: "Аналитика и проектирование",
    tagClass: "bg-blue-50 text-blue-700",
    titleClass: "text-blue-600",
    skills: [
      "Системный анализ",
      "Бизнес-анализ",
      "Use Case",
      "User Story",
      "BPMN",
      "UML",
    ],
  },
  {
    title: "Интеграции и API",
    tagClass: "bg-violet-50 text-violet-700",
    titleClass: "text-violet-600",
    skills: [
      "API Design",
      "REST API",
      "JSON API",
      "gRPC",
      "RabbitMQ",
      "Apache Airflow",
    ],
  },
  {
    title: "Данные и БД",
    tagClass: "bg-orange-50 text-orange-700",
    titleClass: "text-orange-600",
    skills: ["SQL", "PostgreSQL", "Spark"],
  },
  {
    title: "Инструменты и процессы",
    tagClass: "bg-amber-50 text-amber-700",
    titleClass: "text-amber-600",
    skills: [
      "Atlassian Jira",
      "Atlassian Confluence",
      "Camunda",
      "Agile",
      "Scrum",
      "GitHub",
    ],
  },
  {
    title: "BI и дашборды",
    tagClass: "bg-rose-50 text-rose-700",
    titleClass: "text-rose-600",
    skills: [
      "Power BI",
      "DAX",
      "Dash",
      "Sber Navigator",
      "Qlik Sense",
      "Tableau",
    ],
  },
];

export function CustomHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [showContent, setShowContent] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<number>>(new Set());

  const toggleGroup = (index: number) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
    );

    setTimeout(() => setShowContent(true), 500);

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        if (contentRef.current) {
          gsap.set(contentRef.current, {
            y: self.progress * 100,
            opacity: 1 - self.progress * 0.5,
          });
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-[100svh] w-full flex flex-col overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-gray-100"
        style={{
          backgroundImage: `url(${heroBgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex-1 flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-20 pb-6 sm:pb-8"
      >
        {/* Top section: Name + Photo */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left: Text Content */}
          <div className="space-y-5 sm:space-y-6">
            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.05]">
                <DecodeText
                  text="Максим"
                  delay={0.3}
                  duration={1.2}
                  className="block"
                />
                <DecodeText
                  text="Белугин"
                  delay={0.8}
                  duration={1.2}
                  className="block text-blue-600"
                />
              </h1>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 tracking-normal sm:tracking-wide leading-snug">
                Руководитель проектов&nbsp;/ Бизнес- и системный аналитик
              </h2>
            </div>

            {/* Description */}
            {showContent && (
              <div className="animate-fadeIn py-3 sm:py-4 lg:py-6">
                <ul className="space-y-3 sm:space-y-3.5">
                  {[
                    "Глубокая экспертиза в финансах и банковских процессах",
                    "Опыт управления проектами и кросс-функциональными инициативами",
                    "Умение переводить бизнес-задачи в функциональные требования, процессы и IT-решения",
                    "Менторство, преподавательская деятельность по банковскому делу, веду ТГ канал по технологиям",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 sm:gap-3 text-base sm:text-[1.0625rem] text-gray-600 leading-[1.6] sm:leading-[1.75]"
                    >
                      <span className="mt-[8px] sm:mt-[9px] w-[6px] h-[6px] rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contact Info */}
            {showContent && (
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 animate-fadeIn">
                <a
                  href="mailto:m.8elugin@yandex.ru"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors break-all sm:break-normal"
                >
                  <Mail className="w-4 h-4" />
                  <span>m.8elugin@yandex.ru</span>
                </a>
                <a
                  href="https://t.me/Belugin_ma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>@Belugin_ma</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Москва</span>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            {showContent && (
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 animate-fadeIn">
                <a
                  href="mailto:m.8elugin@yandex.ru"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3.5 sm:py-3 bg-blue-600 text-white rounded-full font-semibold text-sm
                           hover:bg-blue-700 hover:scale-105 hover:shadow-lg
                           transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Связаться
                </a>
                <a
                  href={resumePdfUrl}
                  download
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 py-3.5 sm:py-3 bg-white text-gray-700 border-2 border-gray-200 rounded-full font-semibold text-sm
                           hover:border-blue-600 hover:text-blue-600 hover:scale-105
                           transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Скачать резюме
                </a>
              </div>
            )}
          </div>

          {/* Right: Photo */}
          <div
            ref={imageRef}
            className="relative flex justify-center lg:justify-end lg:pt-[5.5rem] mt-2 sm:mt-4 lg:mt-0"
          >
            <div className="relative">
              {/* Soft atmospheric glow — diffuse, no hard edges */}
              <div className="hidden sm:block absolute sm:-inset-8 lg:-inset-10 bg-blue-200/50 rounded-full blur-3xl" />
              <div className="hidden sm:block absolute sm:-inset-4 bg-blue-100/40 rounded-full blur-2xl" />

              {/* Photo with feathered / masked edges */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem]">
                <img
                  src={profilePhotoUrl}
                  alt="Максим Белугин"
                  className="w-full h-full object-cover object-top"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 82% 88% at 50% 40%, black 38%, rgba(0,0,0,0.6) 62%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 82% 88% at 50% 40%, black 38%, rgba(0,0,0,0.6) 62%, transparent 100%)",
                  }}
                />
              </div>

              {/* Floating badges */}
              <div className="absolute bottom-1 sm:bottom-2 -left-2 sm:-left-4 lg:-left-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-2.5 py-2 sm:p-3 border border-gray-100">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">20+</div>
                <div className="text-xs text-gray-500">лет опыта</div>
              </div>

              <div className="absolute top-1 sm:top-2 -right-2 sm:-right-4 lg:-right-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-2.5 py-2 sm:p-3 border border-gray-100">
                <div className="text-sm sm:text-base font-bold text-emerald-600">15+</div>
                <div className="text-xs text-gray-500">успешных проектов</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Strip — pushed to bottom */}
        {showContent && (
          <div className="mt-8 lg:mt-auto pt-8 sm:pt-10 lg:pt-12 animate-fadeIn">
            <div className="border-t border-gray-100 pt-5">
              <p className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest mb-5">
                Ключевые навыки
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-4 sm:gap-y-5">
                {skillGroups.map((group, index) => {
                  const isExpanded = expandedGroups.has(index);
                  const visibleSkills = isExpanded
                    ? group.skills
                    : group.skills.slice(0, 3);
                  const remaining = group.skills.length - 3;
                  return (
                    <div
                      key={group.title}
                      className={
                        index === 0
                          ? "lg:col-span-2 rounded-xl border border-gray-100/90 bg-white/70 p-3 sm:p-0 sm:border-0 sm:bg-transparent"
                          : "rounded-xl border border-gray-100/90 bg-white/70 p-3 sm:p-0 sm:border-0 sm:bg-transparent"
                      }
                    >
                      <p
                        className={`text-[11px] sm:text-xs font-bold uppercase tracking-wide leading-snug mb-2.5 sm:mb-3 ${group.titleClass}`}
                      >
                        {group.title}
                      </p>
                      <div className="flex flex-wrap gap-2 min-w-0">
                        {visibleSkills.map((skill) => (
                          <span
                            key={skill}
                            className={`px-2 py-1 rounded text-[11px] sm:text-xs font-medium leading-relaxed whitespace-normal break-words max-w-full ${group.tagClass} opacity-90`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      {remaining > 0 && !isExpanded && (
                        <button
                          onClick={() => toggleGroup(index)}
                          className={`mt-2 inline-flex items-center px-2.5 py-1 rounded text-[11px] sm:text-xs font-semibold
                                     cursor-pointer select-none
                                     ${group.tagClass}
                                     ring-1 ring-inset ring-current/25
                                     hover:opacity-100 hover:ring-current/50
                                     active:scale-95
                                     transition-all duration-150
                                     opacity-80`}
                          title={`Показать ещё ${remaining} навыка`}
                        >
                          ещё {remaining}
                        </button>
                      )}
                      {isExpanded && (
                        <button
                          onClick={() => toggleGroup(index)}
                          className="mt-2 inline-flex items-center px-2.5 py-1 rounded text-[11px] sm:text-xs font-semibold
                                     cursor-pointer select-none
                                     text-gray-500 bg-gray-50
                                     ring-1 ring-inset ring-gray-200
                                     hover:text-gray-700 hover:ring-gray-300
                                     active:scale-95
                                     transition-all duration-150"
                          title="Свернуть"
                        >
                          скрыть
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scroll indicator — flush below skills, never overlapping */}
            <div className="hidden sm:flex flex-col items-center gap-1.5 text-gray-300 mt-8 pb-2">
              <span className="text-[10px] font-medium tracking-wider uppercase">
                Прокрутите вниз
              </span>
              <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
                <div className="w-1 h-2.5 bg-current rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
