import { useDispatch, useSelector } from "react-redux";

import { FitButton } from "../../components/Button/Button_components";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx";
import { PlusIcon } from "../../assets/PlusIcon";

import { addMyRecipes, changeMySearch, selectMyRecipesData } from "../../store/myRecipesSlice";
import { debounce } from "lodash";
import { Search } from "../../components/RecipeCards/RecipeCards_components";
import { useNavigate } from "react-router-dom";
import { Buttons } from "../../styles/components";
import { FiltersIcon } from "../../assets/FiltersIcon";
import { SortIcon } from "../../assets/SortIcon";
import { useState } from "react";
import { Filters } from "../../components/Filters/Filters";
import { changeAllFilters } from "../../store/allRecipesSlice";

export const MyRecipesPage = () => {
    const recipesData = useSelector(selectMyRecipesData);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

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
                <FitButton onClick={() => setIsFiltersOpen(true)}>
                    <FiltersIcon />
                    Фильтры
                </FitButton>
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
            {isFiltersOpen && (
                <Filters
                    key={JSON.stringify(filters)}
                    filters={filters}
                    changeFilters={changeAllFilters}
                    setIsFiltersOpen={setIsFiltersOpen}
                />
            )}
        </PageLayout>
    );
};
