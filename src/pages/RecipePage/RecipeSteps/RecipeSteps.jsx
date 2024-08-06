import { Container, Step, StepTitle } from "./RecipeSteps_components"
import { Title } from "../RecipeInf/RecipeInf_components"

export const RecipeSteps = ({ steps }) => {
    return (
        <Container>
            <Title>Шаги по приготовлению</Title>
            <ul>
                {steps?.map((el, i) => (
                    <li key={i}>
                        <StepTitle>Шаг {i + 1}</StepTitle>
                        <Step>{el}</Step>
                    </li>
                ))}
            </ul>
        </Container>
    )
}
