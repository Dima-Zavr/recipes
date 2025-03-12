import { api } from "../api/api";
import { changeAllRecipes } from "../store/allRecipesSlice";
import { addLikeRecipes, eraseLikeRecipes } from "../store/likeRecipesSlice";
import { changeMyRecipes } from "../store/myRecipesSlice";

export const like = (event, dispatch, recipe, isLike) => {
    event.stopPropagation();

    if (isLike) {
        dispatch(eraseLikeRecipes(recipe._id));
    } else {
        const newRecipe = Object.assign({}, recipe);
        newRecipe.like = !isLike;
        dispatch(addLikeRecipes([newRecipe]));
    }

    api.get("/recipes/like_recipe/" + recipe._id, {}, localStorage.getItem("accessToken")).then();

    dispatch(changeAllRecipes({ id: recipe._id }));
    dispatch(changeMyRecipes({ id: recipe._id }));

    return !isLike;
};
