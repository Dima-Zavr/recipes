import recipes from "../api/recipes.json"

const initialState = {
  favouriteRecipes: recipes.favouriteRecipes
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
