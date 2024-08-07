const initialState = {
    allRecipes: [],
    page: 1,
    searchStr: "",
    limit: 6
}

export const allReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_RECIPE":
            return {
                ...state,
                allRecipes: [...state.allRecipes, action.recipe],
                page: Math.ceil(state.allRecipes.length / state.limit) + 1
            }
        case "DELETE_RECIPE":
            return {
                ...state,
                allRecipes: [],
                page: 1,
                searchStr: action.searchStr
            }
        case "CHANGE_RECIPE":
            return {
                ...state,
                allRecipes: state.allRecipes.map((el) => {
                    if (el.id === action.recipe.id) {
                        return action.recipe
                    }
                    return el
                })
            }
        default:
            return state
    }
}

export const addAllRecipesAction = (value) => ({
    type: "ADD_RECIPE",
    recipe: value
})
export const deleteAllRecipesAction = (searchStr) => ({
    type: "DELETE_RECIPE",
    searchStr: searchStr
})
export const changeAllRecipesAction = (value) => ({
    type: "CHANGE_RECIPE",
    recipe: value
})
