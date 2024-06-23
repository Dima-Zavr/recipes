import {Main, Picture, Img, Inf, Time, Kalor, Title} from "./styled_components"
import {Heart} from "../heart/heart"
import {addFavouriteRecipesAction, deleteFavouriteRecipesAction} from "../../store/favourite-reducer"
import {useDispatch, useSelector} from "react-redux"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

export const Card = ({recipe}) => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const favouriteRecipes = useSelector(
        (state) => state.favourite.favouriteRecipes
    )
    const checkLike = () => {
        let is = false;
        favouriteRecipes.map((el) => {
            if(el.id === recipe.id) {
                is = true;
            }
        })
        return is;
    }

    const [isLike, setIsLike] = useState(checkLike())

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
        <Main onClick={() => {nav(`/recipe/${recipe.id}`)}}>
            <Picture>
                <Img src={recipe.photos} alt={"фото " + recipe.name}/>
                <Heart isLike={isLike} onClick={like}/>
                <Inf>
                    <Time> {recipe.cooking_time} минут</Time>
                    <Kalor>{recipe.calories} ккал</Kalor>
                </Inf>
            </Picture>
            <Title>{recipe.name}</Title>
        </Main>
    )
}
