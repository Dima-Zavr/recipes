const initialState = {
  myRecipes: [],
  page: 1
}

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MY_RECIPE":
      return {
        ...state,
        myRecipes: [...state.myRecipes, action.recipe],
        page: action.page
      }
    case "DELETE_MY_RECIPE":
      return {
        ...state,
        myRecipes: [],
        page: 1
      }
    default:
      return state
  }
}

export const addMyRecipesAction = (value, page) => ({
  type: "ADD_MY_RECIPE",
  recipe: value,
  page: page
})
export const deleteMyRecipesAction = () => ({
  type: "DELETE_MY_RECIPE",
})
