import {Page, Container, Title} from "../components/styled-components"
import Cards from "../components/cards"
import {useState} from "react";
import {Preloader} from "../components/preloader";
import {addAllRecipesAction, deleteAllRecipesAction} from "../store/all-reducer";

export const AllRecipesPage = () => {
    const [isLoad, setIsLoad] = useState(true)

    return (<>
        {isLoad &&
            <Page>
                <Container>
                    <Title>Все Рецепты</Title>
                    <Cards allRecipes
                           addRecipes={addAllRecipesAction}
                           deleteRecipes={deleteAllRecipesAction}
                    />
                </Container>
            </Page>
        }
        {!isLoad &&
            <Preloader/>
        }
    </>)
}
