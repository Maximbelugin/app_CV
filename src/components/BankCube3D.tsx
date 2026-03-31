import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Bank {
  name: string;
  color: string;
  logo: string;
}

interface Experience {
  bank: string;
  position: string;
  period: string;
  description: string[];
}

interface BankCube3DProps {
  banks: Bank[];
  experiences: Experience[];
}

export function BankCube3D({ banks, experiences }: BankCube3DProps) {
  const cubeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState({ x: -15, y: 45 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const rotationStart = useRef({ x: -15, y: 45 });

  // Scroll-based rotation
  useEffect(() => {
    if (!containerRef.current) return;

    const triggers: ScrollTrigger[] = [];

    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.min(Math.floor(progress * banks.length), banks.length - 1);
        setActiveIndex(newIndex);
        
        // Rotate cube based on scroll
        const yRotation = 45 + progress * 360;
        setRotation({ x: -15, y: yRotation });
      }
    });

    triggers.push(scrollTrigger);

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, [banks.length]);

  // Mouse drag rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    rotationStart.current = { ...rotation };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;
    setRotation({
      x: rotationStart.current.x - deltaY * 0.5,
      y: rotationStart.current.y + deltaX * 0.5
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    rotationStart.current = { ...rotation };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStart.current.x;
    const deltaY = e.touches[0].clientY - dragStart.current.y;
    setRotation({
      x: rotationStart.current.x - deltaY * 0.5,
      y: rotationStart.current.y + deltaX * 0.5
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const activeExperience = experiences[activeIndex];

  return (
    <div 
      ref={containerRef}
      className="w-full py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
            Карьерный путь
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Опыт работы
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            20+ лет в банковском секторе: от специалиста казначейства до Head of Business Analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Cube */}
          <div 
            className="relative h-[400px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              ref={cubeRef}
              className="relative w-48 h-48 md:w-64 md:h-64"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              {/* Front Face */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-2xl shadow-2xl"
                style={{
                  backgroundColor: banks[0]?.color || '#3B82F6',
                  transform: 'translateZ(8rem)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <span className="text-white text-3xl md:text-4xl font-bold">{banks[0]?.name}</span>
              </div>
              
              {/* Back Face */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-2xl shadow-2xl"
                style={{
                  backgroundColor: banks[2]?.color || '#10B981',
                  transform: 'rotateY(180deg) translateZ(8rem)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <span className="text-white text-3xl md:text-4xl font-bold">{banks[2]?.name}</span>
              </div>
              
              {/* Right Face */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-2xl shadow-2xl"
                style={{
                  backgroundColor: banks[1]?.color || '#8B5CF6',
                  transform: 'rotateY(90deg) translateZ(8rem)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <span className="text-white text-3xl md:text-4xl font-bold">{banks[1]?.name}</span>
              </div>
              
              {/* Left Face */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-2xl shadow-2xl"
                style={{
                  backgroundColor: banks[3]?.color || '#F59E0B',
                  transform: 'rotateY(-90deg) translateZ(8rem)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <span className="text-white text-3xl md:text-4xl font-bold">{banks[3]?.name}</span>
              </div>
              
              {/* Top Face */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-2xl shadow-2xl"
                style={{
                  backgroundColor: banks[4]?.color || '#EF4444',
                  transform: 'rotateX(90deg) translateZ(8rem)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <span className="text-white text-3xl md:text-4xl font-bold">{banks[4]?.name}</span>
              </div>
              
              {/* Bottom Face */}
              <div 
                className="absolute inset-0 flex items-center justify-center rounded-2xl shadow-2xl bg-gradient-to-br from-gray-700 to-gray-900"
                style={{
                  transform: 'rotateX(-90deg) translateZ(8rem)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <span className="text-white text-xl md:text-2xl font-bold text-center px-4">
                  20+ лет<br/>опыта
                </span>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-400 text-sm flex items-center gap-2">
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span>Прокрутите для вращения</span>
            </div>
          </div>

          {/* Experience Details */}
          <div className="space-y-6">
            {activeExperience && (
              <div 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500"
                key={activeExperience.bank}
              >
                <div 
                  className="inline-block px-4 py-2 rounded-full text-white text-sm font-medium mb-4"
                  style={{ backgroundColor: banks[activeIndex]?.color }}
                >
                  {activeExperience.bank}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {activeExperience.position}
                </h3>
                <p className="text-gray-500 mb-6">{activeExperience.period}</p>
                <ul className="space-y-3">
                  {activeExperience.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bank indicators */}
            <div className="flex justify-center gap-2">
              {banks.map((bank, idx) => (
                <button
                  key={bank.name}
                  onClick={() => {
                    setActiveIndex(idx);
                    setRotation({ x: -15, y: 45 + idx * 72 });
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'scale-125' : 'opacity-50 hover:opacity-75'
                  }`}
                  style={{ backgroundColor: bank.color }}
                  aria-label={`View ${bank.name} experience`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
