import { api } from "../api/api"
import { changeAllRecipes } from "../store/allRecipesSlice"
import { changeMyRecipes } from "../store/myRecipesSlice"
import { addLikeRecipes, eraseLikeRecipes } from "../store/likeRecipesSlice"

export const like = (event, dispatch, recipe, isLike) => {
    event.stopPropagation()

    let newLike = []
    if (isLike) {
        newLike = recipe.like.filter((el) => el !== localStorage.getItem("userId"))
        dispatch(eraseLikeRecipes(recipe.id))
    } else {
        newLike = [...recipe.like, localStorage.getItem("userId")]
        const newRecipe = Object.assign({}, recipe)
        newRecipe.like = newLike
        dispatch(addLikeRecipes(newRecipe))
    }

    api.patch("/cardRecipes/" + recipe.id, { like: newLike }, localStorage.getItem("token")).then()
    api.patch("/infRecipes/" + recipe.id, { like: newLike }, localStorage.getItem("token")).then()

    dispatch(changeAllRecipes({ id: recipe.id, like: newLike }))
    dispatch(changeMyRecipes({ id: recipe.id, like: newLike }))

    return !isLike
}
