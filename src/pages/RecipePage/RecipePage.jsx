import { Content, Page } from "../../components/components"

import { useState } from "react"
import { ScrollRestoration, useLoaderData, useNavigate } from "react-router-dom"

import { Button } from "../../components/Button/Button"
import { Preloader } from "../../components/Preloader/Preloader"
import { RecipeInf } from "./RecipeInf/RecipeInf"
import { RecipeSteps } from "./RecipeSteps/RecipeSteps"
import { Slider } from "./Slider/Slider"

export const RecipePage = () => {
    const data = useLoaderData()
    const [recipe, setRecipe] = useState(data[0])
    const nav = useNavigate()

    return (
        <>
            {data && (
                <Page>
                    <Button view="link" onClick={() => nav(-1)}>
                        <svg
                            width="12"
                            height="18"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.86368 10.409C7.16144 10.7052 7.16205 11.1869 6.86504 11.484C6.56857 11.7804 6.08788 11.7804 5.79141 11.484L1.03386 6.7264C0.643909 6.33646 0.64325 5.70443 1.03238 5.31367L5.76629 0.559955C6.06265 0.262355 6.5443 0.261852 6.84129 0.558834C7.13783 0.855377 7.13783 1.33617 6.84129 1.63271L2.45323 6.02077L6.86368 10.409Z"
                                fill="currentColor"
                            />
                        </svg>
                        <p>Назад</p>
                    </Button>
                    <Content>
                        <RecipeInf recipe={recipe} />
                        <Slider photos={recipe.photos} />
                    </Content>
                    <RecipeSteps steps={recipe.cooking_steps} />
                    <ScrollRestoration />
                </Page>
            )}
            {!data && <Preloader />}
        </>
    )
}
