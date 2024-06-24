import {Page, Container, Title} from "../components/styled-components"
import Cards from "../components/cards"
import {useState} from "react";
import {Preloader} from "../components/preloader";
import {addFavouriteRecipesAction, deleteFavouriteRecipesAction} from "../store/favourite-reducer";

export const FavouriteRecipesPage = () => {
    const [isLoad, setIsLoad] = useState(true)

    return (<>
        {isLoad &&
            <Page>
                <Container>
                    <Title>Избранные Рецепты</Title>
                    <Cards favouriteRecipes
                           addRecipes={addFavouriteRecipesAction}
                           deleteRecipes={deleteFavouriteRecipesAction}
                    />
                </Container>
            </Page>
        }
        {!isLoad &&
            <Preloader/>
        }

    </>)
}
