import { useSelector } from "react-redux"

import { HangButton } from "../../components/Button/Button_components"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx"
import { PlusIcon } from "../../assets/PlusIcon"

import { addMyRecipes, deleteMyRecipes, selectMyRecipes } from "../../store/myRecipesSlice"
import { useNavigate } from "react-router-dom"

export const MyRecipesPage = () => {
    const myRecipes = useSelector(selectMyRecipes)
    const nav = useNavigate()
    return (
        <PageLayout>
            <h1>Мои Рецепты</h1>
            <RecipeCards
                data={myRecipes}
                addRecipes={addMyRecipes}
                deleteRecipes={deleteMyRecipes}
            />
            <HangButton view="primary" onClick={() => nav("/addRecipe", { replace: true })}>
                <PlusIcon />
                <span>Создать рецепт</span>
            </HangButton>
        </PageLayout>
    )
}
