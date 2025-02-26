import { createSlice } from "@reduxjs/toolkit"

export const allRecipesSlice = createSlice({
    name: "all",
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
        addAllRecipes: (state, action) => {
            state.recipes = [...state.recipes, action.payload]
            state.page = Math.ceil(state.recipes.length / state.limit) + 1
        },
        deleteAllRecipes: (state, action) => {
            state.recipes = []
            state.page = 1
            state.filters.search = action.payload
        },
        changeAllRecipes: (state, action) => {
            state.recipes = state.recipes.map((el) => {
                if (el._id === action.payload.id) {
                    el.like = !el.like
                    return el
                }
                return el
            })
        },
        changeAllFilters: (state, action) => {
            state.filters.time_min = action.payload.time_min
            state.filters.time_max = action.payload.time_max
            state.filters.cal_min = action.payload.cal_min
            state.filters.cal_max = action.payload.cal_max
        }
    }
})

export const { addAllRecipes, deleteAllRecipes, changeAllRecipes, changeAllFilters } =
    allRecipesSlice.actions

export const selectAllRecipes = (state) => state.all

export default allRecipesSlice.reducer
