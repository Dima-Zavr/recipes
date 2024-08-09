import { createSlice } from "@reduxjs/toolkit"

export const allRecipesSlice = createSlice({
    name: "all",
    initialState: {
        recipes: [],
        page: 1,
        searchStr: "",
        limit: 6
    },
    reducers: {
        addAllRecipes: (state, action) => {
            state.recipes = [...state.recipes, action.payload]
            state.page = Math.ceil(state.recipes.length / state.limit) + 1
        },
        deleteAllRecipes: (state, action) => {
            state.recipes = []
            state.page = 1
            state.searchStr = action.payload
        },
        changeAllRecipes: (state, action) => {
            state.recipes = state.recipes.map((el) => {
                if (el.id === action.payload.id) {
                    el.like = action.payload.like
                    return el
                }
                return el
            })
        }
    }
})

export const { addAllRecipes, deleteAllRecipes, changeAllRecipes } = allRecipesSlice.actions

export const selectAllRecipes = (state) => state.all

export default allRecipesSlice.reducer
