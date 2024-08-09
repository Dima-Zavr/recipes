import { api } from "../api/api"
import { changeAllRecipes } from "../store/allRecipesSlice"
import { changeMyRecipes } from "../store/myRecipesSlice"
import { addLikeRecipes, eraseLikeRecipes } from "../store/likeRecipesSlice"

export const like = (event, dispatch, recipe, isLike) => {
    event.stopPropagation()

    api.patch("/recipes/" + recipe.id, { like: !isLike }, localStorage.getItem("token")).then()
    api.patch("/allRecipes/" + recipe.id, { like: !isLike }, localStorage.getItem("token")).then()
    api.patch("/myRecipes/" + recipe.id, { like: !isLike }, localStorage.getItem("token")).then()

    const newRecipe = {
        id: recipe.id,
        name: recipe.name,
        photos: [recipe.photos[0]],
        cooking_time: recipe.cooking_time,
        calories: recipe.calories,
        like: !isLike,
        userId: localStorage.getItem("userId")
    }

    dispatch(changeAllRecipes(newRecipe))
    dispatch(changeMyRecipes(newRecipe))

    if (isLike) {
        api.delete("/likeRecipes/" + recipe.id, {}, localStorage.getItem("token")).then()
        dispatch(eraseLikeRecipes(newRecipe))
    } else {
        api.post("/likeRecipes", newRecipe, localStorage.getItem("token")).then()
        dispatch(addLikeRecipes(newRecipe))
    }

    return !isLike
}
