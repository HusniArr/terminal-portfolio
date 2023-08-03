import { useState, createContext, useEffect } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from './components/Terminal';

export const themeContext = createContext<(({switchTheme : DefaultTheme}))>(null);

function App() {
  //  themes
  const { theme, themeLoaded, setMode } = useTheme();
  const { selectedTheme, setSelectedTheme } = useState(theme);

  // disable browser's default behaviour
  // to prevent the page go up when up arrow is pressed
  useEffect(()=> {
    window.addEventListener(
      "keydown", e => {
        ["ArrowUp", "ArrowDown"].indexOf(e.code) > -1 && e.preventDefault();
      },
      false
    )
  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // update meta tag colors when switching themes
  useEffect(() => {
    const themeColor = theme.colors?.body;
    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    const maskIcon = document.querySelector("link[rel='mask-icon']");
    const metaMsTileColor = document.querySelector("meta[name='msapplication-TileColor']");

    metaThemeColor && metaThemeColor.setAttribute("content", themeColor);
    metaMsTileColor && metaMsTileColor.setAttribute("content", themeColor);
    maskIcon && maskIcon.setAttribute("color", themeColor);

    
  }, [selectedTheme]);

  const themeSwitcher = (DefaultTheme) => {
    setSelectedTheme(DefaultTheme);
    setMode(DefaultTheme)
  };

  return (
    <>
      <h1 className='sr-only' aria-label="Terminal Portfolio">Terminal Portfolio</h1> 
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle/>
          <themeContext.Provider value={themeSwitcher}>
            <Terminal/>
          </themeContext.Provider>
        </ThemeProvider>
      )}
    </>
  )
}

export default App
