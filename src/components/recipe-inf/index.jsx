import {Container, Title, Weight, Blocks, Block, Subtitle, Li} from "./styled_components"
import {Heart} from "../heart/heart"
import {useState} from "react"

export const RecipeInf = ({recipe}) => {
    const [isLike, setIsLike] = useState(recipe.like)
    const like = (event) => {
        event.stopPropagation()

        setIsLike(!isLike)
    }

    return (
        <Container>
            <Title>{recipe.name}</Title>
            <Blocks>
                <Block>
                    Время готовки:<Weight> {recipe.cooking_time} мин</Weight>
                </Block>
                <Block>
                    Кол-во калорий:<Weight> {recipe.calories} ккал</Weight>
                </Block>
                <Block>
                    <Heart isLike={isLike} onClick={like}/>
                </Block>
            </Blocks>

            <Subtitle>Оборудование для приготовления:</Subtitle>
            <ul>
                {recipe.equipments?.map((el, index) => (
                    <Li key={index}>{el}</Li>
                ))}
            </ul>

            <Subtitle>Ингредиенты:</Subtitle>
            <ul>
                {recipe.ingredients?.map((el, index) => (
                    <Li key={index}>{el}</Li>
                ))}
            </ul>
        </Container>
    )
}
