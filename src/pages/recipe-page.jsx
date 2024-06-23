import {Page, Container, Content} from "../components/styled-components"
import {BtnBack} from "../components/btn-back"
import {RecipeInf} from "../components/recipe-inf"
import {Slider} from "../components/slider"
import {RecipeSteps} from "../components/recipe-steps"
import {useParams} from "react-router-dom"
import {GET} from "../api/recipes";
import {useState} from "react";
import {Preloader} from "../components/preloader";

export const RecipePage = () => {
    const [isLoad, setIsLoad] = useState(false)
    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState({})
    const str = "/recipes?id=" + recipeId

    GET(str).then(data => {
        setRecipe(data[0]);
        setIsLoad(true)
    })

    return (
        <>
            {isLoad &&
                <Page>
                    <Container>
                        <BtnBack/>
                        <Content>
                            <RecipeInf recipe={recipe}/>
                            <Slider photos={recipe.photos}/>
                        </Content>
                        <RecipeSteps steps={recipe.cooking_steps}/>
                    </Container>
                </Page>
            }
            {!isLoad &&
                <Preloader/>
            }
        </>

    )
}
