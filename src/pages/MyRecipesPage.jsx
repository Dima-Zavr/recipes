import { Page, Container, Title } from "../components/Styled_components"
import Cards from "../components/Cards/Cards"
import { useState } from "react"
import { Button } from "../components/Button/Button"
import { ModalForm } from "../components/Form/Form"
import { Preloader } from "../components/Preloader/Preloader"
import { BtnContainer } from "../components/Button/Button_components"
import { addMyRecipesAction, deleteMyRecipesAction } from "../store/my-reducer"

export const MyRecipesPage = () => {
    const [isLoad, setIsLoad] = useState(true)
    const [isModal, setIsModal] = useState(false)
    const test = () => { setIsModal(!isModal) }

    return (<>
        {isLoad &&
            <Page>
                <Container>
                    <BtnContainer>
                        <Button onClick={test}> Добавить свой рецепт</Button>
                    </BtnContainer>
                    <Title>Мои Рецепты</Title>

                    <Cards myRecipes
                           addRecipes={addMyRecipesAction}
                           deleteRecipes={deleteMyRecipesAction}
                    />
                    {isModal && <ModalForm clickExit={() => setIsModal(false)} />}
                </Container>
            </Page>
        }
        {!isLoad &&
            <Preloader />
        }
    </>)
}
