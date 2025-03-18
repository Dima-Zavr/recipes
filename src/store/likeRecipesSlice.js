import { createSlice } from "@reduxjs/toolkit";

import { initialState, resetState } from "./actions";

export const likeRecipesSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        addLikeRecipes: (state, action) => {
            if (action.payload.length !== 0) {
                state.recipesData.recipes = [...state.recipesData.recipes, ...action.payload];
                state.recipesData.page =
                    Math.ceil(state.recipesData.recipes.length / state.recipesData.limit) + 1;
            } else {
                state.recipesData.isHasMore = false;
            }
        },
        eraseLikeRecipes: (state, action) => {
            state.recipesData.recipes = state.recipesData.recipes.filter(
                (el) => el._id !== action.payload
            );
            state.recipesData.page =
                Math.ceil(state.recipesData.recipes.length / state.recipesData.limit) + 1;
        },
        changeLikeSearch: (state, action) => {
            state.recipesData.recipes = [];
            state.recipesData.page = 1;
            state.recipesData.isHasMore = true;
            state.recipesData.search = action.payload;
        },
        changeLikeSort: (state, action) => {
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

export const { addLikeRecipes, eraseLikeRecipes, changeLikeSearch, changeLikeSort } =
    likeRecipesSlice.actions;

export const selectLikeRecipesData = (state) => state.like.recipesData;
export const selectLikeSort = (state) => state.like.sort;

export default likeRecipesSlice.reducer;
