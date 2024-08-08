import { RecipeCards } from "../../components/RecipeCards/RecipeCards"
import { addLikeRecipes, deleteLikeRecipes, selectLikeRecipes } from "../../store/likeRecipesSlice"
import { useSelector } from "react-redux"
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const LikeRecipesPage = () => {
    const likeRecipes = useSelector(selectLikeRecipes)

    return (
        <PageLayout>
            <h1>Избранные Рецепты</h1>
            <RecipeCards
                recipes={likeRecipes}
                addRecipes={addLikeRecipes}
                deleteRecipes={deleteLikeRecipes}
            />
        </PageLayout>
    )
}
