// src/hooks/useTheme.ts
import { useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import { defaultTheme } from "../components/styles/themes";

export const useTheme = () => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme));
      } catch (e) {
        setTheme(defaultTheme);
      }
    }
    setThemeLoaded(true);
  }, []);

  const setMode = (mode: DefaultTheme) => {
    localStorage.setItem('theme', JSON.stringify(mode));
    setTheme(mode);
  };

  return { theme, themeLoaded, setMode };
};
