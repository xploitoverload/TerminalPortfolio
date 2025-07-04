// src/components/TypingEffect.tsx
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number; // Milliseconds per character
  delay?: number; // Initial delay before typing starts
  loop?: boolean; // Whether the typing effect should loop (likely false for this use case)
  onTypingComplete?: () => void; // Callback when typing is done
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  typingSpeed = 50, // Slightly faster default for paragraphs
  delay = 0,
  loop = false,
  onTypingComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const startTyping = () => {
      if (currentIndex < text.length) {
        timeoutId = setTimeout(() => {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, typingSpeed);
      } else {
        setIsTypingComplete(true);
        if (onTypingComplete) {
          onTypingComplete(); // Call the callback when done
        }
      }
    };

    if (!isTypingComplete) {
      if (delay > 0 && currentIndex === 0) {
        timeoutId = setTimeout(startTyping, delay);
      } else {
        startTyping();
      }
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, currentIndex, typingSpeed, delay, isTypingComplete, onTypingComplete]);

  return <span className="typing-effect">{displayText}</span>;
};

export default TypingEffect;