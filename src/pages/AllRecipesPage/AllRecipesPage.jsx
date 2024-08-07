import { Page } from "../../components/components"
import { RecipeCards } from "../../components/RecipeCards/RecipeCards"
import { addAllRecipes, deleteAllRecipes, selectAllRecipes } from "../../store/allRecipesSlice"
import { useSelector } from "react-redux"

export const AllRecipesPage = () => {
    const allRecipes = useSelector(selectAllRecipes)

    return (
        <Page>
            <h1>Все Рецепты</h1>
            <RecipeCards
                recipes={allRecipes}
                addRecipes={addAllRecipes}
                deleteRecipes={deleteAllRecipes}
            />
        </Page>
    )
}
