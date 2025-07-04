import { useContext, useEffect, useRef } from "react";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Sudo: React.FC = () => {
  const { arg } = useContext(termContext);     // Correctly scoped to this line's command
  const opened = useRef(false);                // Prevent multiple Rickrolls

  useEffect(() => {
    if (!opened.current && arg.length === 0) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      opened.current = true;
    }
  }, [arg]);

  return (
    <Wrapper>
      <span>🔒 Access denied: Oh no you're not admin...</span>
    </Wrapper>
  );
};

export default Sudo;
