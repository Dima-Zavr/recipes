import { FitButton } from "../../components/Button/Button_components";
import { Search } from "../../components/RecipeCards/RecipeCards_components";
import { Buttons } from "../../styles/components";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

import { FiltersIcon } from "../../assets/FiltersIcon";
import { SortIcon } from "../../assets/SortIcon";
import { Filters } from "../../components/Filters/Filters";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { RecipeCards } from "../../components/RecipeCards/RecipeCards.tsx";
import {
    addAllRecipes,
    changeAllFilters,
    changeAllSearch,
    selectAllFilters,
    selectAllRecipesData
} from "../../store/allRecipesSlice";

export const AllRecipesPage = () => {
    const recipesData = useSelector(selectAllRecipesData);
    const filters = useSelector(selectAllFilters);
    const dispatch = useDispatch();
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const searchRecipe = (value) => {
        dispatch(changeAllSearch(value.toLowerCase()));
    };

    const debounceSearch = debounce(searchRecipe, 1000);

    return (
        <PageLayout>
            <h1>Все Рецепты</h1>
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
            </Buttons>
            <RecipeCards recipesData={recipesData} filters={filters} addRecipes={addAllRecipes} />
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
