import { Main, Picture, Img, Inf, Time, Kalor, Title} from "./styled_components"
import { useNavigate } from "react-router-dom"
import { Heart } from "../heart/heart"
import { addFavouriteRecipesAction, deleteFavouriteRecipesAction} from "../../store/favourite-reducer"
import { useDispatch, useSelector } from "react-redux"

export function Card({ recipe }) {
  const dispatch = useDispatch()
  const favouriteRecipes = useSelector((state) => state.favourite.favouriteRecipes)
  const nav = useNavigate()

  const recipePage = () => {
    nav("/recipe/" + recipe.id, { replace: false })
  }

  const like = (event) => {
    event.stopPropagation()
    if (favouriteRecipes.includes(recipe)) {
      dispatch(deleteFavouriteRecipesAction(recipe.id))
    } else {
      dispatch(addFavouriteRecipesAction(recipe))
    }
  }

  return (
    <Main onClick={recipePage}>
      <Picture>
        <Img
          src={recipe.photos[0]}
          alt={"фото " + recipe.name}
        />
        <Heart onClick={like} />
        <Inf>
          <Time> {recipe.cooking_time} минут</Time>
          <Kalor>{recipe.calories} ккал</Kalor>
        </Inf>
      </Picture>
      <Title>{recipe.name}</Title>
    </Main>
  )
}
