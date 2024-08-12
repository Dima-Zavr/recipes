import * as S from "../../styles/components"

import { useLoaderData, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { Formik } from "formik"
import * as yup from "yup"

import { Button, DefaultButton } from "../../components/Button/Button_components"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import { Input } from "../../components/Input/Input"

import { deleteAllRecipes } from "../../store/allRecipesSlice"
import { deleteLikeRecipes } from "../../store/likeRecipesSlice"
import { deleteMyRecipes } from "../../store/myRecipesSlice"

export const ProfilePage = () => {
    const user = useLoaderData()
    const nav = useNavigate()
    const dispatch = useDispatch()

    const logOut = (event) => {
        event.stopPropagation()
        localStorage.removeItem("token")
        localStorage.removeItem("userId")
        dispatch(deleteAllRecipes(""))
        dispatch(deleteMyRecipes(""))
        dispatch(deleteLikeRecipes(""))
        nav("/allRecipes")
    }

    const initialValues = {
        lastname: user.lastname,
        firstname: user.firstname,
        email: user.email,
        password: "********"
    }

    const onSubmit = () => {
        alert("Извините, не сегодня :(")
    }

    const validationSchema = yup.object({
        lastname: yup.string(),
        firstname: yup.string(),
        email: yup.string(),
        password: yup.string()
    })

    return (
        <PageLayout>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <S.MyForm>
                    <S.Title>Профиль</S.Title>
                    <Input
                        label="Фамилия"
                        type="text"
                        name="lastname"
                        readOnly
                        placeholder="Введите фамилию"
                    />
                    <Input
                        label="Имя"
                        type="text"
                        name="firstname"
                        readOnly
                        placeholder="Введите имя"
                    />
                    <Input
                        label="Email"
                        type="text"
                        name="email"
                        readOnly
                        placeholder="Введите email"
                    />
                    <Input
                        label="Пароль"
                        type="text"
                        name="password"
                        readOnly
                        placeholder="Введите пароль"
                    />
                    <S.Buttons>
                        <Button type="submit">Обновить данные профиля</Button>
                        <DefaultButton onClick={logOut}>Выйти из аккаунта</DefaultButton>
                    </S.Buttons>
                </S.MyForm>
            </Formik>
        </PageLayout>
    )
}
