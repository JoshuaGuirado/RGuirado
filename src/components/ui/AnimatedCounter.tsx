import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const numberMatch = value.match(/\d+/);
    if (!numberMatch) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(numberMatch[0], 10);
    const prefix = value.substring(0, numberMatch.index);
    const suffix = value.substring(numberMatch.index! + numberMatch[0].length);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = targetNumber;
          const duration = 2000;
          const totalFrames = Math.round(duration / 16);
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.round(easeProgress * end);

            setDisplayValue(`${prefix}${currentCount}${suffix}`);

            if (frame === totalFrames) {
              clearInterval(counter);
              setDisplayValue(value);
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  );
}
