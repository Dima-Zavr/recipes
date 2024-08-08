import { createSlice } from "@reduxjs/toolkit"

import { darkTheme, lightTheme } from "../styles/theme.ts"

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: localStorage.getItem("theme") === "light" ? lightTheme : darkTheme
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const { toggleTheme } = themeSlice.actions

export const selectTheme = (state) => state.theme.theme

export default themeSlice.reducer
