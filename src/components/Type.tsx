import React, { useEffect, useState } from "react";

export interface TypeProps {
  children: React.ReactNode;
  speed?: number;    // ms/char
  delay?: number;    // ms before start
  cursor?: boolean;
  onDone?: () => void;
}

const Type: React.FC<TypeProps> = ({
  children,
  speed = 25,
  delay = 0,
  cursor = false,
  onDone,
}) => {
  const text = React.Children.toArray(children).join("");
  const [shown, setShown] = useState(delay === 0 ? "" : undefined);

  useEffect(() => {
    const start = setTimeout(() => {
      let i = 0;
      setShown("");
      const id = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(id);
          onDone?.();
        }
      }, speed);
    }, delay);

    return () => clearTimeout(start);
  }, [text, speed, delay, onDone]);

  if (shown === undefined) return null; // still waiting
  return (
    <>
      {shown}
      {cursor && <span className="blinker">▊</span>}
    </>
  );
};

export default Type;
