import { FitButton } from "../../components/Button/Button_components";
import { Search } from "../../components/RecipeCards/RecipeCards_components";
import { Buttons } from "../../styles/components";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

import { PlusIcon } from "../../assets/PlusIcon";
import { SortIcon } from "../../assets/SortIcon";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx";
import { UpButton } from "../../components/UpButton/UpButton";
import { addMyRecipes, changeMySearch, selectMyRecipesData } from "../../store/myRecipesSlice";

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
            <Buttons>
                <FitButton>
                    <SortIcon />
                    Сортировка
                </FitButton>
                <FitButton view="primary" onClick={() => nav("/addRecipe", { replace: true })}>
                    <PlusIcon />
                    <span>Создать рецепт</span>
                </FitButton>
            </Buttons>
            <RecipeCards recipesData={recipesData} addRecipes={addMyRecipes} />
            <UpButton />
        </PageLayout>
    );
};
