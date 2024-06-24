const initialState = {
  favouriteRecipes: [],
  page: 1,
  searchStr: ""
}

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE_RECIPE":
      return {
        ...state,
        favouriteRecipes: [...state.favouriteRecipes, action.recipe],
        page: action.page,
        searchStr: state.searchStr
      }
    case "DELETE_FAVOURITE_RECIPE":
      return {
        ...state,
        favouriteRecipes: [],
        page: 1,
        searchStr: action.searchStr
      }
    default:
      return state
  }
}

export const addFavouriteRecipesAction = (value, page) => ({
  type: "ADD_FAVOURITE_RECIPE",
  recipe: value,
  page: page
})
export const deleteFavouriteRecipesAction = (searchStr) => ({
  type: "DELETE_FAVOURITE_RECIPE",
  searchStr: searchStr
})
