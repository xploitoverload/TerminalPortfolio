// src/components/AutoType.tsx
import React, { useEffect, useState } from "react";

/** Walk any React tree & collect plain‑text content */
function extract(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extract).join("");
  if (React.isValidElement(node)) return extract(node.props.children);
  return "";
}

interface Props {
  children: React.ReactElement;           // The component you want to reveal
  speed?: number;                         // ms per character
}

const AutoType: React.FC<Props> = ({ children, speed = 25 }) => {
  const full = extract(children);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setChars(i);
      if (i >= full.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [full, speed]);

  /** Recursively clone tree, cutting off text after `chars` */
  const reveal = (node: React.ReactNode, remain: { n: number }): React.ReactNode => {
    if (typeof node === "string" || typeof node === "number") {
      const str = String(node);
      const slice = str.slice(0, Math.max(0, remain.n));
      remain.n -= slice.length;
      return slice;
    }
    if (Array.isArray(node))
      return node.map(el => reveal(el, remain));
    if (React.isValidElement(node))
      return React.cloneElement(
        node,
        node.props,
        reveal(node.props.children, remain),
      );
    return node;
  };

  return <>{reveal(children, { n: chars })}</>;
};

export default AutoType;
