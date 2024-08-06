import { Page } from "../../components/components"
import Cards from "../../components/RecipeCards/RecipeCards"
import { useState } from "react"
import { Preloader } from "../../components/Preloader/Preloader"
import { addAllRecipesAction, deleteAllRecipesAction } from "../../store/all-reducer"

export const AllRecipesPage = () => {
    const [isLoad, setIsLoad] = useState(true)

    return (
        <>
            {isLoad && (
                <Page>
                    <h1>Все Рецепты</h1>
                    <Cards
                        allRecipes
                        addRecipes={addAllRecipesAction}
                        deleteRecipes={deleteAllRecipesAction}
                    />
                </Page>
            )}
            {!isLoad && <Preloader />}
        </>
    )
}
