const initialState = {
  favouriteRecipes: [],
  page: 1
}

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE_RECIPE":
      return {
        ...state,
        favouriteRecipes: [...state.favouriteRecipes, action.recipe],
        page: action.page
      }
    case "DELETE_FAVOURITE_RECIPE":
      return {
        ...state,
        favouriteRecipes: [],
        page: 1
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
export const deleteFavouriteRecipesAction = () => ({
  type: "DELETE_FAVOURITE_RECIPE",
})
