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
                page: Math.ceil(state.favouriteRecipes.length/8)+1,
                searchStr: state.searchStr
            }
        case "DELETE_FAVOURITE_RECIPE":
            return {
                ...state,
                favouriteRecipes: [],
                page: 1,
                searchStr: action.searchStr
            }
        case "ERASE_FAVOURITE_RECIPE":
            return {
                ...state,
                favouriteRecipes: state.favouriteRecipes.filter(el =>
                    el.id !== action.recipe.id
                ),
                page: Math.ceil(state.favouriteRecipes.length/8)+1,
                searchStr: state.searchStr
            }
        default:
            return state
    }
}

export const addFavouriteRecipesAction = (value) => ({
    type: "ADD_FAVOURITE_RECIPE",
    recipe: value,
})
export const deleteFavouriteRecipesAction = (searchStr) => ({
    type: "DELETE_FAVOURITE_RECIPE",
    searchStr: searchStr
})
export const eraseFavouriteRecipesAction = (value) => ({
    type: "ERASE_FAVOURITE_RECIPE",
    recipe: value,
})