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

    
  })
  return (
    <>
      
    </>
  )
}

export default App
