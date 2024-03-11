import { Page, Container } from "../components/styled-components"
import { Slider } from "../components/slider"
import { RecipeInf } from "../components/recipe-inf"
import { RecipeSteps } from "../components/recipe-steps"
import { Content } from "../components/styled-components"
import { useParams } from "react-router-dom"
import { BtnBack } from "../components/btn-back"

export const RecipePage = ({ recipes }) => {
  const { recipeId } = useParams()
  const recipe = recipes.find((el) => el.id === parseInt(recipeId))

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
