// src/components/TypingEffect.tsx
import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  typingSpeed?: number;
  delay?: number;
  onTypingComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  typingSpeed = 1,
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
        console.log(`TypingEffect: Finished typing for: "${text.substring(0, 30)}..."`); // <--- ADD THIS LOG
        if (onTypingComplete) {
            console.log(`TypingEffect: Calling onTypingComplete for "${text.substring(0, 30)}..."`); // <--- ADD THIS LOG
            onTypingComplete();
        } else {
            console.log(`TypingEffect: onTypingComplete prop is undefined for "${text.substring(0, 30)}..."`); // <--- ADD THIS LOG
        }
      }
    };

    if (currentIndex < text.length) {
      if (delay > 0 && currentIndex === 0) {
        console.log(`TypingEffect: Starting with delay ${delay} for "${text.substring(0, 30)}..."`); // <--- ADD THIS LOG
        timeoutId = setTimeout(startTyping, delay);
      } else {
        console.log(`TypingEffect: Starting immediately for "${text.substring(0, 30)}..." (Current index: ${currentIndex})`); // <--- ADD THIS LOG
        startTyping();
      }
    } else {
        console.log(`TypingEffect: Already completed for "${text.substring(0, 30)}..." (Current index: ${currentIndex}, text length: ${text.length})`); // <--- ADD THIS LOG
    }


    return () => {
      clearTimeout(timeoutId);
      console.log(`TypingEffect: Cleanup for "${text.substring(0, 30)}..."`); // <--- ADD THIS LOG
    };
  }, [text, currentIndex, typingSpeed, delay, onTypingComplete]);

  return <>{displayText}</>;
};

export default TypingEffect;
