import recipes from "../api/recipes.json"

const initialState = {
  myRecipes: recipes.myRecipes
}

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MY_RECIPE":
      return { ...state, myRecipes: [...state.myRecipes, action.payload] }
    case "DELETE_MY_RECIPE":
      return {
        ...state,
        myRecipes: state.myRecipes.filter(
          (recipe) => recipe.id !== action.payload
        )
      }
    default:
      return state
  }
}

export const addMyeRecipesAction = (payload) => ({
  type: "ADD_RECIPES",
  payload
})
export const deleteMyRecipesAction = (payload) => ({
  type: "DELETE_RECIPES",
  payload
})
