import { Main, Picture, Img, Inf, Time, Kalor, Title } from "./Card_components"
import { Heart } from "../Heart/Heart"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { api } from "../../api/api"
import { changeAllRecipesAction } from "../../store/all-reducer"
import { changeMyRecipesAction } from "../../store/my-reducer"
import { addLikeRecipesAction, eraseLikeRecipesAction } from "../../store/like-reducer"

export const Card = ({ recipe }) => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [isLike, setIsLike] = useState(recipe.like)
    const newRecipe = recipe

    const like = (event) => {
        event.stopPropagation()
        api.patch("/recipes/" + recipe.id, { like: !isLike }).then()
        api.patch("/allRecipes/" + recipe.id, { like: !isLike }).then()
        api.patch("/myRecipes/" + recipe.id, { like: !isLike }).then()
        newRecipe.like = !isLike
        dispatch(changeAllRecipesAction(newRecipe))
        dispatch(changeMyRecipesAction(newRecipe))
        if(isLike){
            api.delete("/likeRecipes/"+recipe.id).then()
            dispatch(eraseLikeRecipesAction(newRecipe))
        }
        else {
            api.post("/likeRecipes", newRecipe).then()
            dispatch(addLikeRecipesAction(newRecipe))
        }
        setIsLike(!isLike)
    }

    return (<Main onClick={() => {
        nav(`/recipe/${recipe.id}`)
    }}>
        <Picture>
            <Img src={recipe.photos} alt={"фото " + recipe.name} />
            <Heart isLike={isLike} onClick={like} />
            <Inf>
                <Time> {recipe.cooking_time} мин</Time>
                <Kalor>{recipe.calories} ккал</Kalor>
            </Inf>
        </Picture>
        <Title>{recipe.name}</Title>
    </Main>)
}
