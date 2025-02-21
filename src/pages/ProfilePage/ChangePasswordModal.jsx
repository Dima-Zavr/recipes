import { Formik } from "formik"
import * as S from "../../styles/components"
import { Input } from "../../components/Input/Input"
import { Button, DefaultButton } from "../../components/Button/Button_components"
import { Modal } from "../../components/Modal/Modal"
import { api } from "../../api/api"
import * as yup from "yup"

export const ChangePasswordModal = ({ setIsChangePassOpen }) => {
    const initialValues = {
        old_password: "",
        new_password: "",
        repite_new_password: ""
    }

    const onSubmit = (values) => {
        api.post("/user/change_password", values, localStorage.getItem("accessToken")).then(
            (response) => {
                if (response.message === "Пароль изменен") {
                    location.reload()
                } else {
                    alert(response.message)
                }
            }
        )
    }

    const validationSchema = yup.object({
        old_password: yup
            .string()
            .min(8, "Минимум 8 символов")
            .matches(
                /^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                "Пароль должен содержать буквы верхнего и нижнего регистра, а также цифры!"
            )
            .required("Обязательное поле!"),
        new_password: yup
            .string()
            .min(8, "Минимум 8 символов")
            .matches(
                /^.*(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
                "Пароль должен содержать буквы верхнего и нижнего регистра, а также цифры!"
            )
            .required("Обязательное поле!"),
        repite_new_password: yup
            .string()
            .oneOf([yup.ref("new_password"), null], "Пароли должны совпадать")
            .required("Обязательное поле!")
    })

    return (
        <Modal onClose={() => setIsChangePassOpen(false)}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <S.MyForm>
                    <S.Title>Обновить пароль</S.Title>
                    <Input
                        label="Старый пароль"
                        type="text"
                        name="old_password"
                        placeholder="Введите старый пароль"
                    />
                    <Input
                        label="Новый пароль"
                        type="text"
                        name="new_password"
                        placeholder="Введите новый пароль"
                    />
                    <Input
                        label="Повтор нового пароля"
                        type="text"
                        name="repite_new_password"
                        placeholder="Повторите новый пароль"
                    />
                    <S.Buttons>
                        <DefaultButton onClick={() => setIsChangePassOpen(false)}>
                            Назад
                        </DefaultButton>
                        <Button type="submit">Обновить</Button>
                    </S.Buttons>
                </S.MyForm>
            </Formik>
        </Modal>
    )
}
