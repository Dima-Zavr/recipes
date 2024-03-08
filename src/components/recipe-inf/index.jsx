import styles from "./styles.module.css"
import { Title } from "../styled-components"
import { Heart } from "../heart/heart"
import { addFavouriteRecipesAction } from "../../store/favourite-reducer"
import { useDispatch } from "react-redux"

export const RecipeInf = ({ recipe }) => {
  const dispatch = useDispatch()
  return (
    <div className={styles.container}>
      <Title>
        {recipe.name}
        <Heart
          onClick={() => {
            dispatch(addFavouriteRecipesAction(recipe))
          }}
        />
      </Title>
      <p className={styles.subtitle}>
        <span className={styles.weight}>Время приготовления: </span>
        {recipe.cooking_time} мин
      </p>
      <p className={styles.subtitle}>
        <span className={styles.weight}>
          Количество калорий (в 100 грамм продукта):{" "}
        </span>
        {recipe.calories} ккал
      </p>
      <span className={styles.weight}>Оборудование для приготовления</span>
      <ul className={styles.equipments}>
        {recipe.equipments.map((el, index) => (
          <li className={styles.equipment} key={index}>
            {el}
          </li>
        ))}
      </ul>
      <span className={styles.weight}>Ингредиенты</span>
      <ul className={styles.ingredients}>
        {recipe.ingredients.map((el, index) => (
          <li className={styles.ingredient} key={index}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}
