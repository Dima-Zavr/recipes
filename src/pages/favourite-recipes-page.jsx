import {Page, Container, Title} from "../components/styled-components"
import Cards from "../components/cards"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Preloader} from "../components/preloader";
import {addFavouriteRecipesAction} from "../store/favourite-reducer";

export const FavouriteRecipesPage = () => {
    const [isLoad, setIsLoad] = useState(false)

    const favouriteRecipes = useSelector(
        (state) => state.favourite.favouriteRecipes[0]
    )
    useEffect(() => {
        if(favouriteRecipes !== undefined){
            setIsLoad(true)
        }
    }, []);

    return (<>
        {isLoad &&
            <Page>
                <Container>
                    <Title>Избранные Рецепты</Title>
                    <Cards favouriteRecipes
                        addRecipes={addFavouriteRecipesAction}/>
                </Container>
            </Page>
        }
        {!isLoad &&
            <Preloader/>
        }

    </>)
}
