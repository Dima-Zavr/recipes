import {Page, Container, Title} from "../components/styled-components"
import Cards from "../components/cards"
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {Preloader} from "../components/preloader";
import {addAllRecipesAction, deleteAllRecipesAction} from "../store/all-reducer";

export const AllRecipesPage = () => {
    const [isLoad, setIsLoad] = useState(true)

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
