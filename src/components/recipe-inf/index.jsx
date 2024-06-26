import { Container, Title, Weight, Blocks, Block, Subtitle, Li } from "./styled_components"
import { Heart } from "../heart/heart"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { DELETE, PATCH, POST } from "../../api"
import { changeAllRecipesAction } from "../../store/all-reducer"
import { changeMyRecipesAction } from "../../store/my-reducer"
import { addLikeRecipesAction, eraseLikeRecipesAction } from "../../store/like-reducer"

export const RecipeInf = ({ recipe }) => {
    const dispatch = useDispatch()
    const [isLike, setIsLike] = useState(recipe.like)
    const newRecipe = {
        "id": recipe.id,
        "name": recipe.name,
        "photos": recipe.photos[0],
        "cooking_time": recipe.cooking_time,
        "calories": recipe.calories,
        "like": recipe.like
    }

    const like = (event) => {
        event.stopPropagation()
        PATCH("/recipes/" + recipe.id, { like: !isLike }).then()
        PATCH("/allRecipes/" + recipe.id, { like: !isLike }).then()
        PATCH("/myRecipes/" + recipe.id, { like: !isLike }).then()
        newRecipe.like = !isLike
        dispatch(changeAllRecipesAction(newRecipe))
        dispatch(changeMyRecipesAction(newRecipe))
        if (isLike) {
            DELETE("/likeRecipes/" + recipe.id).then()
            dispatch(eraseLikeRecipesAction(newRecipe))
        } else {
            POST("/likeRecipes", newRecipe).then()
            dispatch(addLikeRecipesAction(newRecipe))
        }
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
                    <Heart isLike={isLike} onClick={like} />
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
