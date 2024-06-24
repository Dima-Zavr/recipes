import {Main, Picture, Img, Inf, Time, Kalor, Title} from "./styled_components"
import {Heart} from "../heart/heart"
import {useDispatch} from "react-redux"
import {useState} from "react"
import {useNavigate} from "react-router-dom"

export const Card = ({recipe}) => {
    const nav = useNavigate()

    const [isLike, setIsLike] = useState(recipe.like)

    const like = (event) => {
        event.stopPropagation()

        setIsLike(!isLike)
    }

    return (
        <Main onClick={() => {nav(`/recipe/${recipe.id}`)}}>
            <Picture>
                <Img src={recipe.photos} alt={"фото " + recipe.name}/>
                <Heart isLike={isLike} onClick={like}/>
                <Inf>
                    <Time> {recipe.cooking_time} мин</Time>
                    <Kalor>{recipe.calories} ккал</Kalor>
                </Inf>
            </Picture>
            <Title>{recipe.name}</Title>
        </Main>
    )
}
