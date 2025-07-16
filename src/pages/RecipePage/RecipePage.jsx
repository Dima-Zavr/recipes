import { BtnBack, HangButton } from "../../components/Button/Button_components";
import { Content } from "../../styles/components";

import { ScrollRestoration, useLoaderData, useNavigate } from "react-router-dom";

import { BackIcon } from "../../assets/BackIcon";
import { EditIcon } from "../../assets/EditIcon";
import { PageLayout } from "../../components/PageLayout/PageLayout";

import { RecipeInf } from "./RecipeInf/RecipeInf";
import { RecipeSteps } from "./RecipeSteps/RecipeSteps";
import { Slider } from "./Slider/Slider";

export const RecipePage = () => {
    const recipe = useLoaderData();
    const nav = useNavigate();

    return (
        <PageLayout>
            <BtnBack view="link" onClick={() => nav(-1)}>
                <BackIcon />
                <p>Назад</p>
            </BtnBack>
            <Content>
                <RecipeInf recipe={recipe} />
                <Slider photos={recipe.photos} />
            </Content>
            <RecipeSteps steps={recipe.cook_steps} />
            {recipe.isMyRecipe && (
                <HangButton
                    view="primary"
                    onClick={() => nav(`/changeRecipe/${recipe._id}`, { replace: true })}
                >
                    <EditIcon />
                    <span>Изменить рецепт</span>
                </HangButton>
            )}
            <ScrollRestoration />
        </PageLayout>
    );
};
