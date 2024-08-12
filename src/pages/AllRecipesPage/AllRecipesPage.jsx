import { useSelector } from "react-redux"

import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx"
import { PageLayout } from "../../components/PageLayout/PageLayout"

import { addAllRecipes, deleteAllRecipes, selectAllRecipes } from "../../store/allRecipesSlice"

export const AllRecipesPage = () => {
    const allRecipes = useSelector(selectAllRecipes)

    return (
        <PageLayout>
            <h1>Все Рецепты</h1>
            <RecipeCards
                data={allRecipes}
                addRecipes={addAllRecipes}
                deleteRecipes={deleteAllRecipes}
            />
        </PageLayout>
    )
}
