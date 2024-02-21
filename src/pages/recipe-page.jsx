import { Page, Container } from "../components/styled-components";
import { Slider } from "../components/slider"
import { RecipeInf } from "../components/recipe-inf"
import { RecipeSteps } from "../components/recipe-steps";
import { Content } from "../components/styled-components";

export const RecipePage = ({recipe}) => {
  return (
    <Page>
      <Container>
          <Content>
              <Slider photos={recipe.photos}/>
              <RecipeInf recipe={recipe}></RecipeInf> 
          </Content>
          <RecipeSteps></RecipeSteps>
      </Container>
    </Page>
  );
}
  