import { Container, Form, Title, Label, Input, Buttons } from "./styled_components"
import {Button} from "../btn"
import {useDispatch, useSelector} from "react-redux"
import {useState} from "react"
import {addMyRecipesAction} from "../../store/my-reducer"
import {POST} from "../../api/request";

export const ModalForm = ({clickExit}) => {
    const dispatch = useDispatch()
    const myRecipes = useSelector((state) => state.my.myRecipes)

    const [recipe, setRecipe] = useState({
        id: myRecipes.length + 1,
        name: "",
        photos: "",
        cooking_time: 0,
        calories: 0,
        like: false
    })

    const dishesName = (event) => {
        setRecipe((prevState) => ({...prevState, name: event.target.value}))
    }
    const cookingTime = (event) => {
        setRecipe((prevState) => ({
            ...prevState,
            cooking_time: event.target.value
        }))
    }
    const numberCalories = (event) => {
        setRecipe((prevState) => ({...prevState, calories: event.target.value}))
    }
    const photo = (event) => {
        setRecipe((prevState) => ({...prevState, photos: event.target.value}))
    }

    const addRecipe = (event) => {
        event.preventDefault()
        POST("/myRecipes", recipe).then()
        dispatch(addMyRecipesAction(recipe))
        clickExit()
    }

    return (
        <Container>
            <Form name="form" id="myform">
                <Title>Мой рецепт</Title>
                <Label>
                    Название блюда
                    <br/>
                    <Input
                        type="text"
                        name="name"
                        onChange={(event) => {
                            dishesName(event)
                        }}
                    />
                </Label>
                <Label>
                    Время приготовления (в минутах)
                    <br/>
                    <Input
                        type="number"
                        name="cooking_time"
                        onChange={(event) => {
                            cookingTime(event)
                        }}
                    />
                </Label>
                <Label>
                    Количество каллорий
                    <br/>
                    <Input
                        type="number"
                        name="calories"
                        onChange={(event) => {
                            numberCalories(event)
                        }}
                    />
                </Label>
                <Label>
                    Ссылка на фотографию
                    <br/>
                    <Input
                        type="text"
                        name="photo"
                        onChange={(event) => {
                            photo(event)
                        }}
                    />
                </Label>
                <Buttons>
                    <Button
                        type={"submit"}
                        onClick={(event) => {
                            addRecipe(event)
                        }}
                    >
                        Добавить
                    </Button>
                    <Button onClick={clickExit}>Закрыть</Button>
                </Buttons>
            </Form>
        </Container>
    )
}
