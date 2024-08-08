import { createSlice } from "@reduxjs/toolkit"

import { lightTheme } from "../styles/theme.ts"

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: lightTheme
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
