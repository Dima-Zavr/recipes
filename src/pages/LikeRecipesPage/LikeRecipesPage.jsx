import { Page } from "../../components/components"
import { RecipeCards } from "../../components/RecipeCards/RecipeCards"
import { addLikeRecipes, deleteLikeRecipes, selectLikeRecipes } from "../../store/likeRecipesSlice"
import { useSelector } from "react-redux"

export const LikeRecipesPage = () => {
    const likeRecipes = useSelector(selectLikeRecipes)

    return (
        <Page>
            <h1>Избранные Рецепты</h1>
            <RecipeCards
                recipes={likeRecipes}
                addRecipes={addLikeRecipes}
                deleteRecipes={deleteLikeRecipes}
            />
        </Page>
    )
}
