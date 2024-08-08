import { PageLayout } from "../../components/PageLayout/PageLayout"
import * as yup from "yup"
import * as S from "../SignUpPage/SignUpPage_components"
import { Formik } from "formik"
import { Input } from "../../components/Input/Input"
import { Button } from "../../components/Button/Button"
import { useLoaderData, useNavigate } from "react-router-dom"

export const ProfilePage = () => {
    const user = useLoaderData()
    const nav = useNavigate()

    const logOut = (event) => {
        event.stopPropagation()
        localStorage.removeItem("token")
        localStorage.removeItem("id")
        nav("/allRecipes")
    }

    const initialValues = {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: "********"
    }

    const onSubmit = (values) => {
        alert("Не сегодня :(")
    }

    const validationSchema = yup.object({
        firstname: yup.string(),
        lastname: yup.string(),
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
                        label="Имя"
                        type="text"
                        name="firstname"
                        readOnly
                        placeholder="Введите имя"
                    />
                    <Input
                        label="Фамилия"
                        type="text"
                        name="lastname"
                        readOnly
                        placeholder="Введите фамилию"
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
                        <Button view="primary" type="submit">
                            Обновить данные профиля
                        </Button>
                        <Button view="default" onClick={logOut}>
                            Выйти из аккаунта
                        </Button>
                    </S.Buttons>
                </S.MyForm>
            </Formik>
        </PageLayout>
    )
}
