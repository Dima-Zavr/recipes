import * as S from "../../styles/components"

import { useNavigate } from "react-router-dom"
import { Formik } from "formik"
import * as yup from "yup"

import { Button, DefaultButton } from "../../components/Button/Button_components"
import { Input } from "../../components/Input/Input"
import { api } from "../../api/api"
import { deleteAllRecipes } from "../../store/allRecipesSlice"
import { useDispatch } from "react-redux"
import { setCookie } from "../../helpers/cookie"

export const SignInPage = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()

    const initialValues = {
        email: "",
        password: ""
    }

    const onSubmit = (values) => {
        api.post("/auth/login", values).then((response) => {
            localStorage.setItem("accessToken", response.accessToken)
            setCookie("refreshToken", response.refreshToken, 14)
            dispatch(deleteAllRecipes(""))
            nav("/allRecipes")
        })
    }

    const validationSchema = yup.object({
        email: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i, "Неправильный email!")
            .required("Обязательное поле!"),
        password: yup
            .string()
            .min(8, "Минимум 8 символов")
            .matches(
                /^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                "Пароль должен содержать буквы верхнего и нижнего регистра, а также цифры!"
            )
            .required("Обязательное поле!")
    })
    return (
        <S.SignPage>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <S.MyForm>
                    <S.Title>Войти в систему</S.Title>
                    <Input label="Email*" type="text" name="email" placeholder="Введите email" />
                    <Input
                        label="Пароль*"
                        type="text"
                        name="password"
                        placeholder="Введите пароль"
                    />
                    <S.Buttons>
                        <DefaultButton onClick={() => nav("/signup")}>
                            Зарегистрироваться
                        </DefaultButton>
                        <Button type="submit" view="primary">
                            Войти
                        </Button>
                    </S.Buttons>
                </S.MyForm>
            </Formik>
        </S.SignPage>
    )
}
