import recipes from "../api/recipes.json"

const initialState = {
  allRecipes: recipes.allRecipes
}

export const allReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return { ...state, allRecipes: [...state.allRecipes, action.recipe] }
    case "DELETE_RECIPE":
      return {
        ...state,
        allRecipes: state.allRecipes.filter((recipe) => recipe.id !== action.recipe.id)
      }
    default:
      return state
  }
}

export const addAllRecipesAction = (value) => ({
  type: "ADD_RECIPE",
  recipe: value
})
export const deleteAllRecipesAction = (value) => ({
  type: "DELETE_RECIPE",
  recipe: value
})
