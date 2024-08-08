import { api } from "../../api/api"
import * as yup from "yup"
import * as S from "../SignUpPage/SignUpPage_components"
import { Formik } from "formik"
import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"
import { useNavigate } from "react-router-dom"

export const SignInPage = () => {
    const nav = useNavigate()

    const initialValues = {
        email: "",
        password: ""
    }

    const onSubmit = (values) => {
        api.post("/signin", values).then((response) => {
            console.log(response.user)
            localStorage.setItem("token", response.accessToken)
            localStorage.setItem("id", response.user.id)
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
                        <Button type="submit" view="primary">
                            Войти
                        </Button>
                        <Button view="default" onClick={() => nav("/signup")}>
                            Зарегистрироваться
                        </Button>
                    </S.Buttons>
                </S.MyForm>
            </Formik>
        </S.SignPage>
    )
}
