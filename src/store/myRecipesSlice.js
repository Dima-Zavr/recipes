import { createSlice } from "@reduxjs/toolkit";

import { initialState, resetState } from "./actions";

export const myRecipesSlice = createSlice({
    name: "my",
    initialState,
    reducers: {
        addMyRecipes: (state, action) => {
            if (action.payload.length !== 0) {
                state.recipesData.recipes = [...state.recipesData.recipes, ...action.payload];
                state.recipesData.page =
                    Math.ceil(state.recipesData.recipes.length / state.recipesData.limit) + 1;
            } else {
                state.recipesData.isHasMore = false;
            }
        },
        changeMyRecipes: (state, action) => {
            state.recipesData.recipes = state.recipesData.recipes.map((el) => {
                if (el._id === action.payload.id) {
                    el.like = !el.like;
                    return el;
                }
                return el;
            });
        },
        changeMySearch: (state, action) => {
            state.recipesData.recipes = [];
            state.recipesData.page = 1;
            state.recipesData.isHasMore = true;
            state.recipesData.search = action.payload;
        },
        changeMySort: (state, action) => {
            state.recipesData.sort = action.payload;
            state.recipesData.recipes = [];
            state.recipesData.page = 1;
            state.recipesData.isHasMore = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetState, () => initialState);
    }
});

export const { addMyRecipes, changeMyRecipes, changeMySearch, changeMySort } =
    myRecipesSlice.actions;

export const selectMyRecipesData = (state) => state.my.recipesData;
export const selectMySort = (state) => state.my.sort;

export default myRecipesSlice.reducer;
