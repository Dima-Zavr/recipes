import { Button, DefaultButton } from "../../components/Button/Button_components";
import { Buttons, Inputs, MyForm } from "./EditRecipePage_components";

import { useDispatch } from "react-redux";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";

import { api } from "../../api/api";
import { ArrayInput } from "../../components/ArrayInput/ArrayInput";
import { Input } from "../../components/Input/Input";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { addMyRecipes } from "../../store/myRecipesSlice";

export const EditRecipePage = () => {
    const recipe = useLoaderData();
    const nav = useNavigate();
    const pathName = useLocation().pathname;
    const dispatch = useDispatch();

    const initialValues = {
        name: recipe?.name ? recipe.name : "",
        cook_time: recipe?.cook_time ? recipe.cook_time : "",
        calories: recipe?.calories ? recipe.calories : "",
        type: recipe?.type ? recipe.type : "",
        photos: recipe?.photos ? recipe.photos : [],
        ingredients: recipe?.ingredients ? recipe.ingredients : [],
        equipments: recipe?.equipments ? recipe.equipments : [],
        cook_steps: recipe?.cook_steps ? recipe.cook_steps : []
    };

    const onSubmit = (values) => {
        if (recipe._id) {
            api.post(
                "/recipes/edit_recipe/" + recipe._id,
                values,
                localStorage.getItem("accessToken")
            ).then();
            nav("/recipe/" + recipe._id, { replace: true });
        } else {
            api.post("/recipes/add_recipe", values, localStorage.getItem("accessToken")).then();
            dispatch(addMyRecipes(values));
            nav("/myRecipes");
        }
    };

    const validationSchema = yup.object({
        name: yup
            .string()
            .max(100, "Слишком много символов!")
            .matches(/^[A-ZА-Я0-9- "]+$/i, "Недоступное название!")
            .required("Обязательное поле!"),
        cook_time: yup.number().required("Обязательное поле!"),
        calories: yup.number().required("Обязательное поле!"),
        type: yup.string().required("Обязательное поле!"),
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
                        <h2>{pathName === "/addRecipe" ? "Создать" : "Редактировать"} рецепт</h2>
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
                            <Input
                                label="Тип блюда"
                                type="text"
                                name="type"
                                placeholder="Введите тип блюда"
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
                                onClick={(event) => {
                                    event.preventDefault();
                                    nav(-1);
                                }}
                            >
                                Назад
                            </DefaultButton>
                            <Button type="submit">
                                {pathName === "/addRecipe" ? "Создать" : "Редактировать"}
                            </Button>
                        </Buttons>
                    </MyForm>
                )}
            </Formik>
        </PageLayout>
    );
};
