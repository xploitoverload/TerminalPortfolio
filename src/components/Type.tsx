// src/components/Type.tsx
import { useEffect, useState } from "react";

interface Props {
  children: string;          // plain text only
  speed?: number;            // ms delay per character
  cursor?: boolean;          // blinking cursor?
}

const Type: React.FC<Props> = ({ children, speed = 25, cursor = false }) => {
  const [shown, setShown] = useState("");

  /* type‑writer effect */
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(children.slice(0, i));
      if (i >= children.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [children, speed]);

  return (
    <>
      {shown}
      {cursor && <span className="blinker">▊</span>}
    </>
  );
};

export default Type;
