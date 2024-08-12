import { useState } from "react"
import { useSelector } from "react-redux"

import { ModalForm } from "./ModalForm/ModalForm"

import { HangButton } from "../../components/Button/Button_components"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx"
import { PlusIcon } from "../../assets/PlusIcon"

import { addMyRecipes, deleteMyRecipes, selectMyRecipes } from "../../store/myRecipesSlice"

export const MyRecipesPage = () => {
    const [isModal, setIsModal] = useState(false)
    const myRecipes = useSelector(selectMyRecipes)

    return (
        <PageLayout>
            <h1>Мои Рецепты</h1>
            <RecipeCards
                data={myRecipes}
                addRecipes={addMyRecipes}
                deleteRecipes={deleteMyRecipes}
            />
            <HangButton view="primary" onClick={() => setIsModal(true)}>
                <PlusIcon />
                Добавить рецепт
            </HangButton>
            {isModal && <ModalForm onClose={() => setIsModal(false)} />}
        </PageLayout>
    )
}
