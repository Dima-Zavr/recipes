const initialState = {
  allRecipes: [],
  page: 1,
  searchStr: ""
}

export const allReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return {
        ...state,
        allRecipes: [...state.allRecipes, action.recipe],
        page: action.page,
        searchStr: state.searchStr
      }
    case "DELETE_RECIPE":
      return {
        ...state,
        allRecipes: [],
        page: 1,
        searchStr: action.searchStr
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
export const deleteAllRecipesAction = (searchStr) => ({
  type: "DELETE_RECIPE",
  searchStr: searchStr
})
