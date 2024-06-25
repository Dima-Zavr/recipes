import { Main, Picture, Img, Inf, Time, Kalor, Title } from "./styled_components"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { PATCH } from "../../api/request"
import { changeAllRecipesAction } from "../../store/all-reducer"
import { addFavouriteRecipesAction, eraseFavouriteRecipesAction } from "../../store/favourite-reducer"
import { Heart } from "../heart/heart"

export const Card = ({ recipe }) => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    let pathName = useLocation().pathname
    if ((pathName === "/") || (pathName === "/favouriteRecipes")) {
        pathName = "/allRecipes"
    }
    const [isLike, setIsLike] = useState(recipe.like)
    const newRecipe = recipe

    const like = (event) => {
        event.stopPropagation()
        PATCH(pathName + "/" + recipe.id, { like: !isLike }).then()
        newRecipe.like = !isLike
        dispatch(changeAllRecipesAction(newRecipe))
        if(isLike){
            dispatch(eraseFavouriteRecipesAction(newRecipe))
        }
        else{
            dispatch(addFavouriteRecipesAction(newRecipe))
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
