import * as S from "./RecipeInf_components"
import { Heart } from "../../../components/Heart/Heart"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { like } from "../../../helpers/like"

export const RecipeInf = ({ recipe }) => {
    const dispatch = useDispatch()
    const [isLike, setIsLike] = useState(recipe.like.includes(localStorage.getItem("userId")))

    return (
        <S.Container>
            <S.Title>{recipe.name}</S.Title>
            <S.Blocks>
                <S.Block>
                    Время готовки:<S.Weight> {recipe.cook_time} мин</S.Weight>
                </S.Block>
                <S.Block>
                    Кол-во калорий:<S.Weight> {recipe.calories} ккал</S.Weight>
                </S.Block>
                <S.HeartBlock>
                    <Heart
                        isLike={isLike}
                        onClick={(event) => {
                            setIsLike(like(event, dispatch, recipe, isLike))
                        }}
                    />
                </S.HeartBlock>
            </S.Blocks>
            <S.Table>
                <thead>
                    <tr>
                        <td>Ингредиенты</td>
                        <td>Оборудование для приготовления</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                {recipe.ingredients?.map((el, index) => (
                                    <li key={index}>{el}</li>
                                ))}
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {recipe.equipments?.map((el, index) => (
                                    <li key={index}>{el}</li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </S.Table>
        </S.Container>
    )
}
