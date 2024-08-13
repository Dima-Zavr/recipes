import * as S from "./ModalForm_components"
import { Button, DefaultButton } from "../../../components/Button/Button_components"
import { useDispatch } from "react-redux"
import { api } from "../../../api/api"
import { addMyRecipes } from "../../../store/myRecipesSlice"
import { Modal } from "../../../components/Modal/Modal"
import { Input } from "../../../components/Input/Input"
import { Formik } from "formik"
import * as yup from "yup"

export const ModalForm = ({ onClose }) => {
    const dispatch = useDispatch()
    let id = 0
    api.get("/cardRecipes").then((response) => {
        id = response.length
    })

    const initialValues = {
        name: "",
        cook_time: "",
        calories: "",
        photo: ""
    }

    const onSubmit = (values) => {
        const recipe = {
            id: id + 1,
            name: values.name,
            photos: [values.photo],
            cook_time: values.cook_time,
            calories: values.calories,
            like: [],
            userId: localStorage.getItem("userId")
        }
        api.post("/cardRecipes", recipe, localStorage.getItem("token")).then()
        api.post("/infRecipes", recipe, localStorage.getItem("token")).then()
        dispatch(addMyRecipes(recipe))
        onClose()
    }

    const validationSchema = yup.object({
        name: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(/^[A-ZА-Я0-9-"]+$/i, "Недоступное название!")
            .required("Обязательное поле!"),
        cook_time: yup.number().required("Обязательное поле!"),
        calories: yup.number().required("Обязательное поле!"),
        photo: yup.string().required("Обязательное поле!")
    })

    return (
        <Modal onClose={onClose}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <S.MyForm>
                    <h2>Добавить рецепт</h2>
                    <Input
                        label="Название блюда*"
                        type="text"
                        name="name"
                        placeholder="Введите название"
                    />
                    <S.Inputs>
                        <Input
                            label="Время приготовления*"
                            type="number"
                            name="cook_time"
                            placeholder="Укажите время приготовления в минутах"
                        />
                        <Input
                            label="Количество каллорий*"
                            type="number"
                            name="calories"
                            placeholder="Укажите количество каллорий"
                        />
                    </S.Inputs>
                    <Input
                        label="Фотография*"
                        type="text"
                        name="photo"
                        placeholder="Вставьте ссылку на фотографию"
                    />
                    <S.Buttons>
                        <Button type="submit">Добавить</Button>
                        <DefaultButton onClick={onClose}>Закрыть</DefaultButton>
                    </S.Buttons>
                </S.MyForm>
            </Formik>
        </Modal>
    )
}
