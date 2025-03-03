import * as yup from "yup"
import * as S from "../../../styles/components"
import { Formik } from "formik"
import { Button, DefaultButton } from "../../../components/Button/Button_components"
import { PageLayout } from "../../../components/PageLayout/PageLayout"

export const Edit = ({ recipe }) => {
    const initialValues = {
        name: recipe.name,
        photos: recipe.photos,
        cook_time: recipe.cook_time,
        calories: recipe.calories,
        ingredients: recipe.ingredients,
        equipments: recipe.equipments,
        cook_steps: recipe.cook_steps
    }

    const onSubmit = () => {}

    const validationSchema = yup.object({})
    return (
        <PageLayout>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                <S.MyForm>
                    <S.Title></S.Title>

                    <S.Buttons>
                        <Button type="submit">Редактировать</Button>
                        <DefaultButton onClick={() => nav(-1)}>Отменить</DefaultButton>
                    </S.Buttons>
                </S.MyForm>
            </Formik>
        </PageLayout>
    )
}
