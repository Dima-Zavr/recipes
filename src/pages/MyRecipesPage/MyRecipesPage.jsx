import { useState } from "react"
import { BtnContainer, Page } from "../../components/components"
import Cards from "../../components/RecipeCards/RecipeCards"
import { Button } from "../../components/Button/Button"
import { ModalForm } from "../../components/Form/Form"
import { Preloader } from "../../components/Preloader/Preloader"
import { addMyRecipesAction, deleteMyRecipesAction } from "../../store/my-reducer"

export const MyRecipesPage = () => {
    const [isLoad, setIsLoad] = useState(true)
    const [isModal, setIsModal] = useState(false)
    const test = () => setIsModal(!isModal)

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
                        <Button view="primary" onClick={test}>
                            {" "}
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
