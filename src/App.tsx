// src/App.tsx
import { createContext, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";
import { defaultTheme } from "./components/styles/themes"; // Import defaultTheme

export const themeContext = createContext<
  ((switchTheme: DefaultTheme) => void) | null
>(null);

function App() {
  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(defaultTheme); // Set to defaultTheme
  
  useEffect(() => {
    window.addEventListener(
      "keydown",
      e => ["ArrowUp", "ArrowDown"].includes(e.code) && e.preventDefault(),
      false
    );
  }, []);

  useEffect(() => {
    if (themeLoaded) {
      // Apply default theme if no preference is saved
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setMode(defaultTheme);
      }
      setSelectedTheme(theme);
    }
  }, [themeLoaded]);

  useEffect(() => {
    const themeColor = selectedTheme.colors?.body;
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    const maskIcon = document.querySelector("link[rel='mask-icon']");
    const metaMsTileColor = document.querySelector(
      "meta[name='msapplication-TileColor']"
    );

    metaThemeColor?.setAttribute("content", themeColor);
    metaMsTileColor?.setAttribute("content", themeColor);
    maskIcon?.setAttribute("color", themeColor);
  }, [selectedTheme]);

  const themeSwitcher = (switchTheme: DefaultTheme) => {
    setSelectedTheme(switchTheme);
    setMode(switchTheme);
  };

  return (
    <>
      <h1 className="sr-only">Terminal Portfolio</h1>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <themeContext.Provider value={themeSwitcher}>
            <Terminal />
          </themeContext.Provider>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
