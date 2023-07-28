import { useEffect, useState } from "react";
import themes from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";
import { DefaultTheme } from "styled-components";

export const useTheme = () => {
    const [ theme, setTheme ] = useState(themes.dark);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = ( {mode : DefaultTheme}) => {
        setToLS("theme", mode.name);
        setTheme(mode);
    }

    useEffect(() => {
        const localThemeName = getFromLS("theme");
        localThemeName ? setTheme(themes[localThemeName]) : setTheme(themes.dark);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setTheme};
}