import { BtnBack, Content } from "../../styles/components"

import { ScrollRestoration, useLoaderData, useNavigate } from "react-router-dom"

import { Preloader } from "../../components/Preloader/Preloader"
import { RecipeInf } from "./RecipeInf/RecipeInf"
import { RecipeSteps } from "./RecipeSteps/RecipeSteps"
import { Slider } from "./Slider/Slider"
import { BackIcon } from "../../assets/BackIcon"
import { PageLayout } from "../../components/PageLayout/PageLayout"

export const RecipePage = () => {
    const recipe = useLoaderData()
    const nav = useNavigate()

    return (
        <>
            {recipe && (
                <PageLayout>
                    <BtnBack view="link" onClick={() => nav(-1)}>
                        <BackIcon />
                        <p>Назад</p>
                    </BtnBack>
                    <Content>
                        <RecipeInf recipe={recipe} />
                        <Slider photos={recipe.photos} />
                    </Content>
                    <RecipeSteps steps={recipe.cooking_steps} />
                    <ScrollRestoration />
                </PageLayout>
            )}
            {!recipe && <Preloader />}
        </>
    )
}
