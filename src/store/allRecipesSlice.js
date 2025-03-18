import { createSlice } from "@reduxjs/toolkit";

import { initialState, resetState } from "./actions";

export const allRecipesSlice = createSlice({
    name: "all",
    initialState,
    reducers: {
        addAllRecipes: (state, action) => {
            if (action.payload.length !== 0) {
                state.recipesData.recipes = [...state.recipesData.recipes, ...action.payload];
                state.recipesData.page =
                    Math.ceil(state.recipesData.recipes.length / state.recipesData.limit) + 1;
            } else {
                state.recipesData.isHasMore = false;
            }
        },
        changeAllRecipes: (state, action) => {
            state.recipesData.recipes = state.recipesData.recipes.map((el) => {
                if (el._id === action.payload.id) {
                    el.like = !el.like;
                    return el;
                }
                return el;
            });
        },
        changeAllSearch: (state, action) => {
            state.recipesData.recipes = [];
            state.recipesData.page = 1;
            state.recipesData.isHasMore = true;
            state.recipesData.search = action.payload;
        },
        addAllSort: (state, action) => {
            state.sort = action.payload;
        },
        changeAllSort: (state, action) => {
            state.recipesData.sort = action.payload;
            state.recipesData.recipes = [];
            state.recipesData.page = 1;
            state.recipesData.isHasMore = true;
        },
        changeAllFilters: (state, action) => {
            state.recipesData.recipes = [];
            state.recipesData.page = 1;
            state.recipesData.isHasMore = true;
            state.filters.times = {
                min: action.payload.times_min,
                max: action.payload.times_max
            };
            state.filters.cals = {
                min: action.payload.cals_min,
                max: action.payload.cals_max
            };
            state.filters.types = action.payload.types;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetState, () => initialState);
    }
});

export const {
    addAllRecipes,
    changeAllSearch,
    changeAllRecipes,
    addAllSort,
    changeAllSort,
    changeAllFilters
} = allRecipesSlice.actions;

export const selectAllRecipesData = (state) => state.all.recipesData;
export const selectAllFilters = (state) => state.all.filters;
export const selectAllSort = (state) => state.all.sort;

export default allRecipesSlice.reducer;
