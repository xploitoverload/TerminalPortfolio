import { useContext, useEffect } from "react";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

/* ===== config ===== */
const CORRECT_PASSWORD = "xploitoverload";

const Secret: React.FC = () => {
  const { arg } = useContext(termContext);   // `arg` = ["secret", "...pwd?"]

  /* ===== console Easter‑egg ===== */
  useEffect(() => {
    console.log(
      "%cYou hacked my password!😠",
      "color:red;font-size:20px;font-weight:bold;"
    );
    console.log(
      "%cPassword: 'xploitoverload' - I wonder what it does?🤔",
      "color:gray;font-size:10px;"
    );
  }, []);

  /* ===== terminal output ===== */
  const passwordSupplied = arg.length > 1 ? arg[1] : "";
  const isCorrect = passwordSupplied === CORRECT_PASSWORD;

  return (
    <Wrapper data-testid="secret">
      {isCorrect ? (
        /* Same look‑and‑feel as your help listing */
        <>
          <span style={{ display: "inline-block", width: "8ch" }}>sudo</span>
          <span>Only use if you're admin</span>
        </>
      ) : (
        <span>Enter password:</span>
      )}
    </Wrapper>
  );
};

export default Secret;
