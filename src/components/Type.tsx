import React, { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;   // ✅ किसी भी तरह का text node array
  speed?: number;
  cursor?: boolean;
}

const Type: React.FC<Props> = ({ children, speed = 25, cursor = false }) => {
  // flatten children to one string
  const fullText = React.Children.toArray(children).join("");

  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [fullText, speed]);

  return (
    <>
      {shown}
      {cursor && <span className="blinker">▊</span>}
    </>
  );
};

export default Type;
