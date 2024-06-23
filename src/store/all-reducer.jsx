const initialState = {
  allRecipes: [],
  page: 1
}

export const allReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return {
        ...state,
        allRecipes: [...state.allRecipes, action.recipe],
        page: action.page
      }
    case "DELETE_RECIPE":
      return {
        ...state,
        allRecipes: [],
        page: 1
      }
    default:
      return state
  }
}

export const addAllRecipesAction = (value, page) => ({
  type: "ADD_RECIPE",
  recipe: value,
  page: page
})
export const deleteAllRecipesAction = () => ({
  type: "DELETE_RECIPE",
})
