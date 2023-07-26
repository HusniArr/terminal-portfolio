import { DefaultTheme } from "styled-components";

export const Themes = {
    [key] : DefaultTheme
}

const theme = {
    dark : {
        id: "T_001",
        name: "dark",
        colors: {
            body: "#1d2a35",
            scrollHandle: "#19252e",
            scrollHandleHover: "#162028",
            primary: "#05ce91",
            secondary: "#ff9d00",
            text:{
                100: "#cbd5e1",
                200: "#b2bdcc",
                300: "#64748b"
            }
        }
    },
    light: {
        id: "T_002",
        name: "light",
        colors: {
            body: "#eff3f3",
            scrollHandle: "#c1c1c1",
            scrollHandleHover: "#aaaaaa",
            primary: "#027474",
            secondary: "#ff9d00",
            text:{
                100: "#334155",
                200: "#475569",
                300: "#64748b"
            }
        }
    }
}