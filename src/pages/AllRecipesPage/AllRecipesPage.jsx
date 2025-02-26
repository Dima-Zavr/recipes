import { useSelector } from "react-redux"

import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx"
import { PageLayout } from "../../components/PageLayout/PageLayout"

import {
    addAllRecipes,
    changeAllFilters,
    deleteAllRecipes,
    selectAllRecipes
} from "../../store/allRecipesSlice"
import { Filters } from "../../components/Filters/Filters"

export const AllRecipesPage = () => {
    const allRecipes = useSelector(selectAllRecipes)

    return (
        <PageLayout>
            <h1>Все Рецепты</h1>
            <Filters data={allRecipes} deleteRecipes={deleteAllRecipes} />
            <RecipeCards
                data={allRecipes}
                addRecipes={addAllRecipes}
                deleteRecipes={deleteAllRecipes}
                changeFilters={changeAllFilters}
            />
        </PageLayout>
    )
}
