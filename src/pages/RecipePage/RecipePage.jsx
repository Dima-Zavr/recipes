import { Content } from "../../styles/components"

import { useState } from "react"
import { ScrollRestoration, useLoaderData, useNavigate } from "react-router-dom"

import { RecipeInf } from "./RecipeInf/RecipeInf"
import { RecipeSteps } from "./RecipeSteps/RecipeSteps"
import { Edit } from "./Edit/Edit"
import { Slider } from "./Slider/Slider"

import { BtnBack, HangButton } from "../../components/Button/Button_components"
import { PageLayout } from "../../components/PageLayout/PageLayout"
import { BackIcon } from "../../assets/BackIcon"
import { EditIcon } from "../../assets/EditIcon"

export const RecipePage = () => {
    const recipe = useLoaderData()
    const nav = useNavigate()
    const [isEdit, setIsEdit] = useState(false)
    console.log(recipe)

    return (
        <PageLayout>
            {!isEdit && (
                <>
                    <BtnBack view="link" onClick={() => nav(-1)}>
                        <BackIcon />
                        <p>Назад</p>
                    </BtnBack>
                    <Content>
                        <RecipeInf recipe={recipe} />
                        <Slider photos={recipe.photos} />
                    </Content>
                    <RecipeSteps steps={recipe.cook_steps} />
                    {localStorage.getItem("userId") === recipe.userId && (
                        <HangButton view="primary" onClick={() => setIsEdit(true)}>
                            <EditIcon />
                            <span>Изменить рецепт</span>
                        </HangButton>
                    )}
                </>
            )}
            {isEdit && <Edit recipe={recipe} onClick={() => setIsEdit(false)} />}
            <ScrollRestoration />
        </PageLayout>
    )
}
