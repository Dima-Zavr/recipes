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
                page: Math.ceil(state.allRecipes.length/8)+1,
                searchStr: state.searchStr
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
                }),
                page: state.page,
                searchStr: state.searchStr
            }
        default:
            return state
    }
}

export const addAllRecipesAction = (value) => ({
    type: "ADD_RECIPE",
    recipe: value,
})
export const deleteAllRecipesAction = (searchStr) => ({
    type: "DELETE_RECIPE",
    searchStr: searchStr
})
export const changeAllRecipesAction = (value) => ({
    type: "CHANGE_RECIPE",
    recipe: value
})