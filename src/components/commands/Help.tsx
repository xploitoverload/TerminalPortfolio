import React, { useState, useEffect } from 'react';
import TypingEffect from '../TypingEffect';
import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";

const Help: React.FC = () => {
  const [visibleCommands, setVisibleCommands] = useState<number[]>([]);
  const [showKeyBindings, setShowKeyBindings] = useState(false);
  
  // Key bindings data
  const keyBindings = [
    "Tab or Ctrl + i = autocompletes the command\n",
    "Up Arrow = go back to previous command\n",
    "Ctrl + l = clear the terminal"
  ];
  const [visibleKeyBindings, setVisibleKeyBindings] = useState<number[]>([]);

  useEffect(() => {
    // Start animating commands one by one
    const commandTimers = commands.map((_, i) => 
      setTimeout(() => {
        setVisibleCommands(prev => [...prev, i]);
      }, i * 200)
    );

    // Show key bindings after all commands are displayed
    const keyBindingTimer = setTimeout(() => {
      setShowKeyBindings(true);
      
      // Animate key bindings after a short delay
      keyBindings.forEach((_, i) => {
        setTimeout(() => {
          setVisibleKeyBindings(prev => [...prev, i]);
        }, i * 200 + 200);
      });
    }, commands.length * 200 + 500);

    return () => {
      commandTimers.forEach(timer => clearTimeout(timer));
      clearTimeout(keyBindingTimer);
    };
  }, []);

  return (
    <HelpWrapper data-testid="help">
      {commands.map(({ cmd, desc, tab }, index) => (
        <CmdList key={cmd}>
          {visibleCommands.includes(index) ? (
            <>
              <Cmd>
                <TypingEffect 
                  text={cmd} 
                  typingSpeed={10}
                  delay={0}
                />
              </Cmd>
              {generateTabs(tab)}
              <CmdDesc>
                -{' '}
                <TypingEffect 
                  text={desc} 
                  typingSpeed={1}
                  delay={100}
                />
              </CmdDesc>
            </>
          ) : null}
        </CmdList>
      ))}
      
      {showKeyBindings && (
        <KeyContainer>
          {keyBindings.map((binding, index) => (
            visibleKeyBindings.includes(index) ? (
              <TypingEffect 
                key={index}
                text={binding} 
                typingSpeed={1}
                delay={0}
              />
            ) : null
          ))}
        </KeyContainer>
      )}
    </HelpWrapper>
  );
};

export default Help;
