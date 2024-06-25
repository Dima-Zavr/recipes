import React from "react"
import {Title} from "../recipe-inf/styled_components"
import {Container, Li, Step} from "./styled_components"

export const RecipeSteps = ({steps}) => {
    return (
        <Container>
            <Title>Шаги по приготовлению</Title>
            {steps?.map((el, index) => (
                <React.Fragment key={index}>
                    <Li>Шаг {index + 1}</Li>
                    <Step>{el}</Step>
                </React.Fragment>
            ))}
        </Container>
    )
}
