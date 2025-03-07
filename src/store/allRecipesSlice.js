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
        changeAllFilters: (state, action) => {
            state.recipesData.recipes = [];
            state.recipesData.page = 1;
            state.recipesData.isHasMore = true;
            state.filters = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetState, () => initialState);
    }
});

export const { addAllRecipes, changeAllSearch, changeAllRecipes, changeAllFilters } =
    allRecipesSlice.actions;

export const selectAllRecipesData = (state) => state.all.recipesData;
export const selectAllFilters = (state) => state.all.filters;

export default allRecipesSlice.reducer;
