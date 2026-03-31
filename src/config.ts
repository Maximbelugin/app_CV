// Site configuration
export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "ru",
  title: "Максим Белугин | Head of Product | Fintech & Banking",
  description:
    "Руководитель продукта с 20+ годами в банковском секторе. Head of Business Analytics, Product Owner. Экспертиза в аналитике, стратегии и data-driven решениях.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "Резюме",
  links: [
    { label: "Обо мне", href: "#about" },
    { label: "Опыт", href: "#experience" },
    { label: "Навыки", href: "#skills" },
    { label: "Проекты", href: "#projects" },
  ],
  contactLabel: "Связаться",
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Максим Белугин",
  roles: ["Head of Product", "Business Analytics", "Fintech Expert"],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "О себе",
  description:
    "Руководитель продукта с 20+ годами в банковском секторе. Прошёл путь от специалиста казначейства до Product Owner и Head of Business Analytics. Строю продуктовые процессы с нуля: определяю стратегию, формирую бэклог, взаимодействую со стейкхолдерами, сопровождаю продукт и обеспечиваю развитие фич. Совмещаю управленческую экспертизу с техническим стеком (Python, SQL, PowerBI), что позволяет глубже понимать задачи и принимать решения на основе данных. Выпускник программы Sber 500 / INSEAD.",
  experienceValue: "20+",
  experienceLabel: "лет\nопыта",
  stats: [
    { value: "5", label: "Банков" },
    { value: "50+", label: "Обучено\nв ПСБ Академии" },
    { value: "B2", label: "English\nUpper-Intermediate" },
  ],
  images: [
    { src: "/images/photo.png", alt: "Максим Белугин" },
    { src: "/images/photo.png", alt: "Максим Белугин" },
    { src: "/images/photo.png", alt: "Максим Белугин" },
    { src: "/images/photo.png", alt: "Максим Белугин" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Экспертиза",
  heading: "Ключевые компетенции",
  services: [
    {
      iconName: "Target",
      title: "Product Strategy",
      description:
        "Определение стратегии продукта, формирование роадмапа, приоритизация фич",
      image: "/images/hero-bg.jpg",
    },
    {
      iconName: "BarChart3",
      title: "Data Analysis",
      description:
        "Глубокий анализ данных, построение дашбордов, финмоделирование",
      image: "/images/hero-bg.jpg",
    },
    {
      iconName: "Users",
      title: "Stakeholder Management",
      description:
        "Эффективное взаимодействие со стейкхолдерами, управление ожиданиями",
      image: "/images/hero-bg.jpg",
    },
    {
      iconName: "Code2",
      title: "System Analysis",
      description: "Проектирование интеграций, REST API, написание ТЗ и SRS",
      image: "/images/hero-bg.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Проекты",
  heading: "Успешные проекты",
  description:
    "Разработал и внедрил множество аналитических сервисов и BI-решений для крупнейших банков России",
  projects: [
    {
      title: "Сервис расчёта Процентного риска",
      category: "Risk Management",
      year: "2024",
      image: "/images/hero-bg.jpg",
      featured: true,
    },
    {
      title: "Макропрогнозы на BI",
      category: "Business Intelligence",
      year: "2023",
      image: "/images/hero-bg.jpg",
    },
    {
      title: "Эластичность по вкладам",
      category: "Data Analysis",
      year: "2023",
      image: "/images/hero-bg.jpg",
    },
    {
      title: "Аналитика конкурентов",
      category: "Market Research",
      year: "2022",
      image: "/images/hero-bg.jpg",
    },
    {
      title: "Витрины для ДЗО",
      category: "BI Solutions",
      year: "2022",
      image: "/images/hero-bg.jpg",
    },
  ],
  cta: {
    label: "Обучение",
    heading: "ПСБ Академия",
    linkText: "50+ сотрудников обучено",
    linkHref: "#",
  },
  viewAllLabel: "Все проекты",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Образование",
  heading: "Сертификаты и курсы",
  testimonials: [
    {
      quote:
        "Престижная программа развития лидеров совместно с ведущей бизнес-школой мира",
      author: "Sber 500",
      role: "Выпускник",
      company: "INSEAD",
      image: "/images/photo.png",
      rating: 5,
    },
    {
      quote:
        "Профессиональная программа подготовки аналитиков данных с фокусом на Python",
      author: "Аналитик данных",
      role: "Сертификат",
      company: "Карпов курсы",
      image: "/images/photo.png",
      rating: 5,
    },
    {
      quote: "Разработка и проведение авторского курса по банковской аналитике",
      author: "Преподаватель",
      role: "ПСБ Академия",
      company: "Промсвязьбанк",
      image: "/images/photo.png",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Head of Product", "Business Analyst", "Data Expert"],
  heading: "Готов к новым вызовам",
  description:
    "Ищу возможности в сфере продуктового менеджмента, бизнес-аналитики и data-driven решений в финтехе и банковском секторе.",
  buttonText: "Связаться со мной",
  buttonHref: "mailto:m.8elugin@yandex.ru",
  email: "m.8elugin@yandex.ru",
  backgroundImage: "/images/hero-bg.jpg",
};

// Footer configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "Макс Белугин",
  description:
    "Руководитель продукта с 20+ годами опыта в банковском секторе. Эксперт в аналитике, стратегии и data-driven решениях.",
  columns: [
    {
      title: "Навигация",
      links: [
        { label: "Обо мне", href: "#about" },
        { label: "Опыт работы", href: "#experience" },
        { label: "Навыки", href: "#skills" },
        { label: "Проекты", href: "#projects" },
      ],
    },
    {
      title: "Контакты",
      links: [
        { label: "m.8elugin@yandex.ru", href: "mailto:m.8elugin@yandex.ru" },
        { label: "@Belugin_ma", href: "https://t.me/Belugin_ma" },
        { label: "Москва, Россия", href: "#" },
      ],
    },
  ],
  socialLinks: [
    {
      iconName: "Linkedin",
      href: "https://www.linkedin.com/in/maksim-belugin-b061443a",
      label: "LinkedIn",
    },
    { iconName: "Send", href: "https://t.me/data_fish", label: "Telegram" },
  ],
  newsletterHeading: "Telegram-канал",
  newsletterDescription:
    "Подписывайтесь на @data_fish — тренды и новинки в области ИИ",
  newsletterButtonText: "Подписаться",
  newsletterPlaceholder: "",
  copyright: "© 2025 Максим Белугин. Все права защищены.",
  credit: "Sber 500 × INSEAD | Карпов курсы | ПСБ Академия",
};
