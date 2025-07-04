// src/components/Sequence.tsx
import React from "react";
import Type, { TypeProps } from "./Type";

function plain(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(plain).join("");
  if (React.isValidElement(node)) return plain(node.props.children);
  return "";
}

interface SeqProps {
  children: React.ReactElement<TypeProps>[]; // expect <Type> elements
  speed?: number;   // default inherits each child speed
  gap?: number;     // extra pause after each line (ms)
}

const Sequence: React.FC<SeqProps> = ({ children, speed = 25, gap = 300 }) => {
  let offset = 0;

  return (
    <>
      {React.Children.map(children, child => {
        const textLen = plain(child.props.children).length;
        const cloned = React.cloneElement(child, {
          speed: child.props.speed ?? speed,
          delay: child.props.delay ?? offset,
        });
        offset += textLen * (child.props.speed ?? speed) + gap;
        return cloned;
      })}
    </>
  );
};

export default Sequence;
