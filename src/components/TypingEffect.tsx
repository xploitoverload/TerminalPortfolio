// src/components/TypingEffect.tsx
import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  delay?: number;
  onTypingComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  typingSpeed = 30,
  delay = 0,
  onTypingComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    
    return () => {
      isMountedRef.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (currentIndex >= text.length) {
      if (onTypingComplete) {
        onTypingComplete();
      }
      return;
    }

    const timeout = setTimeout(() => {
      if (isMountedRef.current) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? delay : typingSpeed);

    timerRef.current = timeout;

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [text, currentIndex, typingSpeed, delay, onTypingComplete]);

  return <>{displayedText}</>;
};

export default TypingEffect;
