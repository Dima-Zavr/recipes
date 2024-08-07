import { useState } from "react"
import { BtnContainer, Page } from "../../components/components"
import Cards from "../../components/RecipeCards/RecipeCards"
import { Button } from "../../components/Button/Button"
import { ModalForm } from "./ModalForm/ModalForm"
import { Preloader } from "../../components/Preloader/Preloader"
import { addMyRecipesAction, deleteMyRecipesAction } from "../../store/my-reducer"

export const MyRecipesPage = () => {
    const [isLoad, setIsLoad] = useState(true)
    const [isModal, setIsModal] = useState(false)

    return (
        <>
            {isLoad && (
                <Page>
                    <h1>Мои Рецепты</h1>
                    <Cards
                        myRecipes
                        addRecipes={addMyRecipesAction}
                        deleteRecipes={deleteMyRecipesAction}
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
            )}
            {!isLoad && <Preloader />}
        </>
    )
}
