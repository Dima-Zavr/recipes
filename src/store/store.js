import { configureStore } from "@reduxjs/toolkit";

import allRecipesSlice from "./allRecipesSlice";
import likeRecipesSlice from "./likeRecipesSlice";
import myRecipesSlice from "./myRecipesSlice";
import themeSlice from "./themeSlice";

export default configureStore({
    reducer: {
        all: allRecipesSlice,
        my: myRecipesSlice,
        like: likeRecipesSlice,
        theme: themeSlice
    }
});
