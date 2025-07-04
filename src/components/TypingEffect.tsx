// src/components/TypingEffect.tsx
import React, { useState, useEffect, useRef } from 'react'; // Import useRef

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
  // Use a ref to hold the current index. Updates to a ref's .current value
  // do NOT trigger component re-renders or useEffect re-runs.
  const currentIndexRef = useRef(0);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null); // To store and clear the timeout ID

  useEffect(() => {
    // 1. Cleanup any existing timeout when the effect re-runs or component unmounts
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = null; // Clear the ref
    }

    // 2. Reset state for a new typing sequence
    setDisplayText('');
    currentIndexRef.current = 0; // Reset the ref to 0 for the new text

    // 3. Define the recursive typing function
    const typeCharacter = () => {
      if (currentIndexRef.current < text.length) {
        // Append the next character
        setDisplayText((prevText) => prevText + text[currentIndexRef.current]);
        // Increment the ref's current value directly
        currentIndexRef.current += 1;
        // Schedule the next character
        timeoutIdRef.current = setTimeout(typeCharacter, typingSpeed);
      } else {
        // Typing is complete
        console.log(`TypingEffect: Finished typing for: "${text.substring(0, Math.min(30, text.length))}..."`);
        if (onTypingComplete) {
          console.log(`TypingEffect: Calling onTypingComplete for "${text.substring(0, Math.min(30, text.length))}..."`);
          onTypingComplete();
        } else {
          console.log(`TypingEffect: onTypingComplete prop is undefined for "${text.substring(0, Math.min(30, text.length))}..."`);
        }
        timeoutIdRef.current = null; // Clear timeout ID when typing is genuinely finished
      }
    };

    // 4. Start the typing process with an initial delay if specified
    if (delay > 0) {
      console.log(`TypingEffect: Starting with initial delay ${delay} for "${text.substring(0, Math.min(30, text.length))}..."`);
      timeoutIdRef.current = setTimeout(typeCharacter, delay);
    } else {
      console.log(`TypingEffect: Starting immediately for "${text.substring(0, Math.min(30, text.length))}..."`);
      typeCharacter(); // Start typing without delay
    }

    // 5. Cleanup function for the effect
    return () => {
      console.log(`TypingEffect: Cleanup for "${text.substring(0, Math.min(30, text.length))}..."`);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };

    // Dependencies: The effect should only re-run if these props change.
    // currentIndexRef is intentionally NOT in the dependency array because
    // its updates should NOT trigger the effect to restart.
  }, [text, typingSpeed, delay, onTypingComplete]);

  return <>{displayText}</>;
};

export default TypingEffect;
