import { useDispatch, useSelector } from "react-redux";

import { HangButton } from "../../components/Button/Button_components";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx";
import { PlusIcon } from "../../assets/PlusIcon";

import { addMyRecipes, changeMySearch, selectMyRecipesData } from "../../store/myRecipesSlice";
import { debounce } from "lodash";
import { Search } from "../../components/RecipeCards/RecipeCards_components";
import { useNavigate } from "react-router-dom";

export const MyRecipesPage = () => {
    const recipesData = useSelector(selectMyRecipesData);
    const nav = useNavigate();
    const dispatch = useDispatch();

    const searchRecipe = (value) => {
        dispatch(changeMySearch(value.toLowerCase()));
    };

    const debounceSearch = debounce(searchRecipe, 10);

    return (
        <PageLayout>
            <h1>Мои Рецепты</h1>
            <Search
                placeholder="Поиск"
                defaultValue={recipesData.search}
                onChange={(event) => debounceSearch(event.target.value)}
            />
            <RecipeCards recipesData={recipesData} addRecipes={addMyRecipes} />
            <HangButton view="primary" onClick={() => nav("/addRecipe", { replace: true })}>
                <PlusIcon />
                <span>Создать рецепт</span>
            </HangButton>
        </PageLayout>
    );
};
