import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  BarChart3, 
  Database, 
  Code2, 
  GitBranch, 
  LineChart, 
  Settings, 
  Users, 
  Target,
  FileText,
  TestTube,
  Workflow,
  Calculator
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: 'analysis' | 'system' | 'data' | 'tools';
}

const skills: Skill[] = [
  // Business Analysis (Blue)
  { name: 'BPMN', icon: <Workflow className="w-6 h-6" />, color: '#3B82F6', category: 'analysis' },
  { name: 'User Stories', icon: <FileText className="w-6 h-6" />, color: '#3B82F6', category: 'analysis' },
  { name: 'CJM', icon: <Users className="w-6 h-6" />, color: '#3B82F6', category: 'analysis' },
  { name: 'Backlog', icon: <GitBranch className="w-6 h-6" />, color: '#3B82F6', category: 'analysis' },
  { name: 'A/B Testing', icon: <TestTube className="w-6 h-6" />, color: '#3B82F6', category: 'analysis' },
  { name: 'KPI/OKR', icon: <Target className="w-6 h-6" />, color: '#3B82F6', category: 'analysis' },
  
  // System Analysis (Indigo)
  { name: 'REST API', icon: <Code2 className="w-6 h-6" />, color: '#6366F1', category: 'system' },
  { name: 'OpenAPI', icon: <FileText className="w-6 h-6" />, color: '#6366F1', category: 'system' },
  { name: 'Integration', icon: <Settings className="w-6 h-6" />, color: '#6366F1', category: 'system' },
  { name: 'ТЗ/SRS', icon: <FileText className="w-6 h-6" />, color: '#6366F1', category: 'system' },
  { name: 'Postman', icon: <Code2 className="w-6 h-6" />, color: '#6366F1', category: 'system' },
  
  // Data & BI (Purple)
  { name: 'SQL', icon: <Database className="w-6 h-6" />, color: '#8B5CF6', category: 'data' },
  { name: 'ERD', icon: <GitBranch className="w-6 h-6" />, color: '#8B5CF6', category: 'data' },
  { name: 'Python', icon: <Code2 className="w-6 h-6" />, color: '#8B5CF6', category: 'data' },
  { name: 'Power BI', icon: <BarChart3 className="w-6 h-6" />, color: '#8B5CF6', category: 'data' },
  { name: 'Финмодели', icon: <Calculator className="w-6 h-6" />, color: '#8B5CF6', category: 'data' },
  { name: 'P&L', icon: <LineChart className="w-6 h-6" />, color: '#8B5CF6', category: 'data' },
  
  // Tools (Emerald)
  { name: 'Jira', icon: <Target className="w-6 h-6" />, color: '#10B981', category: 'tools' },
  { name: 'Confluence', icon: <FileText className="w-6 h-6" />, color: '#10B981', category: 'tools' },
  { name: 'Figma', icon: <Settings className="w-6 h-6" />, color: '#10B981', category: 'tools' },
  { name: 'Draw.io', icon: <Workflow className="w-6 h-6" />, color: '#10B981', category: 'tools' },
  { name: 'Excel', icon: <Calculator className="w-6 h-6" />, color: '#10B981', category: 'tools' },
  { name: 'ALM', icon: <Database className="w-6 h-6" />, color: '#10B981', category: 'tools' },
];

const categoryLabels = {
  analysis: { label: 'Business Analysis', color: 'bg-blue-500' },
  system: { label: 'System Analysis', color: 'bg-indigo-500' },
  data: { label: 'Data & BI', color: 'bg-purple-500' },
  tools: { label: 'Tools', color: 'bg-emerald-500' }
};

export function SkillsGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!scrollRef.current || !containerRef.current) return;

    const scrollElement = scrollRef.current;
    const scrollWidth = scrollElement.scrollWidth / 2;
    
    // Create infinite scroll animation
    const animation = gsap.to(scrollElement, {
      x: -scrollWidth,
      duration: 40,
      ease: 'none',
      repeat: -1,
      paused: isPaused
    });

    // Pause on hover
    const handleMouseEnter = () => {
      animation.pause();
      setIsPaused(true);
    };
    
    const handleMouseLeave = () => {
      animation.play();
      setIsPaused(false);
    };

    scrollElement.addEventListener('mouseenter', handleMouseEnter);
    scrollElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      animation.kill();
      scrollElement.removeEventListener('mouseenter', handleMouseEnter);
      scrollElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate skills for infinite scroll effect
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div ref={containerRef} className="w-full py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
            Технический стек
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Ключевые навыки
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Совмещаю управленческую экспертизу с техническим стеком для принятия решений на основе данных
          </p>
        </div>

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {Object.entries(categoryLabels).map(([key, { label, color }]) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${color}`} />
              <span className="text-sm text-gray-600">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling Skills */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        
        <div 
          ref={scrollRef}
          className="flex gap-6 py-8"
          style={{ width: 'fit-content' }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group flex-shrink-0 w-40 h-40 bg-white rounded-2xl shadow-lg border border-gray-100 
                         flex flex-col items-center justify-center gap-3
                         hover:shadow-xl hover:scale-105 hover:-translate-y-1
                         transition-all duration-300 cursor-pointer"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: skill.color }}
              >
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-800 text-center px-2">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pause indicator */}
      <div className="text-center mt-6">
        <span className="text-sm text-gray-400">
          {isPaused ? 'Прокрутка приостановлена' : 'Наведите для паузы'}
        </span>
      </div>
    </div>
  );
}
