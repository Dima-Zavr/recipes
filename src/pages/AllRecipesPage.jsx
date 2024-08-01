import { Page, Container, Title } from "../components/Styled_components"
import Cards from "../components/Cards/Cards"
import { useState } from "react"
import { Preloader } from "../components/Preloader/Preloader"
import { addAllRecipesAction, deleteAllRecipesAction } from "../store/all-reducer"

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
            <Preloader />
        }
    </>)
}
