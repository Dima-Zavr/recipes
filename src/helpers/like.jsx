import { api } from "../api/api"
import { changeAllRecipes } from "../store/allRecipesSlice"
import { changeMyRecipes } from "../store/myRecipesSlice"
import { addLikeRecipes, eraseLikeRecipes } from "../store/likeRecipesSlice"

export const like = (event, dispatch, recipe) => {
    event.stopPropagation()

    api.patch("/recipes/" + recipe.id, { like: !recipe.like }).then()
    api.patch("/allRecipes/" + recipe.id, { like: !recipe.like }).then()
    api.patch("/myRecipes/" + recipe.id, { like: !recipe.like }).then()

    const newRecipe = {
        id: recipe.id,
        name: recipe.name,
        photos: [recipe.photos[0]],
        cooking_time: recipe.cooking_time,
        calories: recipe.calories,
        like: !recipe.like
    }

    dispatch(changeAllRecipes(newRecipe))
    dispatch(changeMyRecipes(newRecipe))

    if (recipe.like) {
        api.delete("/likeRecipes/" + recipe.id).then()
        dispatch(eraseLikeRecipes(newRecipe))
    } else {
        api.post("/likeRecipes", newRecipe).then()
        dispatch(addLikeRecipes(newRecipe))
    }

    return !recipe.like
}
