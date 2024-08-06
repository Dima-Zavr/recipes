import { api } from "../api/api"
import { changeAllRecipesAction } from "../store/all-reducer"
import { changeMyRecipesAction } from "../store/my-reducer"
import { addLikeRecipesAction, eraseLikeRecipesAction } from "../store/like-reducer"

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

    dispatch(changeAllRecipesAction(newRecipe))
    dispatch(changeMyRecipesAction(newRecipe))

    if (recipe.like) {
        api.delete("/likeRecipes/" + recipe.id).then()
        dispatch(eraseLikeRecipesAction(newRecipe))
    } else {
        api.post("/likeRecipes", newRecipe).then()
        dispatch(addLikeRecipesAction(newRecipe))
    }

    return !recipe.like
}
