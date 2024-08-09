import { createSlice } from "@reduxjs/toolkit"

export const myRecipesSlice = createSlice({
    name: "my",
    initialState: {
        recipes: [],
        page: 1,
        searchStr: "",
        limit: 6
    },
    reducers: {
        addMyRecipes: (state, action) => {
            state.recipes = [...state.recipes, action.payload]
            state.page = Math.ceil(state.recipes.length / state.limit) + 1
        },
        deleteMyRecipes: (state, action) => {
            state.recipes = []
            state.page = 1
            state.searchStr = action.payload
        },
        changeMyRecipes: (state, action) => {
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

export const { addMyRecipes, deleteMyRecipes, changeMyRecipes } = myRecipesSlice.actions

export const selectMyRecipes = (state) => state.my

export default myRecipesSlice.reducer
