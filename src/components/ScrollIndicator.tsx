import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
  showOnSections?: string[];
}

export function ScrollIndicator({ className = '' }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide when near bottom
      if (scrollY + windowHeight >= documentHeight - 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // Mark as scrolled
      if (scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const nextSection = Math.floor(currentScroll / windowHeight) + 1;
    
    window.scrollTo({
      top: nextSection * windowHeight,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToNext}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50
                  flex flex-col items-center gap-2
                  text-gray-400 hover:text-blue-600 transition-colors duration-300
                  ${hasScrolled ? 'opacity-50 hover:opacity-100' : 'opacity-100'}
                  ${className}`}
      aria-label="Scroll to next section"
    >
      <span className="text-xs font-medium tracking-wider uppercase">Прокрутите</span>
      <div className="relative w-8 h-12 rounded-full border-2 border-current flex items-start justify-center p-2">
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </button>
  );
}

// Section-specific scroll indicator
interface SectionScrollIndicatorProps {
  targetId: string;
  className?: string;
}

export function SectionScrollIndicator({ targetId, className = '' }: SectionScrollIndicatorProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex flex-col items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors duration-300 ${className}`}
      aria-label={`Scroll to ${targetId}`}
    >
      <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
        <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
      </div>
      <ChevronDown className="w-4 h-4 -mt-1 animate-pulse" />
    </button>
  );
}
