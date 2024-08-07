import { createSlice } from "@reduxjs/toolkit"

export const likeRecipesSlice = createSlice({
    name: "like",
    initialState: {
        recipes: [],
        page: 1,
        searchStr: "",
        limit: 6
    },
    reducers: {
        addLikeRecipes: (state, action) => {
            state.recipes = [...state.recipes, action.payload]
            state.page = Math.ceil(state.recipes.length / state.limit) + 1
        },
        deleteLikeRecipes: (state, action) => {
            state.recipes = []
            state.page = 1
            state.searchStr = action.payload
        },
        eraseLikeRecipes: (state, action) => {
            state.recipes = state.recipes.filter((el) => el.id !== action.payload.id)
            state.page = Math.ceil(state.recipes.length / state.limit) + 1
        }
    }
})

export const { addLikeRecipes, deleteLikeRecipes, eraseLikeRecipes } = likeRecipesSlice.actions

export const selectLikeRecipes = (state) => state.like

export default likeRecipesSlice.reducer
