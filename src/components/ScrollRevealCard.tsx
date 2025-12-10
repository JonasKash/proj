import { ReactNode, memo } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealCardProps {
  children: ReactNode;
  delay?: number;
}

const ScrollRevealCard = memo(({ children, delay = 0 }: ScrollRevealCardProps) => {
  const { ref, isVisible } = useScrollReveal({ delay });

  return (
    <div
      ref={ref}
      className={`will-change-transform w-full max-w-full ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'
      }`}
      style={{
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
      }}
    >
      {children}
    </div>
  );
});

ScrollRevealCard.displayName = 'ScrollRevealCard';

export default ScrollRevealCard;
