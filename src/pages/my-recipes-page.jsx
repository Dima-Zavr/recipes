import {useSelector} from "react-redux"
import {Page, Container, Title} from "../components/styled-components"
import Cards from "../components/cards"
import {useEffect, useState} from "react"
import {Button} from "../components/btn"
import {ModalForm} from "../components/form"
import {Preloader} from "../components/preloader";
import {BtnContainer} from "../components/btn/styled_components";
import {addMyRecipesAction} from "../store/my-reducer";

export const MyRecipesPage = () => {
    const [isModal, setIsModal] = useState(false)
    const test = () => { setIsModal(!isModal) }

    const [isLoad, setIsLoad] = useState(false)

    const favouriteRecipes = useSelector(
        (state) => state.favourite.favouriteRecipes[0]
    )
    useEffect(() => {
        if (favouriteRecipes !== undefined) {
            setIsLoad(true)
        }
    }, []);

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
