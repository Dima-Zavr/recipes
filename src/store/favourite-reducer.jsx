import {request} from "../api/recipes";

const ri = () => {
  let dataRecipes = []
   request
      .fetch("/favouriteRecipes")
      .then((response) => response.json())
      .then((data) => {
        dataRecipes = data
        //console.log(data)
      })
  console.log(dataRecipes)
  return dataRecipes
}

const initialState = {
  favouriteRecipes: ri()
}

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE_RECIPE":
      return {
        ...state,
        favouriteRecipes: [...state.favouriteRecipes, action.recipe]
      }
    case "DELETE_FAVOURITE_RECIPE":
      return {
        ...state,
        favouriteRecipes: state.favouriteRecipes.filter(
          (recipe) => recipe.id !== action.recipeId
        )
      }
    default:
      return state
  }
}

export const addFavouriteRecipesAction = (value) => ({
  type: "ADD_FAVOURITE_RECIPE",
  recipe: value
})
export const deleteFavouriteRecipesAction = (value) => ({
  type: "DELETE_FAVOURITE_RECIPE",
  recipeId: value
})
