import { Page, Container } from "../styled-components";

export const RecipeSteps = ({steps}) => {
  return (
    <Page>
      <Container>
        <ol>
          {steps.map((el, index) => (
            <li key={index}>{el.text}</li>
          ))}
        </ol>
      </Container>
    </Page>
  );
}