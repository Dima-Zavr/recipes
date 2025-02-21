import { api } from "../../api/api"
import * as yup from "yup"
import { Modal } from "../../components/Modal/Modal"
import * as S from "../../styles/components"
import { Input } from "../../components/Input/Input"
import { Button, DefaultButton } from "../../components/Button/Button_components"
import { Formik } from "formik"

export const ChangeDataModal = ({ user, setIsChangeDataOpen }) => {
    const initialValues = {
        lastname: user.lastname,
        firstname: user.firstname,
        email: user.email
    }

    const onSubmit = (values) => {
        console.log("Привет")
        api.post("/user/change_data", values, localStorage.getItem("accessToken")).then(
            (response) => {
                if (response.message === "Данные изменены") {
                    location.reload()
                } else {
                    alert(response.message)
                }
            }
        )
    }

    const validationSchema = yup.object({
        lastname: yup.string(),
        firstname: yup.string(),
        email: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,64}$/i, "Неправильный email!")
            .required("Обязательное поле!")
    })

    return (
        <Modal onClose={() => setIsChangeDataOpen(false)}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <S.MyForm>
                    <S.Title>Обновить данные профиля</S.Title>
                    <Input
                        label="Фамилия"
                        type="text"
                        name="lastname"
                        placeholder="Введите фамилию"
                    />
                    <Input label="Имя" type="text" name="firstname" placeholder="Введите имя" />
                    <Input
                        label="Email"
                        type="text"
                        name="email"
                        readOnly
                        placeholder="Введите email"
                    />
                    <S.Buttons>
                        <DefaultButton onClick={() => setIsChangeDataOpen(false)}>
                            Назад
                        </DefaultButton>
                        <Button type="submit">Обновить</Button>
                    </S.Buttons>
                </S.MyForm>
            </Formik>
        </Modal>
    )
}
