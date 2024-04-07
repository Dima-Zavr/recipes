import { Container, Title, Weight, Blocks, Block, Subtitle, Li } from "./styled_components"
import { Heart } from "../heart/heart"
import { useDispatch, useSelector } from "react-redux"
import { addFavouriteRecipesAction, deleteFavouriteRecipesAction } from "../../store/favourite-reducer"
import { useState } from "react"

export const RecipeInf = ({ recipe }) => {
  const dispatch = useDispatch()
  const favouriteRecipes = useSelector(
    (state) => state.favourite.favouriteRecipes
  )
  const [isLike, setIsLike] = useState(() => {
    return favouriteRecipes.includes(recipe);
  })

  const like = (event) => {
    event.stopPropagation()
    if (favouriteRecipes.includes(recipe)) {
      dispatch(deleteFavouriteRecipesAction(recipe.id))
    } else {
      dispatch(addFavouriteRecipesAction(recipe))
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
        {recipe.equipments.map((el, index) => (
          <Li key={index}>{el}</Li>
        ))}
      </ul>

      <Subtitle>Ингредиенты:</Subtitle>
      <ul>
        {recipe.ingredients.map((el, index) => (
          <Li key={index}>{el}</Li>
        ))}
      </ul>
    </Container>
  )
}
