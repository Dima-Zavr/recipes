import { Container, Li, Step } from "./styled_components"
import { Title } from "../recipe-inf/styled_components"

export const RecipeSteps = ({ steps }) => {
    return (
        <Container>
            <Title>Шаги по приготовлению</Title>
            {steps?.map((el, index) => (
                <div key={index}>
                    <Li>Шаг {index + 1}</Li>
                    <Step>{el}</Step>
                </div>
            ))}
        </Container>
    )
}
