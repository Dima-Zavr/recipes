import { Page } from "../../components/components"
import Cards from "../../components/RecipeCards/RecipeCards"
import { useState } from "react"
import { Preloader } from "../../components/Preloader/Preloader"
import { addLikeRecipesAction, deleteLikeRecipesAction } from "../../store/like-reducer"

export const LikeRecipesPage = () => {
    const [isLoad, setIsLoad] = useState(true)

    return (
        <>
            {isLoad && (
                <Page>
                    <h1>Избранные Рецепты</h1>
                    <Cards
                        likeRecipes
                        addRecipes={addLikeRecipesAction}
                        deleteRecipes={deleteLikeRecipesAction}
                    />
                </Page>
            )}
            {!isLoad && <Preloader />}
        </>
    )
}
