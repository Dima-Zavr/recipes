import { Page, Container } from "../components/styled-components";
import { Slider } from "../components/slider"
import { RecipeInf } from "../components/recipe-inf"
import { RecipeSteps } from "../components/recipe-steps";
import { Content } from "../components/styled-components";
import { useParams } from "react-router-dom";

export const RecipePage = ({recipes}) => {
  const {recipeId} = useParams();
  const recipe = recipes.find(el => el.id === parseInt(recipeId));
  
  return(
    <Page>
      <Container>
        <Content>
            <Slider photos={recipe.photos}/>
            <RecipeInf recipe={recipe} />
        </Content>
        <RecipeSteps steps={recipe.cooking_steps}></RecipeSteps>
      </Container>
    </Page>
  )
}
