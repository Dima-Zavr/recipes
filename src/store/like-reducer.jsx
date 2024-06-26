const initialState = {
    likeRecipes: [],
    page: 1,
    searchStr: ""
}

export const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_LIKE_RECIPE":
            return {
                ...state,
                likeRecipes: [...state.likeRecipes, action.recipe],
                page: Math.ceil(state.likeRecipes.length/8)+1,
                searchStr: state.searchStr
            }
        case "DELETE_LIKE_RECIPE":
            return {
                ...state,
                likeRecipes: [],
                page: 1,
                searchStr: action.searchStr
            }
        case "ERASE_LIKE_RECIPE":
            return {
                ...state,
                likeRecipes: state.likeRecipes.filter(el =>
                    el.id !== action.recipe.id
                ),
                page: Math.ceil(state.likeRecipes.length/8)+1,
                searchStr: state.searchStr
            }
        default:
            return state
    }
}

export const addLikeRecipesAction = (value) => ({
    type: "ADD_LIKE_RECIPE",
    recipe: value,
})
export const deleteLikeRecipesAction = (searchStr) => ({
    type: "DELETE_LIKE_RECIPE",
    searchStr: searchStr
})
export const eraseLikeRecipesAction = (value) => ({
    type: "ERASE_LIKE_RECIPE",
    recipe: value,
})