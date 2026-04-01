import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  TrendingUp,
  PieChart,
  BarChart3,
  Building2,
  Landmark,
  LayoutDashboard,
  GraduationCap,
  Bot,
  ChevronDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  description: string;
  result: string;
  icon: React.ReactNode;
  color: string;
}

const projects: Project[] = [
  {
    name: "Сервис расчёта Процентного риска",
    description:
      "Автоматизация расчётов процентного риска и мониторинг отклонений прибыли от бюджета",
    result:
      "Внедрен расчет процентного риска, обеспечена интеграция с системой управления рисками",
    icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-blue-500",
  },
  {
    name: "Макропрогнозы на BI",
    description:
      "Прогнозные модели и интерактивные дашборды по макроэкономическим показателям банка",
    result:
      "Сокращение времени на ручное обновление данных, обеспечена интеграция с BI-системой",
    icon: <PieChart className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-indigo-500",
  },
  {
    name: "Эластичность по вкладам",
    description:
      "A/B тестирование и анализ ценовой эластичности спроса на вкладные продукты",
    result: "Результаты легли в основу продуктовой стратегии",
    icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-violet-500",
  },
  {
    name: "Аналитика конкурентов",
    description:
      "Мониторинг продуктовых матриц и процентных ставок банков-конкурентов",
    result:
      "Покрытие 20+ банков, настроены бенчмарки для оценки результативности",
    icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-cyan-500",
  },
  {
    name: "Бенчмарки ценных бумаг",
    description:
      "Сравнительный анализ инвестиционных портфелей и расчёт отраслевых бенчмарков",
    result: "Внедрен инструмент оценки результативности",
    icon: <Landmark className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-teal-500",
  },
  {
    name: "Витрины для ДЗО",
    description:
      "BI-решения и аналитические витрины данных для дочерних и зависимых организаций",
    result:
      "Выстроен data driven подход для консолидации данных 5+ дочерних структур",
    icon: <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-emerald-500",
  },
  {
    name: "Индекс RSBI",
    description:
      "С помощью нейросети настроена подготовка аналитики по индексу бизнес-настроений",
    result: "Уменьшен run, высвобождено несколько дней работы двух аналитиков",
    icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-amber-500",
  },
  {
    name: "ПСБ Академия",
    description:
      "Авторский курс по банковской аналитике: программа, материалы, проведение",
    result: "50+ сотрудников прошли обучение",
    icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-orange-500",
  },
  {
    name: "Пилоты AI-агентов",
    description:
      "Тестирование и внедрение GenAI/LLM-инструментов для оптимизации процессов банка",
    result: "Использование AI для задач маркетинга и аналитики",
    icon: <Bot className="w-4 h-4 sm:w-5 sm:h-5" />,
    color: "bg-rose-500",
  },
];

const INITIAL_COUNT = 6;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 22 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      onEnter: () =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          delay: (index % 3) * 0.08,
          ease: "power3.out",
        }),
      once: true,
    });

    return () => trigger.kill();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="project-card group flex flex-col bg-white rounded-2xl p-4 sm:p-5 lg:p-6
                 border border-gray-100 shadow-sm
                 hover:shadow-md hover:-translate-y-0.5
                 transition-all duration-300"
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${project.color} flex items-center justify-center
                      text-white flex-shrink-0 mt-0.5
                      group-hover:scale-110 transition-transform duration-300`}
        >
          {project.icon}
        </div>
        <h3 className="text-sm sm:text-[0.9375rem] font-bold text-gray-900 leading-snug">
          {project.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-3 sm:mb-4">
        {project.description}
      </p>

      {/* Key Result */}
      <div className="mt-auto">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1
                       bg-emerald-50 text-emerald-700 rounded-full
                       text-[11px] sm:text-xs font-semibold"
        >
          <span className="text-emerald-500 text-[10px]">✓</span>
          {project.result}
        </span>
      </div>
    </div>
  );
}

export function ProjectsMarquee() {
  const [showAll, setShowAll] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hiddenCount = projects.length - INITIAL_COUNT;

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 24 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () =>
        gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }),
      once: true,
    });

    return () => trigger.kill();
  }, []);

  // Animate the "show more" button into view
  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y: 16 });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      onEnter: () =>
        gsap.to(el, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }),
      once: true,
    });

    return () => trigger.kill();
  }, [showAll]);

  return (
    <section className="w-full py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-12">
          <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
            Реализованные решения
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Успешные проекты
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Аналитические сервисы и BI-решения для крупнейших банков России
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* Show More */}
        {!showAll && hiddenCount > 0 && (
          <div ref={btnRef} className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 px-6 sm:px-7 py-3.5
                         bg-white text-gray-700 rounded-full font-medium text-sm
                         border border-gray-200
                         hover:border-blue-400 hover:text-blue-600 hover:shadow-sm
                         transition-all duration-300"
            >
              Показать ещё {hiddenCount}
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
