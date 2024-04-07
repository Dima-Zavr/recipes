const initialState = {
  myRecipes: []
}

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MY_RECIPE":
      return {
        ...state,
        myRecipes: [...state.myRecipes, action.recipe]
      }
    case "DELETE_MY_RECIPE":
      return {
        ...state,
        myRecipes: state.myRecipes.filter(
          (recipe) => recipe.id !== action.recipeId
        )
      }
    default:
      return state
  }
}

export const addMyRecipesAction = (value) => ({
  type: "ADD_MY_RECIPE",
  recipe: value
})
export const deleteMyRecipesAction = (value) => ({
  type: "DELETE_MY_RECIPE",
  recipeId: value
})
