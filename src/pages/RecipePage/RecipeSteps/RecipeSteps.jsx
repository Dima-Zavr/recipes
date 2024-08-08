import * as S from "./RecipeSteps_components"

export const RecipeSteps = ({ steps }) => {
    return (
        <S.Container>
            <S.Title>Шаги по приготовлению</S.Title>
            <ul>
                {steps?.map((el, i) => (
                    <li key={i}>
                        <S.StepTitle>Шаг {i + 1}</S.StepTitle>
                        <S.Step>{el}</S.Step>
                    </li>
                ))}
            </ul>
        </S.Container>
    )
}
