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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetState, () => initialState);
    }
});

export const { addMyRecipes, changeMyRecipes, changeMySearch } = myRecipesSlice.actions;

export const selectMyRecipesData = (state) => state.my.recipesData;

export default myRecipesSlice.reducer;
