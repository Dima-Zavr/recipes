import { Page, Container, Content} from "../components/styled-components"
import { BtnBack } from "../components/btn-back"
import { RecipeInf } from "../components/recipe-inf"
import { Slider } from "../components/slider"
import { RecipeSteps } from "../components/recipe-steps"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

export const RecipePage = () => {
  const { recipeId } = useParams()
  const allRecipes = useSelector((state) => state.all.allRecipes)
  const recipe = allRecipes.find((el) => el.id === parseInt(recipeId))

  return (
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
  )
}
