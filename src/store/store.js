import { configureStore } from "@reduxjs/toolkit"
import allRecipesSlice from "./allRecipesSlice"
import myRecipesSlice from "./myRecipesSlice"
import likeRecipesSlice from "./likeRecipesSlice"
import themeSlice from "./themeSlice"

export default configureStore({
    reducer: {
        all: allRecipesSlice,
        my: myRecipesSlice,
        like: likeRecipesSlice,
        theme: themeSlice
    }
})
