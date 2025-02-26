import { createSlice } from "@reduxjs/toolkit"

export const likeRecipesSlice = createSlice({
    name: "like",
    initialState: {
        recipes: [],
        filters: {
            search: "",
            time_min: 0,
            time_max: 0,
            cal_min: 0,
            cal_max: 0
        },
        page: 1,
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
            state.filters.search = action.payload
        },
        eraseLikeRecipes: (state, action) => {
            state.recipes = state.recipes.filter((el) => el._id !== action.payload)
            state.page = Math.ceil(state.recipes.length / state.limit) + 1
        }
    }
})

export const { addLikeRecipes, deleteLikeRecipes, eraseLikeRecipes } = likeRecipesSlice.actions

export const selectLikeRecipes = (state) => state.like

export default likeRecipesSlice.reducer
