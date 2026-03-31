import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Workflow,
  Code2,
  Database,
  Layers,
  BarChart3,
  Landmark,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Банковское дело",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    icon: <Landmark className="w-8 h-8" />,
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
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    icon: <Workflow className="w-8 h-8" />,
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
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    icon: <Code2 className="w-8 h-8" />,
    skills: ["API Design", "REST API", "JSON API", "gRPC", "RabbitMQ", "GIT"],
  },
  {
    title: "BI и дашборды",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    icon: <BarChart3 className="w-8 h-8" />,
    skills: [
      "Power BI",
      "DAX",
      "Dash",
      "Sber Navigator",
      "Qlik Sense",
      "Tableau",
    ],
  },
  {
    title: "Данные и БД",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    icon: <Database className="w-8 h-8" />,
    skills: ["SQL", "PostgreSQL", "Spark", "DBeaver", "SQL Management Studio"],
  },
  {
    title: "Инструменты и процессы",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    icon: <Layers className="w-8 h-8" />,
    skills: [
      "Atlassian Jira",
      "Atlassian Confluence",
      "Camunda",
      "Agile",
      "Scrum",
      "GitHub",
    ],
  },
];

export function SkillCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const triggers: ScrollTrigger[] = [];

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.set(card, { opacity: 0, y: 40 });

      const trigger = ScrollTrigger.create({
        trigger: card,
        start: "top 87%",
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: (index % 3) * 0.1,
            ease: "power3.out",
          });
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
    <div
      ref={containerRef}
      className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
            Компетенции
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Навыки по направлениям
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Полный стек инструментов для работы на стыке бизнеса и технологий
          </p>
        </div>

        {/* 3×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`group relative bg-white rounded-2xl p-7
                         border-2 ${category.borderColor}
                         hover:shadow-xl hover:scale-[1.02]
                         transition-all duration-300 cursor-default overflow-hidden`}
            >
              {/* Decorative corner blob */}
              <div
                className={`absolute top-0 right-0 w-28 h-28 ${category.bgColor} opacity-40
                           rounded-bl-full -z-0 group-hover:scale-150 transition-transform duration-500`}
              />

              {/* Header */}
              <div className="relative flex items-center gap-4 mb-5">
                <div
                  className={`w-14 h-14 rounded-xl ${category.bgColor} ${category.color}
                              flex items-center justify-center flex-shrink-0
                              group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3
                  className={`text-lg font-bold ${category.color} leading-snug`}
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium
                               ${category.bgColor} ${category.color}
                               border ${category.borderColor}
                               hover:brightness-95 transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
