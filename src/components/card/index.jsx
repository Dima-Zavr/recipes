import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom"
import { Heart } from "../heart/heart"
import { addFavouriteRecipesAction, deleteFavouriteRecipesAction} from "../../store/favourite-reducer"
import { useDispatch, useSelector } from "react-redux"

export function Card({ recipe }) {
  const dispatch = useDispatch()
  const favouriteRecipes = useSelector(
    (state) => state.favourite.favouriteRecipes
  )
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
    <div className={styles.card} onClick={recipePage}>
      <div className={styles.picture}>
        <img
          className={styles.img}
          src={recipe.photos[0]}
          alt={"фото " + recipe.name}
        />
        <Heart onClick={like} />
        <div className={styles.inf}>
          <p className={styles.time}> {recipe.cooking_time} минут</p>
          <p className={styles.calor}>{recipe.calories} ккал</p>
        </div>
      </div>
      <p className={styles.title}>{recipe.name}</p>
    </div>
  )
}
