import { DefaultTheme } from "styled-components"
import { ITheme, ThemeEnum } from "../interfaces/styled.ts"

export const baseTheme: ITheme = {
    colors: {
        primary: "#82bd69",
        bg: "#f5f5f5",
        font: "#000000",
        fontPrimary: "#ffffff"
    },
    media: {
        large: "(max-width: 1019px)",
        medium: "(max-width: 769px)",
        small: "(max-width: 426px)"
    },
    zIndex: {
        btn: 10,
        modal: 100
    }
}
export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,

    colors: {
        ...baseTheme.colors,
        bg: "#efefef",
        font: "#000000",
        fontPrimary: "#ffffff"
    }
}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,

    colors: {
        ...baseTheme.colors,
        bg: "#3d3d3d",
        font: "#ffffff",
        fontPrimary: "#000000"
    }
}
