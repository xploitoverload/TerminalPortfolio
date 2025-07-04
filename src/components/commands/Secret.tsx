import { useContext, useEffect, useRef, useState } from "react";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const CORRECT = "xploitoverload";
const MAX_ATTEMPTS = 3;

type Stage = "ask" | "wrong" | "ok" | "exit";

const Secret: React.FC = () => {
  const { setLocked } = useContext(termContext);
  const [pwd, setPwd] = useState("");
  const [stage, setStage] = useState<Stage>("ask");
  const [attempts, setAttempts] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  /* lock main prompt on mount, unlock on unmount */
  useEffect(() => {
    setLocked?.(true);
    console.log(
      "%cYou hacked my password!😠",
      "color:red;font-size:16px;font-weight:bold;"
    );
    console.log(
      "%cPassword: 'xploitoverload' - I wonder what it does?🤔",
      "color:gray;font-size:10px;"
    );
    inputRef.current?.focus();
    return () => setLocked?.(false);
  }, []);

  /* handle submit or auto‑exit */
  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (pwd.trim().toLowerCase() === CORRECT) {
      setStage("ok");
      setTimeout(() => setLocked?.(false), 40);
    } else {
      const next = attempts + 1;
      setAttempts(next);
      if (next >= MAX_ATTEMPTS) {
        setStage("exit");
        setTimeout(() => setLocked?.(false), 40);
      } else {
        setStage("wrong");
        setPwd("");
        inputRef.current?.focus();
      }
    }
  };

  /* Ctrl+C abort */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key.toLowerCase() === "c") {
      e.preventDefault();
      setStage("exit");
      setLocked?.(false);
    }
  };

  /* ───── finished states ───── */
  if (stage === "ok")
    return (
      <Wrapper>
        <span style={{ display: "inline-block", width: "8ch", color: "#50fa7b" }}>
          sudo
        </span>
        <span style={{ color: "#f1fa8c" }}>Only use if you're admin</span>
      </Wrapper>
    );

  if (stage === "exit")
    return (
      <Wrapper>
        <span style={{ color: "#ff5555" }}>Too many wrong attempts – aborted.</span>
      </Wrapper>
    );

  /* ───── interactive prompt ───── */
  return (
    <Wrapper>
      <form onSubmit={submit} style={{ display: "inline" }}>
        <span>
          {stage === "wrong"
            ? `Wrong password – try again (${attempts}/${MAX_ATTEMPTS}):`
            : "Enter password:"}
        </span>
        <input
          ref={inputRef}
          type="password"
          value={pwd}
          onChange={e => setPwd(e.target.value)}
          onKeyDown={handleKeyDown}          /* ← listens for Ctrl+C */
          style={{
            background: "transparent",
            border: "none",
            color: "inherit",
            marginLeft: "4px",
            outline: "none",
            width: "120px",
          }}
        />
      </form>
    </Wrapper>
  );
};

export default Secret;

// import { useContext, useEffect, useRef, useState } from "react";
// import { Wrapper } from "../styles/Output.styled";
// import { termContext } from "../Terminal";

// const CORRECT = "xploitoverload";

// const Secret: React.FC = () => {
//   const { setLocked } = useContext(termContext);
//   const [pwd, setPwd] = useState("");
//   const [stage, setStage] = useState<"ask" | "wrong" | "ok">("ask");
//   const inputRef = useRef<HTMLInputElement>(null);

//   /* lock main prompt */
//   useEffect(() => {
//     setLocked?.(true);
//     console.log("%cYou hacked my password!😠", "color:red;font-size:16px;font-weight:bold;");
//     console.log("%cPassword: 'xploitoverload' - I wonder what it does?🤔", "color:gray;font-size:10px;");
//     inputRef.current?.focus();
//     return () => setLocked?.(false);
//   }, []);

//   const submit = (e?: React.FormEvent) => {
//     e?.preventDefault();
//     if (pwd.trim().toLowerCase() === CORRECT) {
//       setStage("ok");
//       setTimeout(() => setLocked?.(false), 40);
//     } else {
//       setStage("wrong");
//       setPwd("");
//       inputRef.current?.focus();
//     }
//   };

//   if (stage === "ok") {
//     return (
//       <Wrapper>
//         <span style={{ display: "inline-block", width: "8ch", color: "#50fa7b" }}>
//           sudo
//         </span>
//         <span style={{ color: "#f1fa8c" }}>Only use if you're admin</span>
//       </Wrapper>
//     );
//   }

//   return (
//     <Wrapper>
//       <form onSubmit={submit} style={{ display: "inline" }}>
//         <span>
//           {stage === "wrong" ? "Wrong password – try again:" : "Enter password:"}
//         </span>
//         <input
//           ref={inputRef}
//           type="password"
//           value={pwd}
//           onChange={e => setPwd(e.target.value)}
//           style={{
//             background: "transparent",
//             border: "none",
//             color: "inherit",
//             marginLeft: "4px",
//             outline: "none",
//             width: "120px",
//           }}
//         />
//       </form>
//     </Wrapper>
//   );
// };

// export default Secret;
