import { Calor, Img, Inf, Main, Picture, Time } from "./RecipeCard_components"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Heart } from "../Heart/Heart"
import { like } from "../../helpers/like"
import { useDispatch } from "react-redux"

export const RecipeCard = ({ recipe }) => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [isLike, setIsLike] = useState(recipe.like?.includes(localStorage.getItem("userId")))

    return (
        <Main
            onClick={() => {
                nav(`/recipe/${recipe.id}`)
            }}
        >
            <Picture>
                <Img src={recipe.photos} alt={"Фото блюда: " + recipe.name} loading="lazy" />
                <Heart
                    isLike={isLike}
                    onClick={(event) => {
                        setIsLike(like(event, dispatch, recipe, isLike))
                    }}
                />
                <Inf>
                    <Time> {recipe.cooking_time} мин</Time>
                    <Calor>{recipe.calories} ккал</Calor>
                </Inf>
            </Picture>
            <h3>{recipe.name}</h3>
        </Main>
    )
}
