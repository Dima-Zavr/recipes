import { Block, Blocks, Container, HeartBlock, Li, Subtitle, Weight } from "./RecipeInf_components"
import { Heart } from "../../../components/Heart/Heart"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { like } from "../../../helpers/like"

export const RecipeInf = ({ recipe }) => {
    const dispatch = useDispatch()
    const [isLike, setIsLike] = useState(recipe.like)

    return (
        <Container>
            <h1>{recipe.name}</h1>
            <Blocks>
                <Block>
                    Время готовки:<Weight> {recipe.cooking_time} мин</Weight>
                </Block>
                <Block>
                    Кол-во калорий:<Weight> {recipe.calories} ккал</Weight>
                </Block>
                <HeartBlock>
                    <Heart
                        isLike={isLike}
                        onClick={(event) => {
                            setIsLike(like(event, dispatch, recipe, isLike))
                        }}
                    />
                </HeartBlock>
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
