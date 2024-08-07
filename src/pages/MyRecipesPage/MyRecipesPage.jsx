import { useState } from "react"
import { BtnContainer, Page } from "../../components/components"
import { RecipeCards } from "../../components/RecipeCards/RecipeCards"
import { Button } from "../../components/Button/Button"
import { ModalForm } from "./ModalForm/ModalForm"
import { addMyRecipes, deleteMyRecipes, selectMyRecipes } from "../../store/myRecipesSlice"
import { useSelector } from "react-redux"

export const MyRecipesPage = () => {
    const [isModal, setIsModal] = useState(false)
    const myRecipes = useSelector(selectMyRecipes)

    return (
        <Page>
            <h1>Мои Рецепты</h1>
            <RecipeCards
                recipes={myRecipes}
                addRecipes={addMyRecipes}
                deleteRecipes={deleteMyRecipes}
            />
            <BtnContainer>
                <Button view="primary" onClick={() => setIsModal(true)}>
                    <svg width="24" height="24" viewBox="0 0 16 16">
                        <path
                            d="M1 8h14m-7-7v14"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                    Добавить свой рецепт
                </Button>
            </BtnContainer>
            {isModal && <ModalForm onClose={() => setIsModal(false)} />}
        </Page>
    )
}
