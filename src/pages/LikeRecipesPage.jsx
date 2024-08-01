import {Page, Container, Title} from "../components/Styled_components"
import Cards from "../components/Cards/Cards"
import {useState} from "react";
import {Preloader} from "../components/Preloader/Preloader";
import {addLikeRecipesAction, deleteLikeRecipesAction} from "../store/like-reducer";

export const LikeRecipesPage = () => {
    const [isLoad, setIsLoad] = useState(true)

    return (<>
        {isLoad &&
            <Page>
                <Container>
                    <Title>Избранные Рецепты</Title>
                    <Cards likeRecipes
                           addRecipes={addLikeRecipesAction}
                           deleteRecipes={deleteLikeRecipesAction}
                    />
                </Container>
            </Page>
        }
        {!isLoad &&
            <Preloader/>
        }

    </>)
}
