import { Buttons, Inputs, MyForm } from "./AddRecipePage_components";
import { Button, DefaultButton } from "../../components/Button/Button_components";
import { useDispatch } from "react-redux";
import { api } from "../../api/api";
import { addMyRecipes } from "../../store/myRecipesSlice";
import { Input } from "../../components/Input/Input";
import { Formik } from "formik";
import * as yup from "yup";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { ArrayInput } from "../../components/ArrayInput/ArrayInput";
import { useNavigate } from "react-router-dom";

export const AddRecipePage = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();

    const initialValues = {
        name: "",
        cook_time: "",
        calories: "",
        photos: [],
        ingredients: [],
        equipments: [],
        cook_steps: []
    };

    const onSubmit = (values) => {
        api.post("/recipes/add_recipe ", values, localStorage.getItem("accessToken")).then();
        dispatch(addMyRecipes(values));
        nav("/myRecipes");
    };

    const validationSchema = yup.object({
        name: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(/^[A-ZА-Я0-9- "]+$/i, "Недоступное название!")
            .required("Обязательное поле!"),
        cook_time: yup.number().required("Обязательное поле!"),
        calories: yup.number().required("Обязательное поле!"),
        photos: yup.array().of(yup.string()).min(1, "Добавьте хотя бы одну ссылку на фото"),
        ingredients: yup.array().of(yup.string()).min(1, "Добавьте хотя бы один ингредиент"),
        equipments: yup.array().of(yup.string()).min(1, "Добавьте хотя бы одно оборудование"),
        cook_steps: yup.array().of(yup.string()).min(1, "Добавьте хотя бы один шаг приготовления")
    });

    return (
        <PageLayout>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ values, setFieldValue }) => (
                    <MyForm>
                        <h2>Создать рецепт</h2>
                        <Input
                            label="Название блюда"
                            type="text"
                            name="name"
                            placeholder="Введите название"
                        />
                        <Inputs>
                            <Input
                                label="Время приготовления"
                                type="number"
                                name="cook_time"
                                placeholder="Укажите время приготовления в минутах"
                            />
                            <Input
                                label="Количество каллорий"
                                type="number"
                                name="calories"
                                placeholder="Укажите количество каллорий"
                            />
                        </Inputs>
                        <ArrayInput
                            label="Фотографии"
                            name="photos"
                            values={values.photos}
                            setFieldValue={setFieldValue}
                            placeholder="Добавьте ссылки на фото"
                        />
                        <ArrayInput
                            label="Ингредиенты"
                            name="ingredients"
                            values={values.ingredients}
                            setFieldValue={setFieldValue}
                            placeholder="Укажите ингредиенты"
                        />
                        <ArrayInput
                            label="Оборудование"
                            name="equipments"
                            values={values.equipments}
                            setFieldValue={setFieldValue}
                            placeholder="Укажите оборудование"
                        />
                        <ArrayInput
                            label="Шаги по приготовлению"
                            name="cook_steps"
                            values={values.cook_steps}
                            setFieldValue={setFieldValue}
                            placeholder="Пропишите шаги по приготовлению"
                        />
                        <Buttons>
                            <DefaultButton
                                onClick={() => {
                                    nav("/myRecipes");
                                }}
                            >
                                Назад
                            </DefaultButton>
                            <Button type="submit">Создать</Button>
                        </Buttons>
                    </MyForm>
                )}
            </Formik>
        </PageLayout>
    );
};
