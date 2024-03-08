import { Title } from "../recipe-inf/styled_components"
import { Container, Li, Step } from "./styled_components"

export const RecipeSteps = ({ steps }) => {
  return (
    <Container>
      <Title>Шаги по приготовлению</Title>
      {steps.map((el, index) => (
        <>
          <Li>Шаг {index + 1}</Li>
          <Step key={index}>{el}</Step>
        </>
      ))}
    </Container>
  )
}
