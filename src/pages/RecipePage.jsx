import { Page, Container, Content } from "../components/Styled_components"
import { BtnBack } from "../components/btn-back"
import { RecipeInf } from "../components/RecipeInf/RecipeInf"
import { Slider } from "../components/Slider/Slider"
import { RecipeSteps } from "../components/recipe-steps"
import { Preloader } from "../components/Preloader/Preloader"
import { useParams } from "react-router-dom"
import { api } from "../api/api"
import { useEffect, useState } from "react"

export const RecipePage = () => {
    const [isLoad, setIsLoad] = useState(false)
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        api.get("/recipes?id=" + recipeId).then(data => {
            setRecipe(data[0])
            setIsLoad(true)
        })
    }, [])

    return (<>
            {isLoad &&
                <Page>
                    <Container>
                        <BtnBack />
                        <Content>
                            <RecipeInf recipe={recipe} />
                            <Slider photos={recipe.photos} />
                        </Content>
                        <RecipeSteps steps={recipe.cooking_steps} />
                    </Container>
                </Page>
            }
            {!isLoad &&
                <Preloader />
            }
    </>)
}
