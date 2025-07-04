import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import {
  CmdNotFound,
  Empty,
  Form,
  Hints,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
} from "./styles/Terminal.styled";
import { argTab } from "../utils/funcs";

/* ────────────────────────── command list ────────────────────────── */
type CommandItem = { cmd: string; desc: string; tab: number };
export const commands: CommandItem[] = [
  { cmd: "whois", desc: "whois xploitoverload", tab: 8 },
  { cmd: "secret", desc: "find the Password", tab: 7 },
  { cmd: "clear", desc: "clear the terminal", tab: 8 },
  { cmd: "echo", desc: "print out anything", tab: 9 },
  { cmd: "sudo", desc: "Only use if you're admin", tab: 9 },
  { cmd: "education", desc: "my education background", tab: 4 },
  { cmd: "email", desc: "send an email to me", tab: 8 },
  { cmd: "gui", desc: "go to my portfolio in GUI", tab: 10 },
  { cmd: "help", desc: "check available commands", tab: 9 },
  { cmd: "history", desc: "view command history", tab: 6 },
  { cmd: "projects", desc: "view projects that I've coded", tab: 5 },
  { cmd: "pwd", desc: "print current working directory", tab: 10 },
  { cmd: "socials", desc: "check out my social accounts", tab: 6 },
  { cmd: "themes", desc: "check available themes", tab: 7 },
  { cmd: "welcome", desc: "display hero section", tab: 6 },
  { cmd: "whoami", desc: "about current user", tab: 7 },
  { cmd: "flag", desc: "???", tab: 9 },
];

/* ────────────────────────── context type ────────────────────────── */
type Term = {
  arg: string[];
  history: string[];                 // text-only history for sub‑components
  rerender: boolean;
  index: number;
  isLocked: boolean;
  setLocked?: (v: boolean) => void;
  clearHistory?: () => void;
};
export const termContext = createContext<Term>({
  arg: [],
  history: [],
  rerender: false,
  index: 0,
  isLocked: false,
});

/* ────────────────────────── component ───────────────────────────── */
type HistoryEntry = { id: string; text: string }; // stable id

const Terminal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef      = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<HistoryEntry[]>([
    { id: "0", text: "welcome" },
  ]);
  const [rerender, setRerender]   = useState(false);
  const [hints, setHints]         = useState<string[]>([]);
  const [pointer, setPointer]     = useState(-1);
  const [isLocked, setLocked]     = useState(false);

  /* ───── input change ───── */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRerender(false);
      setInputVal(e.target.value);
    },
    [],
  );

  /* ───── submit command ───── */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const val = inputVal.trim();
    if (!val) return;

    setCmdHistory([{ id: crypto.randomUUID(), text: val }, ...cmdHistory]);
    setInputVal("");
    setRerender(true);
    setHints([]);
    setPointer(-1);
  };

  /* ───── clear history ───── */
  const clearHistory = () => {
    setCmdHistory([]);
    setHints([]);
  };

  /* ───── auto‑focus (respect lock) ───── */
  useEffect(() => {
    if (isLocked) return;
    const t = setTimeout(() => inputRef.current?.focus(), 1);
    return () => clearTimeout(t);
  }, [inputVal, pointer, isLocked]);

  /* ───── key handling ───── */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setRerender(false);
    const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
    const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

    /* Tab / Ctrl+I → autocomplete */
    if (e.key === "Tab" || ctrlI) {
      e.preventDefault();
      if (!inputVal) return;

      let hintList: string[] = commands
        .filter(({ cmd }) => cmd.startsWith(inputVal))
        .map(({ cmd }) => cmd);

      const returned = argTab(inputVal, setInputVal, setHints, hintList);
      if (returned) hintList = [...hintList, ...returned];

      if (hintList.length > 1) setHints(hintList);
      else if (hintList.length === 1) {
        const current = inputVal.split(" ");
        setInputVal(
          current.length !== 1
            ? `${current[0]} ${current[1]} ${hintList[0]}`
            : hintList[0],
        );
        setHints([]);
      }
    }

    /* Ctrl+L → clear */
    if (ctrlL) {
      e.preventDefault();
      clearHistory();
    }

    /* Up/Down history navigation */
    if (e.key === "ArrowUp") {
      if (pointer + 1 >= cmdHistory.length) return;
      setInputVal(cmdHistory[pointer + 1].text);
      setPointer(p => p + 1);
    }
    if (e.key === "ArrowDown") {
      if (pointer <= -1) return;
      if (pointer === 0) {
        setInputVal("");
        setPointer(-1);
      } else {
        setInputVal(cmdHistory[pointer - 1].text);
        setPointer(p => p - 1);
      }
    }
  };

  /* ─────────────────── render ─────────────────── */
  return (
    <Wrapper ref={containerRef}>
      {/* hints */}
      {hints.length > 1 && (
        <div>{hints.map(h => <Hints key={h}>{h}</Hints>)}</div>
      )}

      {/* main prompt (hide when locked) */}
      {!isLocked && (
        <Form onSubmit={handleSubmit}>
          <label htmlFor="terminal-input">
            <TermInfo /> <MobileBr />
            <MobileSpan>&#62;</MobileSpan>
          </label>
          <Input
            id="terminal-input"
            ref={inputRef}
            type="text"
            autoComplete="off"
            spellCheck="false"
            autoFocus
            value={inputVal}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
        </Form>
      )}

      {/* history lines */}
      {cmdHistory.map(({ id, text }, idx) => {
        const parts        = text.trim().split(" ");
        const baseCommand  = parts[0];
        const validCommand = commands.find(c => c.cmd === baseCommand);

        const ctxValue = {
          arg: parts.slice(1),
          history: cmdHistory.map(h => h.text),
          rerender,
          index: idx,
          isLocked,
          setLocked,
          clearHistory,
        };

        return (
          <div key={id}>
            <div>
              <TermInfo />
              <MobileBr />
              <MobileSpan>&#62;</MobileSpan>
              <span>{text}</span>
            </div>
            {validCommand ? (
              <termContext.Provider value={ctxValue}>
                <Output index={idx} cmd={baseCommand} />
              </termContext.Provider>
            ) : text === "" ? (
              <Empty />
            ) : (
              <CmdNotFound>command not found: {text}</CmdNotFound>
            )}
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Terminal;
