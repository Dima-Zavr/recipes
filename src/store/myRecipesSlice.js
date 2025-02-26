import { createSlice } from "@reduxjs/toolkit"

export const myRecipesSlice = createSlice({
    name: "my",
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
        addMyRecipes: (state, action) => {
            state.recipes = [...state.recipes, action.payload]
            state.page = Math.ceil(state.recipes.length / state.limit) + 1
        },
        deleteMyRecipes: (state, action) => {
            state.recipes = []
            state.page = 1
            state.filters.search = action.payload
        },
        changeMyRecipes: (state, action) => {
            state.recipes = state.recipes.map((el) => {
                if (el._id === action.payload.id) {
                    el.like = !el.like
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
