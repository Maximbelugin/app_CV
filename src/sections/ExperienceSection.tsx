import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  bank: string;
  bankColor: string;
  position: string;
  period: string;
  description: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    bank: "ПСБ",
    bankColor: "#0055A4",
    position:
      "Управляющий по специальным проектам / Head of Business Analytics",
    period: "Январь 2021 — Декабрь 2025",
    description: [
      "Лидирование аналитического направления; управление кросс-функциональными проектами",
      "Продуктовая аналитика и стратегия: участие в подготовке стратегии банка",
      "A/B тестирование для проверки гипотез по эластичности спроса на вклады",
      "Data analysis: сбор данных по банкам-конкурентам, продуктовые матрицы",
      "Автоматизация и BI: ETL-пайплайны на Python/SQL",
      "Финансовое моделирование: консолидация управленческой отчётности",
    ],
    achievements: [
      "Разработал и внедрил 5+ BI-дашбордов (PowerBI, Qlik, Sber Navigator), охватывающих ключевые направления аналитики",
      "Автоматизировал подготовку управленческой отчётности через ETL-пайплайны на Python/SQL",
      "Запустил авторский курс «ПСБ Академия» — обучено 50+ сотрудников банка",
      "Провёл A/B-тесты гипотез по эластичности спроса; результаты легли в основу продуктовой стратегии",
      "Первым внедрил GenAI/LLM-инструменты в аналитические процессы подразделения",
    ],
  },
  {
    bank: "Сбер",
    bankColor: "#21A038",
    position:
      "Владелец продукта — вклады физических лиц / Руководитель направления нормативной ликвидности",
    period: "Май 2016 — Декабрь 2020",
    description: [
      "Product Owner «Динбаланс»: разработка и внедрение ПРОМО-механик на вкладах",
      "Расчёт и оценка влияния ПРОМО-акций на маржу",
      "Взаимодействие с IT и бизнесом — от постановки задачи до приёмки",
      "Обеспечение соответствия нормативов ликвидности требованиям ЦБ",
      "Внедрение EWI (Early Warning Indicators) для выявления рисков",
    ],
    achievements: [
      "Вывел продукт «Динбаланс» в продакшен; ПРОМО-механики охватили ключевые сегменты вкладчиков",
      "Поддерживал нормативы ликвидности Н2/Н3 по требованиям ЦБ РФ на протяжении 4+ лет",
      "Выстроил взаимодействие между IT, бизнесом и регулятором по полному циклу",
      "Внедрил EWI-систему раннего выявления рисков ликвидности",
    ],
  },
  {
    bank: "МДМ",
    bankColor: "#E30613",
    position: "Руководитель отдела ликвидности",
    period: "Сентябрь 2009 — Май 2016",
    description: [
      "Операционное управление ликвидностью",
      "Руководство отделом ликвидности",
      "Организация управления денежными потоками",
      "Контроль нормативов ликвидности",
    ],
    achievements: [
      "Обеспечил стабильное управление ликвидностью в период финансовой турбулентности",
      "Выстроил процессы контроля нормативов и регуляторной отчётности",
    ],
  },
  {
    bank: "ВТБ",
    bankColor: "#00AAFF",
    position: "Ведущий специалист",
    period: "Август 2006 — Октябрь 2009",
    description: [
      "Функции фондирования",
      "Работа с нормативами ликвидности",
      "Управление рисками",
    ],
    achievements: [
      "Обеспечил стабильное фондирование в условиях рыночной волатильности",
      "Сформировал базовую экспертизу в управлении ликвидностью и рисками",
    ],
  },
  {
    bank: "Уралсиб",
    bankColor: "#FF6B00",
    position: "Главный специалист отдела фондирования",
    period: "Сентябрь 2003 — Август 2006",
    description: [
      "Фондирование подразделений банка",
      "Контроль лимитов",
      "Трансфертное ценообразование",
    ],
    achievements: [
      "Выстроил систему трансфертного ценообразования для подразделений банка",
      "Организовал контроль лимитов и фондирование ключевых направлений",
    ],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const triggers: ScrollTrigger[] = [];

    const cards = timelineRef.current.querySelectorAll(".experience-card");

    cards.forEach((card, index) => {
      gsap.set(card, { opacity: 0, y: 24 });

      const trigger = ScrollTrigger.create({
        trigger: card,
        start: "top 82%",
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            delay: 0.05,
          });
          setActiveIndex(index);
        },
        once: true,
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full py-14 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
            Карьерный путь
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Опыт работы
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            20+ лет в банковском секторе: от специалиста казначейства до Head of
            Business Analytics
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line — left edge */}
          <div className="hidden sm:block absolute left-[1.9rem] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-300 to-blue-100" />

          {/* Experience Cards */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.bank} className="experience-card relative pl-0 sm:pl-20">
                {/* Timeline dot */}
                <div
                  className={`hidden sm:block absolute left-[1.9rem] top-7 w-[14px] h-[14px] rounded-full border-[3px] border-white shadow-md -translate-x-1/2 z-10 transition-transform duration-300 ${
                    activeIndex === index ? "scale-125" : "scale-100"
                  }`}
                  style={{ backgroundColor: exp.bankColor }}
                />

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row">
                    {/* ── Left panel: role + responsibilities ── */}
                    <div className="flex-[3] min-w-0 p-4 sm:p-5 lg:p-6">
                      {/* Bank badge + period */}
                      <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 mb-3">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-white text-[11px] sm:text-xs font-bold tracking-wide"
                          style={{ backgroundColor: exp.bankColor }}
                        >
                          {exp.bank}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-blue-600">
                          {exp.period}
                        </span>
                      </div>

                      {/* Position */}
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-snug mb-3 sm:mb-4">
                        {exp.position}
                      </h3>

                      {/* Responsibilities — always left-aligned */}
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed"
                          >
                            <span
                              className="mt-[6px] w-[6px] h-[6px] rounded-full flex-shrink-0"
                              style={{ backgroundColor: exp.bankColor }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ── Right panel: key achievements ── */}
                    <div className="flex-[2] min-w-0 p-4 sm:p-5 lg:p-6 bg-slate-50/70 border-t border-gray-100 lg:border-t-0 lg:border-l lg:border-gray-100">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400 mb-3">
                        Ключевые результаты
                      </p>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed"
                          >
                            <span
                              className="mt-[3px] flex-shrink-0 text-xs font-bold leading-none"
                              style={{ color: exp.bankColor }}
                            >
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
