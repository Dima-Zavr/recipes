import { RecipeCards } from "../../components/RecipeCards/RecipeCards"
import { addAllRecipes, deleteAllRecipes, selectAllRecipes } from "../../store/allRecipesSlice"
import { useSelector } from "react-redux"
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const AllRecipesPage = () => {
    const allRecipes = useSelector(selectAllRecipes)

    return (
        <PageLayout>
            <h1>Все Рецепты</h1>
            <RecipeCards
                recipes={allRecipes}
                addRecipes={addAllRecipes}
                deleteRecipes={deleteAllRecipes}
            />
        </PageLayout>
    )
}
