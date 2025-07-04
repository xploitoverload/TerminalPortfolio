// src/components/TypingEffect.tsx
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number; // Milliseconds per character
  delay?: number; // Initial delay before typing starts
  onTypingComplete?: () => void; // Callback when typing is done
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  typingSpeed = 1, // Default to 1ms for maximum speed
  delay = 0,
  onTypingComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startTyping = () => {
      if (currentIndex < text.length) {
        timeoutId = setTimeout(() => {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, typingSpeed);
      } else {
        // Typing is complete
        if (onTypingComplete) {
          onTypingComplete();
        }
      }
    };

    // Only start if text hasn't been fully displayed yet
    if (currentIndex < text.length) {
      if (delay > 0 && currentIndex === 0) {
        timeoutId = setTimeout(startTyping, delay);
      } else {
        startTyping();
      }
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, currentIndex, typingSpeed, delay, onTypingComplete]);

  return <>{displayText}</>; // Using a Fragment to avoid extra spans
};

export default TypingEffect;