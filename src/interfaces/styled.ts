export enum ThemeEnum {
    light = "light",
    dark = "dark"
}

export interface ITheme {
    colors: {
        primary: string
        bg: string
        font: string
        fontPrimary: string
    }

    media: {
        large: string
        medium: string
        small: string
    }

    zIndex: {
        btn: number
        modal: number
    }
}
