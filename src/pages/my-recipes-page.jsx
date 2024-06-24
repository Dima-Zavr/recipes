import {Page, Container, Title} from "../components/styled-components"
import Cards from "../components/cards"
import {useState} from "react"
import {Button} from "../components/btn"
import {ModalForm} from "../components/form"
import {Preloader} from "../components/preloader";
import {BtnContainer} from "../components/btn/styled_components";
import {addMyRecipesAction, deleteMyRecipesAction} from "../store/my-reducer";

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
                    {isModal && <ModalForm clickExit={() => setIsModal(false)}/>}
                </Container>
            </Page>
        }
        {!isLoad &&
            <Preloader/>
        }
    </>)
}
