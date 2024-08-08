import { useState } from "react"
import { HangButton } from "../../styles/components"
import { RecipeCards } from "../../components/RecipeCards/RecipeCards"
import { ModalForm } from "./ModalForm/ModalForm"
import { addMyRecipes, deleteMyRecipes, selectMyRecipes } from "../../store/myRecipesSlice"
import { useSelector } from "react-redux"
import { PlusIcon } from "../../assets/PlusIcon"
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const MyRecipesPage = () => {
    const [isModal, setIsModal] = useState(false)
    const myRecipes = useSelector(selectMyRecipes)

    return (
        <PageLayout>
            <h1>Мои Рецепты</h1>
            <RecipeCards
                recipes={myRecipes}
                addRecipes={addMyRecipes}
                deleteRecipes={deleteMyRecipes}
            />
            <HangButton view="primary" onClick={() => setIsModal(true)}>
                <PlusIcon />
                Добавить свой рецепт
            </HangButton>
            {isModal && <ModalForm onClose={() => setIsModal(false)} />}
        </PageLayout>
    )
}
